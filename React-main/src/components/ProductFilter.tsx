import React, { useState } from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  const [expandedSections, setExpandedSections] = useState({
    occasion: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    occasion: [],
  });

  const [searchTerm, setSearchTerm] = useState('');


  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const handleFilterChange = (category, value) => {
    let newFilters;
    if (selectedFilters[category].includes(value)) {
      newFilters = {
        ...selectedFilters,
        [category]: selectedFilters[category].filter(item => item !== value)
      };
    } else {
      newFilters = {
        ...selectedFilters, 
        [category]: [...selectedFilters[category], value]
      };
    }
    
    setSelectedFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    const filtered = products.filter(product => {
      return true
    });
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-64 border-r pr-4">
      <h2 className="text-lg font-semibold my-4">FILTERS BY</h2>
      
      <div className="border-b pb-3">
      <div
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={() => toggleSection('occasion')}
      >
        <h3 className="font-medium">Occasion</h3>
        <span>{expandedSections.occasion ? '−' : '+'}</span>
      </div>
      {expandedSections.occasion && (
        <div className="mt-2 space-y-2">
          {/* Search Input */}
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Occasion"
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filter Options */}
          {['Bride Groom', 'Casual Wear', 'Cocktail', 'Destination Wedding',
            'Engagement', 'Evening Wear', 'Festive', 'Festive Wear']
            .filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.replace(/\s+/g, '-').toLowerCase()}
                  checked={selectedFilters.occasion.includes(option)}
                  onChange={() => handleFilterChange('occasion', option)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor={option.replace(/\s+/g, '-').toLowerCase()}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))
          }
        </div>
      )}
    </div>
      <div className="border-b pb-3">
        <div 
          className="flex justify-between items-center py-2 cursor-pointer"
          onClick={() => toggleSection('occasion')}
        >
          <h3 className="font-medium">Occasion</h3>
          <span className='text-4xl'>{expandedSections.occasion ? '−' : '+'}</span>
        </div>
        {expandedSections.occasion && (
          <div className="mt-2 space-y-2">
            {['Bride Groom', 'Casual Wear', 'Cocktail', 'Destination Wedding', 
              'Engagement', 'Evening Wear', 'Festive', 'Festive Wear'].map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.replace(/\s+/g, '-').toLowerCase()}
                  checked={selectedFilters.occasion.includes(option)}
                  onChange={() => handleFilterChange('occasion', option)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label 
                  htmlFor={option.replace(/\s+/g, '-').toLowerCase()}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default ProductFilter;