import { ScrollStack, ScrollStackItem } from '@/components/ui/scroll-stack'
import { Badge } from '@/components/ui/badge'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'
import { Sparkles, Layers, Zap, Palette, Code2 } from 'lucide-react'

export default function ScrollStackPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">ScrollStack (Tumpukan Scroll)</h1>
                <p className="text-slate-600 text-lg">
                    Efek kartu yang menumpuk saat di-scroll. Smooth, cinematic, dan premium banget, Akhi. Pake Lenis buat smooth scrolling. 🔥
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                    <Sparkles size={16} />
                    <span>Butuh dependensi tambahan: <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs">npm install lenis</code></span>
                </div>
            </div>

            <ComponentPreview
                codeString={CodeStrings.scrollStack}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-200">
                    <ScrollStack
                        itemScale={0.04}
                        itemStackDistance={25}
                        baseScale={0.88}
                    >
                        {/* Card 1 */}
                        <ScrollStackItem className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-0">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                    <Layers size={28} />
                                </div>
                                <div>
                                    <Badge className="mb-3 bg-white/20 text-white border-0">Fitur 01</Badge>
                                    <h3 className="text-xl font-bold mb-2">Komponen Modular</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Setiap komponen bisa berdiri sendiri. Copy satu, paste langsung jalan. Gak perlu setup ribet.
                                    </p>
                                </div>
                            </div>
                        </ScrollStackItem>

                        {/* Card 2 */}
                        <ScrollStackItem className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                    <Zap size={28} />
                                </div>
                                <div>
                                    <Badge className="mb-3 bg-white/20 text-white border-0">Fitur 02</Badge>
                                    <h3 className="text-xl font-bold mb-2">Performa Optimal</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Zero dependency berat. Cuma pake Tailwind + CVA. Bundle size tetep kecil, performa tetep ngebut.
                                    </p>
                                </div>
                            </div>
                        </ScrollStackItem>

                        {/* Card 3 */}
                        <ScrollStackItem className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                    <Palette size={28} />
                                </div>
                                <div>
                                    <Badge className="mb-3 bg-white/20 text-white border-0">Fitur 03</Badge>
                                    <h3 className="text-xl font-bold mb-2">Desain Premium</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Setiap komponen di-design biar keliatan mewah. Gradient, shadow, animasi — semua udah dipoles.
                                    </p>
                                </div>
                            </div>
                        </ScrollStackItem>

                        {/* Card 4 */}
                        <ScrollStackItem className="bg-gradient-to-br from-rose-500 to-pink-600 text-white border-0">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                    <Code2 size={28} />
                                </div>
                                <div>
                                    <Badge className="mb-3 bg-white/20 text-white border-0">Fitur 04</Badge>
                                    <h3 className="text-xl font-bold mb-2">TypeScript Native</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Semua komponen ditulis pake TypeScript. Auto-complete dan type safety langsung jalan di editor ente.
                                    </p>
                                </div>
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </div>
            </ComponentPreview>

            <div className="mt-8 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Props</h2>
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
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">itemDistance</code></td><td className="px-4 py-2 text-slate-500">100</td><td className="px-4 py-2 text-slate-600">Jarak antar kartu (px)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">itemScale</code></td><td className="px-4 py-2 text-slate-500">0.03</td><td className="px-4 py-2 text-slate-600">Scale per-layer</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">itemStackDistance</code></td><td className="px-4 py-2 text-slate-500">30</td><td className="px-4 py-2 text-slate-600">Jarak vertikal saat numpuk (px)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">baseScale</code></td><td className="px-4 py-2 text-slate-500">0.85</td><td className="px-4 py-2 text-slate-600">Skala minimum di stack</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">rotationAmount</code></td><td className="px-4 py-2 text-slate-500">0</td><td className="px-4 py-2 text-slate-600">Rotasi per-layer (deg)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">blurAmount</code></td><td className="px-4 py-2 text-slate-500">0</td><td className="px-4 py-2 text-slate-600">Blur efek kedalaman (px)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">useWindowScroll</code></td><td className="px-4 py-2 text-slate-500">false</td><td className="px-4 py-2 text-slate-600">Pake window scroll bukan internal</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">onStackComplete</code></td><td className="px-4 py-2 text-slate-500">—</td><td className="px-4 py-2 text-slate-600">Callback saat semua kartu tertumpuk</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
