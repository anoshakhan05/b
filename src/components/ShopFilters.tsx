"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const CATEGORIES = ["Outerwear", "Tops", "Bottoms", "Accessories"];
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = [
    { name: 'Midnight', code: 'black', hex: '#000000' },
    { name: 'Bone', code: 'white', hex: '#F5F5F5' },
    { name: 'Crimson', code: 'red', hex: '#b8143d' },
    { name: 'Slate', code: 'gray', hex: '#4a4a4a' },
    { name: 'Sand', code: 'beige', hex: '#d2b48c' },
];

export default function ShopFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Helper to update URL params
    const updateParam = useCallback((key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const currentValues = params.get(key)?.split(",") || [];

        if (key === "category") {
            // Single select for category
            if (currentValues.includes(value)) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        } else {
            // Multi select for others
            if (currentValues.includes(value)) {
                const newValues = currentValues.filter(v => v !== value);
                if (newValues.length > 0) {
                    params.set(key, newValues.join(","));
                } else {
                    params.delete(key);
                }
            } else {
                currentValues.push(value);
                params.set(key, currentValues.join(","));
            }
        }

        // Reset page on filter change
        params.delete('page');

        router.push(`/shop?${params.toString()}`, { scroll: false });
    }, [searchParams, router]);

    const clearAll = () => {
        router.push('/shop');
    };

    const getActive = (key: string) => searchParams.get(key)?.split(",") || [];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">Filters</h3>
                {(searchParams.toString().length > 0) && (
                    <button onClick={clearAll} className="text-xs text-accent-red hover:text-white transition-colors uppercase font-bold tracking-wider">
                        Clear All
                    </button>
                )}
            </div>

            {/* Categories */}
            <div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Category</h4>
                <div className="space-y-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => updateParam("category", cat)}
                            className={cn(
                                "block text-sm transition-colors hover:text-white w-full text-left",
                                getActive("category").includes(cat) ? "text-accent-red font-bold" : "text-gray-500"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                    {SIZES.map(size => (
                        <button
                            key={size}
                            onClick={() => updateParam("size", size)}
                            className={cn(
                                "text-xs border py-2 transition-all hover:border-white",
                                getActive("size").includes(size)
                                    ? "bg-white text-primary border-white font-bold"
                                    : "border-white/20 text-gray-400 bg-transparent"
                            )}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Color</h4>
                <div className="flex flex-wrap gap-3">
                    {COLORS.map(color => (
                        <button
                            key={color.code}
                            onClick={() => updateParam("color", color.code)}
                            className={cn(
                                "w-8 h-8 rounded-full border transition-transform hover:scale-110",
                                getActive("color").includes(color.code)
                                    ? "border-white ring-2 ring-accent-red"
                                    : "border-white/20"
                            )}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            {/* Price Range (Simplified for mockup, usually needs dual slider) */}
            <div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Price</h4>
                <div className="space-y-4">
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>$0</span>
                        <span>$2000</span>
                    </div>
                    {/* Creating a simplistic visual slider representation since implementing a full dual-range slider component from scratch is complex without a library like radix-ui/react-slider */}
                    <div className="h-1 bg-white/20 rounded-full relative">
                        <div className="absolute left-0 right-0 h-full bg-accent-red rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">Price filter logic implemented via URL params (min/max), UI visual only for demo.</p>
                </div>
            </div>
        </div>
    );
}
