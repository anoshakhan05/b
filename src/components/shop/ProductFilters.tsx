"use client";

import { Button } from "@/components/ui/Button";

const categories = ["All", "Totes", "Satchels", "Clutches", "Crossbody", "Backpacks"];
const colors = ["#000000", "#FFFFFF", "#C6A85E", "#8B4513", "#1A1A1A"];

export function ProductFilters() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="font-serif text-lg mb-4 text-text-primary">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button className="text-sm text-muted-text hover:text-accent-gold transition-colors text-left w-full">
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-serif text-lg mb-4 text-text-primary">Colors</h3>
                <div className="flex gap-2">
                    {colors.map((color) => (
                        <button
                            key={color}
                            className="w-6 h-6 rounded-full border border-white/20 hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                            aria-label={`Select color ${color}`}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-serif text-lg mb-4 text-text-primary">Price Range</h3>
                <div className="flex items-center gap-4 text-sm text-muted-text">
                    <span>$0</span>
                    <input type="range" min="0" max="5000" className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent-gold" />
                    <span>$5000+</span>
                </div>
            </div>
        </div>
    );
}
