import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, openCart } = useCartStore();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    openCart();
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };
  
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[56.25%] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{product.name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>
          
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
          
          <div className="mt-2 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          
          <div className="mt-2 text-sm text-gray-500">
            <span className={product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-600'}>
              {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;