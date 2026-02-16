import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    slug: string;
    productId: string;
    name: string;
    price: number;
    color: string;
    size: string;
    qty: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (slug: string, color: string, size: string) => void;
    updateQty: (slug: string, color: string, size: string, qty: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}

const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) => set((state) => {
                const existingItemIndex = state.items.findIndex(
                    (item) => item.slug === newItem.slug && item.color === newItem.color && item.size === newItem.size
                );

                if (existingItemIndex > -1) {
                    const newItems = [...state.items];
                    newItems[existingItemIndex].qty += newItem.qty;
                    return { items: newItems };
                } else {
                    return { items: [...state.items, newItem] };
                }
            }),
            removeItem: (slug, color, size) => set((state) => ({
                items: state.items.filter(
                    (item) => !(item.slug === slug && item.color === color && item.size === size)
                )
            })),
            updateQty: (slug, color, size, qty) => set((state) => {
                if (qty <= 0) {
                    return {
                        items: state.items.filter(
                            (item) => !(item.slug === slug && item.color === color && item.size === size)
                        )
                    };
                }
                return {
                    items: state.items.map((item) => {
                        if (item.slug === slug && item.color === color && item.size === size) {
                            return { ...item, qty };
                        }
                        return item;
                    })
                };
            }),
            clearCart: () => set({ items: [] }),
            totalItems: () => get().items.reduce((acc, item) => acc + item.qty, 0),
            totalPrice: () => get().items.reduce((acc, item) => acc + (item.price * item.qty), 0),
        }),
        {
            name: 'veloria-cart-storage',
        }
    )
);

export default useCartStore;
