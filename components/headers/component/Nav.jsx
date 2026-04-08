"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const layananMenu = {
  pengirimanBarang: [
    { href: "/layanan/freight-forwarder", label: "Freight Forwarder", icon: "🌐", desc: "Layanan pengurusan transportasi barang" },
    { href: "/layanan/pengiriman-container", label: "Pengiriman Container", icon: "🚢", desc: "Pengiriman FCL & LCL andal" },
  ],
  others: [
    { href: "/layanan/ekspedisi", label: "Ekspedisi", icon: "📦", desc: "Pengiriman reguler & cepat" },
    { href: "/layanan/trucking-nasional", label: "Trucking Nasional", icon: "🚛", desc: "Jaringan armada darat terpadu" },
  ],
  kategori: [
    { href: "/layanan/domestik", label: "Domestik", icon: "🇮🇩", desc: "Pengiriman dari semua daerah di Indonesia dalam FCL (Full Container Load) atau LCL (Less Container Load)" },
    { href: "/layanan/ekspor", label: "Ekspor", icon: "🛳️", desc: "Kami menawar jasa pengurusan dokumen & pengiriman barang ekspor Door-To-Port FCL (Full Container Load)" },
    { href: "/layanan/impor", label: "Impor", icon: "🛬", desc: "Kami menawar jasa pengurusan dokumen & pengantaran barang impor Port-To-Door dalam FCL (Full Container Load)" }
  ],
};

export default function Nav() {
  const pathname = usePathname();
  const [showLayanan, setShowLayanan] = useState(false);

  const isLayananActive = pathname.startsWith("/layanan");

  return (
    <>
      <li>
        <Link href="/perusahaan">Perusahaan</Link>
      </li>

      {/* Layanan Dropdown */}
      <li
        className="has-dd-menu"
        onMouseEnter={() => setShowLayanan(true)}
        onMouseLeave={() => setShowLayanan(false)}
      >
        <a
          role="button"
          aria-haspopup="true"
          className={isLayananActive ? "menuActive" : ""}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
        >
          Layanan{" "}
          <span data-uc-navbar-parent-icon="" className="uc-icon uc-navbar-parent-icon">
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline fill="none" stroke="currentColor" strokeWidth="1.1" points="1 3.5 6 8.5 11 3.5" />
            </svg>
          </span>
        </a>

        <div
          className="uc-navbar-dropdown uc-drop"
          style={{ 
            minWidth: "900px", 
            padding: "8px 0", 
            backgroundColor: "#ffffff", 
            color: "#111827",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <div style={{ padding: "16px 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr", gap: "24px" }}>
            {/* Kolom Kiri: Pengiriman Barang */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  marginBottom: "12px",
                  paddingLeft: "4px",
                }}
              >
                Pengiriman Barang
              </p>
              <ul className="uc-nav uc-navbar-dropdown-nav" style={{ gap: "4px" }}>
                {layananMenu.pengirimanBarang.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "menuActive" : ""}
                      style={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        gap: "10px", 
                        padding: "8px 8px", 
                        borderRadius: "8px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "background-color 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <span style={{ fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: "13px", color: "#111827" }}>{item.label}</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#6b7280" }}>{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom Kanan: Layanan Lainnya */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  marginBottom: "12px",
                  paddingLeft: "4px",
                }}
              >
                Layanan Lainnya
              </p>
              <ul className="uc-nav uc-navbar-dropdown-nav" style={{ gap: "4px" }}>
                {layananMenu.others.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "menuActive" : ""}
                      style={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        gap: "10px", 
                        padding: "8px 8px", 
                        borderRadius: "8px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "background-color 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <span style={{ fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: "13px", color: "#111827" }}>{item.label}</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#6b7280" }}>{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA di dropdown */}
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <Link
                  href="/page-contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-primary, #2563eb)",
                    textDecoration: "none",
                  }}
                >
                  Minta Penawaran →
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Kategori */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  marginBottom: "12px",
                  paddingLeft: "4px",
                }}
              >
                Kategori Layanan
              </p>
              <ul className="uc-nav uc-navbar-dropdown-nav" style={{ gap: "4px" }}>
                {layananMenu.kategori.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "menuActive" : ""}
                      style={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        gap: "10px", 
                        padding: "8px 8px", 
                        borderRadius: "8px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "background-color 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <span style={{ fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: "13px", color: "#111827" }}>{item.label}</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#6b7280" }}>{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li>
        <Link href="/bermitra">Bermitra</Link>
      </li>
      <li>
        <Link href="/page-about">Kegiatan</Link>
      </li>
      <li>
        <Link href="/page-contact">Kontak</Link>
      </li>
    </>
  );
}
