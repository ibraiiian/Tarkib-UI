import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function InputPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Input (Isian)</h1>
                <p className="text-slate-600 text-lg">Form isian teks dasar. Udah ada state focus ring-nya.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.input}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-sm space-y-4">
                    <Input type="email" placeholder="Email ente..." />
                    <div className="flex gap-2">
                        <Input type="text" placeholder="Cari barang..." />
                        <Button>Cari</Button>
                    </div>
                    <Input disabled type="email" placeholder="Input dimatiin (Disabled)" />
                </div>
            </ComponentPreview>
        </div>
    )
}
