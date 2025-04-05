
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: string;
  description: string;
  price: number;
  discountPercentage: number;
  stockCount: number;
  availableSizes: string[];
  colors: string[];
  images: string[];
  isNewArrival: boolean;
  isFeatured: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
