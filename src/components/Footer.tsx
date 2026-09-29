"use client";

import { useState } from "react";

type FooterSection = {
  title: string;
  links: string[];
};

const footerSections: FooterSection[] = [
  {
    title: "mettà muse",
    links: [
      "About Us",
      "Stories",
      "Artisans",
      "Boutiques",
      "Contact Us",
      "EU Compliances Docs",
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
      "Return & Refunds",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle
        cx="17.2"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />

      <path
        d="M8 10v6M8 7.5v.01M11.5 16v-3.3a2.2 2.2 0 0 1 4.4 0V16M11.5 10v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`footer-chevron ${
        open ? "footer-chevron-open" : ""
      }`}
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaymentBadges() {
  return (
    <div
      className="payment-badges"
      aria-label="Accepted payment methods"
    >
      <span className="payment-badge payment-gpay">
        G Pay
      </span>

      <span className="payment-badge payment-mastercard">
        <i />
        <b />
      </span>

      <span className="payment-badge payment-paypal">
        P
      </span>

      <span className="payment-badge payment-amex">
        AMEX
      </span>

      <span className="payment-badge payment-apple">
        <span>●</span>
        Pay
      </span>

      <span className="payment-badge payment-gpay-purple">
        <span>◉</span>
        Pay
      </span>
    </div>
  );
}

type MobileFooterSectionProps = {
  section: FooterSection;
  isOpen: boolean;
  onToggle: () => void;
};

function MobileFooterSection({
  section,
  isOpen,
  onToggle,
}: MobileFooterSectionProps) {
  return (
    <div className="footer-mobile-section">
      <button
        type="button"
        className="footer-mobile-section-button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{section.title}</span>

        <ChevronIcon open={isOpen} />
      </button>

      <div
        className={`footer-mobile-section-content ${
          isOpen
            ? "footer-mobile-section-content-open"
            : ""
        }`}
      >
        {section.links.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(
    null
  );

  const toggleSection = (section: number) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-top">

          <div className="footer-newsletter">
            <h2>BE THE FIRST TO KNOW</h2>

            <p>
              Sign up for updates from mettà muse.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Email address"
              />

              <button type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-contact">

            <div className="footer-contact-block">
              <h2>CONTACT US</h2>

              <a href="tel:+442211335360">
                +44 221 133 5360
              </a>

              <a href="mailto:customercare@mettamuse.com">
                customercare@mettamuse.com
              </a>
            </div>

            <div className="footer-currency">
              <h2>CURRENCY</h2>

              <div className="currency-value">
                <span className="us-flag">
                  🇺🇸
                </span>

                <strong>USD</strong>
              </div>

              <p>
                Transactions will be completed in Euros and a
                currency reference is available on hover.
              </p>
            </div>

          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-desktop-bottom">

          {footerSections.map((section) => (
            <div
              className="footer-column"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <div className="footer-links">
                {section.links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-column footer-social-column">

            <h2>FOLLOW US</h2>

            <div className="social-links">
              <a
                href="#"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>

            <div className="footer-accepts">
              <h2>mettà muse ACCEPTS</h2>

              <PaymentBadges />
            </div>

          </div>

        </div>

        <div className="footer-mobile-bottom">

          <MobileFooterSection
            section={footerSections[0]}
            isOpen={openSection === 0}
            onToggle={() => toggleSection(0)}
          />

          <MobileFooterSection
            section={footerSections[1]}
            isOpen={openSection === 1}
            onToggle={() => toggleSection(1)}
          />

          <div className="footer-mobile-section">

            <button
              type="button"
              className="footer-mobile-section-button"
              onClick={() => toggleSection(2)}
              aria-expanded={openSection === 2}
            >
              <span>FOLLOW US</span>

              <ChevronIcon
                open={openSection === 2}
              />
            </button>

            <div
              className={`footer-mobile-section-content footer-mobile-social ${
                openSection === 2
                  ? "footer-mobile-section-content-open"
                  : ""
              }`}
            >
              <div className="social-links">

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

              </div>
            </div>

          </div>

        </div>

        <div className="footer-accepts-mobile">
          <h2>mettà muse ACCEPTS</h2>

          <PaymentBadges />
        </div>

        <div className="footer-copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>

      </div>
    </footer>
  );
}