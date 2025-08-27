import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const MensWear = () => {
  const heroImage = "https://images.unsplash.com/photo-1625502709763-f5f3880c17ba?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <div className="bg-[#F7F4ED]">
      <Header />
      
      {/* Hero Section - Text positioned right for variety */}
      <section className="relative h-screen w-[95%] mx-auto overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform sm:scale-105 filter brightness-90 contrast-110 saturate-110"
          style={{ 
            backgroundImage: `linear-gradient(to left, rgba(32, 0, 13, 0.7) 0%, rgba(32, 0, 13, 0.3) 50%, rgba(32, 0, 13, 0) 100%), url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#20000d]/30 via-transparent to-transparent" />
        
        <div className="relative z-10 h-full flex items-center justify-end px-8 lg:px-16">
          <div className="max-w-2xl">
            <div className="bg-[#20000d]/20 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#f7f4ed]/10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#f7f4ed] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] font-serif font-semibold tracking-[0.1em]">
                MODERN
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em]">MENSWEAR</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#f7f4ed]/95 font-light leading-relaxed mb-8">
                Defining elegance through timeless craftsmanship.
              </p>
              <button className="w-fit border-2 border-[#f7f4ed] px-10 py-4 rounded-lg text-[#f7f4ed] font-semibold tracking-widest hover:bg-[#f7f4ed] hover:text-[#20000d] transition-colors duration-300 shadow-lg">
                DISCOVER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f7f4ed]">
        <div className="w-[95%] mx-auto py-10">
          
          {/* Featured Collection - Different proportions than WomensWear */}
          <div className="flex flex-col lg:flex-row gap-8 py-10 max-[1120px]:py-5">
            <div className="lg:w-2/5 max-[1120px]:w-full flex flex-col justify-center space-y-6">
              <div className="px-2">
                <h2 className="text-4xl font-serif font-semibold mb-4 text-[#20000d] tracking-[0.05em]">Sartorial Excellence</h2>
                <p className="text-gray-700 font-light leading-relaxed mb-6 text-lg">
                  Every piece reflects our commitment to precision tailoring and contemporary sophistication. From boardroom to ballroom, our collection defines the modern gentleman.
                </p>
                <button className="w-fit border border-[#20000d] px-8 py-3 rounded-md text-[#20000d] font-medium tracking-widest hover:bg-[#20000d] hover:text-[#f7f4ed] transition-colors duration-300">
                  VIEW COLLECTION
                </button>
              </div>
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Menswear Detail"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
                <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.5)] to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="lg:w-3/5 max-[1120px]:w-full">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Featured Menswear"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                />
                <span className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-tl from-[rgba(32,0,13,0.6)] via-transparent to-[rgba(32,0,13,0.3)] pointer-events-none" />
                <div className="absolute bottom-8 left-8 text-[#f7f4ed]">
                  <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">SIGNATURE SUITS</h3>
                  <p className="text-sm font-light tracking-[0.05em]">Tailored Perfection 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Master Craftsman Spotlight - Different from Designer Spotlight */}
          <div className="py-16 max-[1120px]:py-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-semibold mb-4 text-[#20000d] tracking-[0.15em]">Master Craftsman</h2>
              <div className="w-24 h-1 bg-[#20000d] mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 max-[1120px]:w-full">
                <div className="relative h-96 lg:h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Master Tailor"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-[rgba(32,0,13,0.4)] to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="md:w-1/2 max-[1120px]:w-full flex flex-col justify-center px-4 lg:px-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-semibold mb-2 text-[#20000d] tracking-[0.05em]">Ahmed Hassan</h3>
                  <p className="text-sm text-gray-600 uppercase tracking-widest font-medium">Head Tailor</p>
                </div>
                <p className="text-gray-700 font-light leading-relaxed mb-6 text-lg">
                  "With over three decades of experience, I believe every garment should tell a story of precision and artistry. Each stitch represents our unwavering commitment to excellence."
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-[#20000d]/10 rounded-full text-sm font-medium text-[#20000d]">Bespoke Tailoring</span>
                  <span className="px-4 py-2 bg-[#20000d]/10 rounded-full text-sm font-medium text-[#20000d]">Heritage Techniques</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories - Different grid layout */}
          <div className="py-16 max-[1120px]:py-10">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-[#20000d] tracking-[0.15em]">Signature Collections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category 1 - Full width on mobile, half on desktop */}
              <div className="relative">
                <div className="h-80">
                  <img
                    src="https://images.unsplash.com/photo-1521336575826-9fcf6f285e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Business Suits"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#f7f4ed]">
                    <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">BUSINESS SUITS</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Professional excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="relative">
                <div className="h-80">
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Formal Shoes"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#f7f4ed]">
                    <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">FORMAL SHOES</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Handcrafted luxury</p>
                  </div>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="relative">
                <div className="h-80">
                  <img
                    src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury Watches"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#f7f4ed]">
                    <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">TIMEPIECES</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Precision & elegance</p>
                  </div>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="relative">
                <div className="h-80">
                  <img
                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Accessories"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  />
                  <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-[rgba(32,0,13,0.7)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#f7f4ed]">
                    <h3 className="text-2xl font-serif font-semibold mb-2 tracking-[0.1em]">ACCESSORIES</h3>
                    <p className="text-sm font-light tracking-[0.05em]">Finishing touches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Success Stories - Different from testimonial */}
          <div className="py-16 max-[1120px]:py-10 bg-white/50 rounded-2xl mx-4">
            <div className="text-center max-w-4xl mx-auto px-8">
              <h2 className="text-3xl font-serif font-semibold mb-8 text-[#20000d] tracking-[0.15em]">Client Success Stories</h2>
              <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-6 italic">
                "The impeccable tailoring and attention to detail transformed not just my wardrobe, but my confidence in the boardroom."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#20000d]/20">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="James Thompson"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x100/f7f4ed/20000d?text=JT";
                    }}
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#20000d] font-serif tracking-[0.05em]">James Thompson</p>
                  <p className="text-sm text-gray-600 font-medium">CEO, Thompson Industries</p>
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

export default MensWear;
