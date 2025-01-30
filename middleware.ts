import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isUnProtectedRoute = createRouteMatcher(['/', '/sign-in', '/sign-up'])

export default clerkMiddleware(async (auth, req) => {
  if (!isUnProtectedRoute(req)) await auth.protect()
  if (req.nextUrl.pathname !== '/' && process.env.NODE_ENV === 'production') {
    // Redirect to the external URL
    return NextResponse.redirect('https://iwannatry.vercel.app/'); // Replace with your external URL
  }
  
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}