'use client'

export default function Topbar() {
    return (
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Counselling Admin</h1>
            <div>
                {/* Placeholder for Admin Profile or Logout button */}
                <button className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            </div>
        </header>
    )
}
