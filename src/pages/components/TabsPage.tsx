import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function TabsPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Tabs (Tab Navigasi)</h1>
                <p className="text-slate-600 text-lg">Tab buat berpindah antar konten tanpa pindah halaman. Smooth dan accessible, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.tabs}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-md">
                    <Tabs defaultValue="akun">
                        <TabsList className="w-full">
                            <TabsTrigger value="akun" className="flex-1">Akun</TabsTrigger>
                            <TabsTrigger value="password" className="flex-1">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="akun">
                            <div className="border border-slate-200 rounded-lg p-4 mt-2 space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Pengaturan Akun</h3>
                                    <p className="text-xs text-slate-500 mb-4">Ubah data akun ente di sini. Klik simpan kalo udah.</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nama</label>
                                    <Input defaultValue="Ibrahim Bahaly" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Username</label>
                                    <Input defaultValue="@ibra_dev" />
                                </div>
                                <Button className="w-full">Simpan Perubahan</Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="border border-slate-200 rounded-lg p-4 mt-2 space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Ganti Password</h3>
                                    <p className="text-xs text-slate-500 mb-4">Jaga keamanan akun ente, Akhi. Jangan pake 123456 ya 😂</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Password Lama</label>
                                    <Input type="password" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Password Baru</label>
                                    <Input type="password" />
                                </div>
                                <Button className="w-full">Ganti Password</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </ComponentPreview>
        </div>
    )
}
