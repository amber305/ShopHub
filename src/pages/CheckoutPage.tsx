import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, getTax, getTotal, clearCart } = useCartStore();
  const { isAuthenticated, openAuthModal } = useAuthStore();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'paypal'>('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Redirect to home if cart is empty
  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/');
    }
  }, [items, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'address', 'city', 
      'state', 'zipCode', 'country'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Credit card validation if credit payment method is selected
    if (paymentMethod === 'credit') {
      if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
      
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.expMonth) {
        newErrors.expMonth = 'Required';
      } else if (!/^(0[1-9]|1[0-2])$/.test(formData.expMonth)) {
        newErrors.expMonth = 'Invalid';
      }
      
      if (!formData.expYear) {
        newErrors.expYear = 'Required';
      } else if (!/^\d{4}$/.test(formData.expYear)) {
        newErrors.expYear = 'Invalid';
      }
      
      if (!formData.cvv) {
        newErrors.cvv = 'Required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'Invalid';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call for order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Order successful
      clearCart();
      navigate('/order-success');
    } catch (error) {
      console.error('Order processing failed:', error);
      setErrors({ form: 'An error occurred while processing your order. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  if (items.length === 0) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 order-2 lg:order-2">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-start">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>{formatPrice(getSubtotal())}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <p>Tax</p>
                <p>{formatPrice(getTax())}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-200">
                <p>Total</p>
                <p>{formatPrice(getTotal())}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                <Lock className="h-4 w-4" />
                <span>Secure Checkout</span>
              </div>
              
              <div className="flex justify-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="American Express" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Checkout Form */}
        <div className="lg:col-span-2 order-1 lg:order-1">
          <form onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  fullWidth
                />
                
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  fullWidth
                />
              </div>
              
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                fullWidth
              />
              
              <Input
                label="Street Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                fullWidth
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                  fullWidth
                />
                
                <Input
                  label="State/Province"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  error={errors.state}
                  fullWidth
                />
                
                <Input
                  label="ZIP/Postal Code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  error={errors.zipCode}
                  fullWidth
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`
                    px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 
                    focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full 
                    rounded-md sm:text-sm focus:ring-1
                    ${errors.country ? 'border-red-500' : ''}
                  `}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="credit-card" className="ml-3 flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Credit / Debit Card</span>
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="paypal" className="ml-3 flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="PayPal" className="h-5 mr-2" />
                    <span className="text-sm font-medium text-gray-700">PayPal</span>
                  </label>
                </div>
              </div>
              
              {paymentMethod === 'credit' && (
                <div className="space-y-4">
                  <Input
                    label="Cardholder Name"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    error={errors.cardName}
                    fullWidth
                  />
                  
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    error={errors.cardNumber}
                    placeholder="1234 5678 9012 3456"
                    fullWidth
                  />
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">
                        Exp. Month
                      </label>
                      <input
                        type="text"
                        name="expMonth"
                        id="expMonth"
                        placeholder="MM"
                        value={formData.expMonth}
                        onChange={handleChange}
                        className={`
                          px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 
                          focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full 
                          rounded-md sm:text-sm focus:ring-1
                          ${errors.expMonth ? 'border-red-500' : ''}
                        `}
                      />
                      {errors.expMonth && (
                        <p className="mt-1 text-sm text-red-600">{errors.expMonth}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">
                        Exp. Year
                      </label>
                      <input
                        type="text"
                        name="expYear"
                        id="expYear"
                        placeholder="YYYY"
                        value={formData.expYear}
                        onChange={handleChange}
                        className={`
                          px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 
                          focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full 
                          rounded-md sm:text-sm focus:ring-1
                          ${errors.expYear ? 'border-red-500' : ''}
                        `}
                      />
                      {errors.expYear && (
                        <p className="mt-1 text-sm text-red-600">{errors.expYear}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        className={`
                          px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 
                          focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full 
                          rounded-md sm:text-sm focus:ring-1
                          ${errors.cvv ? 'border-red-500' : ''}
                        `}
                      />
                      {errors.cvv && (
                        <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'paypal' && (
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-sm text-blue-800">
                    You will be redirected to PayPal to complete your payment securely.
                  </p>
                </div>
              )}
            </div>
            
            {/* Place Order Button */}
            <div className="flex flex-col space-y-4">
              {errors.form && (
                <div className="bg-red-50 p-4 rounded-md">
                  <p className="text-sm text-red-700">{errors.form}</p>
                </div>
              )}
              
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isProcessing}
                className="py-3 text-base"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </Button>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <span>Your payment information is secure</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;