import { create } from 'zustand';
import { Product, FilterOptions, SortOption } from '../types';
import { 
  products, 
  getCategories, 
  getBrands, 
  getPriceRange, 
  filterProducts 
} from '../data/products';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  currentFilters: FilterOptions;
  sortOption: SortOption;
  searchTerm: string;
  
  setSearchTerm: (term: string) => void;
  setCategory: (category: string | null) => void;
  setBrand: (brand: string | null) => void;
  setPriceRange: (range: [number, number] | null) => void;
  setSortOption: (option: SortOption) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: products,
  filteredProducts: products,
  categories: getCategories(),
  brands: getBrands(),
  priceRange: getPriceRange(),
  currentFilters: {
    category: null,
    brand: null,
    priceRange: null
  },
  sortOption: 'price-low-high',
  searchTerm: '',
  
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().applyFilters();
  },
  
  setCategory: (category) => {
    set(state => ({
      currentFilters: {
        ...state.currentFilters,
        category
      }
    }));
    get().applyFilters();
  },
  
  setBrand: (brand) => {
    set(state => ({
      currentFilters: {
        ...state.currentFilters,
        brand
      }
    }));
    get().applyFilters();
  },
  
  setPriceRange: (range) => {
    set(state => ({
      currentFilters: {
        ...state.currentFilters,
        priceRange: range
      }
    }));
    get().applyFilters();
  },
  
  setSortOption: (option) => {
    set({ sortOption: option });
    get().applyFilters();
  },
  
  resetFilters: () => {
    set({
      currentFilters: {
        category: null,
        brand: null,
        priceRange: null
      },
      sortOption: 'price-low-high',
      searchTerm: ''
    });
    get().applyFilters();
  },
  
  applyFilters: () => {
    const { searchTerm, currentFilters, sortOption } = get();
    const filtered = filterProducts(searchTerm, currentFilters, sortOption);
    set({ filteredProducts: filtered });
  }
}));