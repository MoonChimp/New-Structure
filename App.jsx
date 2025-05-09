import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import NFTShowcase from "./NFTShowcase";
import Tokenomics from "./Tokenomics";
import PresalePage from "./PresalePage";
import Footer from "./Footer";

// Import or setup CSS
import "./App.css"; // Make sure to create this file with any global styles

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showPresale, setShowPresale] = useState(false);

  // Simulate loading assets
  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events to update active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", element: document.getElementById("hero") },
        { id: "about", element: document.getElementById("about") },
        { id: "how-to-buy", element: document.getElementById("how-to-buy") },
        { id: "roadmap", element: document.getElementById("roadmap") },
        { id: "nft", element: document.getElementById("nft-showcase") },
        { id: "tokenomics", element: document.getElementById("tokenomics") },
      ];

      let currentSection = "home";
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (const section of sections) {
        if (!section.element) continue;

        const sectionTop = section.element.offsetTop;
        const sectionBottom = sectionTop + section.element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-24 h-24 mb-4 mx-auto">
            {/* Loading animation */}
            <svg className="animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            MOONCHIMP
          </h2>
          <p className="text-gray-300">Preparing for liftoff...</p>
        </div>
      </div>
    );
  }

  // Navigation bar
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold text-white">
            MOON<span className="text-red-500">CHIMP</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            
              href="#hero"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "home" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              Home
            </a>
            
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "about" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              About
            </a>
            
              href="#how-to-buy"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "how-to-buy" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              How to Buy
            </a>
            
              href="#roadmap"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "roadmap" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              Roadmap
            </a>
            
              href="#nft-showcase"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "nft" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              NFTs
            </a>
            
              href="#tokenomics"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === "tokenomics" ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              Tokenomics
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowPresale(!showPresale)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow-lg transition"
          >
            {showPresale ? "Back to Home" : "Buy Tokens"}
          </button>
        </div>
      </div>
    </nav>
  );

  // Mobile Navigation (fixed at bottom)
  const MobileNavigation = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300">
      <div className="grid grid-cols-6 gap-1 p-2">
        
          href="#hero"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "home" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-home text-xs"></i>
          <span className="text-xs mt-1">Home</span>
        </a>
        
          href="#about"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "about" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-info-circle text-xs"></i>
          <span className="text-xs mt-1">About</span>
        </a>
        
          href="#how-to-buy"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "how-to-buy" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-shopping-cart text-xs"></i>
          <span className="text-xs mt-1">Buy</span>
        </a>
        
          href="#roadmap"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "roadmap" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-map-marked-alt text-xs"></i>
          <span className="text-xs mt-1">Roadmap</span>
        </a>
        
          href="#nft-showcase"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "nft" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-images text-xs"></i>
          <span className="text-xs mt-1">NFTs</span>
        </a>
        
          href="#tokenomics"
          className={`flex flex-col items-center justify-center p-2 rounded-lg ${
            activeSection === "tokenomics" ? "text-red-500 bg-gray-800" : "text-white"
          }`}
        >
          <i className="fas fa-coins text-xs"></i>
          <span className="text-xs mt-1">Tokens</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen relative">
      {/* Background stars (CSS defined in App.css) */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div id="stars" className="absolute inset-0"></div>
        <div id="stars2" className="absolute inset-0"></div>
        <div id="stars3" className="absolute inset-0"></div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 pb-20 md:pb-0">
        {showPresale ? (
          <PresalePage />
        ) : (
          <>
            {/* Landing Page Sections */}
            <div id="hero">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="how-to-buy">
              <HowToBuy />
            </div>
            <div id="roadmap">
              <Roadmap />
            </div>
            <div id="nft-showcase">
              <NFTShowcase />
            </div>
            <div id="tokenomics">
              <Tokenomics />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 right-6 md:bottom-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition z-40"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;