"use client";

import { FC, useState, useEffect } from "react";
import { ABeeZee } from "next/font/google";
import EMarketNavbar from "../components/EMarketNavbar";
import Marketplace from "../components/Marketplace";
import CartSection, { CartItem } from "../components/CartSection";
import AddProductForm from "../components/AddProductForm";
import AboutSection from "../components/AboutSection";
import { Product } from "../components/ProductCard";

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const EMarketPage: FC = () => {
  const [currentView, setCurrentView] = useState<'marketplace' | 'add-product' | 'about' | 'cart'>('marketplace');
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Initialize mock products data
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Fresh Tomatoes',
        category: 'Vegetables',
        price: 150,
        unit: 'kg',
        image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
        seller: 'Kumara Perera',
        location: 'Kurunegala',
        rating: 4.5,
        inStock: 50,
        harvestDate: '2025-08-05',
        organic: true,
        description: 'Fresh organic tomatoes directly from farm. Perfect for cooking and salads.'
      },
      {
        id: '2',
        name: 'Green Beans',
        category: 'Vegetables',
        price: 120,
        unit: 'kg',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutTVY36Mt8qLi9Miuc0xzeVW_qaoirp9h3Q&s',
        seller: 'Nirmala Silva',
        location: 'Kandy',
        rating: 4.8,
        inStock: 30,
        harvestDate: '2025-08-06',
        organic: false,
        description: 'Fresh green beans, perfect for stir-frying and curries.'
      },
      {
        id: '3',
        name: 'Red Rice',
        category: 'Grains',
        price: 180,
        unit: 'kg',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
        seller: 'Rajitha Bandara',
        location: 'Polonnaruwa',
        rating: 4.7,
        inStock: 100,
        harvestDate: '2025-07-20',
        organic: true,
        description: 'Traditional red rice with high nutritional value and authentic taste.'
      },
      {
        id: '4',
        name: 'Cabbage',
        category: 'Vegetables',
        price: 80,
        unit: 'piece',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFye_pPBww0C_Ft6lIvvrKpni_ChDP4CLStw&s',
        seller: 'Chaminda Ranasinghe',
        location: 'Nuwara Eliya',
        rating: 4.6,
        inStock: 75,
        harvestDate: '2025-08-07',
        organic: true,
        description: 'Fresh cabbage.'
      },
      {
        id: '5',
        name: 'Carrots',
        category: 'Vegetables',
        price: 100,
        unit: 'kg',
        image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400',
        seller: 'Sunil Wickramasinghe',
        location: 'Nuwara Eliya',
        rating: 4.4,
        inStock: 40,
        harvestDate: '2025-08-04',
        organic: true,
        description: 'Fresh carrots from the hill country, sweet and crunchy.'
      },
      {
        id: '6',
        name: 'Bananas',
        category: 'Fruits',
        price: 60,
        unit: 'dozen',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
        seller: 'Malini Jayawardena',
        location: 'Kegalle',
        rating: 4.9,
        inStock: 200,
        harvestDate: '2025-08-08',
        organic: false,
        description: 'Sweet and ripe bananas, perfect for snacks and desserts.'
      },
      {
        id: '7',
        name: 'Cinnamon Sticks',
        category: 'Spices',
        price: 500,
        unit: 'kg',
        image: 'https://images.unsplash.com/photo-1609501676725-7186f4f7cc88?w=400',
        seller: 'Asoka Mendis',
        location: 'Galle',
        rating: 4.8,
        inStock: 10,
        harvestDate: '2025-07-15',
        organic: true,
        description: 'Premium Ceylon cinnamon sticks, aromatic and pure.'
      },
      {
        id: '8',
        name: 'Fresh Milk',
        category: 'Dairy',
        price: 120,
        unit: 'liter',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
        seller: 'Dairy Co-op Matara',
        location: 'Matara',
        rating: 4.5,
        inStock: 50,
        harvestDate: '2025-08-09',
        organic: false,
        description: 'Fresh cow milk from local dairy farms, rich in nutrients.'
      }
    ];
    setProducts(mockProducts);
  }, []);

  // Cart functions
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: Math.min(item.quantity + 1, product.inStock) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Show success message
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = `${product.name} added to cart!`;
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <main className={`${abeezee.className} min-h-screen bg-gray-50`}>
      <EMarketNavbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemsCount={getTotalItems()}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {currentView === 'marketplace' && (
          <Marketplace
            products={products}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onAddToCart={addToCart}
          />
        )}

        {currentView === 'add-product' && <AddProductForm />}

        {currentView === 'about' && <AboutSection />}

        {currentView === 'cart' && (
          <CartSection 
            cart={cart} 
            updateQuantity={updateCartQuantity}
            totalPrice={getTotalPrice()}
          />
        )}
      </div>
    </main>
  );
};

export default EMarketPage;