import { Copy, Check, PackageOpen, Wrench } from 'lucide-react'
import { useState } from 'react'

function CopyBlock({ code, label }: { code: string; label?: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className="relative group">
            {label && (
                <span className="text-xs font-mono text-slate-400 mb-1 block">{label}</span>
            )}
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="flex items-center justify-between gap-4">
                    <code>{code}</code>
                    <button
                        onClick={handleCopy}
                        className="shrink-0 p-1.5 rounded-md hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
                        title="Salin"
                    >
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function InstallationPage() {
    return (
        <div className="max-w-3xl animate-slide-up">
            <div className="mb-10 pb-6 border-b border-slate-200">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Kaifiyat Install</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Panduan lengkap buat ente yang mau pake Tarkib UI di project ente. Gampang kok, Insya Allah.
                </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-10">
                {/* Step 1 */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        Bikin Project React + TypeScript
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Pertama-tama, ente bikin dulu project React pake Vite. Kenapa Vite? Karena cepet banget, Akhi. Gak pake lama kayak nunggu antrian bakso.
                    </p>
                    <CopyBlock code="npm create vite@latest nama-project -- --template react-ts" />
                    <p className="text-slate-500 text-sm mt-2">
                        Ganti <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">nama-project</code> sesuai selera ente ya.
                    </p>
                </div>

                {/* Step 2 */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        Install Dependencies yang Dibutuhin
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Tarkib UI butuh beberapa library pendukung. Ane pake <strong>Tailwind CSS</strong> buat styling,
                        <strong> class-variance-authority (CVA)</strong> buat bikin variant komponen, dan <strong>clsx + tailwind-merge</strong> buat nge-merge class name dengan aman.
                    </p>
                    <div className="space-y-3">
                        <CopyBlock
                            label="Tailwind CSS v4"
                            code="npm install tailwindcss @tailwindcss/vite"
                        />
                        <CopyBlock
                            label="Utility buat class name"
                            code="npm install clsx tailwind-merge class-variance-authority"
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        Setup Tailwind CSS
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Tambahin Tailwind di file <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">vite.config.ts</code> ente:
                    </p>
                    <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}</pre>
                    </div>
                    <p className="text-slate-600 leading-relaxed mt-4 mb-4">
                        Terus di file CSS utama ente (misal <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">index.css</code>), tambahin:
                    </p>
                    <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`@import "tailwindcss";`}</pre>
                    </div>
                </div>

                {/* Step 4 */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        Bikin Helper Function <code className="text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">cn()</code>
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Ini penting banget, Akhi. Fungsi <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">cn()</code> dipake di semua komponen Tarkib buat nge-merge class Tailwind dengan aman.
                        Bikin file <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">src/lib/utils.ts</code>:
                    </p>
                    <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre>{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}`}</pre>
                    </div>
                </div>

                {/* Step 5 */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        Copy Paste Komponen
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Nah, sekarang ente tinggal pergi ke halaman komponen yang ente mau (misal Button, Input, Card), terus klik tab <strong>"Kodingan (Code)"</strong>,
                        dan copy paste ke project ente. Taruh di folder <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">src/components/ui/</code>.
                    </p>
                </div>

                {/* Info Box */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
                    <h4 className="font-bold text-teal-800 flex items-center gap-2 mb-2">
                        <PackageOpen size={18} /> Struktur Folder yang Ane Saranin
                    </h4>
                    <div className="bg-teal-900/10 rounded-md p-4 font-mono text-sm text-teal-800">
                        <pre>{`src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts
└── ...`}</pre>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
                    <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                        <Wrench size={18} /> Tips dari Ane
                    </h4>
                    <ul className="text-amber-700 text-sm space-y-2 list-disc list-inside">
                        <li>Ente boleh banget custom warna, ukuran, atau animasi komponen sesuka hati. Ini kode ente, ente yang punya!</li>
                        <li>Kalo ente pake path alias <code className="bg-amber-100 px-1 rounded text-amber-800 text-xs">@/</code>, pastiin udah di-setup di <code className="bg-amber-100 px-1 rounded text-amber-800 text-xs">tsconfig.json</code> dan <code className="bg-amber-100 px-1 rounded text-amber-800 text-xs">vite.config.ts</code>.</li>
                        <li>Semua komponen Tarkib udah di-forwardRef, jadi aman buat dipake di form library kayak React Hook Form.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
