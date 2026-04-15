import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Pengiriman Container — CND Logistic | PT Cahaya Nusantara Dunia",
  description:
    "Layanan pengiriman container FCL dan LCL terpercaya dari CND Logistic. Container 20ft dan 40ft untuk pengiriman domestik maupun internasional.",
};

export default function LayananPengirimanContainer() {
  const heroData = {
    title: (
      <>
        Pengiriman Container <br className="d-none lg:d-block" />
        <strong className="text-primary">FCL & LCL Terpadu</strong>
      </>
    ),
    description: (
      <>
        Kirimkan barang Anda dalam container 20ft atau 40ft dengan layanan
        Full Container Load (FCL) maupun Less than Container Load (LCL)
        — hemat, aman, dan tepat waktu ke seluruh Indonesia.
      </>
    ),
    note: "Tersedia pilihan FCL (eksklusif penuh) & LCL (konsolidasi bersama) sesuai volume kargo Anda.",
    imageSrc: "/assets/images/ekspor/crane.png",
  };

  const featuresData = {
    badge: "Keunggulan Layanan Container CND",
    title: "Solusi Container untuk Setiap Skala Bisnis",
    description:
      "Baik Anda pengusaha dengan volume kecil maupun perusahaan besar yang membutuhkan kontainer penuh, CND Logistic menyediakan solusi yang tepat dan harga yang kompetitif.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "FCL Full Container",
        title: "FCL — Full Container Load",
        description:
          "Satu kontainer eksklusif untuk satu pengirim. Ideal untuk volume besar (>15 CBM). Lebih aman karena barang tidak dicampur dengan kargo pihak lain.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/database.svg",
        alt: "LCL Less Container Load",
        title: "LCL — Less Container Load",
        description:
          "Bayar sesuai volume barang Anda. Bergabung dengan kargo dari pengirim lain dalam satu kontainer. Hemat biaya untuk pengiriman volume kecil menengah.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "Tracking Container",
        title: "Tracking & Monitoring Kontainer",
        description:
          "Lacak posisi kontainer Anda secara real-time dari pelabuhan asal hingga pelabuhan tujuan menggunakan sistem tracking digital kami.",
      },
    ],
  };

  const howWorksData = {
    image1: "/assets/images/domestik/hero.png",
    image2: "/assets/images/ekspor/doc.png",
    block1: {
      title: "Booking & Persiapan Pengiriman",
      description:
        "Proses pemesanan kontainer yang mudah dan cepat. Tim kami akan membantu Anda dari tahap konsultasi hingga kontainer siap diberangkatkan dari pelabuhan muat.",
      features: [
        {
          icon: "/assets/images/common/icons/portfolio.svg",
          title: "Konsultasi & Booking",
          desc: "Hubungi tim kami untuk konsultasi jenis container dan jadwal keberangkatan yang sesuai kebutuhan.",
        },
        {
          icon: "/assets/images/common/icons/settings.svg",
          title: "Penyiapan Kontainer",
          desc: "Kontainer kosong disiapkan, ditempatkan di lokasi muat, diisi, disegel, dan siap diberangkatkan.",
        },
      ],
    },
    block2: {
      title: "Pengiriman & Penyelesaian di Tujuan",
      description:
        "Setelah kontainer diberangkatkan, kami memantau perjalanan hingga kontainer tiba dan proses bongkar muat di tujuan selesai dengan aman.",
      features: [
        {
          icon: "/assets/images/common/icons/map.svg",
          title: "Pemantauan Rute Pengiriman",
          desc: "Monitoring perjalanan kontainer secara berkala dengan notifikasi status kepada pengirim.",
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Penyelesaian & Delivery",
          desc: "Kontainer tiba, dilakukan bongkar muat, dan barang didistribusikan ke alamat tujuan (jika Door-to-Door).",
        },
      ],
    },
  };

  const pricingData = {
    badge: "Pilihan Container",
    title: "Varian Container Tersedia",
    description:
      "Pilih jenis container yang paling sesuai dengan volume, jenis barang, dan anggaran logistik Anda.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Container 20 Feet",
        price: "20",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Kapasitas ±25–28 ton / 33 CBM",
          "Cocok untuk barang padat & berat",
          "Tersedia FCL (eksklusif) & LCL (konsolidasi)",
          "Pengiriman antar pulau seluruh Indonesia",
          "Pengurusan dokumen pelabuhan tersedia",
          "Asuransi kargo tersedia (opsional)",
        ],
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Kapasitas Ekstra",
        title: "Container 40 Feet",
        price: "40",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Kapasitas ±26–30 ton / 67 CBM",
          "Cocok untuk barang ringan bervolume besar",
          "Efisiensi biaya untuk kargo masif",
          "Tersedia FCL (eksklusif) & LCL (konsolidasi)",
          "Pengiriman antar pulau seluruh Indonesia",
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
