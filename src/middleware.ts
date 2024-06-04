import { NextResponse, NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const singInPath = '/auth/sing-in'
  const singUpPath = '/auth/sing-up'
  const homePath = '/home'
  const token = req.cookies.get('token.connect')

  console.log(req.url)

  if (
    !token &&
    req.nextUrl.pathname !== singInPath &&
    req.nextUrl.pathname !== singUpPath
  ) {
    return NextResponse.redirect(new URL(singInPath, req.url))
  }

  if (
    token &&
    (req.nextUrl.pathname === singInPath ||
      req.nextUrl.pathname === singUpPath ||
      req.nextUrl.pathname === '/')
  ) {
    return NextResponse.redirect(new URL(homePath, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|auth/sign-in|auth/sign-up).*)',
  ],
}
