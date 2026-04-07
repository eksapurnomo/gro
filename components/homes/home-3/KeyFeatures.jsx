import React from "react";
import Link from "next/link";

const airFreightFeatures = [
  { icon: "unicon-rocket", title: "Pengiriman Ekspres", description: "Pengiriman door-to-door dalam waktu tercepat, termasuk pengiriman same-day." },
  { icon: "unicon-earth", title: "Jangkauan Global", description: "Koneksi ke ratusan destinasi internasional melalui jaringan mitra maskapai global." },
  { icon: "unicon-cube", title: "Penanganan Khusus", description: "Penanganan ahli untuk barang berharga, dokumen penting, dan kargo sensitif." },
  { icon: "unicon-location-pin-alt", title: "Pelacakan Real-time", description: "Pantau status pengiriman Anda secara real-time dari pick-up hingga tiba di tujuan." },
  { icon: "unicon-document", title: "Pengurusan Dokumen", description: "Bantuan ahli dalam pengurusan dokumen kepabeanan dan perizinan ekspor-impor." },
  { icon: "unicon-shield-check", title: "Asuransi Kargo", description: "Proteksi asuransi komprehensif untuk ketenangan pikiran selama proses pengiriman." },
];

export default function KeyFeatures({ data }) {
  const d = data || {
    title: (
       <>Keunggulan Layanan Pengiriman Udara <span className="text-primary"> CND.</span></>
    ),
    features: airFreightFeatures
  };

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-gray-900 uc-dark"
    >
      <div className="section-outer panel py-6 xl:py-9 dark:bg-gray-800">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                {d.title}
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {d.features.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-4 border rounded-2 hover:bg-white dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" />
                          <div className="vstack justify-between gap-2 h-100">
                            <i className={`icon icon-4 ${feature.icon}`} />
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/page-contact`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
