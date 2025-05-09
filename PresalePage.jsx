import React, { useState, useEffect } from "react";

const PresalePage = () => {
  // State for wallet connection
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState(10);
  const [tokenPrice, setTokenPrice] = useState(0.007);
  const [showModal, setShowModal] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("");

  // Calculate total cost
  const totalCost = tokenAmount * tokenPrice;

  // Function to handle wallet connection
  const connectWallet = async () => {
    try {
      // Mock wallet connection for now
      setWalletConnected(true);
      setWalletAddress("7XYZ...ABC"); // This would be the actual wallet address
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress("");
  };

  // Function to handle token purchase
  const buyTokens = () => {
    if (!walletConnected) {
      return;
    }
    
    setShowModal(true);
    setTransactionStatus("Processing your purchase of " + tokenAmount + " MoonChimp tokens...");
    
    // Mock transaction processing
    setTimeout(() => {
      setTransactionStatus("Transaction successful! You have purchased " + tokenAmount + " MoonChimp tokens.");
    }, 2000);
  };

  return (
    <div className="relative bg-black min-h-screen text-white">
      {/* Stars background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div id="stars" className="absolute inset-0"></div>
        <div id="stars2" className="absolute inset-0"></div>
        <div id="stars3" className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-12">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
            MoonChimp!
          </div>
          <div>
            {!walletConnected ? (
              <button 
                onClick={connectWallet}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">{walletAddress}</span>
                <button 
                  onClick={disconnectWallet}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-xl text-xs transition"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
            MoonChimp! Presale is Live
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the cosmic adventure and be among the first to own MoonChimp tokens!
          </p>
        </section>

        {/* Presale Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Current Phase</h3>
            <p className="text-2xl font-bold">Phase 1</p>
          </div>
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Token Price</h3>
            <p className="text-2xl font-bold">0.007 SOL</p>
          </div>
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Tokens Sold</h3>
            <p className="text-2xl font-bold">35/100</p>
          </div>
          <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Time Remaining</h3>
            <p className="text-2xl font-bold">3 Days</p>
          </div>
        </section>

        {/* Presale Phases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Presale Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border-2 border-red-500">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Phase 1</h3>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Active</span>
              </div>
              <div className="text-2xl font-bold mb-3">0.007 SOL</div>
              <div className="h-2 bg-gray-800 rounded-full mb-2">
                <div className="h-full bg-red-600 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <div className="text-gray-300">35/100 tokens sold</div>
            </div>
            
            <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Phase 2</h3>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Coming Soon</span>
              </div>
              <div className="text-2xl font-bold mb-3">0.008 SOL</div>
              <div className="h-2 bg-gray-800 rounded-full mb-2">
                <div className="h-full bg-gray-600 rounded-full" style={{ width: "0%" }}></div>
              </div>
              <div className="text-gray-300">0/150 tokens sold</div>
            </div>
            
            <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Phase 3</h3>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Coming Soon</span>
              </div>
              <div className="text-2xl font-bold mb-3">0.009 SOL</div>
              <div className="h-2 bg-gray-800 rounded-full mb-2">
                <div className="h-full bg-gray-600 rounded-full" style={{ width: "0%" }}></div>
              </div>
              <div className="text-gray-300">0/200 tokens sold</div>
            </div>
          </div>
        </section>

        {/* Purchase Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Purchase MoonChimp Tokens</h2>
          <div className="max-w-md mx-auto bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
            {walletConnected ? (
              <div className="purchase-form">
                <div className="mb-4">
                  <label htmlFor="token-amount" className="block text-gray-300 mb-2">
                    Amount of tokens to purchase:
                  </label>
                  <input
                    type="number"
                    id="token-amount"
                    min="1"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(Number(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
                  />
                </div>
                <div className="mb-6 bg-[#111130] p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Price per token:</span>
                    <span className="text-red-500 font-semibold">0.007 SOL</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total cost:</span>
                    <span className="text-red-500">{totalCost.toFixed(3)} SOL</span>
                  </div>
                </div>
                <button
                  onClick={buyTokens}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
                >
                  Buy Tokens
                </button>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-300 mb-4">
                  Connect your wallet to participate in the presale
                </p>
                <button
                  onClick={connectWallet}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why MoonChimp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Cosmic Game Experience</h3>
              <p className="text-gray-300">
                Join the lunar adventure with MoonChimp and experience an immersive crypto game that rewards players with real value.
              </p>
            </div>
            <div className="bg-[#1a1a40] p-6 rounded-2xl shadow-lg border border-red-500">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Earn While You Play</h3>
              <p className="text-gray-300">
                Mine MoonCoins, upgrade your mining power, and participate in games to earn more tokens that can be traded on exchanges.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-800">
          <p className="mb-4">© 2025 MoonChimp! - All Rights Reserved</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-red-500 transition">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition">Telegram</a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition">Discord</a>
          </div>
        </footer>
      </div>

      {/* Transaction Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1a1a40] p-6 rounded-2xl max-w-md w-full border border-red-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Transaction Status</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-300 hover:text-white"
              >
                &times;
              </button>
            </div>
            <div className="p-4 bg-[#111130] rounded-lg">
              {transactionStatus}
            </div>
          </div>
        </div>
      )}

      {/* CSS for stars background would be in a separate CSS file */}
    </div>
  );
};

export default PresalePage;