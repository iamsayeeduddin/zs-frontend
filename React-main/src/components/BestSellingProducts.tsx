import React, { useState } from 'react';

const BestSellingProducts = () => {
  // State to track which category is active
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample product data for men's and women's clothing
  const products = [
    {
      id: 1,
      name: 'Men\'s Classic Fit Shirt',
      price: 49.99,
      rating: 4.8,
      reviews: 526,
      image: 'product image 8.jpg',
      category: 'men',
      discount: 15,
      originalPrice: 59.99,
    },
    {
      id: 2,
      name: 'Women\'s Slim Jeans',
      price: 69.99,
      rating: 4.7,
      reviews: 412,
      image: 'product image 8.jpg',
      category: 'women',
      discount: 0,
      originalPrice: 69.99,
    },
    {
      id: 3,
      name: 'Men\'s Casual Jacket',
      price: 89.99,
      rating: 4.6,
      reviews: 328,
      image: 'product image 8.jpg',
      category: 'men',
      discount: 20,
      originalPrice: 109.99,
    },
    {
      id: 4,
      name: 'Women\'s Summer Dress',
      price: 59.99,
      rating: 4.9,
      reviews: 647,
      image: 'product image 8.jpg',
      category: 'women',
      discount: 10,
      originalPrice: 65.99,
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="max-w-[86rem] mx-auto mt-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Best Selling Products</h2>
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeCategory === 'men' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setActiveCategory('men')}
          >
            Men
          </button>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeCategory === 'women' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setActiveCategory('women')}
          >
            Women
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={`/src/assets/${product.image}`} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Best Seller
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-gray-800">${product.price}</span>
                  {product.discount > 0 && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                  )}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-medium">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View All Products
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BestSellingProducts;