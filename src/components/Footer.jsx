export default function Footer({ organizer, institution }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="font-bold text-slate-800">
            {organizer} — {institution}
          </p>
          <p className="mt-1">
            Semoga Allah membalas kebaikan para muhsinin dengan pahala jariyah
            yang terus mengalir.
          </p>
        </div>
        <a href="#top" className="font-semibold text-emerald-800 hover:underline">
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}