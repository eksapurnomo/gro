import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Trucking Nasional — CND Logistic | PT Cahaya Nusantara Dunia",
  description:
    "Layanan trucking nasional CND Logistic. Armada truk lengkap untuk pengiriman cargo darat antar kota dan antar provinsi di seluruh Indonesia.",
};

export default function LayananTruckingNasional() {
  const heroData = {
    title: (
      <>
        Trucking Nasional <br className="d-none lg:d-block" />
        <strong className="text-primary">Armada Andal ke Seluruh Indonesia</strong>
      </>
    ),
    description: (
      <>
        Layanan transportasi darat dengan armada truk lengkap — truk box,
        truk engkel, truk tronton, hingga trailer — untuk pengiriman cargo
        antar kota dan antar provinsi di seluruh Indonesia.
      </>
    ),
    note: "Armada terawat, pengemudi berpengalaman, pengiriman tepat waktu.",
    imageSrc: "/assets/images/impor/truck.png",
  };

  const featuresData = {
    badge: "Armada Trucking CND",
    title: "Layanan Trucking yang Handal & Profesional",
    description:
      "CND Logistic mengoperasikan armada trucking nasional dengan berbagai kapasitas kendaraan untuk memenuhi kebutuhan pengiriman kargo darat bisnis Anda di seluruh Indonesia.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "Berbagai Jenis Armada",
        title: "Berbagai Jenis Kendaraan Armada",
        description:
          "Tersedia truk box, truk engkel, truk tronton, wingbox, dan trailer untuk menyesuaikan kapasitas dan jenis barang yang akan dikirimkan.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/map.svg",
        alt: "Jaringan Antar Pulau",
        title: "Jaringan Rute Antar Kota & Provinsi",
        description:
          "Jaringan rute darat yang luas mencakup seluruh Pulau Jawa, Sumatera, Kalimantan, Sulawesi, dan pulau-pulau lainnya di Indonesia.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/line-chart.svg",
        alt: "GPS Monitoring",
        title: "Monitoring Armada via GPS",
        description:
          "Setiap kendaraan dilengkapi GPS tracker sehingga posisi dan status pengiriman dapat dipantau secara real-time oleh tim operasional dan klien.",
      },
    ],
  };

  const howWorksData = {
    image1: "/assets/images/domestik/truck.png",
    image2: "/assets/images/impor/warehouse.png",
    block1: {
      title: "Request Armada & Dispatch",
      description:
        "Proses pemesanan armada trucking yang mudah dan cepat. Hubungi tim kami, informasikan kebutuhan, dan armada siap dijadwalkan sesuai waktu pengiriman Anda.",
      features: [
        {
          icon: "/assets/images/common/icons/portfolio.svg",
          title: "Pemesanan & Penjadwalan",
          desc: "Pesan armada melalui WhatsApp atau telepon. Tim kami akan mengkonfirmasi ketersediaan unit dan jadwal pengiriman.",
        },
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Pemuatan di Lokasi",
          desc: "Armada datang ke lokasi muat Anda, barang dimuat dengan aman oleh kru yang berpengalaman.",
        },
      ],
    },
    block2: {
      title: "Pengiriman & Monitoring Rute",
      description:
        "Kendaraan bergerak menuju tujuan dengan dipantau via GPS. Anda mendapatkan update perjalanan secara berkala hingga barang tiba dan proses bongkar muat selesai.",
      features: [
        {
          icon: "/assets/images/common/icons/line-chart.svg",
          title: "GPS Tracking Real-Time",
          desc: "Pantau posisi armada Anda kapan saja. Tim operasional kami siap memberikan update perjalanan secara proaktif.",
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Bongkar Muat & Konfirmasi",
          desc: "Barang dibongkar di tujuan dan konfirmasi serah terima dikirimkan kepada pengirim sebagai bukti penyelesaian pengiriman.",
        },
      ],
    },
  };

  const pricingData = {
    badge: "Pilihan Armada",
    title: "Varian Armada Trucking CND",
    description:
      "Pilih jenis kendaraan yang sesuai dengan volume, berat, dan jenis barang kiriman Anda.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Truk Engkel / Box",
        price: "CDD",
        period: "/ CDE",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Kapasitas ±4–6 Ton",
        features: [
          "Cocok untuk pengiriman antar kota jarak pendek-menengah",
          "Kapasitas muat optimal untuk kargo umum",
          "Pengiriman Door-to-Door tersedia",
          "GPS tracking real-time",
          "Pengemudi berpengalaman & terverifikasi",
          "Layanan muat/bongkar tersedia (opsional)",
        ],
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Kapasitas Besar",
        title: "Truk Tronton / Trailer",
        price: "Tronton",
        period: "/ Trailer",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Kapasitas ±10–30 Ton",
        features: [
          "Ideal untuk cargo masif & industri",
          "Jangkauan antar pulau (via ferry/roro)",
          "Tersedia flatbed, wingbox & trailer",
          "GPS tracking & monitoring 24/7",
          "Pengemudi + kernet berpengalaman",
          "Asuransi kargo tersedia (opsional)",
        ],
      },
    ],
  };

  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero data={heroData} />
          <Features data={featuresData} />
          <Howworks data={howWorksData} />
          <Pricing data={pricingData} />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
