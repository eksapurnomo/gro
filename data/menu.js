// ============================================================
// Menu Data - CND Logistic (PT Cahaya Nusantara Dunia)
// ============================================================

// Mobile menu items
export const menuItems = [
  { id: 1, href: "/", label: "Beranda" },
  { id: 2, href: "/perusahaan", label: "Perusahaan" },
  {
    id: 3,
    label: "Layanan",
    subItems: [
      {
        label: "Pengiriman Barang",
        subItems: [
          { href: "/layanan/freight-forwarder", label: "Freight Forwarder" },
          { href: "/layanan/pengiriman-container", label: "Pengiriman Container" },
          { href: "/layanan/ekspedisi", label: "Ekspedisi" },
          { href: "/layanan/trucking-nasional", label: "Trucking Nasional" },
        ],
      },
      {
        label: "Kategori Layanan",
        subItems: [
          { href: "/layanan/domestik", label: "Domestik" },
          { href: "/layanan/ekspor", label: "Ekspor" },
          { href: "/layanan/impor", label: "Impor" },
        ],
      },
    ],
  },
  { id: 4, href: "/bermitra", label: "Bermitra" },
  { id: 5, href: "/page-about", label: "Kegiatan" },
  { id: 6, href: "/page-contact", label: "Kontak" },
];

// Social icons for mobile menu
export const icons = [
  { href: "#", iconClass: "unicon-logo-linkedin icon-2" },
  { href: "#", iconClass: "unicon-logo-instagram icon-2" },
  { href: "#", iconClass: "unicon-logo-facebook icon-2" },
  { href: "#", iconClass: "unicon-logo-youtube icon-2" },
];

// Used by desktop Nav "More" dropdown — kept minimal for CND
export const pagesData = [
  {
    id: 1,
    header: "Info Lainnya",
    items: [
      { href: "/page-terms", label: "Syarat & Ketentuan" },
      { href: "/page-privacy", label: "Kebijakan Privasi" },
      { href: "/blog", label: "Blog / Artikel" },
      { href: "/page-career", label: "Karir" },
    ],
  },
];

export const navItems = [
  { href: "#overview", label: "Overview", active: true },
  { href: "#features", label: "Fitur" },
  { href: "#how_it_works", label: "Cara Kerja" },
  { href: "#pricing", label: "Harga" },
  { href: "#clients_feedback", label: "Testimoni" },
];

export const othermenuItems = [
  { href: "/page-career", icon: "unicon-wikis", title: "Karir" },
  { href: "/page-contact", icon: "unicon-wikis", title: "Kontak" },
  { href: "/blog", icon: "unicon-course", title: "Blog" },
  { href: "/layanan/freight-forwarder", icon: "unicon-wikis", title: "Freight Forwarder" },
  { href: "/layanan/pengiriman-container", icon: "unicon-wikis", title: "Pengiriman Container" },
  { href: "/layanan/ekspedisi", icon: "unicon-wikis", title: "Ekspedisi" },
  { href: "/layanan/trucking-nasional", icon: "unicon-wikis", title: "Trucking Nasional" },
];

export const mainPages = [
  { href: "/", alt: "Beranda", src: "/assets/images/demos/screenshots/index.jpg", title: "Beranda" },
  { href: "/perusahaan", alt: "Perusahaan", src: "/assets/images/demos/screenshots/page-about.jpg", title: "Perusahaan" },
  { href: "/layanan", alt: "Layanan", src: "/assets/images/demos/screenshots/page-features.jpg", title: "Layanan" },
  { href: "/page-contact", alt: "Kontak", src: "/assets/images/demos/screenshots/page-contact.jpg", title: "Kontak" },
];

export const homeLinks = [
  { id: 1, href: "/", imgAlt: "Beranda", imgSrc: "/assets/images/demos/screenshots/index.jpg", label: "Beranda" },
];

export const links = [
  { id: 1, href: "/page-career", label: "Karir", isInternal: true },
  { id: 2, href: "/blog", label: "Blog", isInternal: true },
  { id: 3, href: "/page-contact", label: "Kontak", isInternal: true },
  { id: 4, href: "/perusahaan", label: "Tentang Kami", isInternal: true },
];

export const featurePageLinks = [
  {
    title: "Layanan Utama",
    icon: "unicon-cube",
    items: [
      { icon: "icon-01.svg", title: "Freight Forwarder", description: "Layanan pengurusan transportasi barang" },
      { icon: "icon-02.svg", title: "Pengiriman Container", description: "Pengiriman FCL & LCL andal" },
    ],
    viewAllText: "Lihat semua layanan",
  },
  {
    title: "Layanan Ekspedisi",
    icon: "unicon-gamification",
    items: [
      { icon: "icon-04.svg", title: "Ekspedisi", description: "Pengiriman reguler & cepat" },
      { icon: "icon-05.svg", title: "Trucking Nasional", description: "Jaringan armada darat terpadu" },
    ],
    viewAllText: "Lihat semua layanan",
  },
];

// Fallback untuk bypass error Next.js static build dari template lama
export const sections4 = [];
export const features = [];
export const sections = [];
export const sections2 = [];
export const sections3 = [];
export const categories = [];
