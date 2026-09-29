"use client";

import { useState } from "react";

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function ProductSidebar() {
  const [customizable, setCustomizable] = useState(false);
  const [openFilter, setOpenFilter] = useState<string | null>(
    null
  );

  const toggleFilter = (filter: string) => {
    setOpenFilter((current) =>
      current === filter ? null : filter
    );
  };

  return (
    <aside className="product-sidebar">
      <label className="customizable-filter">
        <input
          type="checkbox"
          checked={customizable}
          onChange={(event) =>
            setCustomizable(event.target.checked)
          }
        />

        <span className="custom-checkbox" />

        <span className="customizable-label">
          CUSTOMIZBLE
        </span>
      </label>

      <div className="sidebar-filters">
        {filters.map((filter) => {
          const isOpen = openFilter === filter;

          return (
            <div
              className="filter-group"
              key={filter}
            >
              <button
                type="button"
                className="filter-header"
                onClick={() => toggleFilter(filter)}
                aria-expanded={isOpen}
              >
                <span>{filter}</span>

                <svg
                  className={
                    isOpen
                      ? "filter-arrow-open"
                      : ""
                  }
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 2L6 6L10.5 2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="filter-value">
                All
              </div>

              {isOpen && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    <span>All</span>
                  </label>

                  <label>
                    <input type="checkbox" />
                    <span>Popular</span>
                  </label>

                  <label>
                    <input type="checkbox" />
                    <span>New Arrivals</span>
                  </label>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}