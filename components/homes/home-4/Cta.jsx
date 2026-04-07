"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";
export default function Cta({ data }) {
  const content = data || {
    title: "Armada Terbaik untuk Logistik Anda",
    description: "Penuhi tenggat waktu krusial bisnis Anda dengan mitra logistik yang andal dan terpercaya. Layanan truk LTL & FTL CND siap melayani.",
  };

  return (
    <div id="pre_cta" className="pre-cta section panel overflow-hidden">
      <div className="section-outer panel pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel p-4 md:p-6 lg:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
            data-anime="onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
          >
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0">{content.title}</h2>
              <p className="fs-6 md:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                {content.description}
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                >
                  Dapatkan Penawaran
                </Link>
                <Link
                  href={`https://wa.me/6289602733848`}
                  className="btn btn-md bg-white text-dark border-gray-900 border-opacity-20 hover:border-opacity-40"
                  target="_blank"
                >
                  Hubungi Agen CND
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
