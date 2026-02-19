import { useRef } from 'react'
import { AnimatedBeam, SorotNode } from '@/components/ui/animated-beam'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

// === Icon set buat demo ===

const ChatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
)

const BrainIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
)

const DatabaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
)

const CloudIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
)

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

const FileIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
)

const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)

export default function AnimatedBeamPage() {
    const { toast, showToast, hideToast } = useToast()

    // Refs buat demo
    const containerRef = useRef<HTMLDivElement>(null)
    const userRef = useRef<HTMLDivElement>(null)
    const brainRef = useRef<HTMLDivElement>(null)
    const dbRef = useRef<HTMLDivElement>(null)
    const cloudRef = useRef<HTMLDivElement>(null)
    const mailRef = useRef<HTMLDivElement>(null)
    const fileRef = useRef<HTMLDivElement>(null)
    const chatRef = useRef<HTMLDivElement>(null)

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 rounded-full">Ajib Nyee ✨</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Animated Beam</h1>
                <p className="text-slate-600 text-lg">
                    Garis cahaya animated yang nyambungin node satu ke node lainnya. Cocok banget buat nampilin flow data, arsitektur sistem, atau koneksi antar service, Akhi. Masyaa Allah, ajib! 🔥
                </p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.animatedBeam}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div
                    ref={containerRef}
                    className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-10"
                >
                    <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
                        {/* Kolom kiri — User */}
                        <div className="flex flex-col justify-center">
                            <SorotNode ref={userRef}>
                                <UserIcon />
                            </SorotNode>
                        </div>

                        {/* Kolom tengah — AI Brain */}
                        <div className="flex flex-col justify-center">
                            <SorotNode ref={brainRef} size="lg" className="border-teal-200 shadow-[0_0_24px_-6px_rgba(20,184,166,0.3)]">
                                <BrainIcon />
                            </SorotNode>
                        </div>

                        {/* Kolom kanan — Output services */}
                        <div className="flex flex-col justify-center gap-2">
                            <SorotNode ref={dbRef} size="sm"><DatabaseIcon /></SorotNode>
                            <SorotNode ref={cloudRef} size="sm"><CloudIcon /></SorotNode>
                            <SorotNode ref={mailRef} size="sm"><MailIcon /></SorotNode>
                            <SorotNode ref={fileRef} size="sm"><FileIcon /></SorotNode>
                            <SorotNode ref={chatRef} size="sm"><ChatIcon /></SorotNode>
                        </div>
                    </div>

                    {/* Beam dari output services ke AI */}
                    <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={brainRef} curvature={-40} duration={3} gradientStartColor="#14b8a6" gradientStopColor="#06b6d4" />
                    <AnimatedBeam containerRef={containerRef} fromRef={cloudRef} toRef={brainRef} curvature={-20} duration={3} delay={0.2} gradientStartColor="#8b5cf6" gradientStopColor="#a78bfa" />
                    <AnimatedBeam containerRef={containerRef} fromRef={mailRef} toRef={brainRef} duration={3} delay={0.4} gradientStartColor="#f59e0b" gradientStopColor="#fbbf24" />
                    <AnimatedBeam containerRef={containerRef} fromRef={fileRef} toRef={brainRef} curvature={20} duration={3} delay={0.6} gradientStartColor="#ec4899" gradientStopColor="#f472b6" />
                    <AnimatedBeam containerRef={containerRef} fromRef={chatRef} toRef={brainRef} curvature={40} duration={3} delay={0.8} gradientStartColor="#10b981" gradientStopColor="#34d399" />

                    {/* Beam dari AI ke User */}
                    <AnimatedBeam containerRef={containerRef} fromRef={brainRef} toRef={userRef} duration={3} delay={0.5} gradientStartColor="#14b8a6" gradientStopColor="#0d9488" reverse />
                </div>
            </ComponentPreview>

            <div className="mt-8 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Props — AnimatedBeam</h2>
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
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">containerRef</code></td><td className="px-4 py-2 text-slate-500">—</td><td className="px-4 py-2 text-slate-600">Ref container utama (wajib)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">fromRef</code></td><td className="px-4 py-2 text-slate-500">—</td><td className="px-4 py-2 text-slate-600">Ref node asal beam (wajib)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">toRef</code></td><td className="px-4 py-2 text-slate-500">—</td><td className="px-4 py-2 text-slate-600">Ref node tujuan beam (wajib)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">curvature</code></td><td className="px-4 py-2 text-slate-500">0</td><td className="px-4 py-2 text-slate-600">Lengkungan path (- = atas, + = bawah)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">duration</code></td><td className="px-4 py-2 text-slate-500">2</td><td className="px-4 py-2 text-slate-600">Durasi animasi (detik)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">delay</code></td><td className="px-4 py-2 text-slate-500">0</td><td className="px-4 py-2 text-slate-600">Delay awal animasi (detik)</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">reverse</code></td><td className="px-4 py-2 text-slate-500">false</td><td className="px-4 py-2 text-slate-600">Balik arah beam</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">gradientStartColor</code></td><td className="px-4 py-2 text-slate-500">#18ccfc</td><td className="px-4 py-2 text-slate-600">Warna awal gradient</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">gradientStopColor</code></td><td className="px-4 py-2 text-slate-500">#6344f5</td><td className="px-4 py-2 text-slate-600">Warna akhir gradient</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">pathWidth</code></td><td className="px-4 py-2 text-slate-500">2</td><td className="px-4 py-2 text-slate-600">Lebar garis beam (px)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Props — SorotNode</h2>
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
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">size</code></td><td className="px-4 py-2 text-slate-500">default</td><td className="px-4 py-2 text-slate-600">Ukuran node: sm / default / lg</td></tr>
                            <tr><td className="px-4 py-2"><code className="text-xs bg-slate-100 px-1 rounded">className</code></td><td className="px-4 py-2 text-slate-500">—</td><td className="px-4 py-2 text-slate-600">Custom class buat styling tambahan</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
