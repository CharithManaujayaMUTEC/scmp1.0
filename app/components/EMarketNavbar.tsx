"use client";

import { FC } from "react";
import { ShoppingCart, Leaf } from "lucide-react";

interface EMarketNavbarProps {
  currentView: string;
  setCurrentView: (view: 'marketplace' | 'add-product' | 'about' | 'cart') => void;
  cartItemsCount: number;
}

const EMarketNavbar: FC<EMarketNavbarProps> = ({ 
  currentView, 
  setCurrentView, 
  cartItemsCount 
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="text-[#7ed957] w-8 h-8" />
            <h1 className="text-2xl font-bold text-[#0097b2]">SCMS E-Market</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => setCurrentView('marketplace')}
              className={`px-4 py-2 rounded-lg transition ${
                currentView === 'marketplace' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Marketplace
            </button>
            <button 
              onClick={() => setCurrentView('add-product')}
              className={`px-4 py-2 rounded-lg transition ${
                currentView === 'add-product' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sell Product
            </button>
            <button 
              onClick={() => setCurrentView('about')}
              className={`px-4 py-2 rounded-lg transition ${
                currentView === 'about' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </button>
          </nav>

          <button 
            onClick={() => setCurrentView('cart')}
            className="relative p-2 bg-[#ff914d] text-white rounded-lg hover:bg-orange-600 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setCurrentView('marketplace')}
              className={`px-3 py-2 rounded-lg text-sm transition ${
                currentView === 'marketplace' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Marketplace
            </button>
            <button 
              onClick={() => setCurrentView('add-product')}
              className={`px-3 py-2 rounded-lg text-sm transition ${
                currentView === 'add-product' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sell Product
            </button>
            <button 
              onClick={() => setCurrentView('about')}
              className={`px-3 py-2 rounded-lg text-sm transition ${
                currentView === 'about' 
                  ? 'bg-[#7ed957] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EMarketNavbar;