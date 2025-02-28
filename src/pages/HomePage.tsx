import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react';
import { useProductStore } from '../store/productStore';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const { products } = useProductStore();
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero background"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Shop the Future, Today
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover premium products with exceptional quality and unbeatable prices. 
              From cutting-edge electronics to stylish fashion, we've got everything you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                to="/products"
                size="lg"
                className="flex items-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                as={Link}
                to="/products?category=Electronics"
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20"
              >
                Explore Electronics
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/products?category=Electronics" 
              className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Electronics" 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Electronics</h3>
                  <p className="text-gray-200 mb-3">Latest gadgets and devices</p>
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/products?category=Wearables" 
              className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Wearables" 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Wearables</h3>
                  <p className="text-gray-200 mb-3">Smart watches and fitness trackers</p>
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/products?category=Smart Home" 
              className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Smart Home" 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Smart Home</h3>
                  <p className="text-gray-200 mb-3">Connected devices for your home</p>
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Shop With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free & Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50, with same-day dispatch and 2-3 day delivery.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                All transactions are secure and encrypted, with multiple payment options available.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied with your purchase? Return within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-indigo-100 mb-8">
              Stay updated with our latest products, exclusive offers, and promotions.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-indigo-200 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;