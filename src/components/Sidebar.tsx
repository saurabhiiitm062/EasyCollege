'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/colleges', label: 'Colleges' },
    { href: '/admin/students', label: 'Students' },
    { href: '/admin/allotment', label: 'Allotment' },
    { href: '/admin/logout', label: 'Logout' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-[#01024D] text-white h-full p-4">
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
            <nav className="space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            'block px-4 py-2 rounded hover:bg-gray-700',
                            pathname === link.href && 'bg-gray-700 font-semibold'
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
