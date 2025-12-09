export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  brand: {
    id: string;
    name: string;
    logo: string;
    verified: boolean;
  };
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  stock: number;
  isFeatured: boolean;
  isNew: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "African Print Maxi Dress",
    description: "Beautiful handcrafted maxi dress featuring authentic African print patterns. Made from premium cotton for comfort and durability.",
    price: 1299,
    salePrice: 999,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800"
    ],
    category: "fashion",
    subcategory: "dresses",
    brand: { id: "b1", name: "Afro Threads ZA", logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100", verified: true },
    rating: 4.8,
    reviewCount: 124,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Orange", hex: "#f97316" },
      { name: "Blue", hex: "#3b82f6" },
      { name: "Green", hex: "#22c55e" }
    ],
    stock: 15,
    isFeatured: true,
    isNew: false
  },
  {
    id: "2",
    name: "Ankara Headwrap Set",
    description: "Vibrant Ankara print headwrap set with matching accessories. Perfect for any occasion.",
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1612957696028-62f70f5a7d5b?w=800"
    ],
    category: "accessories",
    subcategory: "headwear",
    brand: { id: "b2", name: "Kente Kings", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", verified: true },
    rating: 4.9,
    reviewCount: 89,
    colors: [
      { name: "Multi", hex: "#f97316" },
      { name: "Gold", hex: "#eab308" }
    ],
    stock: 3,
    isFeatured: true,
    isNew: true
  },
  {
    id: "3",
    name: "Kente Print Blazer",
    description: "Modern slim-fit blazer featuring traditional Kente patterns. Perfect for formal and semi-formal occasions.",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
    ],
    category: "fashion",
    subcategory: "tops",
    brand: { id: "b2", name: "Kente Kings", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", verified: true },
    rating: 4.7,
    reviewCount: 56,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 8,
    isFeatured: false,
    isNew: false
  },
  {
    id: "4",
    name: "Beaded Statement Necklace",
    description: "Handcrafted beaded necklace featuring traditional Zulu beadwork patterns.",
    price: 599,
    salePrice: 449,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800"
    ],
    category: "accessories",
    subcategory: "jewelry",
    brand: { id: "b3", name: "Shweshwe Queens", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100", verified: false },
    rating: 4.6,
    reviewCount: 78,
    colors: [
      { name: "Multi", hex: "#ec4899" },
      { name: "Earth", hex: "#92400e" }
    ],
    stock: 2,
    isFeatured: true,
    isNew: false
  },
  {
    id: "5",
    name: "Shweshwe Print Skirt",
    description: "Classic A-line skirt made from authentic Shweshwe fabric. A South African fashion staple.",
    price: 749,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800"
    ],
    category: "fashion",
    subcategory: "bottoms",
    brand: { id: "b3", name: "Shweshwe Queens", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100", verified: false },
    rating: 4.5,
    reviewCount: 92,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blue", hex: "#1e40af" },
      { name: "Red", hex: "#dc2626" },
      { name: "Brown", hex: "#78350f" }
    ],
    stock: 12,
    isFeatured: false,
    isNew: true
  },
  {
    id: "6",
    name: "Dashiki Summer Top",
    description: "Light and breathable Dashiki print top, perfect for the South African summer.",
    price: 449,
    images: [
      "https://images.unsplash.com/photo-1612957696028-62f70f5a7d5b?w=800"
    ],
    category: "fashion",
    subcategory: "tops",
    brand: { id: "b1", name: "Afro Threads ZA", logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100", verified: true },
    rating: 4.4,
    reviewCount: 45,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Yellow", hex: "#eab308" },
      { name: "Orange", hex: "#f97316" }
    ],
    stock: 4,
    isFeatured: false,
    isNew: false
  },
  {
    id: "7",
    name: "Leather Beaded Sandals",
    description: "Genuine leather sandals with Maasai-inspired beadwork. Handcrafted with love.",
    price: 899,
    salePrice: 699,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800"
    ],
    category: "fashion",
    subcategory: "shoes",
    brand: { id: "b4", name: "Ubuntu Styles", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100", verified: true },
    rating: 4.9,
    reviewCount: 156,
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: [
      { name: "Brown", hex: "#78350f" },
      { name: "Black", hex: "#171717" }
    ],
    stock: 20,
    isFeatured: true,
    isNew: false
  },
  {
    id: "8",
    name: "Woven Basket Bag",
    description: "Traditional hand-woven basket bag with leather straps. Perfect for everyday use.",
    price: 549,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800"
    ],
    category: "accessories",
    subcategory: "bags",
    brand: { id: "b4", name: "Ubuntu Styles", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100", verified: true },
    rating: 4.7,
    reviewCount: 67,
    colors: [
      { name: "Natural", hex: "#d4a373" },
      { name: "Black", hex: "#171717" }
    ],
    stock: 9,
    isFeatured: true,
    isNew: true
  }
];

export const categories = [
  { id: "fashion", name: "Fashion", icon: "👗", count: 1240 },
  { id: "electronics", name: "Electronics", icon: "📱", count: 856 },
  { id: "beauty", name: "Beauty", icon: "💄", count: 523 },
  { id: "home", name: "Home & Living", icon: "🏠", count: 445 },
  { id: "accessories", name: "Accessories", icon: "👜", count: 678 },
  { id: "art", name: "Art & Crafts", icon: "🎨", count: 312 }
];

export const brands = [
  { id: "b1", name: "Afro Threads ZA", logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100", verified: true, products: 87, rating: 4.8 },
  { id: "b2", name: "Kente Kings", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", verified: true, products: 156, rating: 4.7 },
  { id: "b3", name: "Shweshwe Queens", logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100", verified: false, products: 92, rating: 4.5 },
  { id: "b4", name: "Ubuntu Styles", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100", verified: true, products: 134, rating: 4.9 }
];
