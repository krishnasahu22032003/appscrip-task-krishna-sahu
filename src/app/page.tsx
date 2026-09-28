import Header from "@/components/Header";
import ProductSidebar from "@/components/ProductSidebar";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <main className="product-page">
        <section className="discover-section">
          <div className="discover-content">
            <h1>DISCOVER OUR PRODUCTS</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </section>

        <section className="product-toolbar">
          <div className="product-count">
            3425 ITEMS
          </div>

          <button type="button" className="hide-filter">
            <span className="hide-filter-arrow">‹</span>
            <span>HIDE FILTER</span>
          </button>

          <button type="button" className="recommended">
            <span>RECOMMENDED</span>

            <svg
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
        </section>

        <section className="mobile-toolbar">
          <button type="button">
            FILTER
          </button>

          <button type="button">
            <span>RECOMMENDED</span>

            <svg
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
        </section>

        <section className="products-layout">
          <ProductSidebar />

          <ProductGrid products={products} />
        </section>
      </main>
    </>
  );
}