import { NextResponse } from 'next/server'
import { connectToDB } from '../../../lib/mongodb'
import User from '../../models/Users'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { name, email, password, rank } = await req.json()

  if (!name || !email || !password || !rank) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  try {
    await connectToDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ name, email, password: hashedPassword, rank   })
    await newUser.save()

    return NextResponse.json({ message: 'User registered successfully', user: newUser }, { status: 201 })
  } catch (err) {
    console.error('Registration Error:', err)
    return NextResponse.json({ message: 'Server error, please try again later' }, { status: 500 })
  }
}
