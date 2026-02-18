"use client";
import React from 'react';
import { Row, Flex } from './once-ui/Flex';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <nav className="
        px-6 py-3 rounded-full 
        bg-neutral-alpha-weak backdrop-blur-md 
        border border-neutral-alpha-medium
        flex gap-8 items-center
      ">
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-neutral-medium hover:text-neutral-strong transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;