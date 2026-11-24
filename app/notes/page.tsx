import Link from "next/link";
import { notFound } from "next/navigation";

interface NoteRecord {
  id: string;
  title: string;
  content: string;
  created: string;
}

async function getNote(noteId: string): Promise<NoteRecord | null> {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // W Next.js 15/16 params jest Promise, więc zawsze używamy await
  const { id } = await params;
  const note = await getNote(id);

  if (!note) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/notes" className="retro-btn px-3 py-1.5 text-sm font-bold">
          ← Wróć do listy
        </Link>
        <span className="text-xs text-[#555555]">ID: {note.id}</span>
      </div>

      <article className="retro-box overflow-hidden">
        <div className="border-b-2 border-[#111111] bg-[#111111] px-4 py-2 text-xs font-bold tracking-wider text-white uppercase">
          NOTE_{note.id}.TXT
        </div>

        <div className="space-y-4 p-6">
          <h1 className="text-2xl font-bold break-words">{note.title}</h1>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#222222] break-words">
            {note.content}
          </p>

          <div className="border-t border-dashed border-[#111111]/30 pt-3 text-xs text-[#555555]">
            Utworzono: <time dateTime={note.created}>{note.created}</time>
          </div>
        </div>
      </article>
    </section>
  );
}