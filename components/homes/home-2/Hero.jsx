"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary dark:bg-gray-900">

        <div className="container max-w-xl">
          <div className="section-inner panel py-4">
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0">
              <div className="col-12 sm:col-9 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <span className="fs-6 fw-bold text-primary dark:text-secondary">
                    PT. Cahaya Nusantara Dunia
                  </span>
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2">
                    Partner Terpercaya untuk Distribusi Bisnis Anda.
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Pengiriman dalam dan luar Negri, Container Handling, Layanan Trucking, Area kerja Jakarta, Surabaya, Semarang, dan Pontianak.
                  </p>
                  <div className="mt-2 sm:mt-4">
                    <Link
                      href={`/page-pricing`}
                      className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-200px btn-primary text-white"
                    >
                      Minta Penawaran
                    </Link>
                  </div>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    Untuk Informasi dan kerja sama.
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6 xl:col-7">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden">
                    <Image
                      className="d-block dark:d-none"
                      alt="Main hero image"
                      src="/assets/images/cnd/hero-main.png"
                      width="1280"
                      height="941"
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Main hero image"
                      src="/assets/images/cnd/hero-main.png"
                      width="1280"
                      height="942"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
                <div className="element-brands text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
