import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const WomensWear = () => {
  const heroImage = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  
  return (
    <div className="bg-[#F7F4ED]">
      <Header />
      
      {/* Hero Section with Different Layout */}
      <section className="relative h-screen w-[95%] mx-auto overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform sm:scale-105 filter brightness-95 contrast-110 saturate-120"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(32, 0, 13, 0.6) 0%, rgba(32, 0, 13, 0.2) 50%, rgba(32, 0, 13, 0) 100%), url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#20000d]/30 via-transparent to-transparent" />
        
        <div className="relative z-10 h-full flex items-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <div className="bg-[#20000d]/20 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#f7f4ed]/10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#f7f4ed] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] font-serif font-semibold tracking-[0.15em]">
                FEMININE
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em]">ELEGANCE</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#f7f4ed]/95 font-light leading-relaxed mb-8">
                Where grace meets contemporary sophistication.
              </p>
              <button className="w-fit border-2 border-[#f7f4ed] px-10 py-4 rounded-lg text-[#f7f4ed] font-medium tracking-widest hover:bg-[#f7f4ed] hover:text-[#20000d] transition-colors duration-300 shadow-lg">
                DISCOVER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f7f4ed]">
        <div className="w-[95%] mx-auto py-10">
          
          {/* Featured Collection - Asymmetric Layout */}
          <div className="flex flex-col lg:flex-row gap-8 py-10 max-[1120px]:py-5">
            <div className="lg:w-3/5 max-[1120px]:w-full">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Featured Collection"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                />
                <span className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-tr from-[rgba(32,0,13,0.6)] via-transparent to-[rgba(32,0,13,0.3)] pointer-events-none" />
                <div className="absolute bottom-8 left-8 text-[#f7f4ed]">
                  <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">SPRING COUTURE</h3>
                  <p className="text-sm font-light tracking-[0.05em]">Exclusive Collection 2025</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 max-[1120px]:w-full flex flex-col justify-center space-y-6">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Dress"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
                <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.5)] to-transparent pointer-events-none" />
              </div>
              <div className="px-2">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-[#20000d] tracking-[0.05em]">Artisanal Craftsmanship</h2>
                <p className="text-gray-700 font-light leading-relaxed mb-6">
                  Each piece is meticulously crafted by master artisans, embodying the perfect fusion of traditional techniques and contemporary design aesthetics.
                </p>
                <button className="w-fit border border-[#20000d] px-8 py-3 rounded-md text-[#20000d] font-medium tracking-widest hover:bg-[#20000d] hover:text-[#f7f4ed] transition-colors duration-300">
                  EXPLORE COLLECTION
                </button>
              </div>
            </div>
          </div>

          {/* Designer Spotlight */}
          <div className="py-16 max-[1120px]:py-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-semibold mb-4 text-[#20000d] tracking-[0.15em]">Designer Spotlight</h2>
              <div className="w-24 h-1 bg-[#20000d] mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-1/2 max-[1120px]:w-full">
                <div className="relative h-96 lg:h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Designer Portrait"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-l from-[rgba(32,0,13,0.4)] to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="md:w-1/2 max-[1120px]:w-full flex flex-col justify-center px-4 lg:px-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2 text-[#20000d] tracking-[0.05em]">Aisha Rahman</h3>
                  <p className="text-sm text-gray-600 uppercase tracking-widest font-medium">Creative Director</p>
                </div>
                <p className="text-gray-700 font-light leading-relaxed mb-6 text-lg">
                  "My vision is to create timeless pieces that celebrate the modern woman's journey. Each design tells a story of strength, elegance, and authentic beauty."
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-[#20000d]/10 rounded-full text-sm font-medium text-[#20000d]">Sustainable Fashion</span>
                  <span className="px-4 py-2 bg-[#20000d]/10 rounded-full text-sm font-medium text-[#20000d]">Ethical Production</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories - Masonry Style */}
          <div className="py-16 max-[1120px]:py-10">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-[#20000d] tracking-[0.15em]">Our Collections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1 - Tall */}
              <div className="relative lg:row-span-2">
                <div className="h-96 lg:h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Evening Wear"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#f7f4ed]">
                    <h3 className="text-xl font-serif font-semibold mb-2 tracking-[0.1em]">EVENING WEAR</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Sophistication redefined</p>
                  </div>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="relative">
                <div className="h-60">
                  <img
                    src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Casual Elegance"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.6)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-[#f7f4ed]">
                    <h3 className="text-lg font-serif font-semibold tracking-[0.1em]">CASUAL ELEGANCE</h3>
                  </div>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="relative">
                <div className="h-60">
                  <img
                    src="https://images.unsplash.com/photo-1566479179817-c0ef7c0dc9ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Accessories"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.6)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-[#f7f4ed]">
                    <h3 className="text-lg font-serif font-semibold tracking-[0.1em]">ACCESSORIES</h3>
                  </div>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="relative md:col-span-2 lg:col-span-1">
                <div className="h-72">
                  <img
                    src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Bridal Collection"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 text-[#f7f4ed]">
                    <h3 className="text-xl font-serif font-semibold tracking-[0.1em]">BRIDAL COLLECTION</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Your special day deserves perfection</p>
                  </div>
                </div>
              </div>
              
              {/* Category 5 */}
              <div className="relative">
                <div className="h-60">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Footwear"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.6)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-[#f7f4ed]">
                    <h3 className="text-lg font-serif font-semibold tracking-[0.1em]">FOOTWEAR</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="py-16 max-[1120px]:py-10 bg-white/50 rounded-2xl mx-4">
            <div className="text-center max-w-4xl mx-auto px-8">
              <h2 className="text-3xl font-serif font-semibold mb-8 text-[#20000d] tracking-[0.15em]">What Our Clients Say</h2>
              <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-6 italic">
                "The attention to detail and craftsmanship is unparalleled. Each piece makes me feel confident and empowered."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#20000d]/20">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Sarah Mitchell"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x100/f7f4ed/20000d?text=SM";
                    }}
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#20000d] font-serif tracking-[0.05em]">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600 font-medium">Fashion Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomensWear;
