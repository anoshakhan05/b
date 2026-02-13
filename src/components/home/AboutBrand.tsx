"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function AboutBrand() {
    return (
        <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
            <Container className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] md:aspect-square bg-primary/20 rounded-sm overflow-hidden">
                    <Image
                        src="https://placehold.co/800x800/222/FFF?text=Craftsmanship"
                        alt="Artisan crafting a leather bag"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-text-primary leading-tight">
                        The Art of <br />
                        <span className="text-accent-gold italic">Perfection</span>
                    </h2>
                    <div className="space-y-4 text-muted-text text-lg leading-relaxed">
                        <p>
                            Born from a passion for timeless elegance, VELORIA represents the pinnacle of Italian leather craftsmanship.
                            Each piece is meticulously handcrafted by master artisans in Florence, preserving centuries-old traditions
                            while embracing modern design sensibilities.
                        </p>
                        <p>
                            We believe true luxury lies in the details—from the selection of the finest full-grain hides to the
                            hand-painted edges and custom gold-plated hardware.
                        </p>
                    </div>
                    <Button variant="outline" size="lg">Our Story</Button>
                </div>
            </Container>
        </section>
    );
}
