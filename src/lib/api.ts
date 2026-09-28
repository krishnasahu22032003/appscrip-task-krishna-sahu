import { Product } from "@/types/product";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}