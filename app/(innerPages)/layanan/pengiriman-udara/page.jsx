import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

// Import komponen-komponen template dari home-3
import Hero from "@/components/homes/home-3/Hero";
import Brands2 from "@/components/homes/home-3/Brands";
import Features from "@/components/homes/home-3/Features";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Brands3 from "@/components/common/Brands2";
import Cta from "@/components/homes/home-3/Cta";

export const metadata = {
  title: "Pengiriman Udara — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Layanan pengiriman barang via udara yang cepat, aman, dan andal. Ideal untuk pengiriman internasional dan barang dengan waktu sensitif.",
};

export default function PengirimanUdaraPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        {/* Navigasi tetap sama seperti innerPages standar (Header2) */}
        <Header2 />
        
        <div id="wrapper" className="wrap">
          {/* Menggunakan rentetan komponen dari template home-3 */}
          <Hero />
          <Brands2 />
          <Features />
          <KeyFeatures />
          <Testimonials />
          
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Klien dan Mitra yang Mempercayai Kami
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands3 />
                </div>
              </div>
            </div>
          </div>
          
          <Cta />
        </div>

        {/* Footer dari template standar / innerPages */}
        <Footer2 />
      </div>
    </>
  );
}
