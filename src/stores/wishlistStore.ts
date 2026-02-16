import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
    items: string[]; // slugs
    addItem: (slug: string) => void;
    removeItem: (slug: string) => void;
    hasItem: (slug: string) => boolean;
    toggleItem: (slug: string) => void;
}

const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (slug) => set((state) => {
                if (!state.items.includes(slug)) {
                    return { items: [...state.items, slug] };
                }
                return state;
            }),
            removeItem: (slug) => set((state) => ({
                items: state.items.filter((i) => i !== slug)
            })),
            hasItem: (slug) => get().items.includes(slug),
            toggleItem: (slug) => {
                const { hasItem, addItem, removeItem } = get();
                if (hasItem(slug)) {
                    removeItem(slug);
                } else {
                    addItem(slug);
                }
            }
        }),
        {
            name: 'veloria-wishlist-storage',
        }
    )
);

export default useWishlistStore;
