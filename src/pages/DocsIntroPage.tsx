import { Zap } from 'lucide-react'

export default function DocsIntroPage() {
    return (
        <div className="max-w-3xl animate-slide-up">
            <div className="mb-10 pb-6 border-b border-slate-200">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Tentang Tarkib UI</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Kumpulan komponen UI modern yang siap copas buat mempercepat workflow ente.
                </p>
            </div>
            <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg">
                    Tarkib UI lahir dari keresahan ane liat developer sering banget bikin komponen dasar berulang-ulang.
                    Button lagi, Input lagi, Card lagi. Capek kan?
                </p>
                <p className="text-slate-600 leading-relaxed text-lg mt-4">
                    Di sini, ane sediain komponen yang <strong>Accessible</strong>, <strong>Customizable</strong>, dan <strong>Modern</strong>.
                    Ente gak perlu install npm package berat. Cukup copy kodenya, paste di file ente.
                </p>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
                    <h4 className="font-bold text-teal-800 flex items-center gap-2 mb-2">
                        <Zap size={18} /> Filosofi "Copy Paste"
                    </h4>
                    <p className="text-teal-700 text-sm">
                        Idenya adalah memberikan ente kepemilikan penuh atas kode. Ente bisa ubah warnanya,
                        animasinya, atau logic-nya tanpa harus nunggu update library.
                    </p>
                </div>
            </div>
        </div>
    )
}
