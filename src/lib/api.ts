
import { Product } from "@/types/product";
import { mockProducts } from "./mockdata";

// Simulate API calls with some delay
const simulateNetworkDelay = (ms = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Get all products
export async function getProducts(
  category?: string,
  type?: string,
  sortBy?: string
): Promise<Product[]> {
  await simulateNetworkDelay();
  
  let filteredProducts = [...mockProducts];
  
  // Filter by category if provided
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by type if provided
  if (type) {
    filteredProducts = filteredProducts.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase()
    );
  }
  
  // Sort products
  if (sortBy) {
    switch (sortBy) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => (a.isNewArrival === b.isNewArrival ? 0 : a.isNewArrival ? -1 : 1));
        break;
      case "popular":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }
  
  return filteredProducts;
}

// Get a single product by ID
export async function getProduct(id: string): Promise<Product | null> {
  await simulateNetworkDelay();
  return mockProducts.find((product) => product.id === id) || null;
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  await simulateNetworkDelay();
  return mockProducts.filter((product) => product.isFeatured).slice(0, 4);
}

// Get new arrivals
export async function getNewArrivals(): Promise<Product[]> {
  await simulateNetworkDelay();
  return mockProducts.filter((product) => product.isNewArrival).slice(0, 8);
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  await simulateNetworkDelay();
  
  const searchTerm = query.toLowerCase();
  
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
}
