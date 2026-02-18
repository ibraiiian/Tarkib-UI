import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function DocsLayout() {
    return (
        <div className="container mx-auto flex items-start">
            <Sidebar />
            <main className="flex-1 md:pl-10 py-10 px-4 min-h-[calc(100vh-4rem)]">
                <Outlet />
            </main>
        </div>
    )
}
