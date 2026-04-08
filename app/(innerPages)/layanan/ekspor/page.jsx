import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Layanan Ekspor — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Pengiriman ekspor Door-To-Port FCL dengan layanan dokumentasi end-to-end dan jaringan global.",
};

export default function LayananEkspor() {
  const heroData = {
    title: (
      <>
        Pengiriman Ekspor <br className="d-none lg:d-block" />
        <strong className="text-primary">Door-To-Port FCL</strong>
      </>
    ),
    description: (
      <>
        Layanan logistik di mana kontainer penuh (FCL) diambil dari gudang pengirim (Door) dan diantarkan ke pelabuhan tujuan (Port).
      </>
    ),
    note: "Menawarkan eksklusivitas penggunaan kontainer, keamanan lebih tinggi, serta efisiensi biaya untuk volume barang besar.",
    imageSrc: "/assets/images/ekspor/hero.png",
  };

  const featuresData = {
    badge: "Keunggulan",
    title: "Kelebihan Layanan Ekspor FCL",
    description: "Layanan ini umumnya digunakan oleh perusahaan yang mengekspor dalam jumlah besar dan membutuhkan penanganan khusus dari titik asal hingga pelabuhan luar negeri.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "Lebih Aman",
        title: "Eksklusif & Lebih Aman",
        description: "Kontainer hanya berisi barang dari satu pengirim. Risiko kerusakan sangat rendah karena barang tidak dicampur dengan milik pihak lain.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "Efisiensi Waktu",
        title: "Efisiensi Waktu Terjamin",
        description: "Proses muat dan pengiriman lebih cepat karena armada tidak perlu menunggu proses konsolidasi barang pihak lain.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/zap.svg",
        alt: "Volume Besar",
        title: "Cocok untuk Volume Besar",
        description: "Paling hemat biaya dan direkomendasikan untuk pengiriman masif, khususnya untuk muatan di atas 15-20 CBM.",
      },
    ]
  };

  const howWorksData = {
    image1: "/assets/images/ekspor/crane.png",
    image2: "/assets/images/ekspor/doc.png",
    block1: {
      title: "Tahap Persiapan & Pemuatan (Door)",
      description: "Langkah terpadu dari penyediaan kontainer hingga keberangkatan darat.",
      features: [
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Pengambilan Kontainer Kosong",
          desc: "Kontainer kosong diambil secara cepat dari depot terdekat."
        },
        {
          icon: "/assets/images/common/icons/settings.svg",
          title: "Pemuatan di Gudang",
          desc: "Kontainer diisi penuh oleh barang di gudang eksportir (Door) lalu dikunci & disegel."
        },
        {
          icon: "/assets/images/common/icons/portfolio.svg",
          title: "Pengangkutan ke Pelabuhan",
          desc: "Dikendarai langsung menuju pelabuhan muat untuk persiapan ekspor laut."
        }
      ]
    },
    block2: {
      title: "Proses Ekspor & Pengiriman (Port)",
      description: "Memastikan kargo Anda legal secara kepabeanan dan aman tiba di luar negeri.",
      features: [
        {
          icon: "/assets/images/common/icons/form.svg",
          title: "Bea Cukai & Dokumen",
          desc: "Pengurusan izin dan dokumen ekspor dilakukan sepenuh hati oleh agen berpengalaman."
        },
        {
          icon: "/assets/images/common/icons/map.svg",
          title: "Pengiriman Laut ke Port",
          desc: "Kontainer menempuh jalur laut dan bersandar dengan aman di pelabuhan tujuan."
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Penyelesaian (Port)",
          desc: "Barang siap diambil dan diproses rilis oleh importir di pelabuhan tujuan."
        }
      ]
    }
  };

  const pricingData = {
    badge: "Solusi Lengkap",
    title: "Dukungan Ekspor Menyeluruh",
    description: "Layanan logistik terpadu untuk mendampingi bisnis Anda mengekspansi pasar global.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Export 20 Feet FCL",
        price: "20",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Hubungi tim spesialis kami",
        features: [
          "Sewa kontainer terjamin & trucking eksklusif",
          "Penanganan lengkap dokumen ekspor (PEB)",
          "Proses pemuatan ke kapal (Door-To-Port)",
          "Akses jaringan agen global di pelabuhan",
          "Cocok untuk muatan >15-20 CBM"
        ]
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Kapasitas Besar",
        title: "Export 40 Feet FCL",
        price: "40",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Hubungi tim spesialis kami",
        features: [
          "Sewa kontainer Ekstra Luas & trucking",
          "Dokumentasi End-to-End Kepabeanan",
          "Proses pemuatan ke kapal (Door-To-Port)",
          "Akses mitra terpercaya di luar negeri",
          "Efisiensi ganda untuk volume bisnis ekspor besar"
        ]
      }
    ]
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
