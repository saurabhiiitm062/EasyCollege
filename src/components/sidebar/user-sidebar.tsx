'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { Home, User, ClipboardList, LogOut } from 'lucide-react'

const links = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/choicefilling', label: 'Choice Filling', icon: User },
  { href: '/allotment', label: 'Allotment', icon: ClipboardList },
  { href: '/login', label: 'Logout', icon: LogOut },
]

export default function UserSidebar() {
  const pathname = usePathname()

  return (
    <aside className=" bg-[#01024D] border-r px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Candidate Panel</h2>
      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-700 transition-all',
              pathname === href && 'bg-gray-100 text-black font-semibold'
            )}
          >
            <Icon size={18} className="text-gray-600" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
