import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * AnimatedBeam — Garis cahaya animated yang nyambungin dua elemen.
 * Cocok buat nampilin flow data, koneksi, atau arsitektur sistem.
 */

export interface AnimatedBeamProps {
    className?: string
    /** Ref container utama yang nge-wrap semua node */
    containerRef: React.RefObject<HTMLElement | null>
    /** Ref elemen asal beam */
    fromRef: React.RefObject<HTMLElement | null>
    /** Ref elemen tujuan beam */
    toRef: React.RefObject<HTMLElement | null>
    /** Lengkungan path (0 = lurus, semakin besar semakin melengkung) */
    curvature?: number
    /** Durasi animasi dalam detik */
    duration?: number
    /** Delay sebelum animasi dimulai */
    delay?: number
    /** Arah beam terbalik */
    reverse?: boolean
    /** Warna awal gradient */
    gradientStartColor?: string
    /** Warna akhir gradient */
    gradientStopColor?: string
    /** Lebar garis beam */
    pathWidth?: number
    /** Opacity garis */
    pathOpacity?: number
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
    className,
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    duration = 2,
    delay = 0,
    reverse = false,
    gradientStartColor = "#18ccfc",
    gradientStopColor = "#6344f5",
    pathWidth = 2,
    pathOpacity = 0.2,
}) => {
    const [pathD, setPathD] = React.useState("")
    const [svgDimensions, setSvgDimensions] = React.useState({ width: 0, height: 0 })
    const beamId = React.useId()
    const gradientId = `beam-gradient-${beamId}`
    const maskId = `beam-mask-${beamId}`

    const updatePath = React.useCallback(() => {
        if (!containerRef.current || !fromRef.current || !toRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const fromRect = fromRef.current.getBoundingClientRect()
        const toRect = toRef.current.getBoundingClientRect()

        setSvgDimensions({
            width: containerRect.width,
            height: containerRect.height,
        })

        const startX = fromRect.left - containerRect.left + fromRect.width / 2
        const startY = fromRect.top - containerRect.top + fromRect.height / 2
        const endX = toRect.left - containerRect.left + toRect.width / 2
        const endY = toRect.top - containerRect.top + toRect.height / 2

        // Control point buat kurva bezier
        const midX = (startX + endX) / 2
        const controlY = curvature
        const d = `M ${startX},${startY} Q ${midX},${(startY + endY) / 2 + controlY} ${endX},${endY}`

        setPathD(d)
    }, [containerRef, fromRef, toRef, curvature])

    React.useEffect(() => {
        updatePath()

        const observer = new ResizeObserver(() => updatePath())
        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [updatePath, containerRef])

    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            xmlns="http://www.w3.org/2000/svg"
            className={cn("pointer-events-none absolute inset-0 overflow-visible", className)}
        >
            {/* Garis background tipis */}
            <path
                d={pathD}
                stroke="#d1d5db"
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
                fill="none"
            />

            {/* Path animated pake gradient */}
            <path
                d={pathD}
                strokeWidth={pathWidth}
                stroke={`url(#${gradientId})`}
                strokeLinecap="round"
                fill="none"
                mask={`url(#${maskId})`}
            />

            <defs>
                <linearGradient
                    id={gradientId}
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    x2="100%"
                >
                    <stop stopColor={gradientStartColor} stopOpacity="0" />
                    <stop stopColor={gradientStartColor} />
                    <stop offset="32.5%" stopColor={gradientStopColor} />
                    <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
                </linearGradient>

                <mask id={maskId}>
                    <rect width="100%" height="100%" fill="black" />
                    {pathD && (
                        <circle r="10" fill="white">
                            <animateMotion
                                dur={`${duration}s`}
                                repeatCount="indefinite"
                                begin={`${delay}s`}
                                path={pathD}
                                rotate="auto"
                                keyPoints={reverse ? "1;0" : "0;1"}
                                keyTimes="0;1"
                            />
                        </circle>
                    )}
                </mask>
            </defs>
        </svg>
    )
}

AnimatedBeam.displayName = "AnimatedBeam"

/* ========================================================================
   SorotNode — Lingkaran node buat jadi titik koneksi beam
   ======================================================================== */

export interface SorotNodeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Ukuran node */
    size?: "sm" | "default" | "lg"
}

const sizeClasses = {
    sm: "size-10",
    default: "size-12",
    lg: "size-16",
}

export const SorotNode = React.forwardRef<HTMLDivElement, SorotNodeProps>(
    ({ className, size = "default", children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center rounded-full border-2 border-slate-200 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
)

SorotNode.displayName = "SorotNode"
