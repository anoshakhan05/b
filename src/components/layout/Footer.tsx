import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary py-20 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-text-primary">
                            VELORIA
                        </Link>
                        <p className="text-muted-text text-sm leading-relaxed">
                            Premium handcrafted leather bags for the modern woman. Elevate your style with timeless elegance.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-text-primary">Shop</h4>
                        <ul className="space-y-4 text-sm text-muted-text">
                            <li><Link href="/shop" className="hover:text-accent-gold transition-colors">All Bags</Link></li>
                            <li><Link href="/collections/new-arrivals" className="hover:text-accent-gold transition-colors">New Arrivals</Link></li>
                            <li><Link href="/collections/bestsellers" className="hover:text-accent-gold transition-colors">Bestsellers</Link></li>
                            <li><Link href="/accessories" className="hover:text-accent-gold transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-text-primary">Company</h4>
                        <ul className="space-y-4 text-sm text-muted-text">
                            <li><Link href="/about" className="hover:text-accent-gold transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-accent-gold transition-colors">Careers</Link></li>
                            <li><Link href="/stores" className="hover:text-accent-gold transition-colors">Store Locator</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6 text-text-primary">Support</h4>
                        <ul className="space-y-4 text-sm text-muted-text">
                            <li><Link href="/faq" className="hover:text-accent-gold transition-colors">FAQs</Link></li>
                            <li><Link href="/shipping" className="hover:text-accent-gold transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/care" className="hover:text-accent-gold transition-colors">Product Care</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent-gold transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-text">
                    <p>&copy; {new Date().getFullYear()} VELORIA. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-accent-gold transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-accent-gold transition-colors">Facebook</Link>
                        <Link href="#" className="hover:text-accent-gold transition-colors">Pinterest</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
