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
  title: "Pengiriman Domestik — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Pengiriman domestik yang cepat dan tepat waktu untuk bisnis Anda, dengan jangkauan luas di seluruh wilayah Nusantara.",
};

export default function PengirimanDomestikPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        {/* Navigasi sama seperti hal layanan lain */}
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Brands />
          <Facts />
          <Features />
          <Cta />
          <Testimonials />
          <Cta2 />
        </div>
        {/* Footer sama seperti hal layanan lain */}
        <Footer2 />
      </div>
    </>
  );
}
