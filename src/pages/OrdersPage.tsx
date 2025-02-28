import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const OrdersPage: React.FC = () => {
  // Mock orders data - in a real app, this would come from an API
  const orders = [
    {
      id: 'ORD-12345',
      date: '2023-06-15',
      total: 299.99,
      status: 'Delivered',
      items: [
        { id: '1', name: 'Premium Wireless Headphones', quantity: 1, price: 299.99 }
      ]
    },
    {
      id: 'ORD-12346',
      date: '2023-05-20',
      total: 449.98,
      status: 'Processing',
      items: [
        { id: '3', name: 'Smart Fitness Watch', quantity: 1, price: 199.99 },
        { id: '5', name: 'Designer Leather Backpack', quantity: 1, price: 149.99 },
        { id: '8', name: 'Gourmet Coffee Maker', quantity: 1, price: 99.99 }
      ]
    }
  ];
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <p className="mt-2 text-gray-600">
          View and track your order history
        </p>
      </div>
      
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">Order Number</p>
                      <p className="font-medium">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date Placed</p>
                      <p className="font-medium">{formatDate(order.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-medium">{formatPrice(order.total)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    
                    <Link
                      to={`/order/${order.id}`}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Order Items</h3>
                
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{formatPrice(item.price)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-600 mb-4">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Button
            variant="primary"
            as={Link}
            to="/products"
          >
            Browse Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;