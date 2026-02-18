import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function DialogPage() {
    const { toast, showToast, hideToast } = useToast()
    const [basicOpen, setBasicOpen] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Dialog (Modal)</h1>
                <p className="text-slate-600 text-lg">Pop-up overlay buat konfirmasi, form, atau info penting. Smooth animasinya, Akhi. AutoLock scroll juga.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.dialog}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    {/* Basic Dialog */}
                    <Button onClick={() => setBasicOpen(true)} variant="outline">Dialog Info</Button>
                    <Dialog open={basicOpen} onOpenChange={setBasicOpen}>
                        <DialogContent onClose={() => setBasicOpen(false)}>
                            <DialogHeader>
                                <DialogTitle>Assalamu'alaikum, Akhi! 👋</DialogTitle>
                                <DialogDescription>
                                    Ini contoh dialog basic. Bisa ditutup pake tombol X, klik overlay, atau tombol di bawah.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setBasicOpen(false)}>Tutup</Button>
                                <Button onClick={() => setBasicOpen(false)}>Paham, Akhi!</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Form Dialog */}
                    <Button onClick={() => setFormOpen(true)}>Dialog Form</Button>
                    <Dialog open={formOpen} onOpenChange={setFormOpen}>
                        <DialogContent onClose={() => setFormOpen(false)}>
                            <DialogHeader>
                                <DialogTitle>Bikin Project Baru</DialogTitle>
                                <DialogDescription>Isi detail project ente di sini. Klik simpan kalo udah.</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nama Project</label>
                                    <Input placeholder="Project Keren ente..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Deskripsi</label>
                                    <Input placeholder="Deskripsi singkat..." />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setFormOpen(false)}>Batal</Button>
                                <Button onClick={() => setFormOpen(false)}>Simpan Project</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Delete Confirmation */}
                    <Button variant="destructive" onClick={() => setDeleteOpen(true)}>Dialog Hapus</Button>
                    <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                        <DialogContent onClose={() => setDeleteOpen(false)}>
                            <DialogHeader>
                                <DialogTitle>Yakin mau hapus?</DialogTitle>
                                <DialogDescription>
                                    Akhi, aksi ini gak bisa di-undo. Data ente bakal hilang selamanya. Pikirin baik-baik ya.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setDeleteOpen(false)}>Batal, Gak Jadi</Button>
                                <Button variant="destructive" onClick={() => setDeleteOpen(false)}>Ya, Hapus Aja</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </ComponentPreview>
        </div>
    )
}
