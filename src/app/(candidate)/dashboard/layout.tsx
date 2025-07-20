import UserSidebar from '@/components/sidebar/user-sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen  ">

      <main className="flex-1 bg-gray-50  ">{children}</main>
    </div>
  )
}
