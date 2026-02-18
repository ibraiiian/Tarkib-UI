import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
    content: React.ReactNode
    children: React.ReactNode
    side?: "top" | "bottom" | "left" | "right"
    className?: string
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
    ({ content, children, side = "top", className }, ref) => {
        const [show, setShow] = React.useState(false)

        const positionClasses = {
            top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
            bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
            left: "right-full top-1/2 -translate-y-1/2 mr-2",
            right: "left-full top-1/2 -translate-y-1/2 ml-2",
        }

        return (
            <div
                ref={ref}
                className="relative inline-flex"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
            >
                {children}
                {show && (
                    <div
                        role="tooltip"
                        className={cn(
                            "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap animate-fade-in pointer-events-none",
                            positionClasses[side],
                            className
                        )}
                    >
                        {content}
                    </div>
                )}
            </div>
        )
    }
)
Tooltip.displayName = "Tooltip"

export { Tooltip }
