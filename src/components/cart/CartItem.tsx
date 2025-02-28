import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };
  
  const handleRemove = () => {
    removeItem(product.id);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <div className="flex py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${product.id}`} className="hover:text-indigo-600">
                {product.name}
              </Link>
            </h3>
            <p className="ml-4">{formatPrice(product.price * quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.brand}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded-md">
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-indigo-600"
              onClick={handleDecrement}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-2 py-1 text-gray-900 min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-indigo-600"
              onClick={handleIncrement}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-800 flex items-center"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;