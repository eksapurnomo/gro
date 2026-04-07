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
  title: "Pengiriman Internasional — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Pengiriman internasional yang efisien dan tepat waktu untuk bisnis ekspor/impor Anda dengan jangkauan global.",
};

const heroData = {
  title: (
    <>
      Pengiriman <br />
      <span className="text-primary dark:text-secondary">
        Internasional
      </span>
      <br />Ke Seluruh Dunia.
    </>
  ),
  desc: "Layanan logistik global yang aman dan efisien untuk ekspor/impor barang Anda lintas negara dan benua secara mulus.",
  footer: "Bermitra dengan jaringan freight forwarder bersertifikasi di seluruh dunia.",
};

const factsData = {
  title: "Akses Global Tanpa Batas",
  description: "Terhubung ke pelabuhan dan bandara komersial utama dengan sistem pelacakan (tracking) internasional yang mutakhir.",
  facts: [
    { value: "100+", description: "Negara Tujuan" },
    { value: "Full", description: "Incoterms Support" },
    { value: "24/7", description: "Layanan Customs" },
  ]
};

const featuresData = {
  badge: "Layanan Internasional",
  title: "Solusi Ekspor & Impor Terbaik",
  description: "Kami mendampingi proses logistik lintas negara perusahaan Anda, mulai dari bongkar muat hingga memastikan perizinan bea cukai terpenuhi.",
  items: [
    {
      imageSrc: "/assets/images/template/feature-image-01.jpg",
      icon: "unicon-ship",
      title: "Logistik Kargo Internasional",
      description: "Pengiriman barang melalui mitra kapal laut (Sea Freight) maupun maskapai udara (Air Freight) dengan rute paling hemat biaya dan waktu.",
      reverseOrder: false,
    },
    {
      imageSrc: "/assets/images/template/feature-image-02.jpg",
      icon: "unicon-document",
      title: "Urusan Kepabeanan (Customs)",
      description: "Anda tidak perlu pusing memikirkan dokumen ekspor-impor. Tim kami bertugas membereskan clearance bea cukai di negara asal maupun tujuan.",
      reverseOrder: true,
    },
  ]
};

const ctaData = {
  title: "Wujudkan Ekspansi Bisnis Global",
  description: "Jangkau pasar di luar negeri lebih mudah dengan bantuan tim konsultan pengiriman internasional kami.",
};

const cta2Data = {
  title: "Jangan biarkan regulasi pengiriman menghambat Anda.",
  description: "Percayakan seluruh alur distribusi internasional Anda kepada CND Logistics hari ini.",
};

const testimonialData = {
  quote: "“Kompleksitas ekspor produk manufaktur kami ke Asia Timur sangat tinggi, tapi sejak bekerja sama dengan CND, semua proses perizinan dan tracking kargo jauh lebih terkontrol dan sangat transparan.”",
  name: "Budi Santoso",
  role: "Direktur Ekspor, PT Manufaktur Global",
};

export default function PengirimanInternasionalPage() {
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
