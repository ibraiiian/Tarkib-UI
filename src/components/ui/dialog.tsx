import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: React.ReactNode
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [open])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 animate-fade-in"
                onClick={() => onOpenChange(false)}
            />
            {/* Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="relative animate-zoom-in">
                    {children}
                </div>
            </div>
        </div>
    )
}
Dialog.displayName = "Dialog"

const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }>(
    ({ className, children, onClose, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl",
                className
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
        >
            {children}
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                    <X size={16} />
                    <span className="sr-only">Tutup</span>
                </button>
            )}
        </div>
    )
)
DialogContent.displayName = "DialogContent"

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col space-y-1.5 text-center sm:text-left mb-4", className)} {...props} />
    )
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight text-slate-900", className)} {...props} />
    )
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p ref={ref} className={cn("text-sm text-slate-500", className)} {...props} />
    )
)
DialogDescription.displayName = "DialogDescription"

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)} {...props} />
    )
)
DialogFooter.displayName = "DialogFooter"

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter }
