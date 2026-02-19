export const CodeStrings = {
  button: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,

  input: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`,

  card: `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,

  badge: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-teal-600 text-white hover:bg-teal-700",
        secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
        outline: "border-slate-200 text-slate-700",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
        success: "border-transparent bg-emerald-500 text-white hover:bg-emerald-600",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }`,

  avatar: `import * as React from "react"
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
    defaultVariants: { size: "default" },
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
      <div ref={ref} className={cn(avatarVariants({ size }), className)} {...props}>
        {src && !hasError ? (
          <img src={src} alt={alt || ""} className="aspect-square h-full w-full object-cover" onError={() => setHasError(true)} />
        ) : (
          <span className="font-medium text-slate-600 select-none">{fallback || "?"}</span>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar, avatarVariants }`,

  switch: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        ref={ref}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-teal-600" : "bg-slate-200",
          className
        )}
        {...props}
      >
        <span className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-0"
        )} />
      </button>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }`,

  textarea: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }`,

  separator: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={!decorative ? orientation : undefined}
        className={cn(
          "shrink-0 bg-slate-200",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator }`,

  skeleton: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("animate-pulse rounded-md bg-slate-200", className)}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export { Skeleton }`,

  tabs: `import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabs() {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("useTabs harus dipake di dalam <Tabs>")
  return context
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, onValueChange, children, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue)
    const handleChange = (v: string) => { setValue(v); onValueChange?.(v) }
    return (
      <TabsContext.Provider value={{ value, onValueChange: handleChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>{children}</div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500", className)} {...props} />
  )
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const tabs = useTabs()
    const isActive = tabs.value === value
    return (
      <button ref={ref} onClick={() => tabs.onValueChange(value)} className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        isActive ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900",
        className
      )} {...props} />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const tabs = useTabs()
    if (tabs.value !== value) return null
    return <div ref={ref} className={cn("mt-2", className)} {...props} />
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }`,

  accordion: `import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AccordionItemData {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  items: AccordionItemData[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", items, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>([])
    const toggle = (value: string) => {
      if (type === "single") {
        setOpenItems(prev => prev.includes(value) ? [] : [value])
      } else {
        setOpenItems(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
      }
    }
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {items.map((item) => {
          const isOpen = openItems.includes(item.value)
          return (
            <div key={item.value} className="border-b border-slate-200">
              <button onClick={() => toggle(item.value)} className="flex w-full items-center justify-between py-4 text-sm font-medium text-slate-900 hover:underline">
                {item.trigger}
                <ChevronDown size={16} className={cn("shrink-0 text-slate-500 transition-transform duration-200", isOpen && "rotate-180")} />
              </button>
              <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
                <div className="text-sm text-slate-600">{item.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)
Accordion.displayName = "Accordion"

export { Accordion }`,

  alert: `import * as React from "react"
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
    defaultVariants: { variant: "default" },
  }
)

const alertIcons = {
  default: Info, info: Info, success: CheckCircle2, warning: AlertTriangle, destructive: AlertCircle,
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
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
          <button onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
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

export { Alert, AlertTitle, AlertDescription, alertVariants }`,

  progress: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva("relative w-full overflow-hidden rounded-full bg-slate-100", {
  variants: {
    size: { sm: "h-1.5", default: "h-3", lg: "h-5" },
  },
  defaultVariants: { size: "default" },
})

const progressBarVariants = cva("h-full rounded-full transition-all duration-500 ease-out", {
  variants: {
    variant: {
      default: "bg-teal-600",
      gradient: "bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600",
      success: "bg-emerald-500",
      warning: "bg-amber-500",
      destructive: "bg-red-500",
    },
  },
  defaultVariants: { variant: "default" },
})

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
        <div ref={ref} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} className={cn(progressVariants({ size }), className)} {...props}>
          <div className={cn(progressBarVariants({ variant }))} style={{ width: \`\${percentage}%\` }} />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress, progressVariants, progressBarVariants }`,

  tooltip: `import * as React from "react"
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
      <div ref={ref} className="relative inline-flex" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
        {show && (
          <div role="tooltip" className={cn(
            "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md shadow-md whitespace-nowrap animate-fade-in pointer-events-none",
            positionClasses[side], className
          )}>
            {content}
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = "Tooltip"

export { Tooltip }`,

  dialog: `import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50 animate-fade-in" onClick={() => onOpenChange(false)} />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative animate-zoom-in">{children}</div>
      </div>
    </div>
  )
}

const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }>(
  ({ className, children, onClose, ...props }, ref) => (
    <div ref={ref} className={cn("relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl", className)} onClick={e => e.stopPropagation()} {...props}>
      {children}
      {onClose && (
        <button onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
          <X size={16} /><span className="sr-only">Tutup</span>
        </button>
      )}
    </div>
  )
)
DialogContent.displayName = "DialogContent"

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5 text-center sm:text-left mb-4", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight text-slate-900", className)} {...props} />
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-slate-500", className)} {...props} />
)
DialogDescription.displayName = "DialogDescription"

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter }`,

  scrollStack: `import * as React from 'react'
import { useLayoutEffect, useRef, useCallback } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import { cn } from '@/lib/utils'

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

export interface ScrollStackProps {
  className?: string
  children: ReactNode
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children, className, itemDistance = 100, itemScale = 0.03,
  itemStackDistance = 30, stackPosition = '20%', scaleEndPosition = '10%',
  baseScale = 0.85, rotationAmount = 0, blurAmount = 0,
  useWindowScroll = false, onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  // ... scroll magic logic (lihat source lengkap di file) ...
  return (
    <div ref={scrollerRef} className={cn("relative w-full h-full overflow-y-auto", className)}>
      <div className="scroll-stack-inner pt-[20vh] px-6 md:px-20 pb-[50rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  )
}

export { ScrollStack }
export default ScrollStack

// Dependensi tambahan: npm install lenis`,

  animatedBeam: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: React.RefObject<HTMLElement | null>
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
  curvature?: number
  duration?: number
  delay?: number
  reverse?: boolean
  gradientStartColor?: string
  gradientStopColor?: string
  pathWidth?: number
  pathOpacity?: number
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className, containerRef, fromRef, toRef,
  curvature = 0, duration = 2, delay = 0, reverse = false,
  gradientStartColor = "#18ccfc", gradientStopColor = "#6344f5",
  pathWidth = 2, pathOpacity = 0.2,
}) => {
  const [pathD, setPathD] = React.useState("")
  const [svgDimensions, setSvgDimensions] = React.useState({ width: 0, height: 0 })
  const beamId = React.useId()

  const updatePath = React.useCallback(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return
    const cRect = containerRef.current.getBoundingClientRect()
    const fRect = fromRef.current.getBoundingClientRect()
    const tRect = toRef.current.getBoundingClientRect()
    setSvgDimensions({ width: cRect.width, height: cRect.height })
    const sx = fRect.left - cRect.left + fRect.width / 2
    const sy = fRect.top - cRect.top + fRect.height / 2
    const ex = tRect.left - cRect.left + tRect.width / 2
    const ey = tRect.top - cRect.top + tRect.height / 2
    setPathD(\`M \${sx},\${sy} Q \${(sx+ex)/2},\${(sy+ey)/2+curvature} \${ex},\${ey}\`)
  }, [containerRef, fromRef, toRef, curvature])

  React.useEffect(() => {
    updatePath()
    const obs = new ResizeObserver(() => updatePath())
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [updatePath, containerRef])

  return (
    <svg fill="none" width={svgDimensions.width} height={svgDimensions.height}
      className={cn("pointer-events-none absolute inset-0", className)}>
      <path d={pathD} stroke="#d1d5db" strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" fill="none" />
      <path d={pathD} strokeWidth={pathWidth} stroke={\`url(#g-\${beamId})\`} strokeLinecap="round" fill="none" mask={\`url(#m-\${beamId})\`} />
      <defs>
        <linearGradient id={\`g-\${beamId}\`} gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
        <mask id={\`m-\${beamId}\`}>
          <rect width="100%" height="100%" fill="black" />
          {pathD && <circle r="10" fill="white">
            <animateMotion dur={\`\${duration}s\`} repeatCount="indefinite" begin={\`\${delay}s\`}
              path={pathD} rotate="auto" keyPoints={reverse ? "1;0" : "0;1"} keyTimes="0;1" />
          </circle>}
        </mask>
      </defs>
    </svg>
  )
}

export interface SorotNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg"
}

export const SorotNode = React.forwardRef<HTMLDivElement, SorotNodeProps>(
  ({ className, size = "default", children, ...props }, ref) => (
    <div ref={ref} className={cn(
      "z-10 flex items-center justify-center rounded-full border-2 border-slate-200 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      { "size-10": size === "sm", "size-12": size === "default", "size-16": size === "lg" },
      className
    )} {...props}>{children}</div>
  )
)
SorotNode.displayName = "SorotNode"`,

  threeDCard: `import * as React from "react"
import { cn } from "@/lib/utils"

interface MouseState { x: number; y: number; isHovering: boolean }
const CardContext = React.createContext<MouseState>({ x: 0, y: 0, isHovering: false })

export interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tiltIntensity?: number
  glare?: boolean
}

export const ThreeDCard = React.forwardRef<HTMLDivElement, ThreeDCardProps>(
  ({ className, children, tiltIntensity = 15, glare = true, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [mouse, setMouse] = React.useState<MouseState>({ x: 0, y: 0, isHovering: false })

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      setMouse({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height, isHovering: true })
    }, [])

    const rotateX = mouse.isHovering ? (mouse.y - 0.5) * -tiltIntensity : 0
    const rotateY = mouse.isHovering ? (mouse.x - 0.5) * tiltIntensity : 0

    return (
      <CardContext.Provider value={mouse}>
        <div ref={ref} className={cn("relative", className)} style={{ perspective: "1000px" }} {...props}>
          <div ref={cardRef} onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouse({ x: 0.5, y: 0.5, isHovering: false })}
            className="relative w-full transition-transform duration-200 ease-out will-change-transform"
            style={{ transform: \\\`rotateX(\\\${rotateX}deg) rotateY(\\\${rotateY}deg)\\\`, transformStyle: "preserve-3d" }}>
            {children}
            {glare && mouse.isHovering && (
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] z-50"
                style={{ background: \\\`radial-gradient(600px circle at \\\${mouse.x*100}% \\\${mouse.y*100}%, rgba(255,255,255,0.15), transparent 40%)\\\` }} />
            )}
          </div>
        </div>
      </CardContext.Provider>
    )
  }
)
ThreeDCard.displayName = "ThreeDCard"

export const ThreeDCardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg", className)}
      style={{ transformStyle: "preserve-3d" }} {...props}>{children}</div>
  )
)
ThreeDCardBody.displayName = "ThreeDCardBody"

export interface ThreeDCardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  translateZ?: number
}

export const ThreeDCardItem = React.forwardRef<HTMLDivElement, ThreeDCardItemProps>(
  ({ className, children, translateZ = 20, ...props }, ref) => {
    const mouse = React.useContext(CardContext)
    return (
      <div ref={ref} className={cn("transition-transform duration-200 ease-out", className)}
        style={{ transform: mouse.isHovering ? \\\`translateZ(\\\${translateZ}px)\\\` : "translateZ(0px)", transformStyle: "preserve-3d" }}
        {...props}>{children}</div>
    )
  }
)
ThreeDCardItem.displayName = "ThreeDCardItem"`,
}
