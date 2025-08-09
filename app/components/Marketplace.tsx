"use client";

import { FC } from "react";
import ProductCard, { Product } from "./ProductCard";
import SearchAndFilters from "./SearchAndFilters";

interface MarketplaceProps {
  products: Product[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onAddToCart: (product: Product) => void;
}

const Marketplace: FC<MarketplaceProps> = ({
  products,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  onAddToCart
}) => {
  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <SearchAndFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          {filteredProducts.length === 0 
            ? 'No products found' 
            : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`
          }
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
          <p className="text-gray-500">
            {searchTerm || selectedCategory !== 'All'
              ? 'Try adjusting your search criteria or filters'
              : 'No products are currently available'
            }
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-4 bg-[#7ed957] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}

      {/* Load More Button (for future pagination) */}
      {filteredProducts.length > 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Showing all available products
          </p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;