import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "COLLECTIONS",
      links: ["Menswear", "Womenswear", "Bridal Couture", "Hair Stylish"]
    },
    {
      title: "EXPERIENCE", 
      links: ["Weddings", "Accessories", "Art of Retail"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Store", "Contact"]
    }
  ];

  return (
    <footer className="bg-[#f7f4ed] py-16">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif font-semibold mb-6 text-[#20000d] tracking-[0.15em]">
              ZUBAIR&nbsp;SAJJAD
            </h2>
            <p className="mb-8 leading-relaxed text-gray-700 font-light">
              Honoring a legacy built on impeccable craftsmanship, visionary design, and timeless sophistication.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#20000d] hover:text-[#20000d]/70 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-[#20000d] hover:text-[#20000d]/70 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-[#20000d] hover:text-[#20000d]/70 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-serif font-semibold mb-6 text-[#20000d] tracking-[0.1em]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-700 font-light hover:text-[#20000d] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-gray-600 font-light">
              © 2025 Zubair Sajjad. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a 
                href="#" 
                className="text-sm text-gray-600 font-light hover:text-[#20000d] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-600 font-light hover:text-[#20000d] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-600 font-light hover:text-[#20000d] transition-colors duration-300"
              >
                Size Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
