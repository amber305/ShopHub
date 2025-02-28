import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          )
        };
      } else {
        return {
          items: [...state.items, { product, quantity }]
        };
      }
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  
  closeCart: () => {
    set({ isOpen: false });
  },
  
  openCart: () => {
    set({ isOpen: true });
  },
  
  getSubtotal: () => {
    return get().items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  },
  
  getTax: () => {
    return get().getSubtotal() * 0.08; // 8% tax rate
  },
  
  getTotal: () => {
    return get().getSubtotal() + get().getTax();
  },
  
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));