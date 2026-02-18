import { Badge } from '@/components/ui/badge'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function BadgePage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Badge (Lencana)</h1>
                <p className="text-slate-600 text-lg">Buat nampilin status, kategori, atau label kecil yang eye-catching. Kecil tapi impactful, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.badge}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                </div>
            </ComponentPreview>

            <div className="mt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contoh Pemakaian</h2>
                <p className="text-slate-600 mb-4">Badge cocok buat label status, tag kategori, atau penanda notifikasi:</p>
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 flex flex-wrap gap-3 items-center justify-center">
                    <Badge variant="success">✓ Aktif</Badge>
                    <Badge variant="warning">⏳ Pending</Badge>
                    <Badge variant="destructive">✕ Ditolak</Badge>
                    <Badge>Baru</Badge>
                    <Badge variant="outline">v2.0.0</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                </div>
            </div>
        </div>
    )
}
