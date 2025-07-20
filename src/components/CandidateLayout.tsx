'use client'

import Sidebar from '../components/sidebar/user-sidebar'
import { ReactNode } from 'react'

export default function CandidateLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-full ">
            <Sidebar />
            <div className="flex  flex-col flex-1  max-h-full ">

                <main className="flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    )
}
