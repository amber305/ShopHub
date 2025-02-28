import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 2999.99,
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions.',
    category: 'Electronics',
    brand: 'SoundMaster',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        username: 'AudioPhile',
        rating: 5,
        comment: 'Best headphones I\'ve ever owned. The sound quality is incredible!',
        date: '2023-05-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        username: 'MusicLover',
        rating: 4.5,
        comment: 'Great sound, comfortable fit. Battery life is impressive.',
        date: '2023-04-22'
      }
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz-20kHz',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Bluetooth Version': '5.2',
      'Weight': '250g'
    },
    stock: 45,
    featured: true
  },
  {
    id: '2',
    name: 'Ultra-Slim Laptop',
    price: 72999.00,
    description: 'Powerful performance meets sleek design in our ultra-slim laptop. Featuring a stunning 4K display, the latest processor, and all-day battery life in a lightweight, portable package.',
    category: 'Electronics',
    brand: 'TechPro',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        username: 'TechGeek',
        rating: 5,
        comment: 'Lightning fast and incredibly thin. Perfect for my work and travel needs.',
        date: '2023-06-10'
      }
    ],
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'RAM': '16GB DDR5',
      'Storage': '1TB SSD',
      'Display': '15.6" 4K OLED',
      'Graphics': 'Intel Iris Xe',
      'Battery': '12 hours',
      'Weight': '1.3kg'
    },
    stock: 20,
    featured: true
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    price: 7999.99,
    description: 'Track your fitness goals with precision using our advanced smart watch. Monitor heart rate, sleep patterns, and workout metrics with GPS tracking and water resistance up to 50 meters.',
    category: 'Wearables',
    brand: 'FitTech',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.5,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        username: 'FitnessEnthusiast',
        rating: 4.5,
        comment: 'Great fitness tracker with accurate measurements. The battery life could be better though.',
        date: '2023-03-18'
      },
      {
        id: 'r5',
        userId: 'u5',
        username: 'RunnerPro',
        rating: 4.5,
        comment: 'Perfect for tracking my runs. The GPS is very accurate.',
        date: '2023-02-05'
      }
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Sensors': 'Heart rate, SpO2, Accelerometer',
      'Connectivity': 'Bluetooth 5.0, GPS',
      'Compatibility': 'iOS 12+, Android 8+'
    },
    stock: 75,
    featured: true
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    price: 200499.99,
    description: 'Capture stunning photos and videos with our professional camera kit. Includes a high-resolution DSLR camera, multiple lenses, and accessories for both beginners and professionals.',
    category: 'Photography',
    brand: 'OptiView',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        username: 'PhotoPro',
        rating: 5,
        comment: 'Exceptional quality camera. The kit has everything I need for professional shoots.',
        date: '2023-01-30'
      }
    ],
    specifications: {
      'Camera Type': 'DSLR',
      'Resolution': '45.7 MP',
      'Sensor': 'Full-frame CMOS',
      'ISO Range': '100-51,200',
      'Video': '4K UHD 60fps',
      'Included Lenses': '24-70mm f/2.8, 70-200mm f/2.8'
    },
    stock: 15,
    featured: true
  },
  {
    id: '5',
    name: 'Designer Leather Backpack',
    price: 14999.00,
    description: 'Stylish and functional leather backpack perfect for work or travel. Features multiple compartments, laptop sleeve, and premium materials built to last.',
    category: 'Fashion',
    brand: 'UrbanStyle',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.6,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        username: 'FashionForward',
        rating: 4.5,
        comment: 'Beautiful design and excellent quality. Fits my 15" laptop perfectly.',
        date: '2023-04-12'
      },
      {
        id: 'r8',
        userId: 'u8',
        username: 'TravelExpert',
        rating: 5,
        comment: 'This backpack has been with me through 10 countries already. Durable and stylish!',
        date: '2023-02-28'
      }
    ],
    specifications: {
      'Material': 'Full-grain leather',
      'Dimensions': '18" x 12" x 6"',
      'Laptop Compartment': 'Fits up to 15.6"',
      'Pockets': '5 external, 3 internal',
      'Straps': 'Padded, adjustable',
      'Weight': '2.2 lbs'
    },
    stock: 30,
    featured: false
  },
  {
    id: '6',
    name: 'Smart Home Security System',
    price: 2259.00,
    description: 'Protect your home with our comprehensive smart security system. Includes HD cameras, motion sensors, and smartphone integration for peace of mind wherever you are.',
    category: 'Smart Home',
    brand: 'SecureLife',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563459802257-2a97df940f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        username: 'HomeOwner',
        rating: 5,
        comment: 'Easy to install and the app works great. I feel much safer now.',
        date: '2023-05-20'
      }
    ],
    specifications: {
      'Cameras': '3 HD 1080p',
      'Motion Sensors': '4 included',
      'Storage': 'Cloud + 128GB local',
      'Power': 'Wired with battery backup',
      'Connectivity': 'Wi-Fi, Cellular backup',
      'Smart Integration': 'Alexa, Google Home, Apple HomeKit'
    },
    stock: 25,
    featured: false
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    price: 24000.00,
    description: 'Work in comfort with our ergonomic office chair. Designed to support proper posture with adjustable features and breathable mesh material for those long work days.',
    category: 'Furniture',
    brand: 'ComfortPlus',
    images: [
      'https://plus.unsplash.com/premium_photo-1661542322251-db8b9bdf8e30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.5,
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        username: 'RemoteWorker',
        rating: 4.5,
        comment: 'My back pain has significantly reduced since I started using this chair. Worth every penny!',
        date: '2023-03-15'
      },
      {
        id: 'r11',
        userId: 'u11',
        username: 'OfficeManager',
        rating: 4.5,
        comment: 'We bought these for the entire office. Everyone loves them!',
        date: '2023-01-10'
      }
    ],
    specifications: {
      'Material': 'Mesh back, fabric seat',
      'Weight Capacity': '300 lbs',
      'Adjustments': 'Height, armrest, lumbar, tilt',
      'Base': '5-wheel aluminum',
      'Assembly': 'Required, tools included',
      'Warranty': '5 years'
    },
    stock: 40,
    featured: false
  },
  {
    id: '8',
    name: 'Gourmet Coffee Maker',
    price: 2879.99,
    description: 'Brew barista-quality coffee at home with our premium coffee maker. Features customizable brewing options, built-in grinder, and thermal carafe to keep your coffee hot for hours.',
    category: 'Kitchen',
    brand: 'BrewMaster',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570087935869-9da023a88cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        username: 'CoffeeLover',
        rating: 5,
        comment: 'This coffee maker has changed my mornings. The built-in grinder makes such a difference in flavor!',
        date: '2023-06-05'
      }
    ],
    specifications: {
      'Capacity': '12 cups',
      'Grinder': 'Conical burr, 5 settings',
      'Carafe': 'Double-wall stainless steel',
      'Programs': '5 brew strengths, timer',
      'Filter': 'Permanent gold-tone',
      'Dimensions': '14" x 9" x 16"'
    },
    stock: 35,
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getPriceRange = (): [number, number] => {
  const prices = products.map(product => product.price);
  return [Math.min(...prices), Math.max(...prices)];
};

export const filterProducts = (
  searchTerm: string = '',
  filters: FilterOptions = { category: null, brand: null, priceRange: null },
  sortOption: SortOption = 'price-low-high'
): Product[] => {
  let filtered = [...products];
  
  // Apply search term filter
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
  }
  
  // Apply category filter
  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }
  
  // Apply brand filter
  if (filters.brand) {
    filtered = filtered.filter(product => product.brand === filters.brand);
  }
  
  // Apply price range filter
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(product => product.price >= min && product.price <= max);
  }
  
  // Apply sorting
  switch (sortOption) {
    case 'price-low-high':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      // In a real app, we would sort by date added
      // Here we'll just use the id as a proxy for "newest"
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      break;
  }
  
  return filtered;
};