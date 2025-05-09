import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/moonchimp", icon: "fab fa-twitter" },
    { name: "Telegram", url: "https://t.me/moonchimp", icon: "fab fa-telegram" },
    { name: "Discord", url: "https://discord.gg/moonchimp", icon: "fab fa-discord" },
    { name: "Medium", url: "https://medium.com/@moonchimp", icon: "fab fa-medium" },
    { name: "GitHub", url: "https://github.com/moonchimp", icon: "fab fa-github" }
  ];
  
  // Navigation links
  const navLinks = [
    { name: "Home", url: "#" },
    { name: "About", url: "#about" },
    { name: "How to Buy", url: "#how-to-buy" },
    { name: "Roadmap", url: "#roadmap" },
    { name: "Tokenomics", url: "#tokenomics" },
    { name: "Presale", url: "#presale" }
  ];

  return (
    <footer className="relative bg-[#0a0014] text-white pt-16 pb-8 px-6 z-10">
      {/* Top red line accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              MOON<span className="text-red-500">CHIMP</span>
            </div>
            <p className="text-gray-400 mb-6">
              Join the cosmic adventure with MoonChimp and become part of the next evolution in crypto gaming and NFTs. Powered by Solana.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="text-red-500 mr-2">•</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#1a1a40] text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-red-500 w-full"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} MoonChimp. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-500 hover:text-red-500 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-red-500 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="mr-2">Built on</span>
              <img src="/images/solana-logo.png" alt="Solana" className="h-4" onError={(e) => {e.target.onerror = null; e.target.src = ""; e.target.className="hidden"}} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;