"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Cta({ data }) {
  const d = data || {
    title: (
       <>Solusi logistik lengkap untuk{" "} <span className="text-primary">kebutuhan Anda.</span></>
    ),
    description: "Hubungi tim ahli kami untuk mendapatkan penawaran pengiriman udara terbaik.",
    btn1: "Minta Penawaran",
    btn2: "Konsultasi WhatsApp",
    footerText: "Kami siap memberikan solusi logistik paling andal kapan saja."
  };

  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9 bg-secondary dark:bg-gray-800">


        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                {d.title}
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                {d.description}
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column fdr">
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
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                {d.footerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
