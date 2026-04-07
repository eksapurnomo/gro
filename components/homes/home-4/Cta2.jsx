"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";

export default function Cta2({ data }) {
  const content = data || {
    title: "Solusi logistik darat transparan dan terjangkau.",
    description: "Diskusikan kebutuhan rute distribusi Anda bersama tim operasional kami sekarang juga.",
  };

  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel pt-4 sm:pt-6 xl:pt-9">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-narrow max-w-400px lg:max-w-700px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 lg:h3 m-0">
                {content.title}
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                {content.description}
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-2 lg:mt-4 fdr">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                >
                  Mulai Pengiriman
                </Link>
                <Link
                  href={`https://wa.me/6289602733848`}
                  className="btn btn-md bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs"
                  target="_blank"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
