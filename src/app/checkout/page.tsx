export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-white mb-8 tracking-tighter">CHECKOUT</h1>
                <div className="space-y-6">
                    <div className="bg-secondary p-6 border border-white/5">
                        <h2 className="text-white font-bold mb-4">1. SHIPPING</h2>
                        {/* Form placeholder */}
                    </div>
                    <div className="bg-secondary p-6 border border-white/5 opacity-50">
                        <h2 className="text-white font-bold mb-4">2. PAYMENT</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
