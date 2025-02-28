export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  images: string[];
  rating: number;
  reviews: Review[];
  specifications: Record<string, string>;
  stock: number;
  featured?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export type SortOption = 'price-low-high' | 'price-high-low' | 'rating' | 'newest';

export interface FilterOptions {
  category: string | null;
  brand: string | null;
  priceRange: [number, number] | null;
}