import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#0d0d26] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What is MoonChimp?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-12">
          MoonChimp is more than just a token — it's an evolving NFT metaverse built on the Solana blockchain.
          Raise your chimp from baby to Elder through battles, strategy, and social interaction. Join a galaxy where tokens,
          tribes, and chimps collide in a play-to-evolve universe.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <h3 className="text-xl font-semibold mb-3">Evolving NFTs</h3>
            <p className="text-gray-400">
              Chimps grow through XP from interactions. Trade, play, battle, and evolve your way to Elder status.
            </p>
          </div>
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <h3 className="text-xl font-semibold mb-3">Crypto + Gameplay</h3>
            <p className="text-gray-400">
              $MOONCHIMP fuels your journey. Buy tokens, enter battles, access staking pools, and earn rewards.
            </p>
          </div>
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <h3 className="text-xl font-semibold mb-3">Metaverse & DAO</h3>
            <p className="text-gray-400">
              Form tribes, govern your galaxy, and unlock secrets. Elder chimps shape the MoonChimp future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
