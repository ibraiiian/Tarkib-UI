import { Accordion } from '@/components/ui/accordion'
import { ComponentPreview } from '@/components/common/ComponentPreview'
import { CodeStrings } from '@/lib/code-strings'
import { useToast } from '@/hooks/use-toast'
import { Toast } from '@/components/common/Toast'

const faqItems = [
    {
        value: "apa-itu",
        trigger: "Apa itu Tarkib UI?",
        content: "Tarkib UI adalah kumpulan komponen UI modern berbasis React + Tailwind CSS yang bisa ente copy paste langsung ke project ente. Gak perlu install package tambahan, Akhi!",
    },
    {
        value: "gratis",
        trigger: "Apakah Tarkib UI gratis?",
        content: "Alhamdulillah, gratis 100%! Ente boleh pake buat project pribadi maupun komersial. Ane ikhlas, yang penting bermanfaat.",
    },
    {
        value: "customizable",
        trigger: "Bisa di-custom gak komponen-nya?",
        content: "Tentu bisa dong, Akhi! Justru itu salah satu keunggulan Tarkib UI. Karena ente punya kode-nya langsung, ente bebas custom warna, ukuran, animasi, atau logic-nya sesuka hati.",
    },
    {
        value: "framework",
        trigger: "Support framework apa aja?",
        content: "Saat ini Tarkib UI di-build pake React + TypeScript + Tailwind CSS. Tapi karena ini cuma komponen biasa, ente bisa adaptasi ke Next.js, Remix, atau framework React lainnya.",
    },
    {
        value: "kontribusi",
        trigger: "Bisa bantu kontribusi gak?",
        content: "Masya Allah, jazakallahu khairan! Tentu boleh, Akhi. Fork repo-nya, bikin PR, atau sekedar kasih saran dan feedback juga ane terima dengan senang hati.",
    },
]

export default function AccordionPage() {
    const { toast, showToast, hideToast } = useToast()

    return (
        <div className="max-w-4xl animate-fade-in">
            <Toast show={toast.show} message={toast.message} onClose={hideToast} />

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Accordion (Lipatan)</h1>
                <p className="text-slate-600 text-lg">Konten yang bisa dilipat dan dibuka. Cocok banget buat FAQ atau settings yang panjang, Akhi.</p>
            </div>

            <ComponentPreview
                codeString={CodeStrings.accordion}
                onCopy={() => showToast('Alhamdulillah, kodingan udah kecopy!')}
            >
                <div className="w-full max-w-md">
                    <Accordion items={faqItems} />
                </div>
            </ComponentPreview>

            <div className="mt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Mode Multiple</h2>
                <p className="text-slate-600 mb-4">Pake <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 text-xs">type="multiple"</code> kalo mau bisa buka lebih dari satu item sekaligus:</p>
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                    <Accordion type="multiple" items={faqItems.slice(0, 3)} />
                </div>
            </div>
        </div>
    )
}
