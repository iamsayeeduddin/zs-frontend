import React from "react";

const ProductGridNew = ({ products }:any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="relative">
          <div className="relative group">
            <img 
              src={`/src/assets/${product.imageUrl}`} 
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200"></div>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              {/* Heart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 py-2 px-4 hidden group-hover:block">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-medium text-sm">QUICK VIEW</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium">{product.brand}</h3>
            <p className="text-gray-500">{product.name}</p>
            <p className="font-semibold mt-1">Rs. {product.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductGridNew);
