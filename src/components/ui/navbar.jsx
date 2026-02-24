"use client"; 

import { useState } from "react";
import Link from 'next/link'; 
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name : 'Contact', href: '/contact' },
    ]; 

    return (
        <nav className="sticky top-0 z-50 border-b bg-dark/95 backdrop-blur">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Website logo */}
                    <Link href="/" className="text-xl font-bold">
                        hnklua
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm hover:text-emerald-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t py-4">
                        <div className="flex flex-col space-y-3">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="py-2 hover:text-emerald-200 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export  { Navbar }; 