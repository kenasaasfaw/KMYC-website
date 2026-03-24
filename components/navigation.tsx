'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Church } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Fuul Duree', href: '/' },
    { name: "Waa'ee Keenya", href: '/about' },
    { name: 'Lallaba', href: '/sermons' },
    { name: 'Tajaajiloota', href: '/ministries' },
    { name: 'Sagantaalee', href: '/events' },
    { name: 'Suuraa', href: '/gallery' },
    { name: 'Gaaffii Kadhannaa', href: '/prayer-request' },
    { name: 'Nu Quunnamaa', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
              <Church className="h-8 w-8 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-blue-900 text-lg leading-tight">
                WWWMY Qaaqee
              </span>
              <span className="text-xs text-gray-600">Waldaa Kiristoos</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}