"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, User, MapPin, Clock } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  seller: string;
  location: string;
  rating: number;
  inStock: number;
  harvestDate: string;
  organic: boolean;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.organic && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            Organic
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-[#ff914d]">
            Rs. {product.price}
            <span className="text-sm text-gray-500">/{product.unit}</span>
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{product.seller}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{product.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Harvested: {product.harvestDate}</span>
          </div>
          <div className="text-green-600">
            Stock: {product.inStock} {product.unit}
          </div>
        </div>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#7ed957] text-white py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;