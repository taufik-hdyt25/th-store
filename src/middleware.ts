import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  //   const isLoginPage = request.nextUrl.pathname === "/login";

  //   if (!token && !isLoginPage) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   if (token && isLoginPage) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|not-found|maintenance).*)",
  ],
};
