import { connectToDB } from '@/lib/mongodb'
import College from '../../models/College'
import { NextRequest, NextResponse } from 'next/server'

// CREATE College (already implemented by you)
export async function POST(req: NextRequest) {
    try {
        const { name, location } = await req.json();

        if (!name || !location) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
        }

        await connectToDB()
        const newCollege = new College({ name, location })
        await newCollege.save()

        return NextResponse.json({ message: 'College added successfully' }, { status: 201 })
    } catch (error) {
        console.error(error, "POST error")
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
}

// GET all colleges
export async function GET(req: NextRequest) {
    try {
        await connectToDB()
        const colleges = await College.find()

        return NextResponse.json(colleges, { status: 200 })
    } catch (error) {
        console.error('GET error:', error)
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
}
