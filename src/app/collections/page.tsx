"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const collections = [
    {
        id: "new-arrivals",
        title: "New Arrivals",
        image: "https://placehold.co/800x600/1a1a1a/FFF?text=New+Arrivals",
        description: "The latest additions to our exquisite lineup.",
    },
    {
        id: "bestsellers",
        title: "Bestsellers",
        image: "https://placehold.co/800x600/C6A85E/FFF?text=Bestsellers",
        description: "Our most coveted pieces, loved by modern icons.",
    },
    {
        id: "totes",
        title: "Totes",
        image: "https://placehold.co/800x600/333/FFF?text=Totes",
        description: "Spacious luxury for your daily essentials.",
    },
    {
        id: "evening",
        title: "Evening",
        image: "https://placehold.co/800x600/444/FFF?text=Evening",
        description: "Elegant companions for unforgettable nights.",
    },
];

export default function CollectionsPage() {
    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container>
                <div className="mb-16 text-center space-y-4">
                    <h1 className="font-serif text-4xl md:text-6xl text-text-primary">Our Collections</h1>
                    <p className="text-muted-text max-w-xl mx-auto text-lg">
                        Discover the artistry behind each series. From timeless classics to avant-garde statements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            href={`/shop?category=${collection.id}`}
                            className="group relative block aspect-[16/9] overflow-hidden rounded-sm"
                        >
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {collection.title}
                                </h2>
                                <p className="text-text-primary/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {collection.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
