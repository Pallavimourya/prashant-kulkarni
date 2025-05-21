import { SignJWT, jwtVerify, JWTPayload } from 'jose'
import bcrypt from 'bcryptjs'
import { User } from '@/types'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key')

interface TokenPayload extends JWTPayload {
  sub?: string
  email?: string
  role?: string
}

export const authService = {
  async isAuthenticated(): Promise<boolean> {
    try {
      const token = localStorage.getItem('token')
      if (!token) return false

      const { payload } = await jwtVerify(token, JWT_SECRET)
      return !!payload
    } catch {
      return false
    }
  },

  async generateToken(user: User): Promise<string> {
    const payload: TokenPayload = {
      sub: user._id?.toString(),
      email: user.email,
      role: user.role
    }

    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET)
  },

  async verifyToken(token: string): Promise<User | null> {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET)
      const tokenPayload = payload as TokenPayload
      
      if (!tokenPayload.email) return null

      return {
        email: tokenPayload.email,
        password: '', // Password should not be included in the token
        role: tokenPayload.role as User['role']
      }
    } catch {
      return null
    }
  },

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
  },

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  },

  // Login user
  login: async (username: string, password: string) => {
    // In a real application, you would validate against a database
    // This is a simplified example
    if (username === 'admin' && password === 'admin') {
      const token = await authService.generateToken({ 
        email: username,
        role: 'admin',
        password: '' // Password should not be included in token
      })
      return { token }
    }
    throw new Error('Invalid credentials')
  },

  // Logout user
  logout: () => {
    // In a real application, you might want to invalidate the token
    // This is a simplified example
    return true
  },
} 