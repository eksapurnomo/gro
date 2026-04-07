import React from "react";
import Image from "next/image";

export default function Testimonials({ data }) {
  const customData = data || {
    quote: "“Pengiriman laut CND sangat efisien untuk distribusi material curah kami. Estimasi waktu kedatangannya selalu akurat, dan laporan pelacakannya membuat tim operasional kami tenang melihat pergerakan kargo antar benua.”",
    name: "Reza Pahlevi",
    role: "Direktur Operasional, PT Logistik Internasional"
  };

  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                <div>
                  <div className="panel vstack justify-center gap-3 rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 overflow-hidden text-center">
                    <div className="panel vstack justify-center gap-3 px-3 py-4 lg:px-5 lg:py-6">
                      <div className="panel vstack items-center gap-2">
                        <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white lg:px-6">
                          {customData.quote}
                        </p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-center gap-0 lg:gap-1">
                          <h6 className="h6 lg:h5 m-0">{customData.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {customData.role}
                          </span>
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
