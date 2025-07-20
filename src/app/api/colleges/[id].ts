import { connectToDB } from '@/lib/mongodb'
import College from '@/app/models/College'
import { NextRequest, NextResponse } from 'next/server'

// GET college by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectToDB()
        const college = await College.findById(params.id)

        if (!college) {
            return NextResponse.json({ message: 'College not found' }, { status: 404 })
        }

        return NextResponse.json(college, { status: 200 })
    } catch (error) {
        console.error('GET college error:', error)
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
}

// UPDATE college by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { name, location } = await req.json()

        await connectToDB()

        const updatedCollege = await College.findByIdAndUpdate(
            params.id,
            { name, location },
            { new: true }
        )

        if (!updatedCollege) {
            return NextResponse.json({ message: 'College not found' }, { status: 404 })
        }

        return NextResponse.json(updatedCollege, { status: 200 })
    } catch (error) {
        console.error('PUT college error:', error)
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
}

// DELETE college by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectToDB()

        const deletedCollege = await College.findByIdAndDelete(params.id)

        if (!deletedCollege) {
            return NextResponse.json({ message: 'College not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'College deleted' }, { status: 200 })
    } catch (error) {
        console.error('DELETE college error:', error)
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
}
