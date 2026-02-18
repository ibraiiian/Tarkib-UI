import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function ProgressPage() {
    const { toast, showToast, hideToast } = useToast()
    const [animated, setAnimated] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimated(prev => prev >= 100 ? 0 : prev + 5)
        }, 300)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Progress (Bar Progres)</h1>
                <p className="text-slate-600 text-lg">Bar buat nampilin progress loading, upload, atau task. Ada animasi smoothnya, Akhi. Masyaa Allah.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.progress}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-md space-y-8">
                    {/* Animated */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Animasi Live</p>
                        <Progress value={animated} variant="gradient" showLabel />
                    </div>

                    {/* Variants */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Varian Warna</p>
                        <div className="space-y-3">
                            <Progress value={80} variant="default" />
                            <Progress value={65} variant="gradient" />
                            <Progress value={90} variant="success" />
                            <Progress value={45} variant="warning" />
                            <Progress value={25} variant="destructive" />
                        </div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Ukuran</p>
                        <div className="space-y-3">
                            <Progress value={60} size="sm" variant="gradient" />
                            <Progress value={60} size="default" variant="gradient" />
                            <Progress value={60} size="lg" variant="gradient" />
                        </div>
                    </div>

                    {/* With Label */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Pake Label</p>
                        <div className="space-y-4">
                            <Progress value={73} showLabel />
                            <Progress value={45} variant="warning" showLabel />
                        </div>
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
