import * as React from "react"
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
                setOpenItems(prev =>
                    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
                )
            }
        }

        return (
            <div ref={ref} className={cn("w-full", className)} {...props}>
                {items.map((item) => {
                    const isOpen = openItems.includes(item.value)
                    return (
                        <div key={item.value} className="border-b border-slate-200">
                            <button
                                onClick={() => toggle(item.value)}
                                className="flex w-full items-center justify-between py-4 text-sm font-medium text-slate-900 hover:underline transition-all [&>svg]:transition-transform [&>svg]:duration-200"
                            >
                                {item.trigger}
                                <ChevronDown
                                    size={16}
                                    className={cn(
                                        "shrink-0 text-slate-500 transition-transform duration-200",
                                        isOpen && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    isOpen ? "max-h-96 pb-4" : "max-h-0"
                                )}
                            >
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

export { Accordion }
