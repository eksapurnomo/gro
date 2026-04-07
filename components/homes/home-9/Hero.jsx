import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer py-6 lg:py-8 xl:py-10 min-h-700px">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="position-cover bg-gradient-to-b from-white dark:from-tertiary-700 via-transparent to-white dark:to-tertiary-800" />
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0 mt-6"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                Manajemen Logistik Proyek
              </span>
              <h2
                className="h2 xl:display-5 m-0 text-center"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Penanganan Kargo Skala Besar untuk{" "}
                <span
                  className="text-tertiary dark:text-primary"
                  data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                >
                  <TyperComponent
                    strings={[
                      "pembangunan infrastruktur",
                      "site site energi & tambang",
                      "relokasi pabrik masif",
                    ]}
                  />
                </span>
                <span className="typed-cursor" aria-hidden="true">
                  |
                </span>
              </h2>

              <p className="fs-5 lg:fs-4">
                Tim spesialis kami berdedikasi menyusun perencanaan rute tersulit yang dapat dibayangkan untuk suksesnya proyek Anda.
              </p>
              <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                <div className="mb-2 lg:mb-3">
                  <Link
                    href={`/page-contact`}
                    className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Konsultasikan Proyek Anda</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
