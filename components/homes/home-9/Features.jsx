import { features10 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 bg-secondary dark:bg-tertiary-700 dark:text-white dark:text-opacity-70 mx-2 border border-secondary dark:border-white dark:border-opacity-15 rounded-1-5 lg:rounded-2">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Layanan Utama
              </span>
              <h2 className="h3 lg:h1 m-0">
                Pendekatan Logistik Holistik untuk{" "}
                <span className="text-tertiary dark:text-primary">
                  Kelancaran Proyek Anda
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Kami merencanakan, mendanai, dan mengoperasikan setiap langkah pengiriman super besar (Out of Gauge/OOG) dan muatan khusus.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {[
                { title: "Heavy Lift & Over Dimensional", src: "/assets/images/template/feature-image-01.jpg", alt: "Heavy Lift", desc: "Penanganan mesin turbin, reaktor, atau alat berat konstruksi yang melebihi standar angkut." },
                { title: "Manajemen Material Konstruksi", src: "/assets/images/template/feature-image-02.jpg", alt: "Material", desc: "Integrasi jadwal (JIT) bagi suplai logistik ke lokasi kilang, tambang, atau pabrik secara berkesinambungan." }
              ].map((feature, index) => (
                <div key={index}>
                  <div className="panel vstack lg:hstack gap-2 p-2 overflow-hidden bg-secondary-300 text-gray-900 dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white rounded-2 lg:rounded-3 border border-dark dark:border-white dark:border-opacity-15">
                    <div className="panel lg:max-w-300px lg:min-w-300px">
                      <Image
                        className="rounded-1-5 border border-dark dark:border-white dark:border-opacity-15"
                        alt={feature.alt}
                        src={feature.src}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-2">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                      <p className="fs-6 text-opacity-80 m-0">{feature.desc}</p>
                      <Link
                        href="/page-contact"
                        className="btn btn-sm btn-primary border border-dark px-2 mt-2"
                      >
                        <span>Konsultasi Proyek</span>
                        <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="pre-cta vstack items-center gap-1 max-w-400px mx-auto text-center mt-6 xl:mt-10"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="mb-2 lg:mb-3">
                <Link
                  href={`/page-contact`}
                  className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                >
                  <span>Hubungi Tim Spesialis B2B Kami</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
