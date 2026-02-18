import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function TextareaPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Textarea (Kotak Teks)</h1>
                <p className="text-slate-600 text-lg">Buat input teks panjang kayak bio, deskripsi, atau pesan. Bisa di-resize sesuka ente.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.textarea}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-sm space-y-4">
                    <Textarea placeholder="Tulis sesuatu di sini, Akhi..." />
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Bio Singkat</label>
                        <Textarea placeholder="Ceritain tentang diri ente..." rows={4} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Pesan</label>
                        <Textarea placeholder="Isi pesan ente di sini..." />
                        <div className="flex justify-end">
                            <Button>Kirim Pesan</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Disabled</label>
                        <Textarea disabled placeholder="Textarea dimatiin (Disabled)" />
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
