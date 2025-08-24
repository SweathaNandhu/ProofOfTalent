"use client";

import Link from "next/link";
import Image from "next/image";
import { useChainConfig } from "@/lib/andrjs/hooks/useChainConfig";
import { ConnectWallet } from "../wallet";

export default function Home() {
  const { data, isLoading } = useChainConfig(
    process.env.NEXT_PUBLIC_CHAIN_IDENTIFIER || ""
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

      {/* Logo + Wallet connect */}
      <div className="relative mb-8 flex flex-col items-center">
        <Image
          src="/logo.png"
          className="w-20 mb-4"
          alt="logo"
          width={80}
          height={80}
        />
        <ConnectWallet />
        {isLoading ? (
          <p className="text-gray-400 text-sm mt-2">Loading chain info...</p>
        ) : (
          <p className="text-gray-400 text-sm mt-2">
            Connected to <b>{data?.displayName}</b>
          </p>
        )}
      </div>

      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Proof of Talent
        </h1>

        <p className="text-xl md:text-2xl gradient-text mb-16 leading-relaxed font-medium">
          Web3 Made Easier, Better, Faster
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About */}
          <div className="card hover:transform hover:scale-[1.02] text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Learn About Proof of Talent
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Proof of Talent is an on-chain suite of products, tools, and
              utilities enabled by a decentralized skill verification system.
            </p>
            <Link href="/about" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mint */}
          <div className="card hover:transform hover:scale-[1.02] text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Build a Skill Profile
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Skills are constructed from multiple verifiable credentials using
              our platform. Endorsements increase your reputation score.
            </p>
            <Link href="/mint" className="btn-primary">
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
