import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Brands from "@/components/homes/home-9/Brands";
import Features from "@/components/homes/home-9/Features";
import Hero from "@/components/homes/home-9/Hero";
import Process from "@/components/homes/home-9/Process";
import Solutions from "@/components/homes/home-9/Solutions";
import Testimonials from "@/components/homes/home-9/Testimonials";

export const metadata = {
  title: "Layanan Proyek (Project Logistics) — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Layanan logistik terintegrasi untuk menangani kargo berat dan proyek pengiriman skala besar secara profesional.",
};

export default function LayananProyekPage() {
  return (
    <>
      <div className="theme-5">
        <div className="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-tertiary-800 text-tertiary-200 overflow-x-hidden disable-cursor uc-dark">
          {/* Header 2 standard CND */}
          <Header2 />
          
          <div id="wrapper" className="wrap mt-5 lg:mt-9">
            <Hero />
            <Process />
            <Brands />
            <Features />
            <Solutions />
            <Testimonials />
          </div>

          <Footer2 />
        </div>
      </div>
    </>
  );
}
