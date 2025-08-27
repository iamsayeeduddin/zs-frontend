import React from 'react';
// import { Play } from 'lucide-react';

const VideoShoppingLayout = () => {
  // Sample data for videos
  const featuredVideos = [
    { id: 1, title: "Men's Summer Collection", thumbnail: "/api/placeholder/300/180", views: "12K" },
    { id: 2, title: "Women's Spring Fashion", thumbnail: "/api/placeholder/300/180", views: "15K" },
    { id: 3, title: "Casual Wear Lookbook", thumbnail: "/api/placeholder/300/180", views: "8K" },
    { id: 4, title: "Formal Attire Guide", thumbnail: "/api/placeholder/300/180", views: "10K" }
  ];
  
  const recommendedVideos = [
    { id: 5, title: "Men's Accessories Guide", thumbnail: "/api/placeholder/220/140", duration: "5:23" },
    { id: 6, title: "Women's Footwear Collection", thumbnail: "/api/placeholder/220/140", duration: "7:45" },
    { id: 7, title: "Summer Hats and Scarves", thumbnail: "/api/placeholder/220/140", duration: "4:30" },
    { id: 8, title: "Denim Styling Tips", thumbnail: "/api/placeholder/220/140", duration: "6:15" }
  ];
  
  const bestSellers = [
    { id: 9, name: "Classic White Shirt", price: "$49.99", thumbnail: "/api/placeholder/280/200" },
    { id: 10, name: "Black Cotton Dress", price: "$79.99", thumbnail: "/api/placeholder/280/200" }
  ];

  return (
    <div className="mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Section 1: Top header with logo */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-800">ShopRight</h1>
        <p className="text-gray-600">Video Shopping Experience</p>
      </div>
      
      {/* Section 2: Featured video row with thumbnails */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Featured Videos</h2>
          <span className="text-indigo-600 cursor-pointer">See all</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {featuredVideos.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  {/* <Play className="text-white" size={32} /> */}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">{video.title}</h3>
                <p className="text-gray-500 text-xs">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section 3: Main featured video */}
      <div className="mb-8">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img 
            src="/api/placeholder/1200/500" 
            alt="Main video" 
            className="w-full h-64 object-cover opacity-80" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            {/* <Play size={64} className="mb-2" /> */}
            <h2 className="text-2xl font-bold mb-2">Spring-Summer Collection 2025</h2>
            <p className="text-lg">Discover the latest trends for men and women</p>
          </div>
        </div>
      </div>
      
      {/* Section 4: Video thumbnails row */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recommended Videos</h2>
          <span className="text-indigo-600 cursor-pointer">More</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {recommendedVideos.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section 5-6: Two featured items/videos */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          {bestSellers.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <img src={item.thumbnail} alt={item.name} className="w-full h-40 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <h3 className="font-medium text-white">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section 7: Best selling products */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Best Selling Products</h2>
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="../assets/banner1.png" 
              alt="Best selling collection" 
              className="w-full h-48 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-80 rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Summer Essentials</h3>
                <p className="mb-2">Our most popular items this season</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 8: Footer */}
     
    </div>
  );
};

export default VideoShoppingLayout;