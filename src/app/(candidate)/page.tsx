'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function UserDashboard() {
  const user = {
    name: "Deepu Kumar",
    jeeRoll: "12345678",
    rank: "5872",
    category: "General",
    seatAllotted: true,
    round: 1,
    institute: "IIT Delhi",
    branch: "Computer Science and Engineering"
  }

  return (
    <div className="p-4 grid gap-4 ">
      {/* User Info */}
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>JEE Roll Number:</strong> {user.jeeRoll}</p>
          <p><strong>Rank:</strong> {user.rank}</p>
          <p><strong>Category:</strong> {user.category}</p>
        </CardContent>
      </Card>

      {/* Seat Allotment */}
      <Card>
        <CardHeader>
          <CardTitle>Seat Allotment Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Round:</strong> Round {user.round}</p>
          <p>
            <strong>Status:</strong>{' '}
            <Badge variant={user.seatAllotted ? 'default' : 'destructive'}>
              {user.seatAllotted ? 'Seat Allotted' : 'Not Allotted'}
            </Badge>
          </p>
          {user.seatAllotted && (
            <>
              <p><strong>Institute:</strong> {user.institute}</p>
              <p><strong>Branch:</strong> {user.branch}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
