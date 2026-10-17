export interface Product {
  id: string;
  name: string;
  category: 'menswear' | 'womenswear' | 'denim' | 'festive' | 'fabrics' | 'accessories' | 'streetwear' | 'palazzo' | 'trousers';
  categoryLabel: string;
  priceMYR: number;
  sku: string;
  image: string;
  gallery: string[];
  description: string;
  fabricDetails: string;
  fit: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  featured?: boolean;
  isNewArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  description: string;
  itemCount: number;
  image: string;
  tagline: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export type Language = 'en' | 'bn' | 'ms';
