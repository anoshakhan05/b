export type Color = {
    name: string;
    hex: string;
    code: string;
};

export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number;
    compareAtPrice?: number;
    category: 'Outerwear' | 'Tops' | 'Bottoms' | 'Accessories';
    colors: Color[];
    sizes: string[];
    images: string[];
    description: string;
    material: string;
    care: string;
    fitNotes: string;
    tags: string[];
    rating: number;
    reviewCount: number;
    stockByVariant: Record<string, number>; // key: colorCode-size
};

const colors: Record<string, Color> = {
    black: { name: 'Midnight', hex: '#000000', code: 'midnight' },
    white: { name: 'Bone', hex: '#F5F5F5', code: 'bone' },
    red: { name: 'Crimson', hex: '#b8143d', code: 'crimson' },
    gray: { name: 'Slate', hex: '#4a4a4a', code: 'slate' },
    beige: { name: 'Sand', hex: '#d2b48c', code: 'sand' },
};

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const dummyDescription = "Expertly tailored for the modern avant-garde. Constructed from premium materials with a focus on silhouette and durability.";

// Helper to generate stock with some out-of-stock items
const generateStock = (prodColors: Color[], prodSizes: string[]) => {
    const stock: Record<string, number> = {};
    prodColors.forEach(c => {
        prodSizes.forEach(s => {
            // 25% chance of being out of stock, otherwise 1-10 items
            stock[`${c.code}-${s}`] = Math.random() < 0.25 ? 0 : Math.floor(Math.random() * 10) + 1;
        });
    });
    return stock;
};

