"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-left">
          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "mobile-menu-button-open" : ""
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="brand-mark" aria-label="Home">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>

        <Link href="/" className="site-logo">
          LOGO
        </Link>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="7.3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16.2 16.2L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="header-icon"
            aria-label="Wishlist"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20.4 8.6C20.4 13.4 12 19.6 12 19.6C12 19.6 3.6 13.4 3.6 8.6C3.6 5.8 5.4 4 7.9 4C9.8 4 11.1 5.1 12 6.4C12.9 5.1 14.2 4 16.1 4C18.6 4 20.4 5.8 20.4 8.6Z"
                stroke="currentColor"
                strokeWidth="1.45"
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
                d="M5.3 8.4H18.7L17.8 20.5H6.2L5.3 8.4Z"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.4V6.2C9 4.5 10.3 3.2 12 3.2C13.7 3.2 15 4.5 15 6.2V8.4"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="header-icon account-icon"
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
                r="3.4"
                stroke="currentColor"
                strokeWidth="1.45"
              />
              <path
                d="M4.8 20C5.4 15.8 7.7 13.5 12 13.5C16.3 13.5 18.6 15.8 19.2 20"
                stroke="currentColor"
                strokeWidth="1.45"
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

        <div className="mobile-actions">
          <button
            type="button"
            className="mobile-icon"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="7.3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16.2 16.2L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-icon"
            aria-label="Wishlist"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20.4 8.6C20.4 13.4 12 19.6 12 19.6C12 19.6 3.6 13.4 3.6 8.6C3.6 5.8 5.4 4 7.9 4C9.8 4 11.1 5.1 12 6.4C12.9 5.1 14.2 4 16.1 4C18.6 4 20.4 5.8 20.4 8.6Z"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-icon"
            aria-label="Shopping bag"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.3 8.4H18.7L17.8 20.5H6.2L5.3 8.4Z"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.4V6.2C9 4.5 10.3 3.2 12 3.2C13.7 3.2 15 4.5 15 6.2V8.4"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`main-navigation ${
          menuOpen ? "main-navigation-open" : ""
        }`}
        aria-label="Main navigation"
      >
        <Link href="/shop" onClick={() => setMenuOpen(false)}>
          SHOP
        </Link>

        <Link href="/skills" onClick={() => setMenuOpen(false)}>
          SKILLS
        </Link>

        <Link href="/stories" onClick={() => setMenuOpen(false)}>
          STORIES
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT US
        </Link>
      </nav>
    </header>
  );
}