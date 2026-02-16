export default function LookbookPage() {
    return (
        <div className="min-h-screen bg-primary">
            <div className="h-[70vh] bg-secondary flex items-center justify-center">
                <h1 className="text-6xl font-bold text-white tracking-tighter">EDITORIAL</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[4/5] bg-secondary"></div>
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white">THE URBAN VOYAGE</h2>
                        <p className="text-gray-400">Exploring the depths of metropolitan life through texture and form.</p>
                        <button className="text-accent-red uppercase tracking-widest text-sm font-bold border-b border-accent-red pb-1">Shop The Look</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
