import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const token = req.cookies.get("__secure__")?.value;
  const token = true;

  const protectedPaths = ["/u"]; 

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      const home = new URL("/", req.url);
      return NextResponse.redirect(home);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/u/:path*"],
};
