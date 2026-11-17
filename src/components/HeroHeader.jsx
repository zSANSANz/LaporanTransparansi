export default function HeroHeader({ organizer, institution, title, lastUpdated }) {
  return (
    <section id="top" className="border-b border-emerald-900/10 bg-gradient-to-b from-emerald-950 to-emerald-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-800/50 px-3.5 py-1.5 text-xs font-medium text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Update Status: {lastUpdated}
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            {organizer} · Update Penggalangan Dana
          </p>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-3 text-lg font-semibold text-emerald-100 sm:text-xl">
            {institution}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
            Halaman laporan berkala untuk memantau perkembangan dana terkumpul,
            realisasi penggunaan anggaran, saldo kas tersedia, serta jadwal
            tahapan pembangunan secara terbuka dan dapat diverifikasi.
          </p>
        </div>
      </div>
    </section>
  );
}