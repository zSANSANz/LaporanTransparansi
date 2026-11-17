import { useState } from "react";

export default function DonationBox({ account, contact }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Gagal menyalin nomor rekening.");
    }
  };

  const whatsappText = encodeURIComponent(
    `Assalamu'alaikum ${contact.name}, ana ingin konfirmasi transfer donasi/wakaf Pembangunan Gedung 3 Lantai RBIA Banat.`
  );

  return (
    <section id="donasi" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-emerald-900/15 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-12 lg:items-center">
        {/* Info Rekening */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            SALURAN DONASI &amp; WAKAF
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Rekening Resmi Pembangunan
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Pastikan nama pemilik rekening sesuai sebelum melakukan transfer
            untuk menjaga keamanan dan ketepatan penyaluran dana.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {account.bank}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-2xl font-extrabold tracking-wider text-slate-900 sm:text-3xl">
                {account.formattedNumber}
              </p>
              <button
                type="button"
                onClick={handleCopyAccount}
                className="rounded-lg bg-emerald-800 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-900"
              >
                {copied ? "Nomor Tersalin ✓" : "Salin No. Rekening"}
              </button>
            </div>
            <p className="mt-3 text-xs font-semibold text-slate-700 sm:text-sm">
              a.n. {account.accountHolder}
            </p>
          </div>
        </div>

        {/* Kartu Konfirmasi */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            KONFIRMASI TRANSFER
          </p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {contact.name}
          </h3>
          <p className="mt-1 font-mono text-base font-semibold text-emerald-800">
            {contact.phoneDisplay}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            Konfirmasi membantu panitia mencatat akad donasi (wakaf/infak
            pembangunan) secara tertib ke dalam laporan kas berkala.
          </p>

          <a
            href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Konfirmasi via WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  );
}