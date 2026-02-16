import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} | Noir Threads`,
        description: product.description,
    };
}

export default function ProductPage({ params }: PageProps) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-primary pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProductDetail product={product} />
            </div>
        </div>
    );
}
