'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { addCollegeAsync } from '@/features/admin/adminSlice'
import { useAppDispatch } from '@/lib/hooks'

const AddCollegePage = () => {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    openingRank: '',
    closingRank: '',
    courses: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const payload = {
        ...formData,
        openingRank: parseInt(formData.openingRank),
        closingRank: parseInt(formData.closingRank),
        courses: formData.courses.split(',').map((c) => c.trim()),
      }

      await dispatch(addCollegeAsync(payload)).unwrap()
      toast.success('College added successfully!')
      setFormData({
        name: '',
        location: '',
        openingRank: '',
        closingRank: '',
        courses: '',
      })
    } catch (error: any) {
      toast.error('Failed to add college: ' + error.message)
    }
  }

  return (
    <div className="mx-auto h-screen flex justify-center items-center">
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">Add New College</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">College Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter college name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="openingRank">Opening Rank</Label>
              <Input
                id="openingRank"
                name="openingRank"
                type="number"
                placeholder="Opening rank"
                value={formData.openingRank}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="closingRank">Closing Rank</Label>
              <Input
                id="closingRank"
                name="closingRank"
                type="number"
                placeholder="Closing rank"
                value={formData.closingRank}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="courses">Courses</Label>
              <Input
                id="courses"
                name="courses"
                placeholder="Comma separated (e.g. B.Tech, M.Tech)"
                value={formData.courses}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Add College
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddCollegePage
