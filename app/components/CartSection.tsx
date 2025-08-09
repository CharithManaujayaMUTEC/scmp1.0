"use client";

import { FC } from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartSectionProps {
  cart: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  totalPrice: number;
}

const CartSection: FC<CartSectionProps> = ({ 
  cart, 
  updateQuantity, 
  totalPrice 
}) => {
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Here you would implement the checkout logic
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0097b2] mb-6">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Rs. {item.price}/{item.unit}</p>
                  <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                  <p className="text-sm text-gray-500">Location: {item.location}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                    disabled={item.quantity >= item.inStock}
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg">Rs. {item.price * item.quantity}</p>
                  <button 
                    onClick={() => updateQuantity(item.id, 0)}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Cart Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>Rs. {totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee:</span>
                <span>Rs. 200</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span>Rs. {totalPrice + 200}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#ff914d] text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSection;