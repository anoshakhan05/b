"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, ShoppingBag } from "lucide-react";

export default function OrderSuccessPage() {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-6">
            <div className="max-w-md mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-gold/10 text-accent-gold mb-8">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h1 className="font-serif text-4xl text-text-primary mb-4">Order Confirmed</h1>
                <p className="text-muted-text mb-12 leading-relaxed">
                    Thank you for your purchase. We have received your order and will notify you once it ships.
                </p>

                <div className="bg-secondary p-6 rounded-sm border border-white/5 mb-12 text-left space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Order Number</span>
                        <span className="text-text-primary font-medium">#VEL-8492</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Date</span>
                        <span className="text-text-primary font-medium">February 14, 2026</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Total</span>
                        <span className="text-accent-gold font-medium">$2,900.00</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <Link href="/shop">
                        <Button className="w-full h-12">Continue Shopping</Button>
                    </Link>
                    <Link href="/" className="text-sm text-muted-text hover:text-text-primary transition-colors">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
