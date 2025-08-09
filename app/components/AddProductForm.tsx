"use client";

import { FC, useState } from "react";
import { Upload, X } from "lucide-react";

interface ProductFormData {
  name: string;
  category: string;
  price: string;
  unit: string;
  stock: string;
  harvestDate: string;
  organic: boolean;
  description: string;
  location: string;
  seller: string;
}

const AddProductForm: FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    category: 'Vegetables',
    price: '',
    unit: 'kg',
    stock: '',
    harvestDate: '',
    organic: false,
    description: '',
    location: '',
    seller: ''
  });

  const [imagePreview, setImagePreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy'];
  const units = ['kg', 'piece', 'bunch', 'liter', 'dozen'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Product submitted for review! You will be notified once it\'s approved.');
      // Reset form
      setFormData({
        name: '',
        category: 'Vegetables',
        price: '',
        unit: 'kg',
        stock: '',
        harvestDate: '',
        organic: false,
        description: '',
        location: '',
        seller: ''
      });
      setImagePreview('');
      setIsSubmitting(false);
    }, 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-[#0097b2] mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
          {imagePreview ? (
            <div className="relative">
              <img 
                src={imagePreview} 
                alt="Product preview" 
                className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">Upload product image</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="bg-[#7ed957] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer inline-block"
              >
                Choose Image
              </label>
            </div>
          )}
        </div>

        {/* Basic Product Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g., Fresh Tomatoes"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Seller Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seller Name *</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.seller}
              onChange={(e) => setFormData({...formData, seller: e.target.value})}
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="e.g., Kurunegala"
            />
          </div>
        </div>

        {/* Price and Stock */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rs.) *</label>
            <input
              type="number"
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              placeholder="150"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Unit *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.unit}
              onChange={(e) => setFormData({...formData, unit: e.target.value})}
            >
              {units.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity *</label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
              value={formData.stock}
              onChange={(e) => setFormData({...formData, stock: e.target.value})}
              placeholder="50"
            />
          </div>
        </div>

        {/* Harvest Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Harvest Date *</label>
          <input
            type="date"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
            value={formData.harvestDate}
            onChange={(e) => setFormData({...formData, harvestDate: e.target.value})}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Describe your product, quality, growing methods, etc."
          />
        </div>

        {/* Organic Certification */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="organic"
            className="w-4 h-4 text-[#7ed957] bg-gray-100 border-gray-300 rounded focus:ring-[#7ed957] focus:ring-2"
            checked={formData.organic}
            onChange={(e) => setFormData({...formData, organic: e.target.checked})}
          />
          <label htmlFor="organic" className="ml-2 text-sm font-medium text-gray-700">
            Certified Organic Product
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isSubmitting
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-[#7ed957] text-white hover:bg-green-600'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Product for Review'}
        </button>

        <p className="text-sm text-gray-600 text-center">
          * All products are subject to quality review before being listed
        </p>
      </form>
    </div>
  );
};

export default AddProductForm;