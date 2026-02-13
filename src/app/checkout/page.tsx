"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronLeft, Check, CreditCard, Truck } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
    const [step, setStep] = useState<"info" | "shipping" | "payment">("info");

    return (
        <div className="min-h-screen bg-primary pt-20 lg:pt-0">
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left: Form Section */}
                <div className="p-6 lg:p-12 xl:p-24 order-2 lg:order-1 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        {/* Logo / Home Link */}
                        <Link href="/" className="inline-block font-serif text-2xl text-text-primary mb-8 tracking-widest">
                            VELORIA
                        </Link>

                        {/* Breadcrumbs / Steps */}
                        <div className="flex items-center gap-4 text-sm mb-12">
                            <span className={`${step === "info" ? "text-accent-gold" : "text-text-primary"}`}>Information</span>
                            <span className="text-muted-text">/</span>
                            <span className={`${step === "shipping" ? "text-accent-gold" : step === "payment" ? "text-text-primary" : "text-muted-text"}`}>Shipping</span>
                            <span className="text-muted-text">/</span>
                            <span className={`${step === "payment" ? "text-accent-gold" : "text-muted-text"}`}>Payment</span>
                        </div>

                        {/* Form Steps */}
                        {step === "info" && (
                            <div className="space-y-6">
                                <h2 className="text-xl text-text-primary font-medium mb-6">Contact Information</h2>
                                <input type="email" placeholder="Email" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />

                                <h2 className="text-xl text-text-primary font-medium mt-8 mb-6">Shipping Address</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                    <input type="text" placeholder="Last Name" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                </div>
                                <input type="text" placeholder="Address" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                <input type="text" placeholder="Apartment, suite, etc." className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="City" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                    <input type="text" placeholder="Country" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                    <input type="text" placeholder="Postal Code" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                </div>
                                <input type="tel" placeholder="Phone" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />

                                <div className="flex items-center justify-between pt-6">
                                    <Link href="/cart" className="flex items-center text-muted-text hover:text-text-primary transition-colors text-sm">
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Return to Cart
                                    </Link>
                                    <Button onClick={() => setStep("shipping")}>Continue to Shipping</Button>
                                </div>
                            </div>
                        )}

                        {step === "shipping" && (
                            <div className="space-y-6">
                                <div className="border border-white/10 rounded-sm p-4 text-sm text-muted-text space-y-2 mb-8">
                                    <div className="flex justify-between">
                                        <span>Contact</span>
                                        <span className="text-text-primary">user@example.com</span>
                                        <button className="text-accent-gold hover:underline" onClick={() => setStep("info")}>Change</button>
                                    </div>
                                    <div className="border-t border-white/10 my-2"></div>
                                    <div className="flex justify-between">
                                        <span>Ship to</span>
                                        <span className="text-text-primary">123 Luxury Lane, NY</span>
                                        <button className="text-accent-gold hover:underline" onClick={() => setStep("info")}>Change</button>
                                    </div>
                                </div>

                                <h2 className="text-xl text-text-primary font-medium mb-6">Shipping Method</h2>
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between border border-accent-gold bg-accent-gold/5 p-4 rounded-sm cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-4 h-4 rounded-full border border-accent-gold flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-text-primary text-sm font-medium">Standard Shipping</span>
                                                <span className="text-xs text-muted-text">3-5 Business Days</span>
                                            </div>
                                        </div>
                                        <span className="text-text-primary font-medium">Free</span>
                                    </label>
                                    <label className="flex items-center justify-between border border-white/10 p-4 rounded-sm cursor-pointer hover:border-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-4 h-4 rounded-full border border-white/20"></div>
                                            <div className="flex flex-col">
                                                <span className="text-text-primary text-sm font-medium">Express Shipping</span>
                                                <span className="text-xs text-muted-text">1-2 Business Days</span>
                                            </div>
                                        </div>
                                        <span className="text-text-primary font-medium">$25.00</span>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between pt-6">
                                    <button onClick={() => setStep("info")} className="flex items-center text-muted-text hover:text-text-primary transition-colors text-sm">
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Return to Information
                                    </button>
                                    <Button onClick={() => setStep("payment")}>Continue to Payment</Button>
                                </div>
                            </div>
                        )}

                        {step === "payment" && (
                            <div className="space-y-6">
                                <div className="border border-white/10 rounded-sm p-4 text-sm text-muted-text space-y-2 mb-8">
                                    {/* ... Summary of previous steps ... */}
                                    <div className="flex justify-between">
                                        <span>Contact</span>
                                        <span className="text-text-primary">user@example.com</span>
                                        <button className="text-accent-gold hover:underline" onClick={() => setStep("info")}>Change</button>
                                    </div>
                                    <div className="border-t border-white/10 my-2"></div>
                                    <div className="flex justify-between">
                                        <span>Method</span>
                                        <span className="text-text-primary">Standard Shipping</span>
                                        <button className="text-accent-gold hover:underline" onClick={() => setStep("shipping")}>Change</button>
                                    </div>
                                </div>

                                <h2 className="text-xl text-text-primary font-medium mb-6">Payment</h2>
                                <div className="border border-white/10 rounded-sm overflow-hidden">
                                    <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
                                        <span className="text-text-primary text-sm font-medium flex items-center gap-2">
                                            <CreditCard className="w-4 h-4" /> Credit Card
                                        </span>
                                        <div className="flex gap-2">
                                            {/* Card Icons placeholder */}
                                            <div className="w-8 h-5 bg-white/10 rounded-sm"></div>
                                            <div className="w-8 h-5 bg-white/10 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4 bg-transparent">
                                        <div className="relative">
                                            <input type="text" placeholder="Card Number" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors pl-12" />
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <CreditCard className="w-5 h-5 text-muted-text" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="Expiration (MM/YY)" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                            <input type="text" placeholder="Security Code" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                        </div>
                                        <input type="text" placeholder="Name on Card" className="w-full bg-transparent border border-white/10 p-4 rounded-sm text-text-primary focus:border-accent-gold outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6">
                                    <button onClick={() => setStep("shipping")} className="flex items-center text-muted-text hover:text-text-primary transition-colors text-sm">
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Return to Shipping
                                    </button>
                                    <Link href="/checkout/success">
                                        <Button className="w-full md:w-auto">Pay Now</Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Order Summary */}
                <div className="order-1 lg:order-2 bg-secondary border-l border-white/10 p-6 lg:p-12 xl:p-24 hidden lg:block">
                    <div className="max-w-md mx-auto sticky top-24">
                        <div className="space-y-6 mb-8">
                            {/* Product 1 */}
                            <div className="flex gap-4">
                                <div className="relative w-16 h-20 bg-primary/50 rounded-sm overflow-hidden border border-white/10">
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-gold/80 rounded-full flex items-center justify-center text-xs font-medium z-10 text-primary">1</div>
                                    <Image src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=200" alt="Product" fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-text-primary font-medium">The Aurelia</h3>
                                        <p className="text-sm text-muted-text">Black / Gold</p>
                                    </div>
                                    <p className="text-text-primary">$2,450.00</p>
                                </div>
                            </div>
                            {/* Product 2 - Placeholder */}
                            <div className="flex gap-4">
                                <div className="relative w-16 h-20 bg-primary/50 rounded-sm overflow-hidden border border-white/10">
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-gold/80 rounded-full flex items-center justify-center text-xs font-medium z-10 text-primary">1</div>
                                    <Image src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=200" alt="Product" fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-text-primary font-medium">Solis Ring</h3>
                                        <p className="text-sm text-muted-text">Gold / 7</p>
                                    </div>
                                    <p className="text-text-primary">$450.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-6 space-y-4">
                            <div className="flex justify-between text-muted-text text-sm">
                                <span>Subtotal</span>
                                <span>$2,900.00</span>
                            </div>
                            <div className="flex justify-between text-muted-text text-sm">
                                <span>Shipping</span>
                                <span>{step === 'shipping' || step === 'payment' ? 'Calculated' : 'Next step'}</span>
                            </div>
                        </div>
                        <div className="border-t border-white/10 pt-6 mt-6">
                            <div className="flex justify-between items-end">
                                <span className="text-text-primary font-medium text-lg">Total</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xs text-muted-text">USD</span>
                                    <span className="text-text-primary font-serif text-2xl">$2,900.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
