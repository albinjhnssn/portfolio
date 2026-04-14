import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const auth = request.cookies.get("auth")?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/login") return NextResponse.next();

  if (auth !== "albin-2026") {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.png).*)"],
};
