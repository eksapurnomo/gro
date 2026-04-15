"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/LanguageContext";

// Helper to get translation
function tr(obj, lang) {
  return obj?.[lang] || obj?.["id"] || "";
}

const menuLinkStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  padding: "8px 10px",
  borderRadius: "8px",
  color: "inherit",
  textDecoration: "none",
  transition: "background-color 0.2s",
};

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const nav = translations.nav;

  const isLayananActive = pathname.startsWith("/layanan");

  const pengirimanBarang = [
    { href: "/layanan/freight-forwarder", label: tr(nav.freightForwarder, lang), icon: "🌐", desc: tr(nav.freightForwarderDesc, lang) },
    { href: "/layanan/pengiriman-container", label: tr(nav.container, lang), icon: "🚢", desc: tr(nav.containerDesc, lang) },
    { href: "/layanan/ekspedisi", label: tr(nav.ekspedisi, lang), icon: "📦", desc: tr(nav.ekspedisiDesc, lang) },
    { href: "/layanan/trucking-nasional", label: tr(nav.trucking, lang), icon: "🚛", desc: tr(nav.truckingDesc, lang) },
  ];

  const kategori = [
    { href: "/layanan/domestik", label: tr(nav.domestic, lang), icon: "🇮🇩", desc: tr(nav.domesticDesc, lang) },
    { href: "/layanan/ekspor", label: tr(nav.export, lang), icon: "🛳️", desc: tr(nav.exportDesc, lang) },
    { href: "/layanan/impor", label: tr(nav.import, lang), icon: "🛬", desc: tr(nav.importDesc, lang) },
  ];

  return (
    <>
      <li>
        <Link href="/perusahaan">{tr(nav.company, lang)}</Link>
      </li>

      {/* Layanan Dropdown */}
      <li className="has-dd-menu">
        <a
          role="button"
          aria-haspopup="true"
          className={isLayananActive ? "menuActive" : ""}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
        >
          {tr(nav.services, lang)}{" "}
          <span data-uc-navbar-parent-icon="" className="uc-icon uc-navbar-parent-icon">
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline fill="none" stroke="currentColor" strokeWidth="1.1" points="1 3.5 6 8.5 11 3.5" />
            </svg>
          </span>
        </a>

        <div
          className="uc-navbar-dropdown uc-drop"
          style={{
            minWidth: "760px",
            padding: "8px 0",
            backgroundColor: "#ffffff",
            color: "#111827",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "32px" }}>

            {/* Kolom Kiri: Pengiriman Barang */}
            <div>
              <p style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "10px",
                paddingLeft: "10px",
              }}>
                {tr(nav.shippingServices, lang)}
              </p>
              <ul className="uc-nav uc-navbar-dropdown-nav" style={{ gap: "2px", listStyle: "none", padding: 0, margin: 0 }}>
                {pengirimanBarang.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "menuActive" : ""}
                      style={menuLinkStyle}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <span style={{ fontSize: "20px", lineHeight: 1.2, flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: "13px", color: "#111827", marginBottom: "2px" }}>{item.label}</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{ marginTop: "16px", paddingTop: "14px", paddingLeft: "10px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
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
                  {tr(nav.getOfferNow, lang)}
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Kategori Layanan */}
            <div style={{ borderLeft: "1px solid rgba(0,0,0,0.07)", paddingLeft: "32px" }}>
              <p style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "10px",
                paddingLeft: "10px",
              }}>
                {tr(nav.serviceCategories, lang)}
              </p>
              <ul className="uc-nav uc-navbar-dropdown-nav" style={{ gap: "2px", listStyle: "none", padding: 0, margin: 0 }}>
                {kategori.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? "menuActive" : ""}
                      style={menuLinkStyle}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <span style={{ fontSize: "20px", lineHeight: 1.2, flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 600, fontSize: "13px", color: "#111827", marginBottom: "2px" }}>{item.label}</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Info Box */}
              <div style={{
                marginTop: "20px",
                padding: "12px 14px",
                backgroundColor: "#f0f7ff",
                borderRadius: "10px",
                border: "1px solid #bfdbfe",
              }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#1d4ed8", marginBottom: "4px" }}>
                  {tr(nav.partnerWithCnd, lang)}
                </p>
                <p style={{ fontSize: "11px", color: "#3b82f6", margin: 0, lineHeight: 1.5 }}>
                  {tr(nav.partnerDesc, lang)}
                </p>
                <Link
                  href="/bermitra"
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#1d4ed8",
                    textDecoration: "none",
                  }}
                >
                  {tr(nav.learnPartner, lang)}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </li>

      <li>
        <Link href="/bermitra">{tr(nav.partner, lang)}</Link>
      </li>
      <li>
        <a
          href="https://blog.cndlogistic.co.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr(nav.blog, lang)}
        </a>
      </li>
      <li>
        <Link href="/page-contact">{tr(nav.contact, lang)}</Link>
      </li>
    </>
  );
}
