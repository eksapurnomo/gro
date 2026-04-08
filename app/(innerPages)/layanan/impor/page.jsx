import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Layanan Impor — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Solusi Impor Praktis & Terintegrasi dari port hingga door, melayani customs clearance, API, PIB, dan alat berat.",
};

export default function LayananImpor() {
  const heroData = {
    title: (
      <>
        Pengiriman Impor <br className="d-none lg:d-block" />
        <strong className="text-primary">Port-To-Door FCL</strong>
      </>
    ),
    description: (
      <>
        Solusi Impor Praktis & Terintegrasi. Kami menyediakan jasa pengurusan dokumen & pengantaran barang impor Port-to-Door yang memudahkan proses pengiriman barang dari pelabuhan hingga ke lokasi tujuan Anda secara aman dan kompeten.
      </>
    ),
    note: "Berpengalaman menangani customs clearance hingga pengantaran akhir tanpa hambatan.",
    imageSrc: "/assets/images/impor/hero.png",
  };

  const featuresData = {
    badge: "Keunggulan",
    title: "Kelebihan Layanan Impor FCL",
    description: "Kami memastikan setiap proses customs dan clearance berjalan aman, tanpa ribet, serta hemat waktu Anda.",
    features: [
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/zap.svg",
        alt: "Cepat Terpercaya",
        title: "Proses Cepat & Transparan",
        description: "Pengurusan di kepabeanan diaudit secara penuh tanpa adanya biaya tersembunyi, dijamin tepat waktu.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/portfolio.svg",
        alt: "Berpengalaman",
        title: "Dukungan Berbagai Kargo",
        description: "Penanganan profesional untuk aneka komoditas: bahan baku berat, mesin produksi, hingga alat konstruksi.",
      },
      {
        order: "order-1",
        iconSrc: "/assets/images/common/icons/map.svg",
        alt: "Jaringan Luas",
        title: "Jaringan Transportasi Luas",
        description: "Setelah keluar dari Port, barang Anda langsung didistribusikan ke pabrik, ruko, atau gudang Anda menggunakan armada andal.",
      },
    ]
  };

  const howWorksData = {
    image1: "/assets/images/impor/truck.png",
    image2: "/assets/images/impor/warehouse.png",
    block1: {
      title: "Cakupan Port-to-Door & Pengiriman Darat",
      description: "Layanan ini mencakup perjalanan kontainer penuh secara eksklusif sejak kapal bersandar di pelabuhan.",
      features: [
        {
          icon: "/assets/images/common/icons/zap.svg",
          title: "Pengambilan dari Port",
          desc: "Tiba di pelabuhan lalu dieksekusi proses pembongkaran muatan FCL milik Anda."
        },
        {
          icon: "/assets/images/common/icons/target.svg",
          title: "Customs Clearance",
          desc: "Pengurusan izin bea cukai dan pelepasan barang oleh pihak berwenang."
        },
        {
          icon: "/assets/images/common/icons/portfolio.svg",
          title: "Distribusi Alamat Akhir",
          desc: "Pengiriman via jalur darat menuju lokasi operasional gudang/pabrik tujuan Anda."
        }
      ]
    },
    block2: {
      title: "Dokumentasi & Administrasi Impor",
      description: "Dengan tim yang berpengalaman, kami memastikan semua dokumen legal sesuai dengan regulasi kepabeanan di Indonesia.",
      features: [
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Pengurusan API",
          desc: "Menyelesaikan proses Angka Pengenal Impor sebagai syarat dasar perdagangan luar negeri."
        },
        {
          icon: "/assets/images/common/icons/form.svg",
          title: "Pemberitahuan Impor Barang",
          desc: "Membantu menavigasi struktur PIB yang kompleks hingga urusan tarif impor Anda mulus."
        },
        {
          icon: "/assets/images/common/icons/form.svg",
          title: "Dokumen Kepabeanan",
          desc: "Mengawal seluruh perizinan terkait jenis barang khusus dan spesifikasi operasionalnya."
        }
      ]
    }
  };

  const pricingData = {
    badge: "Layanan Terintegrasi",
    title: "Dukungan Impor Port-To-Door",
    description: "Kami mendampingi proses impor dan menyediakan armada siap sedia untuk menjemput container FCL Anda dari pihak berwenang di Port.",
    showFooter: false,
    plans: [
      {
        additionalClasses: "border",
        title: "Import 20 Feet FCL",
        price: "20",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Sewa truk pengantar (Port to Door)",
          "Pengurusan PIB, API & bea cukai lengkap",
          "Cocok untuk bahan baku & general cargo berat",
          "Jaminan pengantaran gudang yang aman",
          "Dukungan pelacakan rute darat pengantaran"
        ]
      },
      {
        additionalClasses: "border border-primary shadow",
        badge: "Skala Jumbo",
        title: "Import 40 Feet FCL",
        price: "40",
        period: "Feet",
        linkText: "Konsultasi / Hubungi WhatsApp",
        details: "Respons Cepat (Office Hours)",
        features: [
          "Sewa trailer ekstra untuk alat berat/mesin",
          "Dukungan penuh administrasi impor (End-to-End)",
          "Cocok untuk mesin produksi & komoditas masif",
          "Jaminan pengantaran sampai lokasi perakitan",
          "Customs clearance VIP handling"
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
