import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";

const products = [
    { id: "1", name: "The Obsidian Tote", price: 2450, image: "https://placehold.co/600x800/1a1a1a/FFF?text=Obsidian", category: "Totes" },
    { id: "2", name: "Golden Hour Satchel", price: 1890, image: "https://placehold.co/600x800/C6A85E/FFF?text=Golden", category: "Satchels" },
    { id: "3", name: "Midnight Clutch", price: 1200, image: "https://placehold.co/600x800/0D0D0D/FFF?text=Midnight", category: "Clutches" },
    { id: "4", name: "Classic Shopper", price: 1550, image: "https://placehold.co/600x800/333/FFF?text=Shopper", category: "Totes" },
    { id: "5", name: "Evening Box", price: 2100, image: "https://placehold.co/600x800/444/FFF?text=Box", category: "Clutches" },
    { id: "6", name: "Travel Weekender", price: 3200, image: "https://placehold.co/600x800/555/FFF?text=Weekender", category: "Travel" },
    { id: "7", name: "Classic Cognac Satchel", price: 2200, image: "/images/cognac-satchel.jpg", category: "Satchels" },
];

export default function ShopPage() {
    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl text-text-primary mb-4">The Collection</h1>
                    <p className="text-muted-text max-w-xl mx-auto">
                        Explore our full range of handcrafted luxury leather goods.
                    </p>
                </div>

                <div className="grid md:grid-cols-[250px_1fr] gap-12">
                    <aside className="hidden md:block">
                        <ProductFilters />
                    </aside>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
