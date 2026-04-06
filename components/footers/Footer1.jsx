import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks, footerContact } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                {/* Kolom Brand & Kontak */}
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-3">
                      <Link href="/">
                        <img
                          className="text-primary"
                          alt="CND Logistic"
                          src="/assets/images/common/logo-mark.svg"
                          style={{ height: "36px" }}
                        />
                      </Link>
                      <p className="opacity-70" style={{ lineHeight: "1.6" }}>
                        PT Cahaya Nusantara Dunia — Solusi logistik terpercaya
                        untuk pengiriman Container dan Fulfillment Services
                        ke seluruh Indonesia.
                      </p>
                      {/* Info Kontak */}
                      <div className="vstack gap-1" style={{ fontSize: "14px" }}>
                        <a
                          href={`https://wa.me/6289602733848`}
                          className="hstack gap-2 opacity-80 hover:opacity-100"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <i className="icon icon-1 unicon-call" />
                          <span>{footerContact.phone1}</span>
                        </a>
                        <a
                          href={`https://wa.me/6282149307277`}
                          className="hstack gap-2 opacity-80 hover:opacity-100"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <i className="icon icon-1 unicon-call" />
                          <span>{footerContact.phone2}</span>
                        </a>
                        <a
                          href={`mailto:${footerContact.email}`}
                          className="hstack gap-2 opacity-80 hover:opacity-100"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <i className="icon icon-1 unicon-envelope" />
                          <span>{footerContact.email}</span>
                        </a>
                        <p className="hstack gap-2 opacity-70 m-0">
                          <i className="icon icon-1 unicon-location" />
                          <span>{footerContact.address}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kolom Link */}
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    {section.header && (
                      <p className="fw-bold mb-2 opacity-90">{section.header}</p>
                    )}
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  PT Cahaya Nusantara Dunia © {new Date().getFullYear()}, Hak Cipta Dilindungi.
                </p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <Link href="/page-privacy">Kebijakan Privasi</Link>
                  </li>
                  <li>
                    <Link href="/page-terms">Syarat & Ketentuan</Link>
                  </li>
                </ul>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
