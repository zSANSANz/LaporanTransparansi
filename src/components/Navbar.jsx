export default function Navbar({ institution }) {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-900/10 bg-[#f8faf8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 font-bold text-white shadow-sm">
            IA
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Laporan Transparansi
            </p>
            <p className="text-sm font-bold text-slate-900">{institution}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#ringkasan" className="transition hover:text-emerald-800">
            Aliran Kas
          </a>
          <a href="#tahapan" className="transition hover:text-emerald-800">
            Tahapan Pembangunan
          </a>
          <a href="#donasi" className="transition hover:text-emerald-800">
            Rekening Wakaf
          </a>
        </nav>

        <a
          href="#donasi"
          className="rounded-lg bg-emerald-800 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-900 sm:text-sm"
        >
          Salurkan Donasi
        </a>
      </div>
    </header>
  );
}