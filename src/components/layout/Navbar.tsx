"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About Brand" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-primary/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-text-primary">
                        VELORIA
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm uppercase tracking-widest text-text-primary/80 hover:text-accent-gold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="hidden md:flex items-center gap-6 text-text-primary">
                        <button className="hover:text-accent-gold transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="hover:text-accent-gold transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button
                            className="hover:text-accent-gold transition-colors relative"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-gold rounded-full text-[8px] flex items-center justify-center text-primary font-bold">
                                2
                            </span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </Container>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-primary border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm uppercase tracking-widest text-text-primary hover:text-accent-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
