"use client";

import { useEffect, useRef, useState } from "react";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import { Product } from "@/types/product";

interface ProductListingProps {
  products: Product[];
}

type SortOption =
  | "RECOMMENDED"
  | "NEWEST FIRST"
  | "POPULAR"
  | "PRICE : HIGH TO LOW"
  | "PRICE : LOW TO HIGH";

const sortOptions: SortOption[] = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export default function ProductListing({
  products,
}: ProductListingProps) {
  const [filtersVisible, setFiltersVisible] = useState(true);

  const [isSortOpen, setIsSortOpen] = useState(false);

  const [selectedSort, setSelectedSort] =
    useState<SortOption>("RECOMMENDED");

  const sortRef = useRef<HTMLDivElement>(null);

  const toggleFilters = () => {
    setFiltersVisible((current) => !current);
  };

  const toggleSort = () => {
    setIsSortOpen((current) => !current);
  };

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <>
      <section className="product-toolbar">
        <div className="product-count">
          3425 ITEMS
        </div>

        <button
          type="button"
          className="hide-filter"
          onClick={toggleFilters}
          aria-expanded={filtersVisible}
          aria-controls="product-filters"
        >
          <span
            className={`hide-filter-arrow ${
              filtersVisible
                ? ""
                : "hide-filter-arrow-show"
            }`}
          >
            ‹
          </span>

          <span>
            {filtersVisible
              ? "HIDE FILTER"
              : "SHOW FILTER"}
          </span>
        </button>

        <div
          className="recommended-wrapper"
          ref={sortRef}
        >
          <button
            type="button"
            className="recommended"
            onClick={toggleSort}
            aria-expanded={isSortOpen}
            aria-haspopup="listbox"
          >
            <span>{selectedSort}</span>

            <svg
              className={
                isSortOpen
                  ? "recommended-arrow-open"
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

          {isSortOpen && (
            <div
              className="sort-dropdown"
              role="listbox"
              aria-label="Sort products"
            >
              {sortOptions.map((option) => {
                const isSelected =
                  selectedSort === option;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`sort-option ${
                      isSelected
                        ? "sort-option-selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSortChange(option)
                    }
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="sort-check">
                      {isSelected ? "✓" : ""}
                    </span>

                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="mobile-toolbar">
        <button
          type="button"
          onClick={toggleFilters}
          aria-expanded={filtersVisible}
        >
          FILTER
        </button>

        <div
          className="mobile-recommended-wrapper"
          ref={sortRef}
        >
          <button
            type="button"
            className="mobile-recommended-button"
            onClick={toggleSort}
            aria-expanded={isSortOpen}
            aria-haspopup="listbox"
          >
            <span>{selectedSort}</span>

            <svg
              className={
                isSortOpen
                  ? "recommended-arrow-open"
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

          {isSortOpen && (
            <div
              className="sort-dropdown mobile-sort-dropdown"
              role="listbox"
              aria-label="Sort products"
            >
              {sortOptions.map((option) => {
                const isSelected =
                  selectedSort === option;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`sort-option ${
                      isSelected
                        ? "sort-option-selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSortChange(option)
                    }
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="sort-check">
                      {isSelected ? "✓" : ""}
                    </span>

                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section
        className={`products-layout ${
          !filtersVisible
            ? "products-layout-filters-hidden"
            : ""
        }`}
      >
        {filtersVisible && (
          <div id="product-filters">
            <ProductSidebar />
          </div>
        )}

        <ProductGrid products={products} />
      </section>
    </>
  );
}