import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './app/i18n-config';

// PERHATIKAN: Kata 'export' di bawah ini WAJIB ada
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Cek apakah di URL sudah ada bahasa (id/en/ar)
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Jika URL belum ada bahasa, redirect ke default (id)
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Config agar middleware tidak mencegat file gambar/sistem
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|profile.png).*)'],
};