import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({
  product,
  index,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        {index === 0 && (
          <span className="new-product-label">
            NEW PRODUCT
          </span>
        )}

        {index === 1 && (
          <span className="out-of-stock-label">
            OUT OF STOCK
          </span>
        )}

        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
            loading={index < 6 ? "eager" : "lazy"}
          />
        )}
      </div>

      <div className="product-information">
        <h2 className="product-name">
          {product.title.length > 24
            ? `${product.title.slice(0, 24)}...`
            : product.title}
        </h2>

        <div className="product-bottom">
          <p className="product-login">
            Sign in or Create an account to see pricing
          </p>

          <button
            type="button"
            className={`product-wishlist ${
              index === 2 ? "product-wishlist-active" : ""
            }`}
            aria-label={`Add ${product.title} to wishlist`}
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
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}