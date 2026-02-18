import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps {
    children: React.ReactNode
    codeString: string
    onCopy?: () => void
}

export function ComponentPreview({ children, codeString, onCopy }: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const textArea = document.createElement("textarea")
        textArea.value = codeString

        textArea.style.top = "0"
        textArea.style.left = "0"
        textArea.style.position = "fixed"

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        try {
            const successful = document.execCommand('copy')
            if (successful) {
                setCopied(true)
                onCopy?.()
                setTimeout(() => setCopied(false), 2000)
            }
        } catch (err) {
            console.error('Gagal copy, Akhi:', err)
        }

        document.body.removeChild(textArea)
    }

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm my-6">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 bg-slate-50/50">
                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                    {(['preview', 'code'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize",
                                activeTab === tab
                                    ? "bg-white text-slate-900 shadow-sm"
                                    : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            {tab === 'preview' ? 'Tampilan (Preview)' : 'Kodingan (Code)'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                {activeTab === 'preview' ? (
                    <div className="p-10 min-h-[350px] flex items-center justify-center bg-slate-50/50 bg-grid-pattern">
                        {children}
                    </div>
                ) : (
                    <div className="relative group">
                        <button
                            onClick={handleCopy}
                            className="absolute right-4 top-4 p-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100"
                            title="Salin Code"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                        <pre className="text-sm font-mono overflow-auto max-h-[400px]">
                            <code>{codeString}</code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    )
}
