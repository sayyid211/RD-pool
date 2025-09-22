/**import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  // Protect routes under /posts/[id]
  if (req.nextUrl.pathname.startsWith("/posts/")) {
    if (!session) {
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Define which routes should trigger the middleware
export const config = {
  matcher: ["/posts/:path*"],
};
*/

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/posts/:path*"], // protect posts routes
};
