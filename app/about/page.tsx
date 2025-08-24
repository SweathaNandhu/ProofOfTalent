export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-white">About Proof of Talent</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Revolutionizing skill verification through blockchain technology and decentralized reputation systems.
        </p>
      </div>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="card text-left">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-white">The Problem</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              Fake resumes and credentials are rampant in hiring
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              Skills can't be easily verified across platforms
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              Traditional certificates can be forged or lost
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">•</span>
              No portable reputation system exists
            </li>
          </ul>
        </div>
        
        <div className="card text-left">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Our Solution</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <strong>Soulbound NFTs (CW721):</strong> Non-transferable skill certificates
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <strong>Endorsement Tokens (CW20):</strong> Community validation rewards
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <strong>IPFS Evidence:</strong> Immutable proof storage
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">•</span>
              <strong>On-chain Reputation:</strong> Transparent credibility scores
            </li>
          </ul>
        </div>
        
        <div className="card text-left">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Why Web3?</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <strong>Verifiable:</strong> Anyone can verify authenticity on-chain
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <strong>Tamper-proof:</strong> Immutable blockchain records
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <strong>Portable:</strong> Use credentials across any platform
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <strong>Trustless:</strong> No central authority needed
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 card text-center">
        <h3 className="text-3xl font-semibold mb-8 text-white">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-semibold">1</div>
            <h4 className="font-semibold mb-2 text-white">Mint Skill</h4>
            <p className="text-sm text-gray-400">Create a Soulbound NFT with evidence</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-semibold">2</div>
            <h4 className="font-semibold mb-2 text-white">Share Profile</h4>
            <p className="text-sm text-gray-400">Display your skills publicly</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-semibold">3</div>
            <h4 className="font-semibold mb-2 text-white">Get Endorsed</h4>
            <p className="text-sm text-gray-400">Earn CW20 tokens from validation</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-semibold">4</div>
            <h4 className="font-semibold mb-2 text-white">Build Reputation</h4>
            <p className="text-sm text-gray-400">Accumulate verifiable credibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}