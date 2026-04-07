import React from "react";
import Image from "next/image";

const logisticsFeatures = [
  {
    step: "01.",
    title: "Perencanaan Rute & Penjemputan",
    description: "Kami menganalisis kebutuhan pengiriman Anda untuk menentukan rute udara paling efisien, disusul dengan penjemputan barang tepat waktu dari lokasi Anda.",
    imgSrc: "/assets/images/template/feature-01.png",
    altText: "Perencanaan rute logistik",
    testimonial: {
      quote: "Sistem penjadwalan mereka sangat andal. Penjemputan tidak pernah terlambat dari waktu yang dijanjikan.",
      imgSrc: "/assets/images/avatars/02.png",
      name: "Sinta Wijaya",
      role: "Manajer Supply Chain",
    },
  },
  {
    step: "02.",
    title: "Customs Clearance & Handling",
    description: "Tim ahli kami menangani seluruh proses dokumentasi, perizinan, dan bea cukai untuk memastikan kargo udara Anda dapat melewati batas negara tanpa masalah.",
    imgSrc: "/assets/images/template/feature-02.png",
    altText: "Proses customs clearance & handling",
    testimonial: {
      quote: "Bantuan dokumen dari CND membuat proses ekspor produk kami yang tadinya rumit menjadi sangat sederhana.",
      imgSrc: "/assets/images/avatars/03.png",
      name: "Andi Hermawan",
      role: "CEO, TechLog Nusantara",
    },
  },
  {
    step: "03.",
    title: "Pemantauan Udara Real-time",
    description: "Nikmati transparansi penuh atas kargo Anda. Lacak posisi penerbangan dan estimasi waktu ketibaan dengan sistem tracking terpadu kami.",
    imgSrc: "/assets/images/template/feature-03.png",
    altText: "Pemantauan penerbangan logistik udara",
    testimonial: {
      quote: "Fitur lacak kargo ini memberi kami kedamaian pikiran. Kami selalu tahu di mana posisi barang penting kami.",
      imgSrc: "/assets/images/avatars/01.png",
      name: "Budi Santoso",
      role: "Direktur Ekspor",
    },
  },
];

export default function Features({ data }) {
  const features = data?.features || logisticsFeatures;

  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    className="feature-item panel"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="col-12 sm:col-6 order-0 lg:order-1">
                        <div className="panel w-100">
                          <Image
                            src={feature.imgSrc}
                            width={780}
                            height={728}
                            alt={feature.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="col-12 sm:col-6 order-1 lg:order-0">
                        <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-primary">
                                {feature.step}
                              </span>
                              <h3 className="h4 lg:h3 xl:h2 m-0">
                                {feature.title}
                              </h3>
                              <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {feature.link && (
                                <a
                                  href={feature.link.href}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{feature.link.text}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="p-3 panel vstack gap-3 rounded border">
                              <p className="fs-6 dark:text-white">
                                {feature.testimonial.quote}
                              </p>
                              <div className="panel hstack gap-1">
                                <Image
                                  className="w-40px rounded-circle"
                                  src={feature.testimonial.imgSrc}
                                  width={150}
                                  height={150}
                                  alt={feature.testimonial.name}
                                />
                                <div className="panel vstack items-start gap-0">
                                  <h6 className="h6 m-0">
                                    {feature.testimonial.name}
                                  </h6>
                                  <span className="fs-7 opacity-70">
                                    {feature.testimonial.role}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== features.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
