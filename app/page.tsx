import Link from "next/link";

export default function HomePage() {
  return (
    <section className="retro-box overflow-hidden">
      {/* Pasek tytułowy okna z lat 90. */}
      <div className="flex items-center justify-between border-b-2 border-[#111111] bg-[#111111] px-4 py-2 text-white">
        <span className="text-xs font-bold tracking-wider uppercase">
          README.TXT — Notes Workspace
        </span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="inline-block h-3 w-3 border border-white bg-white" />
          <span className="inline-block h-3 w-3 border border-white" />
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Witaj w Twoim zeszycie notatek
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-[#222222]">
          Aplikacja zbudowana w oparciu o Next.js (App Router), TypeScript oraz
          PocketBase. Przejdź do sekcji notatek, aby przeglądać i dodawać nowe
          wpisy.
        </p>

        <div className="pt-2">
          <Link
            href="/notes"
            className="retro-btn inline-block px-5 py-2.5 text-sm font-bold"
          >
            Otwórz notatki →
          </Link>
        </div>
      </div>
    </section>
  );
}