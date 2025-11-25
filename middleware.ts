import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/sign-in", "/sign-up"];

export function middleware(request: NextRequest) {
  const session = request.cookies.get("appwrite-session");
  const path = request.nextUrl.pathname;

  // Check if route is public
  const isPublic =
    PUBLIC_PATHS.some((p) => path.startsWith(p)) ||
    path.startsWith("/_next") ||
    path.startsWith("/api") ||
    path.includes("."); // static files

  // If user is not authenticated and trying to access a protected route → redirect
  if (!session && !isPublic) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// Only match routes in the app (everything except static files)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
