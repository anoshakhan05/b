"use client";

import { Button } from "@/components/ui/Button";
import { ModelViewer } from "@/components/3d/ModelViewer";
import { useState } from "react";
import { Star, Truck, ShieldCheck, Heart, ChevronDown, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
    const params = useParams();
    const [selectedColor, setSelectedColor] = useState("Black");
    const [openAccordion, setOpenAccordion] = useState<string | null>("materials");

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const colors = [
        { name: "Gold", hex: "#C6A85E" },
        { name: "Black", hex: "#1A1A1A" },
        { name: "Green", hex: "#1E3A2F" }, // Deep Emerald/Midnight Green
    ];

    const completeTheLook = [
        { id: "ring", name: "Solis Ring", price: 450, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800" },
        { id: "scarf", name: "Silk Noir Scarf", price: 290, image: "https://images.unsplash.com/photo-1584033319565-d603a1197779?auto=format&fit=crop&w=800" },
        { id: "cardholder", name: "Cognac Cardholder", price: 320, image: "https://images.unsplash.com/photo-1627123424574-183751a3d240?auto=format&fit=crop&w=800" },
    ];

    return (
        <div className="pt-20 min-h-screen bg-primary">
            <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
                {/* Left: 3D Viewer / Gallery */}
                <div className="relative h-[60vh] lg:h-auto bg-secondary/30 flex items-center justify-center overflow-hidden">
                    {/* In a real scenario, this might toggle between 3D and Images */}
                    <div className="absolute inset-0 w-full h-full">
                        <ModelViewer />
                    </div>
                    <div className="absolute bottom-8 left-8 flex gap-4">
                        {/* Thumbnails */}
                        <div className="relative w-16 h-16 bg-black/20 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                            <Image src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=200" alt="View 1" fill className="object-cover" />
                        </div>
                        <div className="relative w-16 h-16 bg-black/20 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                            <Image src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200" alt="View 2" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col p-8 lg:p-24 overflow-y-auto">
                    <div className="space-y-8 max-w-xl mx-auto lg:mx-0 w-full">

                        {/* Breadcrumbs / Tag */}
                        <div className="flex justify-between items-center border-b border-white/10 pb-6">
                            <nav className="text-xs tracking-widest uppercase text-muted-text">
                                <Link href="/shop" className="hover:text-accent-gold transition-colors">Shop</Link> /
                                <span className="text-text-primary ml-1">Satchels</span>
                            </nav>
                            <span className="text-accent-gold text-xs font-medium tracking-widest uppercase">New Season</span>
                        </div>

                        {/* Title & Price */}
                        <div>
                            <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-2">The Aurelia</h1>
                            <p className="font-serif italic text-2xl text-muted-text mb-6">Satchel</p>
                            <p className="text-3xl font-light text-text-primary">$2,450</p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-text leading-relaxed text-lg font-light">
                            Hand-crafted in Florence using full-grain calfskin. The Aurelia features our signature gold-plated hardware and a spacious interior lined with suede. A timeless silhouette for the modern muse.
                        </p>

                        {/* Color Selector */}
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-text-primary uppercase tracking-widest">Color: <span className="text-muted-text normal-case tracking-normal ml-2">{selectedColor}</span></p>
                            <div className="flex gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${selectedColor === color.name ? 'border-accent-gold scale-110 ring-2 ring-accent-gold/20' : 'border-transparent hover:scale-110'}`}
                                        style={{ backgroundColor: color.hex }}
                                        aria-label={`Select color ${color.name}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-6 flex flex-col gap-4">
                            <Button size="lg" className="w-full h-14 text-lg">Add to Bag</Button>
                            <button className="flex items-center justify-center gap-2 text-muted-text hover:text-accent-gold transition-colors text-sm uppercase tracking-widest py-2">
                                <Heart className="w-4 h-4" /> Save to Wishlist
                            </button>
                        </div>

                        {/* Accordions */}
                        <div className="pt-8 space-y-2 border-t border-white/10">
                            {[
                                { id: "materials", title: "Materials & Craftsmanship", content: "Full-grain Italian calfskin. Gold-plated hardware. Suede lining. Handmade in Florence, Italy." },
                                { id: "dimensions", title: "Dimensions", content: "Width: 32cm. Height: 24cm. Depth: 12cm. Handle Drop: 10cm. Strap Drop: 45-55cm." },
                                { id: "shipping", title: "Shipping & Returns", content: "Free express shipping worldwide. Returns accepted within 30 days of delivery." }
                            ].map((item) => (
                                <div key={item.id} className="border-b border-white/5">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex justify-between items-center py-4 text-left group"
                                    >
                                        <span className="font-serif text-lg text-text-primary group-hover:text-accent-gold transition-colors">{item.title}</span>
                                        <ChevronDown className={`w-5 h-5 text-muted-text transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180 text-accent-gold' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === item.id ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-muted-text text-sm leading-relaxed font-light">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Complete the Look */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12 text-center">Complete the Look</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {completeTheLook.map((item) => (
                            <div key={item.id} className="group cursor-pointer">
                                <div className="relative aspect-square bg-secondary mb-4 overflow-hidden rounded-sm">
                                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Plus className="w-5 h-5 text-text-primary" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-serif text-lg text-text-primary group-hover:text-accent-gold transition-colors">{item.name}</h3>
                                    <p className="text-muted-text mt-1">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
