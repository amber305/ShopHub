import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthModalOpen: false,
  
  login: async (email, password) => {
    // In a real app, this would make an API call to authenticate
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      if (email && password) {
        set({
          user: {
            id: 'user-1',
            name: email.split('@')[0],
            email,
            isLoggedIn: true
          },
          isAuthenticated: true,
          isAuthModalOpen: false
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  },
  
  register: async (name, email, password) => {
    // In a real app, this would make an API call to register
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      if (name && email && password) {
        set({
          user: {
            id: 'user-' + Date.now(),
            name,
            email,
            isLoggedIn: true
          },
          isAuthenticated: true,
          isAuthModalOpen: false
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  },
  
  logout: () => {
    set({
      user: null,
      isAuthenticated: false
    });
  },
  
  openAuthModal: () => {
    set({ isAuthModalOpen: true });
  },
  
  closeAuthModal: () => {
    set({ isAuthModalOpen: false });
  }
}));