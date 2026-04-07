import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import Testimonials from "@/components/homes/home-4/Testimonials";

export const metadata = {
  title: "Transportasi Darat — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Layanan transportasi darat (trucking) yang fleksibel, andal, dan tepat waktu untuk mendistribusikan kargo logistik Anda.",
};

const heroData = {
  title: (
    <>
      <span className="text-primary dark:text-secondary">
        Transportasi Darat
      </span>
      <br />yang Anda Percayai.
    </>
  ),
  desc: "Solusi logistik darat via truk (Trucking) dengan ragam tipe armada yang selalu siap sedia merespons panggilan distribusi barang Anda.",
  footer: "Door-to-door delivery dengan pengawasan penuh dari tim ahli logistik.",
};

const factsData = {
  title: "Kapasitas Armada Tidak Terbatas",
  description: "Terhindar dari macet dan penundaan pengiriman. Kami menentukan rute pengantaran melalui jalan bebas hambatan secara cermat.",
  facts: [
    { value: "Fleksibel", description: "Banyak Pilihan Armada" },
    { value: "GPS", description: "Sistem Lacak (Tracking)" },
    { value: "24/7", description: "Pemantauan Sopir & Truk" },
  ]
};

const featuresData = {
  badge: "Layanan Trucking",
  title: "Moda Angkutan Darat Terbaik",
  description: "Layanan trucking ideal untuk barang-barang curah maupun logistik retail. Kami selalu menyesuaikan ukuran dan tipe kendaraan dengan budget Anda.",
  items: [
    {
      imageSrc: "/assets/images/template/feature-image-01.jpg",
      icon: "unicon-delivery-truck",
      title: "Ragam Armada Pengangkutan",
      description: "Menyediakan truk bak terbuka, truk boks tertutup (hingga wingbox), trailer, maupun armada pendingin (cold chain) untuk pengiriman logistik khusus.",
      reverseOrder: false,
    },
    {
      imageSrc: "/assets/images/template/feature-image-02.jpg",
      icon: "unicon-map-pin",
      title: "Pengiriman Door to door",
      description: "Lebih praktis karena armada kargo jemput langsung ke titik loading (pabrik/gudang) Anda dan meluncur sampai ke titik unloading pembeli Anda.",
      reverseOrder: true,
    },
  ]
};

const ctaData = {
  title: "Panggil Armada Trucking Kami",
  description: "Tim dispatch CND selalu siaga untuk dihubungi untuk pemenuhan kapasitas jalur darat Anda pada esok hari.",
};

const cta2Data = {
  title: "Efisiensi tarif dasar dan ritase berkelanjutan.",
  description: "Tunggu apa lagi? Hubungi sales transportation CND Logistics hari ini.",
};

const testimonialData = {
  quote: "“Kelangkaan armada truk sering kali menjadi musibah besar, namun CND selalu berhasil mendapatkan ruang kendaraan yang sesuai. Armada selalu terawat dan sopirnya punya keahlian tinggi di rute panjang.”",
  name: "Ridho Firmansyah",
  role: "Logistics Manager Retail",
};

export default function TransportasiDaratPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
      <Header2 />
      <div id="wrapper" className="wrap">
        <Hero data={heroData} />
        <Brands />
        <Facts data={factsData} />
        <Features data={featuresData} />
        <Cta data={ctaData} />
        <Testimonials data={testimonialData} />
        <Cta2 data={cta2Data} />
      </div>
      <Footer2 />
    </div>
  );
}
