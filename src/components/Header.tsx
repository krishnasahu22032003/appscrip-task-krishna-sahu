"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/shop", label: "SHOP" },
  { href: "/skills", label: "SKILLS" },
  { href: "/stories", label: "STORIES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-left">
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="brand-mark" aria-label="Home">
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M24 4C18 11 11 18 4 24C11 30 18 37 24 44C30 37 37 30 44 24C37 18 30 11 24 4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M24 4C24 15 24 33 24 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 24C15 24 33 24 44 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 9C14 14 19 19 24 24C29 29 34 34 39 39"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M39 9C34 14 29 19 24 24C19 29 14 34 9 39"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </Link>
        </div>

        <Link href="/" className="site-logo" onClick={closeMenu}>
          LOGO
        </Link>

        <div className="header-actions">
          <button type="button" className="header-icon" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button type="button" className="header-icon" aria-label="Wishlist">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20.8 8.7C20.8 13.7 12 20 12 20C12 20 3.2 13.7 3.2 8.7C3.2 5.9 5.2 4 7.7 4C9.5 4 11 5 12 6.4C13 5 14.5 4 16.3 4C18.8 4 20.8 5.9 20.8 8.7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="header-icon"
            aria-label="Shopping bag"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 8.5H19L18 21H6L5 8.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 9V6.5C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="header-icon header-icon-desktop"
            aria-label="Account"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="7"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4.5 20C5.1 15.9 7.6 13.5 12 13.5C16.4 13.5 18.9 15.9 19.5 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="language-selector"
            aria-label="Select language"
          >
            <span>ENG</span>
            <svg
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1.5 2L6 6L10.5 2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="main-navigation"
        className={`main-navigation ${menuOpen ? "main-navigation-open" : ""}`}
        aria-label="Main navigation"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
      </nav>

      {segments.length > 0 && (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <span key={href} className="breadcrumb-item">
                <span className="breadcrumb-separator" aria-hidden="true">
                  |
                </span>
                {isLast ? (
                  <span aria-current="page">
                    {segment.replace(/-/g, " ").toUpperCase()}
                  </span>
                ) : (
                  <Link href={href}>
                    {segment.replace(/-/g, " ").toUpperCase()}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      )}
    </header>
  );
}