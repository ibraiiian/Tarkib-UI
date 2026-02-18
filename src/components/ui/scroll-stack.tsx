import * as React from 'react'
import { useLayoutEffect, useRef, useCallback } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import { cn } from '@/lib/utils'

/* ========================================================================
   ScrollStackItem — setiap kartu di dalam stack
   ======================================================================== */

export interface ScrollStackItemProps {
    className?: string
    children: ReactNode
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className }) => (
    <div
        className={cn(
            "scroll-stack-card relative w-full min-h-[20rem] my-8 p-8 md:p-12 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] box-border origin-top will-change-transform bg-white border border-slate-200",
            className
        )}
        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
    >
        {children}
    </div>
)
ScrollStackItem.displayName = 'ScrollStackItem'

/* ========================================================================
   ScrollStack — wrapper utama yang handle semua scroll magic ✨
   ======================================================================== */

export interface ScrollStackProps {
    className?: string
    children: ReactNode
    /** Jarak antar kartu (px) */
    itemDistance?: number
    /** Skala per-layer di stack */
    itemScale?: number
    /** Jarak vertikal antar kartu saat numpuk (px) */
    itemStackDistance?: number
    /** Posisi pin mulai (% atau px) */
    stackPosition?: string
    /** Posisi akhir skala (% atau px) */
    scaleEndPosition?: string
    /** Skala dasar minimum */
    baseScale?: number
    /** Jumlah rotasi (deg) per layer */
    rotationAmount?: number
    /** Blur amount per depth layer (px) */
    blurAmount?: number
    /** Pake window scroll atau scroll internal */
    useWindowScroll?: boolean
    /** Callback saat semua kartu udah tertumpuk */
    onStackComplete?: () => void
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className,
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete,
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null)
    const stackCompletedRef = useRef(false)
    const animationFrameRef = useRef<number | null>(null)
    const lenisRef = useRef<Lenis | null>(null)
    const cardsRef = useRef<HTMLElement[]>([])
    const lastTransformsRef = useRef(new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>())
    const isUpdatingRef = useRef(false)

    // — util helpers —

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0
        if (scrollTop > end) return 1
        return (scrollTop - start) / (end - start)
    }, [])

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight
        }
        return parseFloat(value as string)
    }, [])

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return { scrollTop: window.scrollY, containerHeight: window.innerHeight, scrollContainer: document.documentElement }
        }
        const scroller = scrollerRef.current
        return { scrollTop: scroller?.scrollTop ?? 0, containerHeight: scroller?.clientHeight ?? 0, scrollContainer: scroller }
    }, [useWindowScroll])

    const getElementOffset = useCallback(
        (element: HTMLElement) => {
            if (useWindowScroll) {
                return element.getBoundingClientRect().top + window.scrollY
            }
            return element.offsetTop
        },
        [useWindowScroll]
    )

    // — logika transform utama —

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return
        isUpdatingRef.current = true

        const { scrollTop, containerHeight } = getScrollData()
        const stackPositionPx = parsePercentage(stackPosition, containerHeight)
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight)

        const endElement = (useWindowScroll
            ? document.querySelector('.scroll-stack-end')
            : scrollerRef.current?.querySelector('.scroll-stack-end')) as HTMLElement | null

        const endElementTop = endElement ? getElementOffset(endElement) : 0

        cardsRef.current.forEach((card, i) => {
            if (!card) return

            const cardTop = getElementOffset(card)
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i
            const triggerEnd = cardTop - scaleEndPositionPx
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i
            const pinEnd = endElementTop - containerHeight / 2

            // scale
            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd)
            const targetScale = baseScale + i * itemScale
            const scale = 1 - scaleProgress * (1 - targetScale)

            // rotation
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0

            // blur (depth)
            let blur = 0
            if (blurAmount) {
                let topCardIndex = 0
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const jCardTop = getElementOffset(cardsRef.current[j])
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j
                    if (scrollTop >= jTriggerStart) topCardIndex = j
                }
                if (i < topCardIndex) {
                    blur = Math.max(0, (topCardIndex - i) * blurAmount)
                }
            }

            // translate (pin)
            let translateY = 0
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd
            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i
            }

            const newTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
                rotation: Math.round(rotation * 100) / 100,
                blur: Math.round(blur * 100) / 100,
            }

            // hanya update DOM kalo berubah (performance ⚡)
            const last = lastTransformsRef.current.get(i)
            const changed =
                !last ||
                Math.abs(last.translateY - newTransform.translateY) > 0.1 ||
                Math.abs(last.scale - newTransform.scale) > 0.001 ||
                Math.abs(last.rotation - newTransform.rotation) > 0.1 ||
                Math.abs(last.blur - newTransform.blur) > 0.1

            if (changed) {
                card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`
                card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : ''
                lastTransformsRef.current.set(i, newTransform)
            }

            // callback
            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true
                    onStackComplete?.()
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false
                }
            }
        })

        isUpdatingRef.current = false
    }, [
        itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale,
        rotationAmount, blurAmount, useWindowScroll, onStackComplete,
        calculateProgress, parsePercentage, getScrollData, getElementOffset,
    ])

    const handleScroll = useCallback(() => { updateCardTransforms() }, [updateCardTransforms])

    // — Lenis smooth scroll setup —

    const setupLenis = useCallback(() => {
        const lenisConfig = {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
            infinite: false,
            wheelMultiplier: 1,
            lerp: 0.1,
            syncTouch: true,
            syncTouchLerp: 0.075,
        }

        const lenis = useWindowScroll
            ? new Lenis(lenisConfig)
            : (() => {
                const scroller = scrollerRef.current
                if (!scroller) return null
                return new Lenis({
                    ...lenisConfig,
                    wrapper: scroller,
                    content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
                    gestureOrientation: 'vertical' as const,
                })
            })()

        if (!lenis) return null

        lenis.on('scroll', handleScroll)

        const raf = (time: number) => {
            lenis.raf(time)
            animationFrameRef.current = requestAnimationFrame(raf)
        }
        animationFrameRef.current = requestAnimationFrame(raf)
        lenisRef.current = lenis

        return lenis
    }, [handleScroll, useWindowScroll])

    // — lifecycle —

    useLayoutEffect(() => {
        if (!useWindowScroll && !scrollerRef.current) return

        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
        ) as HTMLElement[]

        cardsRef.current = cards

        cards.forEach((card, i) => {
            if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`
            card.style.willChange = 'transform, filter'
            card.style.transformOrigin = 'top center'
            card.style.backfaceVisibility = 'hidden'
            card.style.transform = 'translateZ(0)'
            card.style.perspective = '1000px'
        })

        setupLenis()
        updateCardTransforms()

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
            lenisRef.current?.destroy()
            stackCompletedRef.current = false
            cardsRef.current = []
            lastTransformsRef.current.clear()
            isUpdatingRef.current = false
        }
    }, [
        itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition,
        baseScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete,
        setupLenis, updateCardTransforms,
    ])

    return (
        <div
            ref={scrollerRef}
            className={cn("relative w-full h-full overflow-y-auto overflow-x-visible", className)}
            style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                transform: 'translateZ(0)',
                willChange: 'scroll-position',
            }}
        >
            <div className="scroll-stack-inner pt-[20vh] px-6 md:px-20 pb-[50rem] min-h-screen">
                {children}
                <div className="scroll-stack-end w-full h-px" />
            </div>
        </div>
    )
}
ScrollStack.displayName = 'ScrollStack'

export { ScrollStack }
export default ScrollStack
