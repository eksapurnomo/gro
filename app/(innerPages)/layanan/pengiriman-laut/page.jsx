import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

// Import komponen-komponen template dari home-5
import Brands from "@/components/common/Brands";
import Cta from "@/components/homes/home-5/Cta";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import Howworks from "@/components/homes/home-5/Howworks";
import Testimonials from "@/components/homes/home-5/Testimonials";

export const metadata = {
  title: "Pengiriman Laut — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Layanan pengiriman melalui jalur laut dengan kapasitas besar dan biaya yang optimal. Solusi logistik kompetitif untuk bisnis Anda.",
};

export default function PengirimanLautPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          
          <div
            id="companies_sponsores"
            className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      Ratusan mitra dan perusahaan mempercayakan kebutuhan logistik kargo laut mereka kepada kami
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Cta />
          <Howworks />
          <Testimonials />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
