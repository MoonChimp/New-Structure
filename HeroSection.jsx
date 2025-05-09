import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a23] to-black text-white py-20 px-6 overflow-hidden">
      {/* Background image/art - placeholder */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none" 
        style={{ backgroundImage: "url('/images/astronaut-bg.png')" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            🚀 Welcome to MoonChimp
          </h1>
          <p className="text-lg text-gray-300">
            Explore the first evolving NFT metaverse where baby chimps become
            galactic rulers. Trade, play, evolve.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition"
              onClick={() => console.log("Connect wallet clicked")}
            >
              Connect Wallet
            </button>
            <button 
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition"
              onClick={() => console.log("Buy token clicked")}
            >
              Buy $MOONCHIMP
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            src="/images/moonchimp-hero.png"
            alt="MoonChimp Astronaut"
            className="w-[300px] md:w-[400px] lg:w-[500px] rounded-xl shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/placeholder.png";
              console.log("Failed to load hero image");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;