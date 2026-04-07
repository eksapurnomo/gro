"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Hero({ data }) {
  const d = data || {
    title: (
      <>
        Solusi Pengiriman Udara yang <br className="d-none lg:d-block" />
        Terukur, Transparan, dan Andal
      </>
    ),
    description: (
      <>
        Layanan pengiriman barang melalui udara kami dirancang untuk menjawab 
        <br className="d-none sm:d-block" />
        kebutuhan pengiriman yang menuntut kecepatan dan ketepatan waktu.
      </>
    ),
    btn1: "Konsultasi Sekarang",
    btn2: "Hubungi Agen CND",
    footerText: "Berpengalaman melayani berbagai industri.",
    imageSrc: "/assets/images/template/dashboard.jpg"
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-600px lg:h-screen bg-secondary dark:bg-gray-800 z-0" />

      <div className="section-outer panel pb-10 pt-9 lg:py-10">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 sm:h2 lg:h1 m-0">
                {d.title}
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                {d.description}
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column fdr">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  {d.btn1}
                </Link>
                <Link
                  href="https://wa.me/6289602733848"
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                  target="_blank"
                >
                  {d.btn2}
                </Link>
              </div>
              <p className="text-dark dark:text-white text-opacity-70 sm:mt-1 lg:mt-0">
                {d.footerText}
              </p>
            </div>
            <div
              className="hero-scene panel max-w-950px mx-auto"
              data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              <div className="panel text-center overflow-hidden rounded-3 border border-5 border-dark dark:border-white dark:border-opacity-20">
                <Image
                  alt="Main hero image"
                  src={d.imageSrc}
                  width="1440"
                  height="1024"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
