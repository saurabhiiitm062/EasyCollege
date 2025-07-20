import { NextResponse } from 'next/server'
import { connectToDB } from '../../../lib/mongodb'
import User from '../../models/Users'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  try { 

    await connectToDB()

    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 })
    }
    
    return NextResponse.json({ message: 'Login successful', user: user }, { status: 200 })
  } catch (error) {
    console.error('Login Error:', error)
    return NextResponse.json({ message: 'Server error, please try again later' }, { status: 500 })
  }
}