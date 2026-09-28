import { Product } from "@/types/product";

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  thumbnail: string;
  images: string[];
}

interface DummyJsonResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

const PRODUCTS_API = "https://dummyjson.com/products?limit=30";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: DummyJsonResponse = await response.json();

  return data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    image: product.thumbnail || product.images?.[0] || "",
    rating: product.rating,
  }));
}