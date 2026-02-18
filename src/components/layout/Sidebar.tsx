import { Link, useLocation } from 'react-router-dom'
import { Layout, Terminal, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface SidebarLinkProps {
    to: string
    label: string
    icon?: LucideIcon
}

function SidebarLink({ to, label, icon: Icon }: SidebarLinkProps) {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                isActive
                    ? "bg-teal-50 text-teal-700 border border-teal-100 shadow-sm translate-x-1"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1"
            )}
        >
            {Icon && <Icon size={16} className={isActive ? "text-teal-600" : "text-slate-400"} />}
            {label}
        </Link>
    )
}

export function Sidebar() {
    return (
        <aside className="hidden md:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-slate-200 py-8 pr-6 shrink-0">
            <div className="mb-8">
                <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Muqaddimah</h3>
                <div className="space-y-1">
                    <SidebarLink to="/docs/introduction" label="Tentang Tarkib" icon={Layout} />
                </div>
            </div>
            <div className="mb-8">
                <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Persiapan</h3>
                <div className="space-y-1">
                    <SidebarLink to="/docs/installation" label="Kaifiyat Install" icon={Terminal} />
                    <SidebarLink to="/docs/utils" label="Aturan Main (Utils)" icon={Code2} />
                </div>
            </div>
            <div className="mb-8">
                <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Gudang Komponen</h3>
                <div className="space-y-1">
                    <SidebarLink to="/docs/components/button" label="Button (Tombol)" />
                    <SidebarLink to="/docs/components/input" label="Input (Isian)" />
                    <SidebarLink to="/docs/components/textarea" label="Textarea (Kotak Teks)" />
                    <SidebarLink to="/docs/components/card" label="Card (Kartu)" />
                    <SidebarLink to="/docs/components/badge" label="Badge (Lencana)" />
                    <SidebarLink to="/docs/components/avatar" label="Avatar (Foto Profil)" />
                    <SidebarLink to="/docs/components/switch" label="Switch (Saklar)" />
                    <SidebarLink to="/docs/components/separator" label="Separator (Pemisah)" />
                    <SidebarLink to="/docs/components/skeleton" label="Skeleton (Loading)" />
                    <SidebarLink to="/docs/components/tabs" label="Tabs (Tab Navigasi)" />
                    <SidebarLink to="/docs/components/accordion" label="Accordion (Lipatan)" />
                    <SidebarLink to="/docs/components/alert" label="Alert (Peringatan)" />
                    <SidebarLink to="/docs/components/progress" label="Progress (Bar Progres)" />
                    <SidebarLink to="/docs/components/tooltip" label="Tooltip (Info Hover)" />
                    <SidebarLink to="/docs/components/dialog" label="Dialog (Modal)" />
                    <SidebarLink to="/docs/components/scroll-stack" label="ScrollStack (Tumpukan)" />
                </div>
            </div>
        </aside>
    )
}
