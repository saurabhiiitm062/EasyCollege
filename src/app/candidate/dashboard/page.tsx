'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, ClipboardList, FileCheck, School } from 'lucide-react';

export default function CandidateDashboard() {
  return (
    <div className="p-6 bg-[#01024D] h-screen">
      <h1 className="text-3xl font-bold mb-6">Candidate Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Choices */}
        <Card className="border-2 border-gray-300 rounded-lg bg-[#01024D]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Available Choices</CardTitle>
            <ClipboardList className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className=" underline text-blue-300 ">view available choices</p>
          </CardContent>
        </Card>

        {/* Choices Filled */}
        <Card className="border-2 border-gray-300 rounded-lg bg-[#01024D]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Choices Filled</CardTitle>
            <FileCheck className="text-green-500" />
          </CardHeader>
          <CardContent>
            <ul className="list-decimal pl-4 text-gray-700 space-y-1">
              <li>Computer Science - ABC College</li>
              <li>IT - DEF University</li>
            </ul>
          </CardContent>
        </Card>

        {/* Application Status */}
        <Card className="border-2 border-gray-300 rounded-lg bg-[#01024D]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Application Status</CardTitle>
            <BadgeCheck className="text-purple-500" />
          </CardHeader>
          <CardContent>
            <p className="text-green-600 font-medium">✅ Verified</p>
          </CardContent>
        </Card>

        {/* Counselling Result */}
            <Card className="border-2 border-gray-300 rounded-lg bg-[#01024D]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Counselling Result</CardTitle>
            <School className="text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-blue-600">📝 Round 1 Allotted: <strong>IT - DEF University</strong></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
