"use client";
import { useState } from "react";

// Data kontak WhatsApp
const contacts = [
  {
    id: 1,
    name: "Januar Dwi Laksono",
    role: "Customer Service",
    phone: "6289602733848",
    message: "Halo Kak Januar, saya ingin mengetahui lebih lanjut tentang layanan logistik CND.",
    color: "#25D366",
  },
  {
    id: 2,
    name: "Sefti Prasetya",
    role: "Sales & Marketing",
    phone: "6282149307277",
    message: "Halo Kak Sefti, saya ingin mengetahui lebih lanjut tentang layanan logistik CND.",
    color: "#25D366",
  },
  {
    id: 3,
    name: "CND AI Agent",
    role: "Chatbot — Siap 24/7",
    phone: null, // Chatbase
    chatbaseId: "CRiTQKb9k7F8beMQDLWPB",
    color: "#2563eb",
    isBot: true,
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [chatbaseOpen, setChatbaseOpen] = useState(false);

  const handleContact = (contact) => {
    if (contact.isBot) {
      setChatbaseOpen(true);
      setOpen(false);
    } else {
      const url = `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Chatbase iframe overlay */}
      {chatbaseOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            width: "380px",
            height: "520px",
            zIndex: 10000,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              background: "#0e1630",
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>🤖</span>
              <div>
                <p style={{ color: "#fff", margin: 0, fontWeight: 600, fontSize: "13px" }}>
                  CND AI Agent
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatbaseOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: "20px",
                lineHeight: 1,
              }}
              aria-label="Tutup chatbot"
            >
              ×
            </button>
          </div>
          <iframe
            src={`https://www.chatbase.co/chatbot-iframe/${contacts[2].chatbaseId}`}
            width="100%"
            style={{ height: "calc(100% - 50px)", border: "none", background: "#fff" }}
            title="CND AI Agent"
          />
        </div>
      )}

      {/* Contact popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContact(contact)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#ffffff",
                border: "none",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                cursor: "pointer",
                textAlign: "left",
                minWidth: "240px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(-4px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
              }}
              aria-label={`Hubungi ${contact.name}`}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: contact.isBot
                    ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
                    : "linear-gradient(135deg, #25D366, #128C7E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "18px",
                }}
              >
                {contact.isBot ? "🤖" : (
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="white">
                    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.47 2.04 7.77L.5 31.5l8.07-2.01A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.27 19.38c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.64-.2-.9.2-.27.4-1.04 1.3-1.27 1.56-.24.27-.47.3-.87.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.06-1.98-2.36-2.21-2.76-.23-.4-.02-.61.17-.81.18-.17.4-.45.6-.67.2-.22.26-.38.4-.64.13-.26.07-.49-.03-.68-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.77c-.27 0-.7.1-1.07.49-.37.4-1.4 1.37-1.4 3.33 0 1.96 1.43 3.85 1.63 4.12.2.26 2.8 4.27 6.79 5.99.95.41 1.69.65 2.27.84.95.3 1.82.26 2.5.16.76-.11 2.36-.96 2.69-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47z" />
                  </svg>
                )}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "13px", color: "#111827" }}>
                  {contact.name}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#6b7280" }}>
                  {contact.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop untuk tutup popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9997,
          }}
        />
      )}

      {/* Main floating button */}
      <button
        id="wa_float_btn"
        onClick={() => { setOpen(!open); setChatbaseOpen(false); }}
        aria-label="Hubungi kami"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: open
            ? "linear-gradient(135deg, #ef4444, #dc2626)"
            : "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
          cursor: "pointer",
          transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = open ? "rotate(45deg) scale(1.1)" : "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 28px rgba(37, 211, 102, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = open ? "rotate(45deg)" : "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.5)";
        }}
      >
        {/* Pulse ring — hanya saat tertutup */}
        {!open && (
          <span
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(37, 211, 102, 0.4)",
              animation: "wa-pulse 2s ease-out infinite",
            }}
          />
        )}

        {open ? (
          // Icon X
          <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          // Icon WhatsApp
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white" style={{ position: "relative", zIndex: 1 }}>
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.47 2.04 7.77L.5 31.5l8.07-2.01A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.27 19.38c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.64-.2-.9.2-.27.4-1.04 1.3-1.27 1.56-.24.27-.47.3-.87.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.06-1.98-2.36-2.21-2.76-.23-.4-.02-.61.17-.81.18-.17.4-.45.6-.67.2-.22.26-.38.4-.64.13-.26.07-.49-.03-.68-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.77c-.27 0-.7.1-1.07.49-.37.4-1.4 1.37-1.4 3.33 0 1.96 1.43 3.85 1.63 4.12.2.26 2.8 4.27 6.79 5.99.95.41 1.69.65 2.27.84.95.3 1.82.26 2.5.16.76-.11 2.36-.96 2.69-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47z" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  );
}
