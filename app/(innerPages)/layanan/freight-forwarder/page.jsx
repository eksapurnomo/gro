import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Freight Forwarder — CND Logistic | PT Cahaya Nusantara Dunia",
  description:
    "Layanan Freight Forwarder profesional dari CND Logistic. Pengurusan logistik end-to-end: koordinasi pengiriman, kepabeanan, dan manajemen dokumen untuk bisnis Anda.",
};

export default function LayananFreightForwarder() {
  const heroData = {
    title: (
      <>
        Freight Forwarder <br className="d-none lg:d-block" />
        <strong className="text-primary">Terpercaya & Berpengalaman</strong>
      </>
    ),
    description: (
      <>
        Kami mengelola seluruh rantai logistik pengiriman barang Anda —
        dari koordinasi multi-moda, pengurusan dokumen bea cukai, hingga
        pengiriman ke destinasi akhir dengan visibilitas penuh.
      </>
    ),
    note: "Solusi logistik terintegrasi untuk bisnis skala kecil, menengah, hingga besar.",
    imageSrc: "/assets/images/domestik/manager.png",
  };

  const featuresData = {
    badge: "Keunggulan Freight Forwarder CND",
    title: "Mengapa Percayakan Logistik Anda kepada Kami?",
    description:
      "CND Logistic hadir sebagai mitra strategis dalam pengelolaan pengiriman barang Anda. Dengan pengalaman di industri logistik nasional, kami membantu bisnis Anda bergerak lebih efisien.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/map.svg",
        alt: "Koordinasi Multi-Moda",
        title: "Koordinasi Multi-Moda Transportasi",
        description:
          "Kami mengintegrasikan jalur darat, laut, dan udara dalam satu paket layanan terpadu sesuai kebutuhan dan budget pengiriman Anda.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/form.svg",
        alt: "Pengurusan Dokumen",
        title: "Pengurusan Dokumen & Bea Cukai",
        description:
          "Tim kami berpengalaman menangani seluruh dokumen ekspor-impor dan kepabeanan: PEB, PIB, COO, Bill of Lading, hingga dokumen asuransi kargo.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/line-chart.svg",
        alt: "Visibilitas Real-Time",
        title: "Visibilitas & Tracking Real-Time",
        description:
          "Pantau status pengiriman barang Anda kapan saja dan di mana saja. Laporan transparan dari origin hingga destinasi akhir.",
      },
    ],
  };

  const howWorksData = {
    image1: "/assets/images/ekspor/doc.png",
    image2: "/assets/images/ekspor/crane.png",
    block1: {
      title: "Perencanaan & Koordinasi Logistik",
      description:
        "Kami mulai dengan memahami kebutuhan spesifik pengiriman Anda — jenis barang, rute, jadwal, dan anggaran — kemudian menyusun strategi logistik yang paling efisien.",
      features: [
        {
          icon: "/assets/images/common/icons/portfolio.svg",
          title: "Analisis Kebutuhan Pengiriman",
          desc: "Konsultasi awal untuk menentukan moda transportasi, rute optimal, dan estimasi biaya yang kompetitif.",
        },
        {
          icon: "/assets/images/common/icons/settings.svg",
          title: "Pemilihan Vendor & Agen",
          desc: "Kami memiliki jaringan mitra terpercaya di berbagai pelabuhan dan bandara, baik domestik maupun internasional.",
        },
      ],
    },
    block2: {
      title: "Eksekusi, Monitoring & Pelaporan",
      description:
        "Setelah perencanaan disepakati, tim kami mengeksekusi setiap tahapan pengiriman dengan profesional, mulai dari pick-up hingga proof of delivery.",
      features: [
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Pengurusan Kepabeanan",
          desc: "Seluruh proses clearance bea cukai ditangani oleh tim PPJK kami yang bersertifikat.",
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Laporan & Proof of Delivery",
          desc: "Anda mendapatkan laporan lengkap dan POD (bukti pengiriman) setiap kali barang tiba di tujuan.",
        },
      ],
    },
  };

  const pricingData = {
    badge: "Paket Layanan",
    title: "Solusi Freight Forwarder Kami",
    description:
      "Tersedia pilihan layanan yang dapat disesuaikan dengan volume, jenis barang, dan rute pengiriman bisnis Anda.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Freight Domestik",
        price: "FCL",
        period: "/ LCL",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Pengiriman antar pulau seluruh Indonesia",
          "Koordinasi armada darat, laut & udara",
          "Pengurusan dokumen pengiriman domestik",
          "Layanan Door-to-Door & Port-to-Port",
          "Tracking status pengiriman real-time",
          "Dukungan konsultasi logistik gratis",
        ],
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Rekomendasi",
        title: "Freight Internasional",
        price: "FCL",
        period: "/ LCL",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Ekspor & Impor ke seluruh dunia",
          "Kepabeanan & dokumen end-to-end (PEB, PIB, COO)",
          "Koordinasi agen internasional terpercaya",
          "Asuransi kargo tersedia",
          "Layanan Door-to-Port & Port-to-Door",
          "Dedicated account manager untuk bisnis Anda",
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
