import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/homes/home-5/Hero";
import Features from "@/components/homes/home-5/Features";
import Howworks from "@/components/homes/home-5/Howworks";
import Testimonials from "@/components/homes/home-5/Testimonials";
import Cta from "@/components/homes/home-5/Cta";

export const metadata = {
  title: "Pergudangan (Warehouse) — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Solusi pergudangan yang aman, terorganisir, dan efisien untuk manajemen rantai pasok (supply chain) bisnis Anda.",
};

const heroData = {
  title: (
    <>
      Pergudangan yang <br className="d-none lg:d-block" />
      <strong>Aman & Andal</strong>
    </>
  ),
  description: (
    <>Fasilitas integrasi warehouse storage modern untuk manajemen stok, distribusi, dan efisiensi ruang produksi perusahaan Anda.</>
  ),
  note: "Layanan penyimpanan jangka panjang & transit tersedia.",
  imageSrc: "/assets/images/template/hero-05.jpg", // Dapat diubah jika ada gambar spesifik warehouse
};

const featuresData = {
  badge: "Layanan Gudang",
  title: "Pusat Penyimpanan Berstandar Tinggi",
  description: "Mengoptimalkan distribusi rantai pasok dengan mengurangi biaya operasional penyimpanan in-house Anda.",
  features: [
    {
      order: "order-1",
      iconSrc: "/assets/images/common/icons/shield.svg",
      title: "Pengawasan Keamanan",
      description: "Keamanan 24/7 dan proteksi maksimum dari cuaca dan risiko lingkungan.",
    },
    {
      order: "order-2",
      iconSrc: "/assets/images/common/icons/settings.svg",
      title: "Warehouse Management",
      description: "Sistem inventarisasi digital yang menjamin akurasi stok barang secara real-time.",
    },
    {
      order: "order-3",
      iconSrc: "/assets/images/common/icons/globe.svg",
      title: "Ruang Lebih Fleksibel",
      description: "Penyewaan rak dan luasan palet yang disesuaikan dengan volume logistik Anda.",
    },
  ]
};

const howworksData = {
  image1: "/assets/images/template/feature-image-01.jpg", 
  image2: "/assets/images/template/feature-image-02.jpg",
  block1: {
    title: "Ruang Penyimpanan Terdedikasi",
    description: "Area luas yang dapat disesuaikan dengan jenis logistik, disertai pengarsipan dan racking system yang sangat tertata."
  },
  block2: {
    title: "Distribusi Terintegrasi",
    description: "Lebih dari sekadar gudang, kami menyambungkannya langsung dengan manajemen kendaaran operasional CND.",
    features: [
      {
        icon: "/assets/images/common/icons/database.svg",
        title: "Pemrosesan Order Instan",
        desc: "Barang keluar otomatis tersortir sesuai rute distribusi secara terpusat."
      },
      {
        icon: "/assets/images/common/icons/line-chart.svg",
        title: "Koneksi Armada",
        desc: "Akses pemuatan langsung dari gudang ke bak truk harian CND secara efisien."
      }
    ]
  }
};

const testimonialData = {
  quote: "“Manajemen pergudangan (Warehouse) dari CND sangat membantu mengurangi penumpukan stok material. Saat ada orderan prioritas, ritase keluar kargo selayaknya sistem otomatis yang super cepat.”",
  name: "Citra Dewi",
  role: "Sales & Distribution Manager"
};

const ctaData = {
  title: "Amankan Stok Inventaris Anda Hari Ini",
  description: "Kurangi kelebihan kapasitas di pabrik Anda dengan menggunakan lini pergudangan kami yang mutakhir.",
};

export default function PergudanganPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
      <Header2 />
      <div id="wrapper" className="wrap">
        <Hero data={heroData} />
        <Features data={featuresData} />
        <Howworks data={howworksData} />
        <Testimonials data={testimonialData} />
        <Cta data={ctaData} />
      </div>
      <Footer2 />
    </div>
  );
}
