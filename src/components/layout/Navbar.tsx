import { Link } from 'react-router-dom'
import { Box, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-teal-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                            <Box size={20} strokeWidth={2.5} />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Tarkib UI</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 font-mono">v1.0.0</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/docs/introduction" className="text-slate-600 hover:text-teal-600 transition-colors">Kitab Panduan</Link>
                        <Link to="/docs/components/button" className="text-slate-600 hover:text-teal-600 transition-colors">Komponen</Link>
                        <div className="w-px h-4 bg-slate-200 mx-2"></div>
                        <div className="relative group">
                            <Search className="absolute left-2.5 top-2.5 text-slate-400" size={14} />
                            <input
                                type="text"
                                placeholder="Cari barang ghoib..."
                                className="bg-slate-50 border border-slate-200 rounded-full py-1.5 pl-8 pr-4 text-xs w-48 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                            />
                        </div>
                    </nav>

                    <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white md:hidden animate-slide-in-right">
                    <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                        <span className="font-bold text-lg flex items-center gap-2"><Box size={20} /> Menu</span>
                        <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
                    </div>
                    <div className="p-4 overflow-y-auto h-full pb-20 space-y-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 px-2">Halaman Utama</h4>
                            <div className="space-y-1">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-2 py-2 text-slate-600 hover:bg-slate-100 rounded">Beranda</Link>
                                <Link to="/docs/introduction" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-2 py-2 text-slate-600 hover:bg-slate-100 rounded">Tentang</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 px-2">Komponen</h4>
                            <div className="space-y-1">
                                <Link to="/docs/components/button" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-2 py-2 text-slate-600 hover:bg-slate-100 rounded">Button</Link>
                                <Link to="/docs/components/input" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-2 py-2 text-slate-600 hover:bg-slate-100 rounded">Input</Link>
                                <Link to="/docs/components/card" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-2 py-2 text-slate-600 hover:bg-slate-100 rounded">Card</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
