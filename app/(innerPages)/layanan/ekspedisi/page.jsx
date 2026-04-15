import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Ekspedisi Nasional — CND Logistic | PT Cahaya Nusantara Dunia",
  description:
    "Layanan ekspedisi pengiriman barang reguler dan express ke seluruh Indonesia. CND Logistic menjamin ketepatan waktu, keamanan barang, dan harga yang kompetitif.",
};

export default function LayananEkspedisi() {
  const heroData = {
    title: (
      <>
        Ekspedisi Pengiriman Barang <br className="d-none lg:d-block" />
        <strong className="text-primary">Seluruh Indonesia</strong>
      </>
    ),
    description: (
      <>
        Layanan pengiriman barang reguler dan express ke seluruh wilayah
        Indonesia. Cocok untuk pengiriman paket, cargo pallet, hingga
        barang berukuran besar dengan standar keamanan terjamin.
      </>
    ),
    note: "Penjemputan barang di lokasi Anda. Pengiriman aman & tepat waktu ke tujuan.",
    imageSrc: "/assets/images/domestik/truck.png",
  };

  const featuresData = {
    badge: "Layanan Ekspedisi CND",
    title: "Pilihan Layanan Ekspedisi Terlengkap",
    description:
      "Dari paket kecil hingga cargo besar, CND Logistic siap mengantarkan barang Anda ke seluruh penjuru Indonesia dengan aman, cepat, dan dengan harga yang bersaing.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/zap.svg",
        alt: "Pengiriman Regular",
        title: "Pengiriman Reguler & Express",
        description:
          "Pilihan pengiriman reguler (ekonomis) atau express (prioritas) sesuai urgensi dan kebutuhan bisnis Anda ke seluruh Indonesia.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/portfolio.svg",
        alt: "Cargo Pallet & Barang Besar",
        title: "Cargo Pallet & Barang Besar",
        description:
          "Melayani pengiriman cargo pallet, mesin industri, bahan bangunan, elektronik, dan barang berukuran besar lainnya dengan penanganan khusus.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "Door to Door",
        title: "Layanan Door-to-Door",
        description:
          "Kami menjemput barang dari lokasi Anda dan mengantarkan langsung ke pintu penerima di seluruh kota dan kabupaten di Indonesia.",
      },
    ],
  };

  const howWorksData = {
    image1: "/assets/images/impor/warehouse.png",
    image2: "/assets/images/impor/truck.png",
    block1: {
      title: "Penjemputan & Proses Sortir Barang",
      description:
        "Proses ekspedisi dimulai dari penjemputan barang di lokasi Anda, sortir di gudang transit, hingga barang siap dikirimkan ke tujuan akhir.",
      features: [
        {
          icon: "/assets/images/common/icons/map.svg",
          title: "Penjemputan di Lokasi",
          desc: "Tim kurir kami datang ke lokasi Anda untuk mengambil dan mengemas barang sesuai standar keamanan pengiriman.",
        },
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Sortir & Rute Pengiriman",
          desc: "Barang diproses di hub/gudang transit dan diurutkan berdasarkan rute pengiriman yang paling efisien.",
        },
      ],
    },
    block2: {
      title: "Pengiriman & Konfirmasi Penerimaan",
      description:
        "Barang dikirimkan melalui armada darat atau kombinasi moda transportasi terbaik, dengan konfirmasi pengiriman (POD) kepada pengirim.",
      features: [
        {
          icon: "/assets/images/common/icons/line-chart.svg",
          title: "Tracking Pengiriman",
          desc: "Pantau posisi kiriman Anda secara real-time melalui tim operasional CND Logistic.",
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Proof of Delivery (POD)",
          desc: "Bukti penerimaan barang oleh penerima dikirimkan kepada pengirim sebagai konfirmasi keberhasilan pengiriman.",
        },
      ],
    },
  };

  const pricingData = {
    badge: "Pilihan Layanan",
    title: "Paket Ekspedisi CND Logistic",
    description:
      "Pilih paket pengiriman yang sesuai dengan kebutuhan, ukuran barang, dan estimasi waktu pengiriman Anda.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Ekspedisi Reguler",
        price: "Hemat",
        period: "",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Estimasi 3–7 hari kerja",
        features: [
          "Pengiriman ke seluruh kota di Indonesia",
          "Cocok untuk semua jenis barang umum",
          "Layanan penjemputan tersedia",
          "Tracking status pengiriman",
          "Pengemasan standar tersedia",
          "Asuransi kargo (opsional)",
        ],
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Prioritas",
        title: "Ekspedisi Express",
        price: "Cepat",
        period: "",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Estimasi 1–3 hari kerja",
        features: [
          "Prioritas pengiriman lebih cepat",
          "Jangkauan kota-kota utama di Indonesia",
          "Layanan penjemputan prioritas",
          "Tracking & notifikasi real-time",
          "Pengemasan premium tersedia",
          "Asuransi kargo tersedia",
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
