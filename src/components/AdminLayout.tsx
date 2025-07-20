'use client'

import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">

                <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
        </div>
    )
}
