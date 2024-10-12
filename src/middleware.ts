import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export const config = {
    matcher: [
        '/login/:path*',
        '/signup/:path*',
    ]
}

export function middleware(request: NextRequest) { // cd un usuario esta logueado protejemos rutas de loguin y singup
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value
    if (accessToken) {
        return NextResponse.redirect(new URL('/Store', request.url))
    }
}
