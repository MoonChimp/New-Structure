import React from "react";

const Roadmap = () => {
  // Road map phases data
  const roadmapPhases = [
    {
      id: 1,
      title: "Phase 1: Launch",
      image: "/images/roadmap1.png",
      milestones: [
        "Website Launch",
        "Token Presale (Phases 1-3)",
        "Wallet Connect Integration",
        "Comic Story Contest Begins"
      ]
    },
    {
      id: 2,
      title: "Phase 2: Expansion",
      image: "/images/roadmap2.png",
      milestones: [
        "MoonChimp NFT Collection Release",
        "Comic Publishing & Distribution",
        "DAO Governance Voting Begins",
        "Metaverse Development Alpha"
      ]
    }
  ];

  return (
    <section id="roadmap" className="bg-[#0d0d26] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">MoonChimp Roadmap</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Our journey to the moon is carefully planned with exciting milestones along the way.
        </p>

        <div className="relative">
          {/* Connecting line between roadmap items */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-600 hidden md:block transform -translate-x-1/2 z-0"></div>
          
          <div className="grid gap-10 md:grid-cols-2 relative z-10">
            {roadmapPhases.map((phase) => (
              <div 
                key={phase.id}
                className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 flex flex-col h-full"
              >
                <img
                  src={phase.image}
                  alt={`Roadmap Phase ${phase.id} Illustration`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/roadmap-placeholder.png";
                  }}
                />
                <h3 className="text-2xl font-semibold mb-2 text-red-500">{phase.title}</h3>
                <ul className="text-left list-disc list-inside text-gray-300 space-y-2 flex-grow">
                  {phase.milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;