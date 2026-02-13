"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container>
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <div className="space-y-6">
                        <h1 className="font-serif text-5xl md:text-7xl text-text-primary leading-tight">
                            Crafted for <br />
                            <span className="text-accent-gold italic">Eternity.</span>
                        </h1>
                        <p className="text-muted-text text-lg leading-relaxed max-w-md">
                            VELORIA is more than a brand; it is a testament to the enduring power of Italian craftsmanship and timeless design.
                        </p>
                    </div>
                    <div className="relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
                        <Image
                            src="https://placehold.co/800x1000/222/FFF?text=Atelier"
                            alt="Our Atelier"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-32">
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-text-primary">Heritage</h3>
                        <p className="text-muted-text text-sm leading-relaxed">
                            Rooted in the heart of Florence, our atelier preserves techniques passed down through generations of master leatherworkers.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-text-primary">Materiality</h3>
                        <p className="text-muted-text text-sm leading-relaxed">
                            We source only the finest full-grain calfskin from ethical tanneries, ensuring each piece develops a unique patina over time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-text-primary">Sustainability</h3>
                        <p className="text-muted-text text-sm leading-relaxed">
                            Committed to responsible luxury, we minimize waste and use vegetable tanning processes to protect our artisans and the environment.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
