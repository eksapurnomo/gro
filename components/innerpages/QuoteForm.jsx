"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Pengiriman Udara",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Pengiriman Udara",
          message: "",
        });
      } else {
        throw new Error(data.error || "Gagal mengirim formulir.");
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Construct WhatsApp messages
  const waMessage = encodeURIComponent(`Halo CND Logistics,\n\nSaya ingin menanyakan penawaran untuk layanan ${formData.service || 'Logistik'}.\nNama: ${formData.name || '-'}`);

  return (
    <div className="section panel py-6 lg:py-9">
      <div className="container max-w-xl">
        <div className="row g-6 lg:g-8">
          {/* Left Column - Contact Info & WA */}
          <div className="col-12 lg:col-5 vstack gap-4 lg:gap-6">
            <div>
              <span className="fs-6 fw-bold text-primary dark:text-secondary">Hubungi Langsung</span>
              <h2 className="h3 lg:h2 mt-1 mb-2">Pilih Jalur Cepat Anda.</h2>
              <p className="fs-6 text-dark dark:text-white text-opacity-70">
                Punya kebutuhan logistik mendesak? Kirim rincian Anda melalui formulir, atau hubungi langsung representatif penjualan kami via WhatsApp untuk respon instan.
              </p>
            </div>
            
            <div className="panel vstack gap-3">
              <Link 
                href={`https://wa.me/6289602733848?text=${waMessage}`} 
                target="_blank"
                className="btn btn-lg btn-secondary dark:bg-gray-800 dark:border-gray-700 w-100 justify-content-start"
              >
                <i className="unicon-logo-whatsapp fs-4 text-success me-2"></i>
                <div className="vstack align-items-start ms-1">
                  <span className="fs-6 fw-bold lh-1 mt-1">Konsultasi dengan Dwi</span>
                  <span className="fs-8 fw-normal opacity-70">0896-0273-3848</span>
                </div>
              </Link>

              <Link 
                href={`https://wa.me/6282149307277?text=${waMessage}`} 
                target="_blank"
                className="btn btn-lg btn-secondary dark:bg-gray-800 dark:border-gray-700 w-100 justify-content-start"
              >
                <i className="unicon-logo-whatsapp fs-4 text-success me-2"></i>
                <div className="vstack align-items-start ms-1">
                  <span className="fs-6 fw-bold lh-1 mt-1">Konsultasi dengan Eef</span>
                  <span className="fs-8 fw-normal opacity-70">0821-4930-7277</span>
                </div>
              </Link>
            </div>
            
            <div className="panel d-none lg:block opacity-70 mt-auto">
              <span className="d-flex align-items-center gap-2 mb-1">
                <i className="unicon-email fs-5"></i> sales@cndlogistic.com
              </span>
              <span className="d-flex align-items-center gap-2 mb-1">
                <i className="unicon-time fs-5"></i> Layanan Operasional Jam Kerja
              </span>
            </div>
          </div>

          {/* Right Column - Email Form */}
          <div className="col-12 lg:col-7">
            <div className="panel p-4 lg:p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3 shadow-xs custom-form">
              <h3 className="h4 mb-4">Request Penawaran (Email)</h3>
              
              {submitSuccess ? (
                <div className="alert alert-success d-flex align-items-center p-3 mb-0 rounded" role="alert">
                  <i className="unicon-checkmark-outline fs-3 me-2"></i>
                  <div>
                    <h5 className="h6 mb-0 text-success">Pesan Terkirim!</h5>
                    <span className="fs-7">Tim kami (sales@cndlogistic.com) akan segera membalas penawaran Anda.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12 sm:col-6">
                    <label className="form-label fs-7 fw-bold">Nama Lengkap / Perusahaan *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Masukkan nama Anda" 
                    />
                  </div>
                  
                  <div className="col-12 sm:col-6">
                    <label className="form-label fs-7 fw-bold">No. WhatsApp / HP *</label>
                    <input 
                      type="text" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Mis: 0812345678" 
                    />
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label fs-7 fw-bold">Alamat Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="email@perusahaan.com" 
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fs-7 fw-bold">Layanan yang Dibutuhkan</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-control form-select"
                    >
                      <option value="Pengiriman Udara">Pengiriman Barang (Udara)</option>
                      <option value="Pengiriman Laut">Pengiriman Barang (Laut/Kargo)</option>
                      <option value="Pengiriman Domestik/Full Truck Load">Pengiriman Domestik / FTL / LTL</option>
                      <option value="Pengiriman Internasional (Ekspor/Impor)">Pengiriman Internasional (Ekspor/Impor)</option>
                      <option value="Layanan Kepabeanan (Customs)">Layanan Kepabeanan (Customs Clearance)</option>
                      <option value="Transportasi Darat (Trucking)">Transportasi Darat (Trucking)</option>
                      <option value="Pergudangan">Warehouse / Pergudangan</option>
                      <option value="Logistik Proyek">Logistik Proyek (Alat Berat / Plant)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fs-7 fw-bold">Rincian Barang / Pesan *</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control" 
                      rows="4" 
                      placeholder="Deskripsikan barang Anda: berat, dimensi, rute (asal & tujuan), dll..." 
                    />
                  </div>

                  {submitError && (
                    <div className="col-12 mt-2 text-danger fs-7">
                      <i className="unicon-warning me-1"></i> {submitError}
                    </div>
                  )}

                  <div className="col-12 mt-4">
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Mengirim...
                        </>
                      ) : (
                        "Kirim Penawaran via Email"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
