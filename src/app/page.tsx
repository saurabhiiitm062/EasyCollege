// app/page.tsx or app/page.jsx

import React from 'react'
import Link from 'next/link'


const LandingPage = () => {
  return (
    <>

      <main className="min-h-screen bg-[#01024D] p-6 flex flex-col items-center justify-center">
        <section className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to EasyCollege
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Simplify your college system management with ease and efficiency.
          </p>
          <div className="space-x-4">
            <Link href="/auth/register" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Get Started
            </Link>
            <Link href="/admin" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
              Learn More
            </Link>
          </div>
        </section>
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="p-6  shadow rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Fast Setup</h3>
            <p className="text-gray-600 mt-2">
              Get your college system running in minutes with our intuitive setup process.
            </p>
          </div>
          <div className="p-6  shadow rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Secure & Scalable</h3>
            <p className="text-gray-600 mt-2">
              Built with security and performance in mind to grow with your needs.
            </p>
          </div>
          <div className="p-6  shadow rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">User Friendly</h3>
            <p className="text-gray-600 mt-2">
              A clean and modern interface that is easy to use for admins and students.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}

export default LandingPage
