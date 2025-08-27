import React, { useState, useEffect } from 'react';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGridNew';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Fetch products from API or use static data
    const fetchProducts = async () => {
      // Replace with your API call
      const sampleProducts = [
        {
          id: 1,
          brand: 'Sva Men',
          name: 'Magnolia Embellished Sherwani With Kurta',
          price: 148500,
          imageUrl: "luxury category 2.jpg",
        },
        {
          id: 2,
          brand: 'Rng Safawala',
          name: 'Purple Embroidered Achkan Set',
          price: 31250,
          imageUrl: "luxury category 2.jpg",
        },
        {
          id: 3,
          brand: 'Tarun Tahiliani Men',
          name: 'Classic Cocktail Tonal Sherwani Set',
          price: 169900,
          imageUrl: "luxury category 2.jpg",
        }
      ];
      
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
    };
    
    fetchProducts();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <ProductFilter 
          products={products} 
          setFilteredProducts={setFilteredProducts} 
        />
        <div className="flex-1 ml-0 md:ml-8 mt-8 md:mt-0">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;