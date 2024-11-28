import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.pathname;

  const gonePages = [
    "/O-mnie",
    "/O-Mnie",
    "/Realizacje",
    "/Realizacje/pranie-tapicerki",
    "/Realizacje/renowacja-skor",
    "/Realizacje/renowacje-skor",
    "/Realizacje/autokosmetyka",
    "/Realizacje/przyciemnianie-szyb",
    "/Realizations/Realizations",
    "/Tapicerka/tapicerka-domowa",
    "/Tapicerka/bezinwazyjne-przyciemnianie-szyb",
    "/Tapicerka/pranie-tapicerki-skorzanej",
    "/Tapicerka/tapicerka-samochodowa",
    "/Tapicerka/pranie-tapicerki-samochodowej",
    "/autokosmetyka",
    "/przyciemnianie-szyb",
    "/pranie-tapicerki",
    "/renowacja-tapicerki-skorzanej",
    "/uslugi/renowacja-tapicerki-skorzanej",
    "/Cennik",
    "/tapicerka-samochodowa",
  ];

  if (gonePages.includes(url)) {
    const response = NextResponse.json(
      { message: "This page is permanently removed." },
      { status: 410 }
    );
    return response;
  }

  return NextResponse.next();
}
