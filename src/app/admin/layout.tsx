import AdminLayout from '../../components/AdminLayout'
import type { ReactNode } from 'react'  

export default function AdminRootLayout({ children }: { children: ReactNode }) {
    return <AdminLayout>{children}</AdminLayout>
}
