import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes.exe — Retro Notebook",
  description: "Prosta aplikacja do notatek w Next.js i PocketBase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="min-h-screen font-mono antialiased">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <header className="retro-box-sm mb-8 flex items-center justify-between px-4 py-3">
            <span className="text-sm font-bold tracking-tight">
              C:\NOTES\APP.EXE
            </span>

            <nav aria-label="Główna nawigacja" className="flex gap-3">
              <Link href="/" className="retro-btn px-3 py-1 text-sm font-bold">
                Home
              </Link>
              <Link
                href="/notes"
                className="retro-btn px-3 py-1 text-sm font-bold"
              >
                Notes
              </Link>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}