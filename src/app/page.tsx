import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";
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
              Lorem ipsum dolor sit amet consectetur. Amet est
              posuere rhoncus scelerisque. Dolor integer
              scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </section>

        <ProductListing products={products} />
      </main>

      <Footer />
    </>
  );
}