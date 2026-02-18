import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function AlertPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Alert (Peringatan)</h1>
                <p className="text-slate-600 text-lg">Kotak pesan buat nampilin info penting, peringatan, atau konfirmasi ke user. Icon otomatis sesuai variant-nya, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.alert}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-lg space-y-4">
                    <Alert>
                        <AlertTitle>Default Alert</AlertTitle>
                        <AlertDescription>Ini alert biasa, Akhi. Buat info umum aja.</AlertDescription>
                    </Alert>
                    <Alert variant="info">
                        <AlertTitle>Tahukah Ente?</AlertTitle>
                        <AlertDescription>Tarkib UI itu gratis dan open source. Boleh dipake buat apa aja!</AlertDescription>
                    </Alert>
                    <Alert variant="success">
                        <AlertTitle>Alhamdulillah, Berhasil!</AlertTitle>
                        <AlertDescription>Data ente udah kesimpen dengan aman di server.</AlertDescription>
                    </Alert>
                    <Alert variant="warning">
                        <AlertTitle>Peringatan!</AlertTitle>
                        <AlertDescription>Kuota penyimpanan ente udah hampir habis. Mending bersihin dulu, Akhi.</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                        <AlertTitle>Waduh, Error!</AlertTitle>
                        <AlertDescription>Ada yang salah pas nyimpen data. Coba lagi atau hubungi admin.</AlertDescription>
                    </Alert>
                </div>
            </ComponentPreview>
        </div>
    )
}
