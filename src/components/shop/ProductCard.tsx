"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative">
            <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-secondary rounded-sm">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-10">
                    <button className="p-2 bg-primary/80 backdrop-blur-sm rounded-full text-text-primary hover:text-accent-gold transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                        <Heart className="w-4 h-4" />
                    </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button className="w-full" size="sm">Quick View</Button>
                </div>
            </Link>
            <div className="mt-4 space-y-1 text-center">
                <p className="text-xs text-muted-text uppercase tracking-widest">{product.category}</p>
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg text-text-primary group-hover:text-accent-gold transition-colors">{product.name}</h3>
                </Link>
                <p className="text-accent-gold font-medium">${product.price.toLocaleString()}</p>
            </div>
        </div>
    );
}
