"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Ideally use a proper portal root, but body works for standard Next.js app dir if handled correctly
    if (typeof document === 'undefined') return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-secondary border-l border-white/10 z-[70] shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <h2 className="font-serif text-xl text-text-primary flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-accent-gold" />
                            Your Cart (2)
                        </h2>
                        <button onClick={onClose} className="text-muted-text hover:text-text-primary transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Cart Item 1 */}
                        <div className="flex gap-4">
                            <div className="relative w-20 h-24 bg-primary/50 rounded-sm overflow-hidden flex-shrink-0">
                                <Image src="https://placehold.co/600x800/1a1a1a/FFF?text=Obsidian" alt="Product" fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-text-primary font-medium">The Obsidian Tote</h3>
                                <p className="text-sm text-muted-text mb-2">Black / Gold</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 border border-white/10 rounded-full px-2 py-1">
                                        <button className="text-muted-text hover:text-text-primary"><Minus className="w-3 h-3" /></button>
                                        <span className="text-sm text-text-primary">1</span>
                                        <button className="text-muted-text hover:text-text-primary"><Plus className="w-3 h-3" /></button>
                                    </div>
                                    <p className="text-text-primary font-medium">$2,450</p>
                                </div>
                            </div>
                        </div>

                        {/* Cart Item 2 */}
                        <div className="flex gap-4">
                            <div className="relative w-20 h-24 bg-primary/50 rounded-sm overflow-hidden flex-shrink-0">
                                <Image src="https://placehold.co/600x800/C6A85E/FFF?text=Satchel" alt="Product" fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-text-primary font-medium">Golden Hour Satchel</h3>
                                <p className="text-sm text-muted-text mb-2">Tan / Gold</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 border border-white/10 rounded-full px-2 py-1">
                                        <button className="text-muted-text hover:text-text-primary"><Minus className="w-3 h-3" /></button>
                                        <span className="text-sm text-text-primary">1</span>
                                        <button className="text-muted-text hover:text-text-primary"><Plus className="w-3 h-3" /></button>
                                    </div>
                                    <p className="text-text-primary font-medium">$1,890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-white/5 space-y-4 bg-secondary">
                        <div className="flex justify-between text-text-primary">
                            <span>Subtotal</span>
                            <span>$4,340</span>
                        </div>
                        <p className="text-xs text-muted-text text-center">Shipping & taxes calculated at checkout</p>
                        <Button className="w-full" size="lg">Checkout</Button>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}
