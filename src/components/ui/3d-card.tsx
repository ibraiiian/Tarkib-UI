import * as React from "react"
import { cn } from "@/lib/utils"

/* ========================================================================
   KartuTiga — 3D Card yang tilt ngikutin posisi cursor.
   Bikin interface jadi hidup dan interaktif. Ajib! ✨
   ======================================================================== */

interface MouseState {
    x: number
    y: number
    isHovering: boolean
}

const CardContext = React.createContext<MouseState>({ x: 0, y: 0, isHovering: false })

/* -- Container ---------------------------------------------------------- */

export interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Intensitas tilt (semakin besar semakin miring) */
    tiltIntensity?: number
    /** Aktifkan efek glare/kilau */
    glare?: boolean
}

export const ThreeDCard = React.forwardRef<HTMLDivElement, ThreeDCardProps>(
    ({ className, children, tiltIntensity = 15, glare = true, ...props }, ref) => {
        const cardRef = React.useRef<HTMLDivElement>(null)
        const [mouse, setMouse] = React.useState<MouseState>({ x: 0, y: 0, isHovering: false })

        const handleMouseMove = React.useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!cardRef.current) return
                const rect = cardRef.current.getBoundingClientRect()
                const x = (e.clientX - rect.left) / rect.width
                const y = (e.clientY - rect.top) / rect.height
                setMouse({ x, y, isHovering: true })
            },
            []
        )

        const handleMouseLeave = React.useCallback(() => {
            setMouse({ x: 0.5, y: 0.5, isHovering: false })
        }, [])

        const rotateX = mouse.isHovering ? (mouse.y - 0.5) * -tiltIntensity : 0
        const rotateY = mouse.isHovering ? (mouse.x - 0.5) * tiltIntensity : 0

        return (
            <CardContext.Provider value={mouse}>
                <div
                    ref={ref}
                    className={cn("relative", className)}
                    style={{ perspective: "1000px" }}
                    {...props}
                >
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full transition-transform duration-200 ease-out will-change-transform"
                        style={{
                            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {children}

                        {/* Lapisan glare */}
                        {glare && mouse.isHovering && (
                            <div
                                className="pointer-events-none absolute inset-0 rounded-[inherit] z-50"
                                style={{
                                    background: `radial-gradient(
                    600px circle at ${mouse.x * 100}% ${mouse.y * 100}%,
                    rgba(255,255,255,0.15),
                    transparent 40%
                  )`,
                                }}
                            />
                        )}
                    </div>
                </div>
            </CardContext.Provider>
        )
    }
)
ThreeDCard.displayName = "ThreeDCard"

/* -- Body (konten utama) ------------------------------------------------ */

export interface ThreeDCardBodyProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ThreeDCardBody = React.forwardRef<HTMLDivElement, ThreeDCardBodyProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg group",
                className
            )}
            style={{ transformStyle: "preserve-3d" }}
            {...props}
        >
            {children}
        </div>
    )
)
ThreeDCardBody.displayName = "ThreeDCardBody"

/* -- Item (elemen yang "melayang" dari kartu) ----------------------------- */

export interface ThreeDCardItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Jarak "melayang" dari permukaan kartu (px) */
    translateZ?: number
}

export const ThreeDCardItem = React.forwardRef<HTMLDivElement, ThreeDCardItemProps>(
    ({ className, children, translateZ = 20, ...props }, ref) => {
        const mouse = React.useContext(CardContext)

        return (
            <div
                ref={ref}
                className={cn("transition-transform duration-200 ease-out", className)}
                style={{
                    transform: mouse.isHovering
                        ? `translateZ(${translateZ}px)`
                        : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                }}
                {...props}
            >
                {children}
            </div>
        )
    }
)
ThreeDCardItem.displayName = "ThreeDCardItem"
