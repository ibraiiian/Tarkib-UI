import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ComingSoonPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center animate-zoom-in">
            <div className="bg-slate-100 p-6 rounded-full mb-6">
                <Search size={48} className="text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Astaghfirullah, Halaman Ghoib.</h2>
            <p className="text-slate-500 max-w-md mb-8">
                Link ini belum ada isinya Akhi. Sabar ya, ane lagi ngoding bagian ini.
            </p>
            <Link to="/">
                <Button variant="outline">Balik ke Beranda</Button>
            </Link>
        </div>
    )
}
