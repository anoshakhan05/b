"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 bg-primary min-h-screen">
            <Container className="max-w-2xl text-center">
                <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">Contact Us</h1>
                <p className="text-muted-text mb-12">
                    For inquiries regarding our collection, appointments, or assistance with your order, please contact our concierge team.
                </p>

                <form className="space-y-6 text-left">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm uppercase tracking-widest text-text-primary">Name</label>
                        <input type="text" id="name" className="w-full bg-secondary border border-white/10 p-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm uppercase tracking-widest text-text-primary">Email</label>
                        <input type="email" id="email" className="w-full bg-secondary border border-white/10 p-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm uppercase tracking-widest text-text-primary">Message</label>
                        <textarea id="message" rows={6} className="w-full bg-secondary border border-white/10 p-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"></textarea>
                    </div>
                    <Button className="w-full" size="lg">Send Message</Button>
                </form>
            </Container>
        </div>
    );
}
