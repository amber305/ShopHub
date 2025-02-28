import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { useProductStore } from '../../store/productStore';
import Button from '../ui/Button';

const ProductFilters: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const {
    categories,
    brands,
    priceRange: [minPrice, maxPrice],
    currentFilters,
    setCategory,
    setBrand,
    setPriceRange,
    resetFilters,
    sortOption,
    setSortOption
  } = useProductStore();
  
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>([
    currentFilters.priceRange?.[0] ?? minPrice,
    currentFilters.priceRange?.[1] ?? maxPrice
  ]);
  
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...localPriceRange] as [number, number];
    newRange[index] = value;
    setLocalPriceRange(newRange);
  };
  
  const applyPriceRange = () => {
    setPriceRange(localPriceRange);
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  const hasActiveFilters = 
    currentFilters.category !== null || 
    currentFilters.brand !== null || 
    currentFilters.priceRange !== null;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleFilters}
          className="md:hidden flex items-center"
        >
          <Filter className="h-4 w-4 mr-1" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>
      
      <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
          {/* Sort Options */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={currentFilters.category || ''}
              onChange={(e) => setCategory(e.target.value || null)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          {/* Brand Filter */}
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <select
              id="brand"
              value={currentFilters.brand || ''}
              onChange={(e) => setBrand(e.target.value || null)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          
          {/* Price Range Filter */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <button
                onClick={applyPriceRange}
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                Apply
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min={minPrice}
                max={localPriceRange[1]}
                value={localPriceRange[0]}
                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min={localPriceRange[0]}
                max={maxPrice}
                value={localPriceRange[1]}
                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>
          </div>
        </div>
        
        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            
            {currentFilters.category && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Category: {currentFilters.category}
                <button
                  onClick={() => setCategory(null)}
                  className="ml-1 inline-flex text-indigo-500 focus:outline-none"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {currentFilters.brand && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Brand: {currentFilters.brand}
                <button
                  onClick={() => setBrand(null)}
                  className="ml-1 inline-flex text-indigo-500 focus:outline-none"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {currentFilters.priceRange && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Price: ${currentFilters.priceRange[0]} - ${currentFilters.priceRange[1]}
                <button
                  onClick={() => setPriceRange(null)}
                  className="ml-1 inline-flex text-indigo-500 focus:outline-none"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;