"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero({ data }) {
  const title = data?.title || (
    <>
      Pengiriman Laut yang <br className="d-none lg:d-block" />
      <strong>Andal & Efisien</strong>
    </>
  );
  const description = data?.description || (
    <>
      Kapasitas Besar, Biaya Lebih Kompetitif. <br className="d-none lg:d-block" />
      Solusi logistik jalur laut kami dirancang khusus untuk mengoptimalkan pengiriman kargo dalam skala besar secara aman ke seluruh dunia.
    </>
  );
  const note = data?.note || "Layanan *FCL (Full Container Load)* dan *LCL (Less than Container Load)* tersedia.";
  const imageSrc = data?.imageSrc || "/assets/images/template/hero-05.jpg";

  return (
    <div
      id="hero_header"
      className="hero-header hero-five-scene section panel overflow-hidden"
    >
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
              <div className="sm:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h3 sm:h2 xl:h1 fw-light mb-1 xl:mb-2">
                    {title}
                  </h1>
                  <p className="fs-6 xl:fs-5">
                    {description}
                  </p>
                  <div className="vstack gap-1 mt-2 xl:mt-4">
                    <div className="hstack gap-2 mt-1">
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
                          Tanya Agen CND
                        </Link>
                    </div>
                    <p className="fs-7 text-dark dark:text-white text-opacity-70 mt-2">
                      {note}
                    </p>

                  </div>
                  <div className="vstack md:hstack justify-center lg:justify-start gap-2 mt-2 xl:mt-4 fdr">
                    <div className="hstack justify-center gap-0">
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900"
                        src="/assets/images/avatars/02.jpg"
                        width="96"
                        height="96"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/05.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/02.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/01.jpg"
                        width="96"
                        height="96"
                      />
                    </div>
                    <div className="panel ">
                      <ul className="nav-x justify-center md:justify-start gap-0">
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <span className="fs-8 fw-medium ms-narrow">5.0</span>
                        </li>
                      </ul>
                      <span className="fs-7 fw-medium">
                        Based on 200+ reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-auto">
                <div
                  className="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="image"
                      src={imageSrc}
                      width="1184"
                      height="1280"
                    />
                  </figure>
                  <div
                    className="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-350px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "20%" }}
                  >
                    <Image
                      alt="Countries"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [-100, 0];"
                      src="/assets/images/cnd/widget-map.png"
                      width="710"
                      height="854"
                    />
                  </div>
                  <div
                    className="hero-five-account position-absolute sm:w-250px lg:w-200px xl:w-300px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ bottom: "20%" }}
                  >
                    <Image
                      alt="Account"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [100, 0];"
                      src="/assets/images/cnd/widget-account.png"
                      width="605"
                      height="274"
                    />
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
