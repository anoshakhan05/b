import Link from "next/link";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Determine if out of stock (simple check for now, can be more complex)
    const isOutOfStock = Object.values(product.stockByVariant).every(qty => qty === 0);

    return (
        <Link href={`/product/${product.slug}`} className="group block h-full">
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                    {product.images[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.tags.includes('new') && (
                        <span className="bg-white text-primary text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
                            New
                        </span>
                    )}
                    {isOutOfStock && (
                        <span className="bg-gray-500 text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
                            Sold Out
                        </span>
                    )}
                </div>

                {/* Quick Add overlay (optional, but requested in high fidelity) */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <span className="text-xs uppercase font-bold tracking-widest">View Details</span>
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="text-white font-medium text-sm tracking-wide group-hover:text-accent-red transition-colors">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        ${product.price.toFixed(2)}
                    </p>
                    <div className="flex gap-1">
                        {product.colors.map((c) => (
                            <div
                                key={c.code}
                                className="w-3 h-3 rounded-full border border-white/20"
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
