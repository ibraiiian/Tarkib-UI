import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

export default function SwitchPage() {
    const { toast, showToast, hideToast } = useToast()
    const [darkMode, setDarkMode] = useState(false)
    const [notif, setNotif] = useState(true)
    const [marketing, setMarketing] = useState(false)

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Switch (Saklar)</h1>
                <p className="text-slate-600 text-lg">Toggle on/off yang smooth. Cocok buat pengaturan, preferensi, atau fitur yang bisa di-hidup matiin.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.switch}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="space-y-6 w-full max-w-sm">
                    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                        <div>
                            <p className="text-sm font-medium text-slate-900">Mode Gelap</p>
                            <p className="text-xs text-slate-500">Aktifin dark mode biar adem di mata</p>
                        </div>
                        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                        <div>
                            <p className="text-sm font-medium text-slate-900">Notifikasi</p>
                            <p className="text-xs text-slate-500">Terima pengingat sholat & kajian</p>
                        </div>
                        <Switch checked={notif} onCheckedChange={setNotif} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                        <div>
                            <p className="text-sm font-medium text-slate-900">Email Marketing</p>
                            <p className="text-xs text-slate-500">Kirimin ane promo & update terbaru</p>
                        </div>
                        <Switch checked={marketing} onCheckedChange={setMarketing} />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4 opacity-50">
                        <div>
                            <p className="text-sm font-medium text-slate-900">Fitur Premium</p>
                            <p className="text-xs text-slate-500">Belum tersedia, sabar ya Akhi</p>
                        </div>
                        <Switch disabled checked={false} />
                    </div>
                </div>
            </ComponentPreview>
        </div>
    )
}
