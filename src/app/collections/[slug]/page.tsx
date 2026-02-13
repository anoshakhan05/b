"use client";

import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { useParams } from "next/navigation";

// Mock data - in a real app this would come from a backend/CMS based on the slug
const products = [
    {
        id: "1",
        name: "The Obsidian Tote",
        price: 2450,
        image: "https://placehold.co/600x800/1a1a1a/FFF?text=Obsidian+Tote",
        category: "Totes",
        color: "Black",
    },
    {
        id: "2",
        name: "Golden Hour Clutch",
        price: 1850,
        image: "https://placehold.co/600x800/C6A85E/FFF?text=Golden+Clutch",
        category: "Evening",
        color: "Gold",
    },
    {
        id: "3",
        name: "Ivory Satchel",
        price: 3200,
        image: "https://placehold.co/600x800/f5f5f5/333?text=Ivory+Satchel",
        category: "Satchels",
        color: "White",
    },
    {
        id: "4",
        name: "Midnight Crossbody",
        price: 1950,
        image: "https://placehold.co/600x800/0d0d0d/FFF?text=Midnight+Crossbody",
        category: "Crossbody",
        color: "Blue",
    },
];

export default function CollectionDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const title = slug ? slug.replace(/-/g, " ") : "Collection";

    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl text-text-primary capitalize mb-4">{title}</h1>
                    <p className="text-muted-text">Curated selection for the discerning collector.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
