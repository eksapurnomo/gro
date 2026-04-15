"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const translations = {
  // === NAVIGATION ===
  nav: {
    company: { id: "Perusahaan", en: "Company" },
    services: { id: "Layanan", en: "Services" },
    partner: { id: "Bermitra", en: "Partner" },
    blog: { id: "Blog", en: "Blog" },
    contact: { id: "Kontak", en: "Contact" },
    getQuote: { id: "Penawaran", en: "Get Quote" },
    // Dropdown labels
    shippingServices: { id: "Pengiriman Barang", en: "Shipping Services" },
    serviceCategories: { id: "Kategori Layanan", en: "Service Categories" },
    getOfferNow: { id: "Minta Penawaran Sekarang →", en: "Request a Quote Now →" },
    partnerWithCnd: { id: "🤝 Bermitra dengan CND Logistic", en: "🤝 Partner with CND Logistic" },
    partnerDesc: { id: "Jadikan CND Logistic mitra logistik utama bisnis Anda.", en: "Make CND Logistic your primary logistics partner." },
    learnPartner: { id: "Pelajari Program Mitra →", en: "Learn Partner Program →" },
    // Service items
    freightForwarder: { id: "Freight Forwarder", en: "Freight Forwarder" },
    freightForwarderDesc: { id: "Koordinasi logistik end-to-end, kepabeanan & dokumen", en: "End-to-end logistics coordination, customs & documentation" },
    container: { id: "Pengiriman Container", en: "Container Shipping" },
    containerDesc: { id: "Container FCL & LCL antar pulau & internasional", en: "FCL & LCL containers inter-island & international" },
    ekspedisi: { id: "Ekspedisi Nasional", en: "National Expedition" },
    ekspedisiDesc: { id: "Pengiriman reguler & express ke seluruh Indonesia", en: "Regular & express delivery across Indonesia" },
    trucking: { id: "Trucking Nasional", en: "National Trucking" },
    truckingDesc: { id: "Armada truk box, tronton & trailer antar kota", en: "Box trucks, multi-axle & trailer fleet between cities" },
    domestic: { id: "Domestik", en: "Domestic" },
    domesticDesc: { id: "Pengiriman container (FCL/LCL) antar pulau seluruh Indonesia", en: "Container (FCL/LCL) inter-island throughout Indonesia" },
    export: { id: "Ekspor", en: "Export" },
    exportDesc: { id: "Door-to-Port FCL — ekspor barang ke luar negeri", en: "Door-to-Port FCL — export goods overseas" },
    import: { id: "Impor", en: "Import" },
    importDesc: { id: "Port-to-Door FCL — impor barang dari luar negeri", en: "Port-to-Door FCL — import goods from abroad" },
  },
  // === HERO (Home) ===
  hero: {
    tagline: { id: "Pengiriman dalam dan luar Negri, Container Handling, Layanan Trucking, Area kerja Jakarta, Surabaya, Semarang, dan Pontianak.", en: "Domestic and international shipping, Container Handling, Trucking Services. Operating in Jakarta, Surabaya, Semarang, and Pontianak." },
    ctaPrimary: { id: "Minta Penawaran", en: "Request a Quote" },
    ctaSecondary: { id: "Untuk Informasi dan kerja sama.", en: "For information and partnership." },
  },
  // === CTA ===
  cta: {
    title: { id: "Siap Mengoptimalkan Logistik Bisnis Anda?", en: "Ready to Optimize Your Business Logistics?" },
    subtitle: { id: "Hubungi tim CND Logistic sekarang dan dapatkan solusi pengiriman terbaik untuk kebutuhan Anda.", en: "Contact CND Logistic now and get the best shipping solution for your needs." },
    button: { id: "Dapatkan Penawaran", en: "Get a Quote" },
    whatsapp: { id: "Tanya Agen CND", en: "Chat with CND Agent" },
  },
  // === COMMON ===
  common: {
    contactUs: { id: "Kontak Kami", en: "Contact Us" },
    learnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
    getQuote: { id: "Dapatkan Penawaran", en: "Get a Quote" },
    askAgent: { id: "Tanya Agen CND", en: "Ask CND Agent" },
    consultWhatsapp: { id: "Konsultasi / Hubungi WhatsApp", en: "Consult / Contact WhatsApp" },
    viewAllServices: { id: "Lihat semua layanan", en: "View all services" },
    fastResponse: { id: "Respons Cepat (Office Hours)", en: "Fast Response (Office Hours)" },
  },
};

export function t(key, lang = "id") {
  const keys = key.split(".");
  let value = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return value?.[lang] || value?.["id"] || key;
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    const saved = localStorage.getItem("cnd_lang");
    if (saved === "en" || saved === "id") {
      setLang(saved);
    }
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("cnd_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
