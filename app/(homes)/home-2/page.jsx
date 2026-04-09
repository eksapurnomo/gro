import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";

import Cta from "@/components/homes/home-2/Cta";

import Features from "@/components/homes/home-2/Features";

import Hero from "@/components/homes/home-2/Hero";
import KeyFeatures from "@/components/homes/home-2/KeyFeatures";

import React from "react";
export const metadata = {
  title:
    "CND - PT.Cahaya Nusantara Dunia",
  description:
    "Layanan pengiriman via Container dan  Fullfilment Services.",
};
export default function HomePage2() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <KeyFeatures />




          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
