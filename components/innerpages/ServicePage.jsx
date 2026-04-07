"use client";

import Link from "next/link";

export default function ServicePage({ title, subtitle, description, icon, features, cta }) {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero_header"
        className="hero-header section panel overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0e1630 0%, #1a2a5e 100%)" }}
      >
        <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
          <div className="container max-w-xl">
            <div
              className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              {/* Breadcrumb */}
              <nav style={{ marginBottom: "16px", opacity: 0.7 }}>
                <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: "13px" }}>Beranda</Link>
                <span style={{ color: "white", margin: "0 8px", fontSize: "13px" }}>›</span>
                <Link href="/layanan" style={{ color: "white", textDecoration: "none", fontSize: "13px" }}>Layanan</Link>
                <span style={{ color: "white", margin: "0 8px", fontSize: "13px" }}>›</span>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{title}</span>
              </nav>

              <div className="vstack items-start gap-3 max-w-750px">
                <span style={{ fontSize: "48px", lineHeight: 1 }}>{icon}</span>
                <h1
                  className="h2 sm:h1 lg:display-6 m-0"
                  style={{ color: "white", fontWeight: 800 }}
                >
                  {subtitle}
                </h1>
                <p
                  className="fs-6 sm:fs-5"
                  style={{ color: "#94a3b8", lineHeight: 1.7, maxWidth: "640px" }}
                >
                  {description}
                </p>
                <div className="hstack gap-3 mt-2 flex-wrap">
                  <Link
                    href="/page-contact"
                    className="btn btn-primary btn-md text-white"
                    style={{ borderRadius: "50px", fontWeight: 700 }}
                  >
                    {cta || "Konsultasi Sekarang"}
                  </Link>
                  <Link
                    href="https://wa.me/6289602733848"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      borderRadius: "50px",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    💬 WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {features && features.length > 0 && (
        <section className="section panel overflow-hidden">
          <div className="section-outer panel py-6 sm:py-8 lg:py-9">
            <div className="container max-w-xl">
              <div
                className="section-inner panel"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
              >
                <div className="vstack items-center gap-2 mb-6 text-center">
                  <h2 className="h3 sm:h2 m-0">Layanan yang Kami Berikan</h2>
                  <p className="opacity-70 max-w-lg mx-auto">
                    Solusi komprehensif yang dirancang untuk memenuhi setiap kebutuhan logistik bisnis Anda.
                  </p>
                </div>

                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4">
                  {features.map((feature, index) => (
                    <div key={index}>
                      <div
                        className="panel h-100 p-4 rounded-2 border dark:border-white dark:border-opacity-10"
                        style={{ transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.transform = "";
                        }}
                      >
                        <div className="vstack gap-2">
                          <span style={{ fontSize: "32px", lineHeight: 1 }}>{feature.icon}</span>
                          <h3 className="h6 m-0 fw-bold">{feature.title}</h3>
                          <p className="fs-7 opacity-70 m-0" style={{ lineHeight: 1.6 }}>
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section
        className="section panel overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0e1630, #1a2a5e)" }}
      >
        <div className="section-outer panel py-6 lg:py-9">
          <div className="container max-w-xl">
            <div className="vstack items-center text-center gap-4">
              <h2 className="h3 sm:h2 m-0" style={{ color: "white" }}>
                Siap Memulai? Hubungi Kami Sekarang
              </h2>
              <p style={{ color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7 }}>
                Tim ahli CND siap membantu Anda menemukan solusi logistik terbaik sesuai kebutuhan bisnis Anda.
              </p>
              <div className="hstack gap-3 flex-wrap justify-center">
                <Link
                  href="/page-contact"
                  className="btn btn-primary btn-md text-white"
                  style={{ borderRadius: "50px", fontWeight: 700 }}
                >
                  Minta Penawaran Sekarang
                </Link>
                <Link
                  href="https://wa.me/6289602733848"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 24px",
                    borderRadius: "50px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  💬 Chat via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section panel overflow-hidden">
        <div className="section-outer panel py-6 lg:py-8">
          <div className="container max-w-xl">
            <div className="vstack items-center gap-2 mb-5 text-center">
              <h3 className="h4 m-0">Layanan Lainnya</h3>
              <p className="opacity-70">Eksplorasi layanan logistik lengkap kami</p>
            </div>
            <div className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 g-3">
              {[
                { href: "/layanan/pengiriman-udara", label: "Pengiriman Udara", icon: "✈️" },
                { href: "/layanan/pengiriman-laut", label: "Pengiriman Laut", icon: "🚢" },
                { href: "/layanan/pengiriman-domestik", label: "Pengiriman Domestik", icon: "🏠" },
                { href: "/layanan/pengiriman-internasional", label: "Pengiriman Internasional", icon: "🌏" },
                { href: "/layanan/transportasi-darat", label: "Transportasi Darat", icon: "🚛" },
                { href: "/layanan/pergudangan", label: "Pergudangan", icon: "🏭" },
                { href: "/layanan/proyek", label: "Proyek", icon: "⚙️" },
              ]
                .filter((s) => s.href !== `/layanan/${typeof window === "undefined" ? "" : window.location.pathname.split("/").pop()}`)
                .map((service) => (
                  <div key={service.href}>
                    <Link
                      href={service.href}
                      className="panel hstack gap-2 p-3 rounded-2 border dark:border-white dark:border-opacity-10 text-none h-100"
                      style={{ textDecoration: "none", transition: "background 0.2s ease" }}
                    >
                      <span style={{ fontSize: "24px" }}>{service.icon}</span>
                      <span className="fw-medium fs-7">{service.label}</span>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
