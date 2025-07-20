import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("appwrite-session");

  // If no session and not already on sign-in page, redirect
  if (!session && !request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sign-in (sign-in page itself)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in|.*\\.).*)",
  ],
};
