import Link from "next/link";

interface NoteItem {
  id: string;
  title: string;
  content: string;
  created: string;
}

async function getNotes(): Promise<NoteItem[]> {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return (data?.items ?? []) as NoteItem[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Notes</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

function Note({ note }: { note: NoteItem }) {
  const { id, title, content, created } = note;

  return (
    <Link href={`/notes/${id}`} className="retro-box block p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm">{content}</p>
      <p className="mt-4 text-xs opacity-70">{created}</p>
    </Link>
  );
}