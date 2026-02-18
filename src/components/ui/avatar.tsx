import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
    "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-slate-100",
    {
        variants: {
            size: {
                sm: "h-8 w-8 text-xs",
                default: "h-10 w-10 text-sm",
                lg: "h-14 w-14 text-lg",
                xl: "h-20 w-20 text-xl",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    src?: string
    alt?: string
    fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, size, src, alt, fallback, ...props }, ref) => {
        const [hasError, setHasError] = React.useState(false)

        return (
            <div
                ref={ref}
                className={cn(avatarVariants({ size }), className)}
                {...props}
            >
                {src && !hasError ? (
                    <img
                        src={src}
                        alt={alt || ""}
                        className="aspect-square h-full w-full object-cover"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <span className="font-medium text-slate-600 select-none">
                        {fallback || "?"}
                    </span>
                )}
            </div>
        )
    }
)
Avatar.displayName = "Avatar"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    max?: number
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
    ({ className, children, max, ...props }, ref) => {
        const childArray = React.Children.toArray(children)
        const shown = max ? childArray.slice(0, max) : childArray
        const remaining = max ? childArray.length - max : 0

        return (
            <div ref={ref} className={cn("flex -space-x-3", className)} {...props}>
                {shown.map((child, i) => (
                    <div key={i} className="ring-2 ring-white rounded-full">
                        {child}
                    </div>
                ))}
                {remaining > 0 && (
                    <div className="ring-2 ring-white rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
                        +{remaining}
                    </div>
                )}
            </div>
        )
    }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup, avatarVariants }