export const products: Product[] = [
    // Outerwear (5 items)
    {
        id: '1', slug: 'structural-trench-coat', name: 'Structural Trench Coat', price: 850, category: 'Outerwear',
        colors: [colors.black, colors.beige], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '100% Cotton Gabardine', care: 'Dry Clean Only', fitNotes: 'Oversized fit',
        tags: ['new', 'featured'], rating: 4.8, reviewCount: 12,
        stockByVariant: generateStock([colors.black, colors.beige], sizes)
    },
    {
        id: '2', slug: 'leather-bomber', name: 'Asymmetric Leather Bomber', price: 1200, category: 'Outerwear',
        colors: [colors.black, colors.red], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '100% Lambskin', care: 'Specialist Leather Clean', fitNotes: 'Cropped fit',
        tags: ['premium'], rating: 5.0, reviewCount: 5,
        stockByVariant: generateStock([colors.black, colors.red], sizes)
    },
    {
        id: '3', slug: 'wool-overcoat', name: 'Draped Wool Overcoat', price: 950, category: 'Outerwear',
        colors: [colors.gray, colors.black], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '100% Merino Wool', care: 'Dry Clean Only', fitNotes: 'Relaxed fit',
        tags: ['winter'], rating: 4.7, reviewCount: 8,
        stockByVariant: generateStock([colors.gray, colors.black], sizes)
    },
    {
        id: '4', slug: 'tech-shell-jacket', name: 'Tech Shell Jacket', price: 650, category: 'Outerwear',
        colors: [colors.black, colors.white], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Gore-Tex', care: 'Machine Wash Cold', fitNotes: 'Standard fit',
        tags: ['techwear'], rating: 4.6, reviewCount: 15,
        stockByVariant: generateStock([colors.black, colors.white], sizes)
    },
    {
        id: '5', slug: 'velvet-blazer', name: 'Midnight Velvet Blazer', price: 780, category: 'Outerwear',
        colors: [colors.black, colors.red], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Silk Velvet', care: 'Dry Clean Only', fitNotes: 'Tailored fit',
        tags: ['evening'], rating: 4.9, reviewCount: 7,
        stockByVariant: generateStock([colors.black, colors.red], sizes)
    },

    // Tops (5 items)
    {
        id: '6', slug: 'mesh-panel-top', name: 'Mesh Panel Top', price: 250, category: 'Tops',
        colors: [colors.black, colors.white], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Nylon Mesh', care: 'Hand Wash', fitNotes: 'Slim fit',
        tags: ['layering'], rating: 4.5, reviewCount: 20,
        stockByVariant: generateStock([colors.black, colors.white], sizes)
    },
    {
        id: '7', slug: 'oversized-graphic-tee', name: 'Oversized Graphic Tee', price: 120, category: 'Tops',
        colors: [colors.black, colors.gray], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Heavyweight Cotton', care: 'Machine Wash', fitNotes: 'Oversized',
        tags: ['casual'], rating: 4.8, reviewCount: 45,
        stockByVariant: generateStock([colors.black, colors.gray], sizes)
    },
    {
        id: '8', slug: 'silk-button-down', name: 'Fluid Silk Shirt', price: 380, category: 'Tops',
        colors: [colors.white, colors.beige], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '100% Silk', care: 'Dry Clean', fitNotes: 'Relaxed',
        tags: ['luxury'], rating: 4.7, reviewCount: 10,
        stockByVariant: generateStock([colors.white, colors.beige], sizes)
    },
    {
        id: '9', slug: 'deconstructed-hoodie', name: 'Deconstructed Hoodie', price: 320, category: 'Tops',
        colors: [colors.black, colors.red], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'French Terry', care: 'Machine Wash', fitNotes: 'Boxy fit',
        tags: ['streetwear'], rating: 4.6, reviewCount: 25,
        stockByVariant: generateStock([colors.black, colors.red], sizes)
    },
    {
        id: '10', slug: 'mock-neck-sweater', name: 'Ribbed Mock Neck', price: 290, category: 'Tops',
        colors: [colors.gray, colors.black], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Wool Blend', care: 'Hand Wash', fitNotes: 'Fitted',
        tags: ['essential'], rating: 4.8, reviewCount: 18,
        stockByVariant: generateStock([colors.gray, colors.black], sizes)
    },

    // Bottoms (5 items)
    {
        id: '11', slug: 'wide-leg-trousers', name: 'Pleated Wide Leg Trousers', price: 450, category: 'Bottoms',
        colors: [colors.black, colors.beige], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Wool Gabardine', care: 'Dry Clean', fitNotes: 'High-waisted',
        tags: ['featured'], rating: 4.9, reviewCount: 14,
        stockByVariant: generateStock([colors.black, colors.beige], sizes)
    },
    {
        id: '12', slug: 'cargo-tech-pants', name: 'Utility Cargo Pants', price: 380, category: 'Bottoms',
        colors: [colors.black, colors.gray], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Technical Nylon', care: 'Machine Wash', fitNotes: 'Adjustable fit',
        tags: ['utilitarian'], rating: 4.7, reviewCount: 30,
        stockByVariant: generateStock([colors.black, colors.gray], sizes)
    },
    {
        id: '13', slug: 'leather-pants', name: 'Straight Leather Trousers', price: 890, category: 'Bottoms',
        colors: [colors.black, colors.red], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Lambskin', care: 'Specialist Clean', fitNotes: 'Straight leg',
        tags: ['premium', 'leather'], rating: 5.0, reviewCount: 6,
        stockByVariant: generateStock([colors.black, colors.red], sizes)
    },
    {
        id: '14', slug: 'distressed-denim', name: 'Distressed Selvedge Denim', price: 320, category: 'Bottoms',
        colors: [colors.black, colors.gray], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '14oz Denim', care: 'Machine Wash', fitNotes: 'Slim Straight',
        tags: ['denim'], rating: 4.5, reviewCount: 22,
        stockByVariant: generateStock([colors.black, colors.gray], sizes)
    },
    {
        id: '15', slug: 'tailored-shorts', name: 'Bermuda Tailored Shorts', price: 280, category: 'Bottoms',
        colors: [colors.black, colors.beige], sizes, images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Linen Blend', care: 'Dry Clean', fitNotes: 'Knee length',
        tags: ['summer'], rating: 4.6, reviewCount: 11,
        stockByVariant: generateStock([colors.black, colors.beige], sizes)
    },

    // Accessories (5 items)
    {
        id: '16', slug: 'leather-harness', name: 'Sculptural Leather Harness', price: 420, category: 'Accessories',
        colors: [colors.black, colors.red], sizes: ['S', 'M', 'L'], images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Calf Leather', care: 'Wipe Clean', fitNotes: 'Adjustable',
        tags: ['statement'], rating: 4.9, reviewCount: 9,
        stockByVariant: generateStock([colors.black, colors.red], ['S', 'M', 'L'])
    },
    {
        id: '17', slug: 'silver-chain', name: 'Industrial Chain Necklace', price: 180, category: 'Accessories',
        colors: [colors.white], sizes: ['One Size'], images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Sterling Silver', care: 'Polish with cloth', fitNotes: '20 inch chain',
        tags: ['jewelry'], rating: 4.8, reviewCount: 35,
        stockByVariant: generateStock([colors.white], ['One Size'])
    },
    {
        id: '18', slug: 'leather-tote', name: 'Minimalist Tote Bag', price: 650, category: 'Accessories',
        colors: [colors.black, colors.beige], sizes: ['One Size'], images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Full Grain Leather', care: 'Specialist Clean', fitNotes: 'Large capacity',
        tags: ['bags'], rating: 4.9, reviewCount: 16,
        stockByVariant: generateStock([colors.black, colors.beige], ['One Size'])
    },
    {
        id: '19', slug: 'silk-scarf', name: 'Printed Silk Scarf', price: 150, category: 'Accessories',
        colors: [colors.black, colors.red], sizes: ['One Size'], images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: '100% Silk', care: 'Dry Clean', fitNotes: 'Square 90x90cm',
        tags: ['accessories'], rating: 4.7, reviewCount: 12,
        stockByVariant: generateStock([colors.black, colors.red], ['One Size'])
    },
    {
        id: '20', slug: 'bucket-hat', name: 'Technical Bucket Hat', price: 95, category: 'Accessories',
        colors: [colors.black, colors.white], sizes: ['S/M', 'L/XL'], images: ['/images/placeholder.jpg'],
        description: dummyDescription, material: 'Nylon', care: 'Hand Wash', fitNotes: 'Standard',
        tags: ['headwear'], rating: 4.5, reviewCount: 28,
        stockByVariant: generateStock([colors.black, colors.white], ['S/M', 'L/XL'])
    },
];
