import { Tooltip } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'
import { Heart, Share2, Bookmark, Settings } from 'lucide-react'

export default function TooltipPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Tooltip (Info Hover)</h1>
                <p className="text-slate-600 text-lg">Info kecil yang muncul pas di-hover. Cocok buat jelasin icon atau tombol, Akhi. Biar user gak bingung.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.tooltip}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="space-y-10">
                    {/* Positions */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-4 text-center">Posisi Arah</p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Tooltip content="Ane di atas" side="top">
                                <Button variant="outline">Atas</Button>
                            </Tooltip>
                            <Tooltip content="Ane di bawah" side="bottom">
                                <Button variant="outline">Bawah</Button>
                            </Tooltip>
                            <Tooltip content="Ane di kiri" side="left">
                                <Button variant="outline">Kiri</Button>
                            </Tooltip>
                            <Tooltip content="Ane di kanan" side="right">
                                <Button variant="outline">Kanan</Button>
                            </Tooltip>
                        </div>
                    </div>

                    {/* Icon Toolbar */}
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-4 text-center">Contoh Toolbar Icon</p>
                        <div className="flex gap-1 items-center justify-center bg-slate-100 rounded-lg p-1.5 w-fit mx-auto">
                            <Tooltip content="Suka">
                                <Button variant="ghost" size="icon"><Heart size={16} /></Button>
                            </Tooltip>
                            <Tooltip content="Bagikan">
                                <Button variant="ghost" size="icon"><Share2 size={16} /></Button>
                            </Tooltip>
                            <Tooltip content="Simpan">
                                <Button variant="ghost" size="icon"><Bookmark size={16} /></Button>
                            </Tooltip>
                            <Tooltip content="Pengaturan">
                                <Button variant="ghost" size="icon"><Settings size={16} /></Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
