import { useState } from "react";
import { formatRupiah } from "../data/campaignData";

export default function CashflowSummary({
  targetRab,
  collectedFunds,
  usedFunds,
  cashflowLogs,
}) {
  const [filterType, setFilterType] = useState("Semua");

  const currentBalance = collectedFunds - usedFunds;
  const collectedPercentage = ((collectedFunds / targetRab) * 100).toFixed(2);
  const usedPercentage = ((usedFunds / targetRab) * 100).toFixed(2);

  const filteredLogs =
    filterType === "Semua"
      ? cashflowLogs
      : cashflowLogs.filter((log) => log.type === filterType);

  return (
    <section id="ringkasan" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            RINGKASAN ALIRAN KAS
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Posisi Keuangan Pembangunan
          </h2>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
          Persentase dihitung berdasarkan total Perkiraan Rencana Anggaran
          Biaya (RAB) pembangunan gedung 3 lantai.
        </p>
      </div>

      {/* Grid 3 Kartu Utama: RAB, Terkumpul, Digunakan */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Kartu 1: Perkiraan RAB */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Perkiraan RAB
            </span>
            <span className="rounded-md bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700">
              100% Target
            </span>
          </div>
          <p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {formatRupiah(targetRab)}
          </p>
          <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-sky-100">
            <div className="h-full w-full rounded-full bg-sky-600"></div>
          </div>
          <p className="mt-2.5 text-xs text-slate-500">
            Total kebutuhan anggaran 3 lantai
          </p>
        </div>

        {/* Kartu 2: Dana Terkumpul */}
        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Dana Terkumpul
            </span>
            <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              {collectedPercentage}% dari RAB
            </span>
          </div>
          <p className="mt-4 text-2xl font-extrabold tracking-tight text-emerald-800 sm:text-3xl">
            {formatRupiah(collectedFunds)}
          </p>
          <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-emerald-100">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${Math.min(collectedPercentage, 100)}%` }}
            ></div>
          </div>
          <p className="mt-2.5 text-xs text-slate-500">
            Kekurangan dana: {formatRupiah(targetRab - collectedFunds)}
          </p>
        </div>

        {/* Kartu 3: Dana Sudah Digunakan */}
        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Dana Sudah Digunakan
            </span>
            <span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
              {usedPercentage}% dari RAB
            </span>
          </div>
          <p className="mt-4 text-2xl font-extrabold tracking-tight text-amber-800 sm:text-3xl">
            {formatRupiah(usedFunds)}
          </p>
          <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-amber-100">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{ width: `${Math.max(usedPercentage, 2)}%` }}
            ></div>
          </div>
          <p className="mt-2.5 text-xs text-slate-500">
            Realisasi pengeluaran tercatat
          </p>
        </div>
      </div>

      {/* Banner Saldo Kas Tersedia */}
      <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-emerald-800/20 bg-emerald-900 p-6 text-white sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
            SALDO KAS TERSEDIA SAAT INI
          </p>
          <p className="mt-1 text-xs text-emerald-100/80">
            Selisih Dana Terkumpul dikurangi Dana yang Sudah Digunakan
          </p>
        </div>
        <div className="text-3xl font-extrabold tracking-tight text-amber-300 sm:text-4xl">
          {formatRupiah(currentBalance)}
        </div>
      </div>

      {/* Tabel Rekap Mutasi Aliran Kas */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Catatan Arus Kas Ringkas
            </h3>
            <p className="text-xs text-slate-500">
              Filter berdasarkan arus dana masuk dan keluar
            </p>
          </div>

          <div className="flex gap-2">
            {["Semua", "Masuk", "Keluar"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  filterType === type
                    ? "bg-emerald-800 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase text-slate-400">
                <th className="py-3 pr-4 font-semibold">Tanggal</th>
                <th className="py-3 pr-4 font-semibold">Keterangan</th>
                <th className="py-3 pr-4 font-semibold">Arus</th>
                <th className="py-3 text-right font-semibold">Nominal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap py-3.5 pr-4 text-xs text-slate-500">
                    {item.date}
                  </td>
                  <td className="py-3.5 pr-4 font-medium text-slate-800">
                    {item.description}
                  </td>
                  <td className="py-3.5 pr-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.type === "Masuk"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td
                    className={`whitespace-nowrap py-3.5 text-right font-bold ${
                      item.type === "Masuk"
                        ? "text-emerald-700"
                        : "text-amber-700"
                    }`}
                  >
                    {item.type === "Masuk" ? "+" : "-"}{" "}
                    {formatRupiah(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}