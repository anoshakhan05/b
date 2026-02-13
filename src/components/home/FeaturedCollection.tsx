"use client";

import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const featuredProducts = [
    {
        id: "1",
        name: "The Obsidian Tote",
        price: 2450,
        image: "https://placehold.co/600x800/1a1a1a/FFF?text=Obsidian+Tote",
        category: "Totes",
    },
    {
        id: "2",
        name: "Golden Hour Satchel",
        price: 1890,
        image: "https://placehold.co/600x800/C6A85E/FFF?text=Golden+Satchel",
        category: "Satchels",
    },
    {
        id: "3",
        name: "Midnight Clutch",
        price: 1200,
        image: "https://placehold.co/600x800/0D0D0D/FFF?text=Midnight+Clutch",
        category: "Clutches",
    },
];

export function FeaturedCollection() {
    return (
        <section className="py-20 md:py-32 bg-primary">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-lg">
                        <h2 className="font-serif text-3xl md:text-5xl text-text-primary">
                            Curated <span className="text-accent-gold italic">Excellence</span>
                        </h2>
                        <p className="text-muted-text">
                            Explore our most coveted pieces, where Italian craftsmanship meets contemporary design.
                        </p>
                    </div>
                    <Link href="/shop">
                        <Button variant="secondary">View All Collection</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
