export default function AccountPage() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-md mx-auto px-4">
                <h1 className="text-3xl font-bold text-white mb-8 tracking-tighter text-center">ACCOUNT</h1>
                <div className="bg-secondary p-8 border border-white/5 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold tracking-widest">Email</label>
                        <input type="email" className="w-full bg-primary border border-white/10 p-3 text-white focus:border-accent-red focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-gray-500 font-bold tracking-widest">Password</label>
                        <input type="password" className="w-full bg-primary border border-white/10 p-3 text-white focus:border-accent-red focus:outline-none" />
                    </div>
                    <button className="w-full bg-white text-primary font-bold uppercase tracking-widest py-3 hover:bg-accent-red hover:text-white transition-colors">
                        Sign In
                    </button>
                    <div className="text-center">
                        <a href="#" className="text-xs text-gray-400 hover:text-white">Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
