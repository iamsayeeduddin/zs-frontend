// DesignerShowcase.jsx
import React from 'react';
import FourSectionLayout from './FourSectionLayout';

/* ----------------------------------------------
   50 / 50 split
   • mobile  : stacked
   • ≥ md    : two equal columns
   • reverse : flips image/content order
------------------------------------------------ */
const SplitSection = ({ image, heading, body, reverse = false }) => (
  <section
    className={`mx-auto w-full max-w-screen-xl flex flex-col md:flex-row gap-8 py-10 ${
      reverse ? 'md:flex-row-reverse' : ''
    }`}
  >
    {/* image */}
    <div className="relative md:w-1/2">
      <img
        src={image}
        alt={heading}
        className="w-full h-64 sm:h-80 md:h-[420px] object-cover object-top rounded-lg sm:rounded-xl lg:rounded-2xl"
      />
      <span className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-t from-[rgba(128,0,32,0.7)] to-transparent pointer-events-none" />
    </div>

    {/* content */}
    <div className="md:w-1/2 flex flex-col justify-center px-4 lg:px-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{heading}</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">{body}</p>

      <button className="w-fit self-center md:self-start border border-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-300">
        EXPLORE
      </button>
    </div>
  </section>
);

const DesignerShowcase = () => (
  <div className="bg-[#f7f4ed]">
    <SplitSection
      image="/src/assets/three.jpg"
      heading="Crafting Your Signature Summer Look"
      body="Discover how lightweight fabrics, bold patterns and statement accessories can elevate warm-weather outfits. From breathable linens to vibrant prints, learn the art of combining comfort with unmistakable style."
    />

    <FourSectionLayout />

    <SplitSection
      reverse
      image="/src/assets/three.jpg"
      heading="Modern Festive Essentials"
      body="From intricately embroidered sherwanis to contemporary silhouettes, explore designs that blend heritage with innovation. Perfect your festive wardrobe with curated pieces that speak luxury and elegance."
    />
  </div>
);

export default DesignerShowcase;
