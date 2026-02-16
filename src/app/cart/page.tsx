export default function CartPage() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white mb-12 tracking-tighter">YOUR CART</h1>
                <div className="bg-secondary p-8 text-center text-gray-400">
                    <p>Your cart is currently empty.</p>
                    <div className="mt-6">
                        <a href="/shop" className="text-accent-red underline hover:text-white transition-colors">Continue Shopping</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
