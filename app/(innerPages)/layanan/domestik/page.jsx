import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Layanan Domestik — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Melayani pengiriman domestik FCL dan LCL seluruh Indonesia (Container 20ft & 40ft).",
};

export default function LayananDomestik() {
  const heroData = {
    title: (
      <>
        Ahlinya Pengiriman Kargo <br className="d-none lg:d-block" />
        <strong>Domestik & Kontainer</strong>
      </>
    ),
    description: (
      <>
        Melayani pengiriman dari dan ke seluruh daerah di Indonesia menggunakan General Container (20 ft & 40 ft). <br className="d-none lg:d-block" />
        Tersedia pilihan Full Container Load (FCL) dan Less Container Load (LCL).
      </>
    ),
    note: "Harga kompetitif. Layanan berkualitas.",
    imageSrc: "/assets/images/domestik/hero.png",
  };

  const featuresData = {
    badge: "Layanan Kontainer Domestik",
    title: "Mengapa Memilih CND Logistics?",
    description: "Kami memiliki jaringan logistik yang tersebar luas di seluruh provinsi, siap mengantarkan kargo Anda baik berupa General Cargo maupun Muatan Besar.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/map.svg",
        alt: "Jangkauan Nasional",
        title: "Jangkauan Seluruh Indonesia",
        description: "Pengiriman barang menjangkau lebih dari 100 kota dan kabupaten dengan armada darat maupun laut yang andal.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "FCL & LCL",
        title: "Kapasitas FCL & LCL",
        description: "Tersedia pilihan Full Container Load (FCL) untuk kapasitas penuh atau LCL (Less Container Load) untuk pengiriman hemat.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "Keamanan Terjamin",
        title: "Keamanan Kargo 24/7",
        description: "Mitra ekspedisi prioritas dan pelacakan transparan memastikan setiap barang Anda aman hingga di depan pintu.",
      },
    ]
  };

  const howWorksData = {
    image1: "/assets/images/domestik/truck.png",
    image2: "/assets/images/domestik/manager.png",
    block1: {
      title: "Kendali Penuh Logistik Cukup dari Genggaman",
      description: "Tim operasional domestik kami memastikan armada pengiriman Anda terjadwal dengan rapi, dari lokasi muat hingga pelabuhan/tujuan akhir."
    },
    block2: {
      title: "Manajemen Konsolidasi Barang Terpadu",
      description: "Kami menangani semua proses logistik (Door-to-Door / Port-to-Door). Anda cukup duduk tenang dan pantau barang Anda.",
      features: [
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Pengurusan Dokumen",
          desc: "Bantuan lengkap untuk seluruh administrasi pelabuhan dan logistik nasional."
        },
        {
          icon: "/assets/images/common/icons/line-chart.svg",
          title: "Lacak Kontainer",
          desc: "Visibilitas penuh untuk mengetahui status perjalanan barang secara real-time."
        }
      ]
    }
  };

  const pricingData = {
    badge: "Armada Kami",
    title: "Varian Kontainer Tersedia",
    description: "Kami menyediakan varian General Container ukuran 20 Feet dan 40 Feet yang tangguh untuk segala jenis muatan standar.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "General Container",
        price: "20",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Dimensi luas untuk standar kargo padat",
          "Kapasitas beban muat optimal",
          "Cocok untuk barang komoditas dan heavy duty",
          "Layanan Door to Door (Bisa Disesuaikan)",
          "Bantuan asuransi pengiriman tersedia"
        ]
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Kapasitas Ekstra",
        title: "General Container",
        price: "40",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Kapasitas muatan volume 2x lebih besar",
          "Cocok untuk komoditas ringan berukuran besar",
          "Lebih efisien untuk pengiriman bulk/masif",
          "Layanan Door to Door (Bisa Disesuaikan)",
          "Bantuan asuransi pengiriman tersedia"
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
