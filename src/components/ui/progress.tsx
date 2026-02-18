import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva(
    "relative h-3 w-full overflow-hidden rounded-full bg-slate-100",
    {
        variants: {
            size: {
                sm: "h-1.5",
                default: "h-3",
                lg: "h-5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

const progressBarVariants = cva(
    "h-full rounded-full transition-all duration-500 ease-out",
    {
        variants: {
            variant: {
                default: "bg-teal-600",
                gradient: "bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600",
                success: "bg-emerald-500",
                warning: "bg-amber-500",
                destructive: "bg-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface ProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
    value?: number
    max?: number
    showLabel?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, size, variant, showLabel, ...props }, ref) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

        return (
            <div className="w-full">
                {showLabel && (
                    <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium text-slate-600">Progres</span>
                        <span className="text-xs font-medium text-slate-600">{Math.round(percentage)}%</span>
                    </div>
                )}
                <div
                    ref={ref}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    className={cn(progressVariants({ size }), className)}
                    {...props}
                >
                    <div
                        className={cn(progressBarVariants({ variant }))}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress, progressVariants, progressBarVariants }
