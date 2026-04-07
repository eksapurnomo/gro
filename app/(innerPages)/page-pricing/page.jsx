import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import QuoteForm from "@/components/innerpages/QuoteForm";
import Brands from "@/components/common/Brands2";

export const metadata = {
  title: "Minta Penawaran (Quote) — CND Logistic | PT Cahaya Nusantara Dunia",
  description: "Request penawaran biaya logistik, pengiriman barang laut, udara, darat khusus untuk klien CND Logistics.",
};

export default function PricingPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        
        <div id="wrapper" className="wrap">
          <div className="pt-8"></div>
          
          <QuoteForm />
          
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Dipercaya oleh perusahaan besar sebagai mitra rantai pasok:
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <Footer2 />
      </div>
    </>
  );
}
