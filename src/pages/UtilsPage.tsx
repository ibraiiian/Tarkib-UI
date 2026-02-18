import { useState } from 'react'
import { Copy, Check, Lightbulb, AlertTriangle } from 'lucide-react'

function CodeBlock({ code, title }: { code: string; title?: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className="relative group my-4">
            {title && (
                <span className="text-xs font-mono text-slate-400 mb-1 block">{title}</span>
            )}
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <button
                    onClick={handleCopy}
                    className="absolute right-3 top-3 p-1.5 rounded-md hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
                    title="Salin"
                >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-slate-400" />}
                </button>
                <pre>{code}</pre>
            </div>
        </div>
    )
}

export default function UtilsPage() {
    return (
        <div className="max-w-3xl animate-slide-up">
            <div className="mb-10 pb-6 border-b border-slate-200">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Aturan Main (Utils)</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Fungsi-fungsi pembantu yang dipake di balik layar semua komponen Tarkib UI. Wajib ente pahami sebelum ngoding.
                </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-10">
                {/* cn() Function */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Fungsi <code className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded">cn()</code>
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Ini <strong>jantungnya</strong> semua komponen Tarkib UI, Akhi. Fungsi <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">cn()</code> gabungin
                        dua library: <strong>clsx</strong> buat conditional class dan <strong>tailwind-merge</strong> buat resolve konflik class Tailwind.
                    </p>

                    <CodeBlock
                        title="src/lib/utils.ts"
                        code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}`}
                    />
                </div>

                {/* Kenapa butuh cn()? */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Kenapa Butuh cn()?</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Coba bayangin, Akhi. Ente punya Button dengan class <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">bg-blue-500</code>,
                        terus ente mau override jadi <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">bg-red-500</code>.
                        Tanpa <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">cn()</code>, Tailwind bisa bingung mau pake yang mana karena dua-duanya ada di class list.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                            <h4 className="font-bold text-red-700 flex items-center gap-1.5 mb-2 text-sm">
                                <AlertTriangle size={14} /> Tanpa cn() — Bahaya!
                            </h4>
                            <div className="bg-red-900/10 rounded-md p-3 font-mono text-xs text-red-800">
                                <pre>{`// Hasilnya gak pasti!
className="bg-blue-500 bg-red-500"
// Tailwind bingung, bisa jadi
// tetep biru 😭`}</pre>
                            </div>
                        </div>
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                            <h4 className="font-bold text-green-700 flex items-center gap-1.5 mb-2 text-sm">
                                <Check size={14} /> Pake cn() — Mantap!
                            </h4>
                            <div className="bg-green-900/10 rounded-md p-3 font-mono text-xs text-green-800">
                                <pre>{`// Hasilnya pasti bener!
cn("bg-blue-500", "bg-red-500")
// Output: "bg-red-500"
// Yang terakhir menang ✅`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cara Pake cn() */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Cara Pake cn()</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Ada beberapa cara ente bisa pake <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">cn()</code>. Ane kasih contohnya satu-satu ya:
                    </p>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Nge-merge class biasa</h3>
                    <CodeBlock code={`cn("px-4 py-2", "bg-blue-500")
// Output: "px-4 py-2 bg-blue-500"`} />

                    <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-6">2. Conditional class</h3>
                    <CodeBlock code={`cn("px-4 py-2", isActive && "bg-teal-500", !isActive && "bg-slate-200")
// Kalo isActive true: "px-4 py-2 bg-teal-500"
// Kalo isActive false: "px-4 py-2 bg-slate-200"`} />

                    <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-6">3. Override class dari props</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                        Ini yang paling sering dipake di komponen Tarkib. Ente bisa override style bawaan komponen lewat prop <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">className</code>:
                    </p>
                    <CodeBlock code={`// Di dalam komponen
<button className={cn(
    "bg-blue-500 text-white rounded-md",  // Style bawaan
    className  // Override dari ente
)} />

// Cara makenya
<Button className="bg-green-500" />
// bg-blue-500 bakal di-replace sama bg-green-500 ✅`} />
                </div>

                {/* Dependencies */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Dependencies yang Dibutuhin</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Fungsi <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">cn()</code> butuh dua library ini:
                    </p>
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Library</th>
                                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Fungsinya</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-4 py-3 font-mono text-teal-700 text-xs">clsx</td>
                                    <td className="px-4 py-3 text-slate-600">Buat nge-handle conditional class name. Kecil banget (&lt;1KB), ringan.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-teal-700 text-xs">tailwind-merge</td>
                                    <td className="px-4 py-3 text-slate-600">Buat resolve konflik Tailwind class. Misal <code className="bg-slate-100 px-1 rounded text-xs">p-2</code> vs <code className="bg-slate-100 px-1 rounded text-xs">p-4</code>, yang terakhir yang menang.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-teal-700 text-xs">class-variance-authority</td>
                                    <td className="px-4 py-3 text-slate-600">Buat bikin variant komponen (macam default, outline, destructive di Button). Opsional, tapi ane sangat saranin.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CodeBlock
                        title="Install semuanya sekaligus"
                        code="npm install clsx tailwind-merge class-variance-authority"
                    />
                </div>

                {/* CVA */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Bonus: Class Variance Authority (CVA)
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        CVA itu ibaratnya <strong>resep masakan</strong> buat komponen ente, Akhi. Ente definisiin variant-variant apa aja yang ada, terus tinggal dipanggil pake props.
                        Contohnya kayak yang ane pake di Button:
                    </p>
                    <CodeBlock code={`import { cva } from "class-variance-authority"

const buttonVariants = cva(
  // Base styles — selalu ada
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-300 hover:bg-slate-100",
        ghost: "hover:bg-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)`} />
                    <p className="text-slate-600 leading-relaxed mt-4">
                        Jadi kalo ente mau pake, tinggal:
                    </p>
                    <CodeBlock code={`<button className={cn(buttonVariants({ variant: "outline", size: "lg" }), className)}>
  Klik Ane
</button>`} />
                </div>

                {/* Info Box */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
                    <h4 className="font-bold text-teal-800 flex items-center gap-2 mb-2">
                        <Lightbulb size={18} /> Pesan dari Ane
                    </h4>
                    <p className="text-teal-700 text-sm">
                        Jangan takut buat nge-custom, Akhi. Semua utility ini cuma alat bantu.
                        Yang penting ente paham dasarnya, sisanya tinggal kreativitas ente aja.
                        Kalo ada yang bingung, cek lagi halaman ini atau langsung liat kodingan komponen-nya. Bismillah!
                    </p>
                </div>
            </div>
        </div>
    )
}
