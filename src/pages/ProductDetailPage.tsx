import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Truck, Shield, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCartStore } from '../store/cartStore';
import Button from '../components/ui/Button';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, openCart } = useCartStore();
  
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      if (!foundProduct) {
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };
  
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center text-sm text-gray-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </>
            )}
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-indigo-600' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : index < product.rating
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews.length} reviews)</span>
              </div>
              
              <span className="text-sm text-gray-600">Brand: <span className="font-medium">{product.brand}</span></span>
            </div>
            
            <div className="text-2xl font-bold text-gray-900 mb-4">
              {formatPrice(product.price)}
            </div>
            
            <div className="mb-6">
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                product.stock > 10
                  ? 'bg-green-100 text-green-800'
                  : product.stock > 0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.stock > 10
                  ? 'In Stock'
                  : product.stock > 0
                  ? `Only ${product.stock} left`
                  : 'Out of Stock'}
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="px-3 py-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-0 focus:ring-0"
                  />
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="px-3 py-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
            
            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start mb-3">
                <Truck className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Free Shipping</h4>
                  <p className="text-xs text-gray-600">Free standard shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">30-Day Returns</h4>
                  <p className="text-xs text-gray-600">Not satisfied? Return within 30 days for a full refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reviews ({product.reviews.length})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-3 text-sm font-medium text-gray-900 w-1/3">{key}</td>
                      <td className="py-3 text-sm text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">{review.username}</span>
                      <span className="ml-auto text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;