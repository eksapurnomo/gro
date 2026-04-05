"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Gagal mengirim pesan. Coba lagi.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Koneksi gagal. Periksa internet Anda.");
    }
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Hubungi Kami
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Isi formulir di bawah ini dan tim kami akan segera merespons
                pertanyaan Anda.
              </p>
            </div>
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image
                        className="media-cover image"
                        alt="Hero image"
                        src="/assets/images/template/hero-contact.jpg"
                        width="1500"
                        height="1000"
                      />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-5 xl:fs-4 fw-medium">
                            "Layanan CND membantu bisnis kami berkembang dengan
                            solusi logistik yang cepat dan andal."
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">
                              Budi Santoso
                            </p>
                            <span className="fs-7 opacity-80">
                              Direktur Operasional, PT Maju Bersama
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-0 lg:order-1">
                  <form
                    onSubmit={handleSubmit}
                    className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                  >
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      Ada pertanyaan atau ingin berdiskusi? Isi formulir di
                      bawah ini, kami akan merespons secepatnya.
                    </p>
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          name="name"
                          placeholder="Nama lengkap"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          name="email"
                          placeholder="Alamat email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text"
                      name="subject"
                      placeholder="Subjek"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      placeholder="Pesan Anda..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    {status === "success" && (
                      <div
                        style={{
                          background: "#d1fae5",
                          border: "1px solid #10b981",
                          borderRadius: "8px",
                          padding: "12px 16px",
                          color: "#065f46",
                          fontWeight: 500,
                        }}
                      >
                        ✅ Pesan berhasil dikirim! Kami akan segera menghubungi
                        Anda.
                      </div>
                    )}
                    {status === "error" && (
                      <div
                        style={{
                          background: "#fee2e2",
                          border: "1px solid #ef4444",
                          borderRadius: "8px",
                          padding: "12px 16px",
                          color: "#991b1b",
                          fontWeight: 500,
                        }}
                      >
                        ❌ {errorMsg}
                      </div>
                    )}

                    <button
                      className="btn btn-primary btn-md text-white mt-2"
                      type="submit"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                    <p className="text-center">
                      Atau hubungi kami langsung via{" "}
                      <a className="uc-link" href="mailto:info@gro.co.id">
                        email
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
