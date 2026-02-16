"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ShopFilters from "@/components/ShopFilters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ChevronDown } from "lucide-react";

function ShopContent() {
    const searchParams = useSearchParams();
    const [sort, setSort] = useState("newest");

    // Filtering Logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Category
        const category = searchParams.get("category");
        if (category) {
            result = result.filter((p) => p.category === category);
        }

        // Sizes
        const sizes = searchParams.get("size")?.split(",");
        if (sizes && sizes.length > 0) {
            result = result.filter((p) => p.sizes.some((s) => sizes.includes(s)));
        }

        // Colors
        const colors = searchParams.get("color")?.split(",");
        if (colors && colors.length > 0) {
            result = result.filter((p) => p.colors.some((c) => colors.includes(c.code)));
        }

        // Search
        const query = searchParams.get("q")?.toLowerCase();
        if (query) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.tags.some(t => t.toLowerCase().includes(query))
            );
        }

        // Sort
        if (sort === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        } else {
            // default newest (random/id based for now as we don't have dates)
            result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        }

        return result;
    }, [searchParams, sort]);

    return (
        <div className="min-h-screen bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-white tracking-tighter mb-2">CATALOG</h1>
                        <p className="text-gray-400 text-sm">
                            Showing <span className="text-white font-bold">{filteredProducts.length}</span> results
                        </p>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="appearance-none bg-secondary border border-white/10 text-white text-sm py-3 pl-4 pr-10 focus:outline-none focus:border-white/30 cursor-pointer min-w-[200px]"
                        >
                            <option value="newest">Sort by: Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <ShopFilters />
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-24 text-center border border-dashed border-white/10">
                                <p className="text-gray-400 uppercase tracking-widest text-sm">No products found</p>
                                <button
                                    onClick={() => window.location.href = '/shop'}
                                    className="mt-4 text-accent-red hover:text-white underline text-sm"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-primary flex items-center justify-center text-white">Loading...</div>}>
            <ShopContent />
        </Suspense>
    )
}
