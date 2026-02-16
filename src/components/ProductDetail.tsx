"use client";

import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import useWishlistStore from "@/stores/wishlistStore";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [openAccordion, setOpenAccordion] = useState<string | null>("description");
    const [isAdding, setIsAdding] = useState(false);

    const addItemToCart = useCartStore(state => state.addItem);
    const { toggleItem: toggleWishlist, hasItem: inWishlist } = useWishlistStore();

    // Helper to ensure hydration match for wishlist
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const getStock = (color: string, size: string) => {
        return product.stockByVariant[`${color}-${size}`] || 0;
    };

    const isSizeDisabled = (size: string) => {
        if (!selectedColor) return false; // Don't disable until color selected (or disable all?)
        // User requirement: "Disable sizes if out of stock for selected color"
        return getStock(selectedColor, size) === 0;
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) return;

        setIsAdding(true);

        // Simulate small delay for effect
        setTimeout(() => {
            addItemToCart({
                slug: product.slug,
                productId: product.id,
                name: product.name,
                price: product.price,
                color: selectedColor,
                size: selectedSize,
                qty: 1,
                image: product.images[0]
            });
            setIsAdding(false);
            // Optional: Show toast or open drawer
        }, 500);
    };

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-[3/4] bg-secondary w-full relative overflow-hidden group">
                    {product.images[0] ? (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                            <img src={product.images[0]} alt={product.name} className="object-cover w-full h-full" />
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
                    )}

                    {/* Wishlist Toggle - Absolute Top Right */}
                    <button
                        onClick={() => toggleWishlist(product.slug)}
                        className={cn(
                            "absolute top-4 right-4 z-10 p-2 transition-all hover:scale-110",
                            mounted && inWishlist(product.slug) ? "text-accent-red fill-current" : "text-white hover:text-accent-red"
                        )}
                    >
                        <Heart className={cn("w-6 h-6", mounted && inWishlist(product.slug) && "fill-current")} />
                    </button>
                </div>
                {/* Thumbnails (Mockup) */}
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-secondary cursor-pointer hover:ring-1 hover:ring-white"></div>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="space-y-8 sticky top-24 h-fit">
                <div>
                    <div className="flex justify-between items-start">
                        <h1 className="text-4xl font-bold text-white tracking-tighter mb-2">{product.name}</h1>
                        <span className="text-gray-500 text-sm uppercase tracking-widest">{product.category}</span>
                    </div>
                    <p className="text-accent-red text-xl font-medium">${product.price.toFixed(2)}</p>
                </div>

                {/* Accordion: Description */}
                <div className="border-t border-white/10">
                    <button
                        onClick={() => toggleAccordion("description")}
                        className="w-full py-4 flex justify-between items-center text-left"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Description</span>
                        {openAccordion === "description" ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300 space-y-4 text-sm text-gray-400", openAccordion === "description" ? "max-h-96 pb-4" : "max-h-0")}>
                        <p>{product.description}</p>
                        <p><strong>Material:</strong> {product.material}</p>
                    </div>
                </div>

                {/* Selectors */}
                <div className="space-y-8 py-6">
                    {/* Color */}
                    <div>
                        <label className="text-xs uppercase font-bold text-gray-500 tracking-widest block mb-3">
                            Color: <span className="text-white ml-2">{selectedColor ? product.colors.find(c => c.code === selectedColor)?.name : 'Select a color'}</span>
                        </label>
                        <div className="flex space-x-3">
                            {product.colors.map((c) => (
                                <button
                                    key={c.code}
                                    onClick={() => {
                                        setSelectedColor(c.code);
                                        setSelectedSize(null); // Reset size on color change as stock varies
                                    }}
                                    className={cn(
                                        "w-10 h-10 rounded-full border transition-all hover:scale-110",
                                        selectedColor === c.code
                                            ? "border-white ring-2 ring-accent-red scale-110"
                                            : "border-white/20 hover:border-white"
                                    )}
                                    style={{ backgroundColor: c.hex }}
                                    title={c.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div>
                        <label className="text-xs uppercase font-bold text-gray-500 tracking-widest block mb-3">
                            Size: <span className="text-white ml-2">{selectedSize || 'Select a size'}</span>
                            {!selectedColor && <span className="text-accent-red ml-2 text-[10px] normal-case">(Please select a color first)</span>}
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                            {product.sizes.map(size => {
                                const disabled = isSizeDisabled(size);
                                return (
                                    <button
                                        key={size}
                                        disabled={!selectedColor || disabled}
                                        onClick={() => setSelectedSize(size)}
                                        className={cn(
                                            "h-12 border flex items-center justify-center transition-colors text-sm font-medium",
                                            selectedSize === size
                                                ? "bg-white text-primary border-white"
                                                : "bg-transparent text-white border-white/20 hover:border-white",
                                            (!selectedColor || disabled) && "opacity-30 cursor-not-allowed border-white/5 hover:border-white/5 bg-white/5 text-gray-500 relative"
                                        )}
                                    >
                                        {size}
                                        {/* Cross out if disabled and color selected */}
                                        {selectedColor && disabled && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full h-[1px] bg-gray-500 rotate-45 transform"></div>
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={!selectedColor || !selectedSize || isAdding}
                        className={cn(
                            "w-full font-bold uppercase tracking-widest py-4 transition-all duration-300",
                            (selectedColor && selectedSize)
                                ? "bg-white text-primary hover:bg-accent-red hover:text-white"
                                : "bg-gray-800 text-gray-500 cursor-not-allowed",
                            isAdding && "bg-accent-red text-white cursor-wait"
                        )}
                    >
                        {isAdding ? "Adding..." : (!selectedColor || !selectedSize) ? "Select Options" : "Add to Cart"}
                    </button>
                </div>

                {/* More Accordions */}
                <div className="border-t border-white/10">
                    <button
                        onClick={() => toggleAccordion("fit")}
                        className="w-full py-4 flex justify-between items-center text-left"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Fit Notes</span>
                        {openAccordion === "fit" ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300 text-sm text-gray-400", openAccordion === "fit" ? "max-h-48 pb-4" : "max-h-0")}>
                        <p>{product.fitNotes}</p>
                    </div>
                </div>
                <div className="border-t border-b border-white/10">
                    <button
                        onClick={() => toggleAccordion("shipping")}
                        className="w-full py-4 flex justify-between items-center text-left"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Shipping & Returns</span>
                        {openAccordion === "shipping" ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300 text-sm text-gray-400", openAccordion === "shipping" ? "max-h-48 pb-4" : "max-h-0")}>
                        <p>Complimentary shipping on all orders. Returns accepted within 14 days of delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
