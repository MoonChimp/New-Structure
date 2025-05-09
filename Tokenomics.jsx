import React from "react";

const Tokenomics = () => {
  // Token distribution data for easier maintenance
  const tokenDistribution = [
    {
      id: 1,
      title: "Total Supply",
      percentage: 100,
      description: "1,000,000,000,000 $MOONCHIMP",
      color: "bg-purple-500"
    },
    {
      id: 2,
      title: "Presale",
      percentage: 40,
      description: "For early adopters in Phases 1–3",
      color: "bg-red-500"
    },
    {
      id: 3,
      title: "Liquidity",
      percentage: 20,
      description: "Locked to ensure long-term project health",
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Marketing",
      percentage: 15,
      description: "Strategic growth and partnerships",
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Development",
      percentage: 15,
      description: "Platform, NFTs, and Metaverse creation",
      color: "bg-yellow-500"
    },
    {
      id: 6,
      title: "Community & Rewards",
      percentage: 10,
      description: "Airdrops, contests, and staking incentives",
      color: "bg-pink-500"
    }
  ];
  
  return (
    <section id="tokenomics" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Tokenomics</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          $MOONCHIMP is designed to power the entire ecosystem — from NFT evolution and gameplay to DAO governance and staking.
        </p>

        {/* Token distribution pie chart visualization (simplified) */}
        <div className="w-full max-w-md mx-auto mb-12 h-4 rounded-full bg-gray-800 overflow-hidden flex">
          {tokenDistribution.filter(item => item.id !== 1).map((item) => (
            <div 
              key={item.id} 
              className={`${item.color} h-full`} 
              style={{ width: `${item.percentage}%` }}
              title={`${item.title}: ${item.percentage}%`}
            ></div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tokenDistribution.map((item) => (
            <div 
              key={item.id}
              className="bg-[#1a1a40] p-6 rounded-2xl shadow-md border border-red-500 hover:border-red-400 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item.id !== 1 && (
                  <span className={`${item.color} text-black font-bold px-2 py-1 rounded-full text-sm`}>
                    {item.percentage}%
                  </span>
                )}
              </div>
              <p className="text-gray-300">{item.description}</p>
              
              {/* Progress bar for visual representation */}
              {item.id !== 1 && (
                <div className="w-full h-2 bg-gray-800 rounded-full mt-3 overflow-hidden">
                  <div 
                    className={`${item.color} h-full rounded-full`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-4">Token Utility</h3>
          <ul className="max-w-2xl mx-auto text-left list-disc list-inside text-gray-300 space-y-2">
            <li>NFT Evolution & Upgrades</li>
            <li>Gameplay Mechanics & Power-ups</li>
            <li>DAO Governance Voting</li>
            <li>Staking Rewards</li>
            <li>In-game Purchases</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;