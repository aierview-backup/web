import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/signin", whenAuthenticated: "redirect" },
  { path: "/signup", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "next" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/signin";

// Helper para adicionar os headers de política de segurança
function withSecurityHeaders(response: NextResponse) {
  response.headers.set("Cross-Origin-Opener-Policy", "unsafe-none");
  response.headers.set("Cross-Origin-Embedder-Policy", "unsafe-none");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const token = request.cookies.get("token");
  const rawUser = request.cookies.get("user");

  let user = null;
  if (rawUser?.value) user = JSON.parse(rawUser.value);

  if (token && path === "/account-details" && user?.name) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return withSecurityHeaders(NextResponse.redirect(redirectUrl));
  }

  if (!token && publicRoute) {
    return withSecurityHeaders(NextResponse.next());
  }

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return withSecurityHeaders(NextResponse.redirect(redirectUrl));
  }

  if (token && publicRoute?.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return withSecurityHeaders(NextResponse.redirect(redirectUrl));
  }

  if (token && !publicRoute) {
    return withSecurityHeaders(NextResponse.next());
  }

  return withSecurityHeaders(NextResponse.next());
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/|favicon.ico|.*\\.svg$).*)"],
};
