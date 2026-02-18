import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react"

const alertVariants = cva(
    "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:pl-8",
    {
        variants: {
            variant: {
                default: "bg-white border-slate-200 text-slate-900 [&>svg]:text-slate-600",
                info: "bg-blue-50 border-blue-200 text-blue-900 [&>svg]:text-blue-600",
                success: "bg-emerald-50 border-emerald-200 text-emerald-900 [&>svg]:text-emerald-600",
                warning: "bg-amber-50 border-amber-200 text-amber-900 [&>svg]:text-amber-600",
                destructive: "bg-red-50 border-red-200 text-red-900 [&>svg]:text-red-600",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const alertIcons = {
    default: Info,
    info: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    destructive: AlertCircle,
}

export interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
    onClose?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = "default", children, onClose, ...props }, ref) => {
        const Icon = alertIcons[variant || "default"]

        return (
            <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
                <Icon size={16} />
                <div>{children}</div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>
        )
    }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5 ref={ref} className={cn("mb-1 font-semibold leading-none tracking-tight", className)} {...props} />
    )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p ref={ref} className={cn("text-sm opacity-90 leading-relaxed", className)} {...props} />
    )
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
