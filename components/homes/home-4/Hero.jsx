"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ data }) {
  const content = data || {
    title: (
      <>
        Layanan Logistik <br />
        <span className="text-primary dark:text-secondary">
          Domestik Terpadu
        </span>
        <br />untuk Bisnis Anda.
      </>
    ),
    desc: "Jangkauan pengiriman darat, laut, dan udara ke seluruh penjuru Nusantara. Solusi distribusi barang secara efektif sesuai dengan ketepatan waktu operasional Anda.",
    footer: "Menyediakan pilihan *Full Truckload (FTL)* maupun *Less than Truckload (LTL)*.",
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-8">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2">
                    {content.title}
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    {content.desc}
                  </p>
                  <div className="hstack gap-2 mt-4 sm:mt-5">
                    <Link
                      href={`/page-contact`}
                      className="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white"
                    >
                      Dapatkan Penawaran
                    </Link>
                    <Link
                      href="https://wa.me/6289602733848"
                      className="btn btn-md bg-white border border-gray-900 border-opacity-20 rounded-default h-48px w-100 lg:min-w-150px text-dark dark:bg-gray-800 dark:text-white"
                      target="_blank"
                    >
                      Hubungi Agen
                    </Link>
                  </div>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 mt-2">
                    {content.footer}
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="hero-mockup"
                    src="/assets/images/template/hero-mockup.png"
                    width="1492"
                    height="1250"
                  />
                  <Image
                    className="ltr:d-none rtl:d-block"
                    alt="hero-mockup-rtl"
                    src="/assets/images/template/hero-mockup-rtl.png"
                    width="1492"
                    height="1250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
