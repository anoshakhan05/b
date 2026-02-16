"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useCartStore from "@/stores/cartStore";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cartCount = useCartStore(state => state.totalItems());
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/lookbook", label: "Lookbook" },
        { href: "/about", label: "About" }, // Optional but common
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled || isOpen
                    ? "bg-primary/90 backdrop-blur-md border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-accent-red transition-colors">
                        NOIR THREADS
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm uppercase tracking-widest hover:text-accent-red transition-colors",
                                    pathname === link.href ? "text-accent-red" : "text-gray-300"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-gray-300 hover:text-accent-red transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/account" className="text-gray-300 hover:text-accent-red transition-colors">
                            <User className="w-5 h-5" />
                        </Link>
                        <Link href="/cart" className="text-gray-300 hover:text-accent-red transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            {mounted && cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent-red transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-white/5">
                    <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg uppercase tracking-widest hover:text-accent-red transition-colors py-2",
                                    pathname === link.href ? "text-accent-red" : "text-gray-300"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex space-x-8 pt-4 border-t border-white/5 w-full justify-center">
                            <Link href="/account" onClick={() => setIsOpen(false)}>
                                <User className="w-6 h-6 text-gray-300" />
                            </Link>
                            <Link href="/cart" onClick={() => setIsOpen(false)}>
                                <ShoppingBag className="w-6 h-6 text-gray-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
