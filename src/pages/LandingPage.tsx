import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
    Box,
    ArrowRight,
    ShieldCheck,
    Zap,
    Heart,
    Check,
    HelpCircle,
    Users,
} from 'lucide-react'

export default function LandingPage() {
    return (
        <div className="flex flex-col">
            {/* HERO */}
            <div className="relative pt-24 pb-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
                <div className="relative z-10 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Tarkib UI v1.0.0 "Barokah Edition" Siap Pakai
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
                        Bikin Web Kenceng Pake <br />
                        Komponen yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Ajib & Barokah.</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Gak usah pusing bikin dari nol, Akhi. Ane udah siapin komponen React + Tailwind rapi.
                        <br className="hidden md:block" />
                        Ente tinggal <span className="font-semibold text-slate-900 bg-slate-100 px-1 rounded">comot</span>,
                        <span className="font-semibold text-slate-900 bg-slate-100 px-1 rounded mx-1">tempel</span>,
                        kelar urusan. Insyaallah bug-free.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/docs/introduction">
                            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-teal-900/20">
                                Bismillah, Mulai <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white">
                            Lihat GitHub
                        </Button>
                    </div>
                </div>
            </div>

            {/* FEATURES (KEUNGGULAN) */}
            <div className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Kenapa Ente Harus Pake Ini?</h2>
                        <p className="text-slate-600">Jangan mempersulit hidup dengan coding CSS dari nol, Akhi.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "100% Kendali di Tangan Ente", desc: "Bukan 'black box' package. Kodenya ada di folder project ente sendiri. Bebas edit semau hati." },
                            { icon: Zap, title: "Ringan & Kenceng", desc: "Dibangun di atas Radix UI & Tailwind. Cuma bawa apa yang dipake. Gak ada bloatware." },
                            { icon: Heart, title: "Dibuat dengan Cinta", desc: "Desain yang diperhatikan detailnya. Fokus state, accessibility, dan dark mode ready." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CODE SHOWCASE */}
            <div className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Kodingannya Gampang Banget, <br />
                                <span className="text-teal-600">Masyaallah.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Strukturnya jelas, TypeScript-nya rapi. Ente gak bakal tersesat baca kodingan ane.
                                Tinggal copy function <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">cn()</code>, terus paste komponennya.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    { title: "Modular", desc: "Setiap komponen berdiri sendiri (independen)." },
                                    { title: "Aksesibel", desc: "Udah support keyboard navigation & screen reader." },
                                    { title: "Dark Mode", desc: "Otomatis ngikutin tema system ente." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:border-teal-100 hover:bg-teal-50/30">
                                        <div className="mt-1 bg-teal-100 text-teal-700 p-1.5 rounded-full shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Code Window Mockup */}
                        <div className="flex-1 w-full max-w-xl relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

                            <div className="relative rounded-2xl bg-slate-950 shadow-2xl border border-slate-800 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-800 backdrop-blur-sm">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
                                        <Box size={10} /> App.tsx
                                    </div>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-sm font-mono leading-relaxed bg-transparent border-none p-0">
                                        <code className="text-slate-300 block font-mono">
                                            <span className="text-purple-400">import</span> {'{ Button }'} <span className="text-purple-400">from</span> <span className="text-green-400">"@/components/ui/button"</span>
                                            {'\n\n'}
                                            <span className="text-slate-500">{'// Tinggal pake aja Akhi'}</span>
                                            {'\n'}
                                            <span className="text-blue-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">App</span>() {'{'}
                                            {'\n  '}
                                            <span className="text-purple-400">return</span> (
                                            {'\n    '}<span className="text-blue-300">&lt;div</span> <span className="text-sky-300">className</span>=<span className="text-green-300">"p-10"</span><span className="text-blue-300">&gt;</span>
                                            {'\n      '}<span className="text-yellow-300">&lt;Button</span> <span className="text-sky-300">onClick</span>={'{() => '}alert(<span className="text-green-300">"Ajib!"</span>){'}'}<span className="text-yellow-300">&gt;</span>
                                            {'\n        '}Klik Ane Dong
                                            {'\n      '}<span className="text-yellow-300">&lt;/Button&gt;</span>
                                            {'\n    '}<span className="text-blue-300">&lt;/div&gt;</span>
                                            {'\n  '})
                                            {'\n}'}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-4">
                        <HelpCircle size={14} /> FAQ
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Pertanyaan Yang Sering Muncul</h2>

                    <div className="space-y-4 text-left">
                        {[
                            { q: "Ini gratis gak Akhi?", a: "Gratis tis tis! Ente mau pake buat project personal, komersil, project kantor, bebas. Asal jangan dijual ulang sebagai UI Library lagi ya." },
                            { q: "Pake Framework apa?", a: "Tarkib UI dibuat khusus buat React + Tailwind CSS. Kalo ente pake Next.js, Vite, atau Remix, ini cocok banget." },
                            { q: "Kenapa gak dibikin NPM Package aja?", a: "Biar ente punya kontrol penuh. Kalo pake NPM, susah buat custom logic-nya. Kalo copy-paste, kodenya jadi milik ente sepenuhnya." },
                            { q: "Bisa request komponen baru?", a: "Bisa banget! Langsung aja open issue di GitHub atau colek ane di sosmed. Insyaallah kalo sempet ane bikinin." },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-teal-200 hover:shadow-md transition-all">
                                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start gap-3">
                                    <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded mt-0.5">Q</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 ml-10 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA COMMUNITY */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden max-w-5xl mx-auto shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
                                <Users size={32} className="text-teal-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Jangan Ngoding Sendirian di Goa.</h2>
                            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                Gabung sama jamaah developer lain. Diskusi, request komponen, atau sekadar sapa-sapaan biar coding makin berkah.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 h-14 px-8 text-base font-bold shadow-lg shadow-white/10">
                                    Gabung Discord
                                </Button>
                                <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white h-14 px-8 text-base bg-transparent">
                                    Star di GitHub
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DISCLAIMER */}
            <div className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-yellow-200">
                        ⚠️ Peringatan Keras (Tapi Bercanda)
                    </div>
                    <p className="text-lg text-slate-700 italic max-w-3xl mx-auto leading-relaxed font-medium">
                        "Kalo kodingan ente error, jangan langsung nuduh ane <span className="text-red-500 font-extrabold underline decoration-wavy">bahlul</span> ya Akhi.
                        Coba istighfar dulu, cek koneksi, atau baca lagi dokumentasinya pelan-pelan.
                        Siapa tau ente yang kurang ngopi.
                        Tapi kalo emang bug dari ane, laporin aja santai, insyaallah ane benerin biar makin <span className="text-teal-600 font-extrabold">ajib</span>.
                        Syukron katsiron!"
                    </p>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="py-12 bg-white text-center border-t border-slate-200">
                <div className="flex items-center justify-center gap-2 mb-4 text-slate-900 font-bold text-xl">
                    <Box className="text-teal-600" /> Tarkib UI
                </div>
                <p className="text-slate-500 mb-6">Dibuat dengan ❤️, ☕, dan sedikit begadang oleh <span className="text-slate-900 font-medium">Ibrahim Bahaly</span>.</p>
                <div className="text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} Tarkib UI. Insyaallah Bermanfaat Dunia Akhirat.
                </div>
            </footer>
        </div>
    )
}
