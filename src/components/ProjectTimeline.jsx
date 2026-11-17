export default function ProjectTimeline({ phases }) {
  const accentStyles = [
    {
      badge: "bg-emerald-800 text-white",
      bar: "bg-emerald-600",
      border: "border-emerald-200",
    },
    {
      badge: "bg-sky-800 text-white",
      bar: "bg-sky-600",
      border: "border-slate-200",
    },
    {
      badge: "bg-amber-700 text-white",
      bar: "bg-amber-500",
      border: "border-slate-200",
    },
  ];

  return (
    <section id="tahapan" className="border-y border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            ROADMAP PROYEK
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Rencana Tahapan Pembangunan
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Pelaksanaan pembangunan dibagi menjadi tiga tahap bertahap mulai
            dari lantai dasar hingga lantai tiga.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {phases.map((phase, index) => {
            const style = accentStyles[index] || accentStyles[0];
            return (
              <article
                key={phase.step}
                className={`flex flex-col justify-between rounded-2xl border ${style.border} bg-[#fafcfb] p-6`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold ${style.badge}`}
                    >
                      {phase.step}
                    </span>
                    <span className="rounded-full bg-slate-200/70 px-3 py-1 text-xs font-semibold text-slate-700">
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-700">
                    ({phase.subtitle})
                  </p>

                  <div className="mt-5 rounded-xl border border-slate-200/80 bg-white p-4">
                    <p className="text-xs text-slate-500">Target Mulai</p>
                    <p className="mt-0.5 text-lg font-extrabold text-slate-900">
                      {phase.startDate}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 h-1.5 w-full rounded-full bg-slate-200">
                    <div className={`h-full w-1/3 rounded-full ${style.bar}`}></div>
                  </div>
                  <p className="text-xs font-semibold text-slate-600">
                    {phase.duration}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}