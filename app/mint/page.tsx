'use client';

import { useState } from 'react';

// Placeholder function for blockchain integration
const mintSkillNFT = async (skillData: any) => {
  console.log('Minting Skill NFT:', skillData);
  // TODO: Integrate with CosmWasm CW721 contract
  return Promise.resolve({ success: true, tokenId: Math.random().toString() });
};

export default function Mint() {
  const [formData, setFormData] = useState({
    skillName: '',
    issuer: '',
    evidenceLink: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await mintSkillNFT(formData);
      alert('Skill NFT minted successfully!');
      setFormData({ skillName: '', issuer: '', evidenceLink: '' });
    } catch (error) {
      alert('Error minting NFT. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-4 text-white">Mint Skill NFT</h1>
          <p className="text-gray-400">Create a verifiable, soulbound credential for your skill</p>
        </div>
        
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="skillName" className="block text-sm font-medium mb-3 text-white">
                Skill Name *
              </label>
              <input
                type="text"
                id="skillName"
                name="skillName"
                value={formData.skillName}
                onChange={handleChange}
                placeholder="e.g., Smart Contract Development, Data Science, UX Design"
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="issuer" className="block text-sm font-medium mb-3 text-white">
                Issuer / Organization *
              </label>
              <input
                type="text"
                id="issuer"
                name="issuer"
                value={formData.issuer}
                onChange={handleChange}
                placeholder="e.g., MIT, Google, Self-Issued"
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="evidenceLink" className="block text-sm font-medium mb-3 text-white">
                Evidence Link *
              </label>
              <input
                type="url"
                id="evidenceLink"
                name="evidenceLink"
                value={formData.evidenceLink}
                onChange={handleChange}
                placeholder="IPFS hash, GitHub repo, certificate URL, or portfolio link"
                className="input-field"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Provide verifiable evidence of your skill (certificate, project, portfolio, etc.)
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
              <h3 className="font-medium mb-3 text-white">Important Notes:</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Skill NFTs are soulbound (non-transferable)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Evidence links should be permanent (IPFS recommended)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  False claims may be challenged by the community
                </li>
              </ul>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full btn-primary py-4 text-lg font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Minting...' : 'Mint Skill NFT'}
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Gas fees apply. Make sure your wallet is connected and funded.
          </p>
        </div>
      </div>
    </div>
  );
}