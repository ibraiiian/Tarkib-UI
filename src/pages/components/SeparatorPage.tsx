import { Separator } from '@/components/ui/separator'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function SeparatorPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Separator (Pemisah)</h1>
                <p className="text-slate-600 text-lg">Garis pemisah halus buat misahin konten. Ada horizontal dan vertical. Simple tapi penting, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.separator}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-md space-y-8">
                    {/* Horizontal */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-4">Horizontal</p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">Tarkib UI</h3>
                                <p className="text-sm text-slate-500">Kumpulan komponen UI yang siap copas.</p>
                            </div>
                            <Separator />
                            <div className="flex gap-4 text-sm text-slate-600">
                                <span>Dokumentasi</span>
                                <span>Komponen</span>
                                <span>Kaifiyat</span>
                            </div>
                        </div>
                    </div>

                    {/* Vertical */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-4">Vertical</p>
                        <div className="flex items-center gap-4 h-6">
                            <span className="text-sm text-slate-600">Blog</span>
                            <Separator orientation="vertical" />
                            <span className="text-sm text-slate-600">Docs</span>
                            <Separator orientation="vertical" />
                            <span className="text-sm text-slate-600">Source</span>
                        </div>
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
