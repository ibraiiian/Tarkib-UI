import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function CardPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Card (Kartu)</h1>
                <p className="text-slate-600 text-lg">Kontainer serbaguna buat nampilin konten yang dikelompokkan.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.card}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Bikin Akun Baru</CardTitle>
                        <CardDescription>Isi data diri ente buat mulai pake aplikasi ini.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input id="name" placeholder="Nama Project" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Input id="framework" placeholder="Framework Pilihan" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Batal</Button>
                        <Button>Simpan</Button>
                    </CardFooter>
                </Card>
            </ComponentPreview>
        </div>
    )
}
