import { ThreeDCard, ThreeDCardBody, ThreeDCardItem } from '@/components/ui/3d-card'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'
import { Badge } from '@/components/ui/badge'

export default function ThreeDCardPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 rounded-full">Ajib Nyee ✨</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">3D Card (Kartu Tiga Dimensi)</h1>
                <p className="text-slate-600 text-lg">
                    Kartu yang tilt/miring ngikutin posisi cursor. Ada efek glare dan item yang "melayang" keluar dari kartu. Hover aja buat liat keajib-annya, Akhi! 🕌
                </p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.threeDCard}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="flex flex-wrap items-center justify-center gap-8 py-10 px-4">
                    {/* Card 1 — Gradient */}
                    <ThreeDCard className="w-80">
                        <ThreeDCardBody className="bg-gradient-to-br from-teal-500 to-cyan-600 border-0 text-white overflow-hidden">
                            <ThreeDCardItem translateZ={50}>
                                <Badge className="bg-white/20 text-white border-0 mb-3">Populer 🔥</Badge>
                            </ThreeDCardItem>
                            <ThreeDCardItem translateZ={30}>
                                <h3 className="text-xl font-bold mb-2">Tarkib Pro</h3>
                            </ThreeDCardItem>
                            <ThreeDCardItem translateZ={20}>
                                <p className="text-white/80 text-sm leading-relaxed mb-4">
                                    Akses semua komponen premium. Lifetime update. Zero headache.
                                </p>
                            </ThreeDCardItem>
                            <ThreeDCardItem translateZ={60}>
                                <div className="flex items-end gap-1">
                                    <span className="text-3xl font-bold">Gratis</span>
                                    <span className="text-white/70 text-sm mb-1">selamanya</span>
                                </div>
                            </ThreeDCardItem>
                        </ThreeDCardBody>
                    </ThreeDCard>

                    {/* Card 2 — Image style */}
                    <ThreeDCard className="w-80">
                        <ThreeDCardBody className="p-0 overflow-hidden">
                            <ThreeDCardItem translateZ={20} className="w-full">
                                <div className="h-44 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center">
                                    <ThreeDCardItem translateZ={40}>
                                        <span className="text-5xl">🕌</span>
                                    </ThreeDCardItem>
                                </div>
                            </ThreeDCardItem>
                            <div className="p-6">
                                <ThreeDCardItem translateZ={30}>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Komponen Ajib</h3>
                                </ThreeDCardItem>
                                <ThreeDCardItem translateZ={15}>
                                    <p className="text-slate-500 text-sm">
                                        Copy paste langsung jalan. Gak perlu mikir ribet, Akhi.
                                    </p>
                                </ThreeDCardItem>
                            </div>
                        </ThreeDCardBody>
                    </ThreeDCard>

                    {/* Card 3 — Dark */}
                    <ThreeDCard className="w-80">
                        <ThreeDCardBody className="bg-slate-900 border-slate-800 text-white">
                            <ThreeDCardItem translateZ={40}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg">⚡</div>
                                    <div>
                                        <h3 className="font-bold">Dark Mode</h3>
                                        <p className="text-slate-400 text-xs">Enak di mata</p>
                                    </div>
                                </div>
                            </ThreeDCardItem>
                            <ThreeDCardItem translateZ={25}>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Satu komponen, dua tampilan. Light atau dark, terserah ente.
                                </p>
                            </ThreeDCardItem>
                            <ThreeDCardItem translateZ={50}>
                                <button className="w-full py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors">
                                    Cobain Sekarang
                                </button>
                            </ThreeDCardItem>
                        </ThreeDCardBody>
                    </ThreeDCard>
                </div>
            </ComponentPreview>

            <div className="mt-8 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Cara Pakenya</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <pre className="text-sm text-slate-700 overflow-x-auto"><code>{`<ThreeDCard>
  <ThreeDCardBody>
    <ThreeDCardItem translateZ={50}>
      <h3>Judul yang melayang</h3>
    </ThreeDCardItem>
    <ThreeDCardItem translateZ={20}>
      <p>Konten biasa</p>
    </ThreeDCardItem>
  </ThreeDCardBody>
</ThreeDCard>`}</code></pre>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Props — ThreeDCard</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Prop</th>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Default</th>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">tiltIntensity</code></td><td className="px-4 py-2 text-slate-500">15</td><td className="px-4 py-2 text-slate-600">Intensitas tilt (semakin besar = semakin miring)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">glare</code></td><td className="px-4 py-2 text-slate-500">true</td><td className="px-4 py-2 text-slate-600">Efek kilau cahaya ngikutin cursor</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Props — ThreeDCardItem</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Prop</th>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Default</th>
                                <th className="text-left px-4 py-2 font-semibold text-slate-700">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">translateZ</code></td><td className="px-4 py-2 text-slate-500">20</td><td className="px-4 py-2 text-slate-600">Jarak "melayang" dari kartu (px). Makin besar makin keluar.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
