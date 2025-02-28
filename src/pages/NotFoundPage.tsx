import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-3 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="primary"
            as={Link}
            to="/"
            className="flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          <Button
            variant="outline"
            as={Link}
            to="/products"
            className="flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;