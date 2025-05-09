import React from "react";

const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="relative bg-black text-white py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-red-600 skew-y-3 transform origin-top-left" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 pt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How to Buy</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Join the MoonChimp journey in just a few simple steps.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500 hover:border-red-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-4">Connect Wallet</h3>
            <p className="text-gray-400">
              Use Phantom or another Solana wallet. Click "Connect Wallet" to get started.
            </p>
          </div>
          
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500 hover:border-red-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-4">Buy $MOONCHIMP</h3>
            <p className="text-gray-400">
              Purchase tokens directly on our site using SOL. Fast, secure, and no middlemen.
            </p>
          </div>
          
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500 hover:border-red-400 transition-colors duration-300">
            <div className="text-3xl font-bold text-red-500 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-4">Join the Mission</h3>
            <p className="text-gray-400">
              Use tokens to evolve your NFT, participate in battles, and unlock rewards.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-red-600 -skew-y-3 transform origin-bottom-left" />
    </section>
  );
};

export default HowToBuy;