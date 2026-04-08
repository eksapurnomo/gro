import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";

export default function Howworks({ data }) {
  const customData = data || {
    image1: "/assets/images/template/feature-image-03.jpg",
    image2: "/assets/images/template/feature-image-01.jpg",
    block1: {
      title: "Manajemen Proyek & Pemantauan Kargo",
      description: "Tim operasional kami memastikan armada pengiriman Anda terjadwal dengan rapi, mulai dari lokasi asal hingga pelabuhan bongkar muat."
    },
    block2: {
      title: "Manajemen Konsolidasi Barang Terpadu",
      description: "Melayani Full Container Load (FCL) untuk kapasitas penuh dan Less Container Load (LCL) untuk konsolidasi barang yang lebih efisien dari segi harga.",
      features: [
        {
          icon: "/assets/images/common/icons/database.svg",
          title: "Dokumen Ekspor-Impor",
          desc: "Penyelesaian izin bea cukai dan dokumen terkait."
        },
        {
          icon: "/assets/images/common/icons/line-chart.svg",
          title: "Lacak Kontainer",
          desc: "Visibilitas penuh untuk mengetahui posisi kargo Anda di seluruh pelabuhan."
        }
      ]
    }
  };

  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="row child-cols-12 col-match g-0">
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src={customData.image1}
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          {customData.block1.title}
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          {customData.block1.description}
                        </p>
                        <div className="panel w-100 mt-2 lg:mt-4">
                          {customData.block1.features ? (
                            <div className="row child-cols-12 lg:child-cols-6 g-4 mt-4">
                              {customData.block1.features.map((feature, i) => (
                                <div key={i}>
                                  <div className="panel vstack items-start gap-2">
                                    <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                      <Image
                                        className="icon icon-1 text-white image-filter-white"
                                        alt="feature-icon"
                                        data-uc-svg=""
                                        src={feature.icon}
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div className="vstack gap-1 lg:gap-2">
                                      <h5 className="h5 lg:h4 m-0">
                                        {feature.title}
                                      </h5>
                                      <p className="fs-6">
                                        {feature.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul
                              className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                              data-uc-accordion="collapsible: false"
                              style={{ "--divider-gap": "40px" }}
                            >
                              <Accordion2 />
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div
                      className="lg:order-2"
                      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    >
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                        <Image
                          className="media-cover image"
                          alt="image title"
                          src={customData.image2}
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div
                      className="order-1"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          {customData.block2.title}
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          {customData.block2.description}
                        </p>
                        <div className="panel mt-2 lg:mt-4">
                          <div className="row child-cols-12 lg:child-cols-6 g-4">
                            {customData.block2.features.map((feature, i) => (
                              <div key={i}>
                                <div className="panel vstack items-start gap-2">
                                  <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                    <Image
                                      className="icon icon-1 text-white image-filter-white"
                                      alt="feature-icon"
                                      data-uc-svg=""
                                      src={feature.icon}
                                      width="24"
                                      height="24"
                                    />
                                  </div>
                                  <div className="vstack gap-1 lg:gap-2">
                                    <h5 className="h5 lg:h4 m-0">
                                      {feature.title}
                                    </h5>
                                    <p className="fs-6">
                                      {feature.desc}
                                    </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
