import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-gray-400 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold tracking-tighter">NOIR THREADS</h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Defining the future of luxury streetwear. Meticulously crafted for the modern avant-garde.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-accent-red transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent-red transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent-red transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Shop</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/shop?category=New" className="hover:text-accent-red transition-colors">New Arrivals</Link></li>
                            <li><Link href="/shop?category=Outerwear" className="hover:text-accent-red transition-colors">Outerwear</Link></li>
                            <li><Link href="/shop?category=Tops" className="hover:text-accent-red transition-colors">Tops</Link></li>
                            <li><Link href="/shop?category=Bottoms" className="hover:text-accent-red transition-colors">Bottoms</Link></li>
                            <li><Link href="/shop?category=Accessories" className="hover:text-accent-red transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/contact" className="hover:text-accent-red transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-accent-red transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-accent-red transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/care" className="hover:text-accent-red transition-colors">Garment Care</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h4>
                        <p className="text-sm mb-4">Subscribe for exclusive drops and early access.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="bg-primary border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-red transition-colors text-white placeholder-gray-600"
                            />
                            <button className="bg-white text-primary font-bold uppercase tracking-widest px-4 py-3 text-sm hover:bg-accent-red hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>© 2026 Noir Threads. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
