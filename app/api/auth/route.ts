import { NextResponse } from 'next/server'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { getUserByEmail } from '@/lib/database-service'
import bcryptjs from 'bcryptjs'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key')

export async function POST(request: Request) {
  try {
    const { action, email, password } = await request.json()

    switch (action) {
      case 'login': {
        const user = await getUserByEmail(email)
        if (!user) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if (!isPasswordValid) {
          return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
        }

        // Generate JWT token
        const token = await new SignJWT({ 
          sub: user._id?.toString(),
          email: user.email, 
          role: user.role 
        })
          .setProtectedHeader({ alg: 'HS256' })
          .setIssuedAt()
          .setExpirationTime('24h')
          .sign(JWT_SECRET)

        // Create response with token in cookie
        const response = NextResponse.json({ success: true })
        response.cookies.set('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 // 24 hours
        })

        return response
      }

      case 'logout': {
        const response = NextResponse.json({ success: true })
        response.cookies.delete('token')
        return response
      }

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const token = request.headers.get('cookie')?.split(';')
      .find(c => c.trim().startsWith('token='))
      ?.split('=')[1]

    if (!token) {
      return NextResponse.json({ authenticated: false })
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET)
      return NextResponse.json({ 
        authenticated: true,
        user: {
          email: payload.email,
          role: payload.role
        }
      })
    } catch {
      return NextResponse.json({ authenticated: false })
    }
  } catch (error) {
    console.error('Auth verification error:', error)
    return NextResponse.json({ authenticated: false })
  }
}

