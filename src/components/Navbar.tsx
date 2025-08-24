'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/mint', label: 'Mint Skill' },
  { href: '/explore', label: 'Explore' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
            Proof of Talent
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>MAINNET</span>
            </div>
            <button className="btn-secondary text-sm px-4 py-2">
              Create
            </button>
            <button className="btn-primary text-sm px-4 py-2">
              Connect Wallet
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800/50',
                    pathname === item.href
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}