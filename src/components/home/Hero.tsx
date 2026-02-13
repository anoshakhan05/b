"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ModelViewer } from "@/components/3d/ModelViewer";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
            {/* Background radial gradient */}
            <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(198,168,93,0.08),transparent_70%)] pointer-events-none" />

            <Container className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-text-primary">
                        Timeless <span className="text-accent-gold italic">Luxury</span> <br />
                        Redefined.
                    </h1>
                    <p className="text-muted-text text-lg md:text-xl max-w-lg leading-relaxed">
                        Discover the VELORIA collection. Handcrafted Italian leather bags designed for the modern woman who demands excellence.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/shop">
                            <Button size="lg">Explore Collection</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg">Our Story</Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="h-[500px] lg:h-[700px] w-full flex items-center justify-center relative"
                >
                    <ModelViewer />
                </motion.div>
            </Container>
        </section>
    );
}
