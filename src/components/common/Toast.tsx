import { useEffect } from 'react'
import { Check } from 'lucide-react'

interface ToastProps {
    message: string
    show: boolean
    onClose: () => void
}

export function Toast({ message, show, onClose }: ToastProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000)
            return () => clearTimeout(timer)
        }
    }, [show, onClose])

    if (!show) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up-toast">
            <div className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-slate-700">
                <div className="bg-teal-600 rounded-full p-1">
                    <Check size={14} className="text-white" />
                </div>
                <div>
                    <h4 className="font-semibold text-sm">Alhamdulillah!</h4>
                    <p className="text-xs text-slate-300">{message}</p>
                </div>
            </div>
        </div>
    )
}
