"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";

export default function LanguageSelect2() {
  const { lang, switchLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "id", label: "ID", flag: "🇮🇩", name: "Indonesia" },
    { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  ];

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div
      ref={dropRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: "none",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: "20px",
          padding: "4px 10px",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 600,
          color: "inherit",
          lineHeight: 1.4,
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,0,0,0.3)"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"}
      >
        <span style={{ fontSize: "16px", lineHeight: 1 }}>{current.flag}</span>
        <span>{current.label}</span>
        <svg
          width={10}
          height={10}
          viewBox="0 0 12 12"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            points="1 3.5 6 8.5 11 3.5"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
            minWidth: "130px",
            padding: "6px",
            zIndex: 9999,
          }}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                switchLang(l.code);
                setIsOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "8px 10px",
                background: lang === l.code ? "#f0f7ff" : "none",
                border: "none",
                borderRadius: "7px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: lang === l.code ? 700 : 500,
                color: lang === l.code ? "#1d4ed8" : "#374151",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (lang !== l.code)
                  e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                if (lang !== l.code)
                  e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span style={{ fontSize: "18px" }}>{l.flag}</span>
              <span>
                <span style={{ display: "block", lineHeight: 1.2 }}>{l.name}</span>
                <span style={{ fontSize: "10px", color: "#9ca3af", fontWeight: 400 }}>{l.label}</span>
              </span>
              {lang === l.code && (
                <span style={{ marginLeft: "auto", color: "#1d4ed8", fontSize: "14px" }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
