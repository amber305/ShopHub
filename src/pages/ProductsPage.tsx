import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const { 
    filteredProducts, 
    setCategory, 
    setBrand, 
    setSearchTerm,
    resetFilters
  } = useProductStore();
  
  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const brand = params.get('brand');
    const search = params.get('search');
    
    // Reset filters first
    resetFilters();
    
    // Apply filters from URL
    if (category) setCategory(category);
    if (brand) setBrand(brand);
    if (search) setSearchTerm(search);
    
    // Cleanup on unmount
    return () => {
      resetFilters();
    };
  }, [location.search]);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="mt-2 text-gray-600">
          Browse our collection of premium products
        </p>
      </div>
      
      <ProductFilters />
      
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;