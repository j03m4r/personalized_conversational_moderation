// middleware.js
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(request) {
  const userId = request.cookies.get('user-id')?.value
  
  if (!userId) {
    const newUserId = uuidv4()
    const response = NextResponse.next()
    response.cookies.set('user-id', newUserId, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
