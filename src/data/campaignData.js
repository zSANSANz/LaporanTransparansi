export const campaignData = {
  organizer: "Panitia Pembangunan Gedung",
  institution: "Rumah Belajar Ibnu Abbas (RBIA) Banat",
  title: "Pembangunan Gedung 3 Lantai",
  lastUpdated: "16 Nov 2026, 13:00 WIB",
  targetRab: 2745000000,
  collectedFunds: 1274298600,
  usedFunds: 3500000,
  phases: [
    {
      step: "01",
      title: "Pembangunan Tahap 1",
      subtitle: "Lantai #1",
      startDate: "21 Nov 2026",
      duration: "Perkiraan Durasi 12 Bulan",
      status: "Segera Dimulai",
    },
    {
      step: "02",
      title: "Pembangunan Tahap 2",
      subtitle: "Lantai #2",
      startDate: "21 Nov 2027",
      duration: "Perkiraan Durasi 6 Bulan",
      status: "Terjadwal",
    },
    {
      step: "03",
      title: "Pembangunan Tahap 3",
      subtitle: "Lantai #3",
      startDate: "20 Mei 2028",
      duration: "Perkiraan Durasi 4 Bulan",
      status: "Terjadwal",
    },
  ],
  donationAccount: {
    bank: "Bank Mandiri",
    accountNumber: "1570004879160",
    formattedNumber: "157 000 4879 160",
    accountHolder: "YAYASAN MASYARAKAT BELAJAR TANAH BARU",
  },
  contactPerson: {
    name: "Abu Hanin",
    phoneDisplay: "0813 1169 9325",
    whatsappNumber: "6281311699325",
  },
  cashflowLogs: [
    {
      id: 1,
      date: "16 Nov 2026",
      type: "Masuk",
      description: "Akumulasi Donasi & Wakaf Tahap Awal",
      amount: 1274298600,
    },
    {
      id: 2,
      date: "16 Nov 2026",
      type: "Keluar",
      description: "Biaya Administrasi & Persiapan Awal Lahan",
      amount: 3500000,
    },
  ],
};

export function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}