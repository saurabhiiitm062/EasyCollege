import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CollegesPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Colleges</h1>
        <Link href="/admin/colleges/add">
          <Button variant="default">+ Add New College</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Colleges List</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Replace this with actual list of colleges */}
          <div className="text-muted-foreground text-sm">
            No colleges added yet.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CollegesPage
