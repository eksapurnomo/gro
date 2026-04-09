"use client";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">
            <div
              className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Dapatkan Penawaran <br />
                Terbaik Hari Ini
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                Hubungi tim kami dan dapatkan solusi pengiriman terbaik untuk bisnis Anda.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2"
              >
                <div>
                  <input
                    className="form-control h-48px lg:h-56px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                    type="email"
                    placeholder="Email perusahaan Anda"
                    required
                  />
                </div>
                <div className="col-12 sm:col-auto">
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                  >
                    Dapatkan Penawaran
                  </Link>
                </div>
              </form>
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                Respons cepat dari tim logistik kami.
              </p>
            </div>
          </div>
          <hr className="w-100 m-0" />
        </div>
      </div>
    </div>
  );
}
