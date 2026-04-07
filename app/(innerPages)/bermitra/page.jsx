import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/homes/home-3/Hero";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import Cta from "@/components/homes/home-3/Cta";

export const metadata = {
  title: "Bermitra — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Bermitra dengan CND Logistics untuk solusi pengiriman barang, transportasi darat, dan pergudangan yang efisien.",
};

const heroData = {
  title: (
    <>
      Jalin Kemitraan Strategis Bersama <br className="d-none lg:d-block" />
      <span className="text-primary">CND Logistic</span>
    </>
  ),
  description: (
    <>
      Kirim barang ke seluruh Indonesia dengan jaringan logistik yang luas dan armada terpercaya.
      <br className="d-none sm:d-block" />
      Kami hadir untuk memberikan solusi terbaik bagi ekosistem bisnis Anda.
    </>
  ),
  btn1: "Minta Penawaran",
  btn2: "Konsultasi Kemitraan",
  footerText: "Tepat Waktu. Tanpa Khawatir. Keamanan Barang Terjaga.",
  imageSrc: "/assets/images/template/hero-08.jpg",
};

const featuresData = {
  title: (
    <>Mengapa Bermitra dengan <span className="text-primary">CND?</span></>
  ),
  features: [
    { icon: "unicon-earth", title: "Jangkauan Luas", description: "Kirim barang ke seluruh Indonesia dengan jaringan logistik ekstensif kami." },
    { icon: "unicon-time", title: "Tepat Waktu", description: "Pengiriman yang terjadwal dan presisi dengan sistem pelacakan real-time." },
    { icon: "unicon-shield-check", title: "Keamanan Terjamin", description: "Proteksi maksimal dengan sistem pendampingan keamanan terbaik." },
    { icon: "unicon-cube", title: "Layanan Lengkap", description: "Warehouse, distribusi, hingga pengiriman dalam satu pintu." },
    { icon: "unicon-handshake", title: "Fleksibilitas Tinggi", description: "Rangkaian layanan logistik yang beradaptasi mengikuti skala bisnis Anda." },
    { icon: "unicon-chart-pie", title: "Biaya Efisien", description: "Raih optimalisasi budget logistik dengan tarif kami yang sangat kompetitif." },
  ]
};

const ctaData = {
  title: (
    <>Berikan Akselerasi pada <br className="d-none sm:d-block"/><span className="text-primary">Rantai Pasok Anda.</span></>
  ),
  description: "Tim operasional dan ahli kami siap mendiskusikan peluang kemitraan cerdas.",
  btn1: "Kirim Pesan",
  btn2: "Chat via WhatsApp",
  footerText: "Mari tumbuh dan sukses bersama CND Logistics."
};

export default function BermitraPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
      <Header2 />
      <div id="wrapper" className="wrap">
        <Hero data={heroData} />
        <KeyFeatures data={featuresData} />
        <Cta data={ctaData} />
      </div>
      <Footer2 />
    </div>
  );
}
