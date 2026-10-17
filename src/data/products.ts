import { Product, Category } from '../types';
import { DK_IMAGES } from './dkImages';

export const CATEGORIES: Category[] = [
  {
    id: 'streetwear',
    name: 'DK NEO // 2099 Streetwear',
    nameBn: 'ডিকে নিও ২০৯৯ আরবান স্ট্রিটওয়্যার',
    description: 'Heavyweight drop-shoulder graphic tees engineered from 260 GSM combed cotton with cyberpunk anime and mech illustrations.',
    itemCount: 16,
    image: DK_IMAGES.streetwear.futureCyberCarBlack,
    tagline: 'Cyber-Futurism & Heavyweight Knits'
  },
  {
    id: 'denim',
    name: "Women's Wide Bootcut & Baggy Denim",
    nameBn: 'প্রিমিয়াম উইমেন্স বুটকাট ও ব্যাগি জিন্স',
    description: 'High-waist contour design that snatches the waist, soft stretch denim fabric, and relaxed leg openings for effortless everyday chic.',
    itemCount: 22,
    image: DK_IMAGES.denim.wideBootcutIndigo,
    tagline: 'Flattering High-Waist & Soft Stretch'
  },
  {
    id: 'palazzo',
    name: "Women's Knit Palazzo Lounge",
    nameBn: 'উইমেন্স নিট প্যালাজো লাউঞ্জ ট্রাউজার্স',
    description: '98% Cotton & 2% Spandex ribbed knit with elastic drawcord waist. Ultra-soft, breathable drape created for luxurious all-day comfort.',
    itemCount: 18,
    image: DK_IMAGES.palazzo.creamWhite,
    tagline: '98% Cotton Soft Stretch Rib'
  },
  {
    id: 'trousers',
    name: 'Tailored Athleisure Trousers',
    nameBn: 'লাক্সারি অ্যাথলেইজার কনট্রাস্ট ট্রাউজার্স',
    description: 'Sport-couture track trousers featuring vertical racing tuxedo stripes, zippered hems, and relaxed modern tailoring drape.',
    itemCount: 14,
    image: DK_IMAGES.trousers.trackpantIvoryStripe,
    tagline: 'Tuxedo Stripe & Architectural Drape'
  }
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'dk-neo-01',
    name: 'DK NEO // 2099 "EVOLVE" Heavyweight Tee',
    category: 'streetwear',
    categoryLabel: 'Streetwear 2099',
    priceMYR: 149,
    sku: 'DK-NEO-EVL-01',
    image: DK_IMAGES.streetwear.evolveWhiteDeck,
    gallery: [
      DK_IMAGES.streetwear.evolveWhiteDeck,
      DK_IMAGES.streetwear.evolveWhiteSlate,
      DK_IMAGES.streetwear.evolveWhiteDetail
    ],
    description: 'Flagship streetwear graphic tee engineered from 260 GSM ultra-compact combed cotton. Features the iconic cybernetic cyborg profile print with "EVOLVE: The Future is Learning" Japanese typography and barcode insignia. Pre-shrunk for a boxy oversized drape.',
    fabricDetails: '100% Ultra-Compact Combed Cotton (260 GSM). High-density silicone silkscreen print.',
    fit: 'Oversized Boxy Silhouette with Drop Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure Chalk White', hex: '#F9F9F6' },
      { name: 'Shadow Slate', hex: '#2A2D34' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: 'dk-dnm-01',
    name: "DK Signature Women's Wide Bootcut Jeans",
    category: 'denim',
    categoryLabel: 'Premium Denim',
    priceMYR: 189,
    sku: 'DK-DNM-WBC-01',
    image: DK_IMAGES.denim.wideBootcutIndigo,
    gallery: [
      DK_IMAGES.denim.wideBootcutIndigo,
      DK_IMAGES.denim.wideBootcutDarkBlue,
      DK_IMAGES.denim.wideBootcutMediumBlue
    ],
    description: 'High-waist contour bootcut jeans crafted from soft stretch denim that moves with you for all-day comfort. Designed with a waist-snatching silhouette, relaxed room through hip and thigh, and a trendy wide bootcut opening for effortless everyday chic.',
    fabricDetails: '95% Premium Denim Cotton, 4% Polyester, 1% Spandex soft-flex blend.',
    fit: 'High-Waist Snatch with Wide Bootcut Leg',
    sizes: ['26', '28', '30', '32', '34', '36'],
    colors: [
      { name: 'Classic Indigo Blue', hex: '#2C497F' },
      { name: 'Deep Midnight Navy', hex: '#162238' },
      { name: 'Medium Vintage Ocean', hex: '#4B6B94' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: 'dk-neo-02',
    name: 'DK NEO // 2099 "FUTURE HYPERCAR" Graphic Tee',
    category: 'streetwear',
    categoryLabel: 'Streetwear 2099',
    priceMYR: 159,
    sku: 'DK-NEO-FUT-02',
    image: DK_IMAGES.streetwear.futureCyberCarBlack,
    gallery: [
      DK_IMAGES.streetwear.futureCyberCarBlack,
      DK_IMAGES.streetwear.futureCyberCityBlue,
      DK_IMAGES.streetwear.futureCyberCityDetail
    ],
    description: 'Cutting-edge cyberpunk graphic statement tee showcasing a mecha pilot leaning against a futuristic hypercar amidst neon-lit skyscrapers. Heavyweight organic cotton with seamless anti-sag collar and breathable reactive dye finish.',
    fabricDetails: '100% Organic Heavyweight Cotton (260 GSM). Glow-accent micro-pigment silkscreen.',
    fit: 'Relaxed Drop-Shoulder Street Silhouette',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Phantom Black', hex: '#111214' },
      { name: 'Cyber Neon Navy', hex: '#0D1B2A' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: 'dk-plz-01',
    name: 'DK Everyday Essential Knit Palazzo Trousers',
    category: 'palazzo',
    categoryLabel: 'Knit Loungewear',
    priceMYR: 129,
    sku: 'DK-PLZ-KNT-01',
    image: DK_IMAGES.palazzo.creamWhite,
    gallery: [
      DK_IMAGES.palazzo.creamWhite,
      DK_IMAGES.palazzo.heatherGrey,
      DK_IMAGES.palazzo.charcoalBlack,
      DK_IMAGES.palazzo.dustyRose,
      DK_IMAGES.palazzo.slateBlue
    ],
    description: 'Elevated ribbed knit palazzo pants crafted for effortless style and all-day lounging. Featuring an elasticated waistband with self-fabric drawcord tie, premium textured ribbed surface, and a flowy wide-leg drape that flatters every frame.',
    fabricDetails: '98% Combed Cotton, 2% Spandex. Soft, breathable, and stretchable fine-gauge knit.',
    fit: 'Wide-Leg Flowing Comfort Fit with High Rise',
    sizes: ['Free Size (S-XL)', 'Plus Size (2XL-4XL)'],
    colors: [
      { name: 'Cream Milk White', hex: '#F5F2EB' },
      { name: 'Heather Slate Grey', hex: '#7D8287' },
      { name: 'Pitch Onyx', hex: '#1C1C1E' },
      { name: 'Dusty Rose Pastel', hex: '#E2B8B9' },
      { name: 'Baby Cloud Blue', hex: '#B5CFDF' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: 'dk-dnm-02',
    name: 'DK Premium Washed Acid-Grey Wide-Leg Bootcut',
    category: 'denim',
    categoryLabel: 'Premium Denim',
    priceMYR: 195,
    sku: 'DK-DNM-AGR-02',
    image: DK_IMAGES.denim.wideBootcutCharcoalGrey,
    gallery: [
      DK_IMAGES.denim.wideBootcutCharcoalGrey,
      DK_IMAGES.denim.wideBootcutIndigo
    ],
    description: 'Special washed mineral acid-grey wide bootcut jeans. Crafted with durable breathable stretch denim, sculpt-fit back pockets, and subtle whiskering for an authentic vintage architectural aesthetic.',
    fabricDetails: '98% Cotton Denim, 2% Elastane. Enzyme stone-washed for soft hand-feel.',
    fit: 'High-Waist Snatch with Elongated Bootcut Hem',
    sizes: ['26', '28', '30', '32', '34'],
    colors: [
      { name: 'Mineral Washed Charcoal', hex: '#4A4D52' },
      { name: 'Faded Ash Black', hex: '#2B2C2E' }
    ],
    inStock: true,
    featured: false,
    isNewArrival: true
  },
  {
    id: 'dk-dnm-03',
    name: "DK Women's Relaxed Wide Baggy Denim",
    category: 'denim',
    categoryLabel: 'Premium Denim',
    priceMYR: 199,
    sku: 'DK-DNM-WBG-03',
    image: DK_IMAGES.denim.wideBaggyLightWash,
    gallery: [
      DK_IMAGES.denim.wideBaggyLightWash,
      DK_IMAGES.denim.wideBaggyLightWashAlt
    ],
    description: 'Trendy wide baggy jeans tailored for modern streetwear sensibilities. Generous cut through thighs with vintage all-over monogram jacquard wash, high-rise waistband, and puddle-break hem over sneakers.',
    fabricDetails: '100% Breathable Cotton Denim (12.5oz). Soft-touch finished.',
    fit: 'High-Waist Baggy Silhouette with Wide Leg Opening',
    sizes: ['26', '28', '30', '32', '34'],
    colors: [
      { name: 'Vintage Sky Wash', hex: '#87A2C7' },
      { name: 'Bleached Ice Denim', hex: '#C0D2E5' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: false
  },
  {
    id: 'dk-trs-01',
    name: 'DK Atelier Contrast-Stripe Luxury Trousers',
    category: 'trousers',
    categoryLabel: 'Tailored Athleisure',
    priceMYR: 179,
    sku: 'DK-TRS-STR-01',
    image: DK_IMAGES.trousers.trackpantIvoryStripe,
    gallery: [
      DK_IMAGES.trousers.trackpantIvoryStripe,
      DK_IMAGES.trousers.trackpantBlackStripe,
      DK_IMAGES.trousers.trackpantIvoryDetail,
      DK_IMAGES.trousers.trackpantBlackDetail
    ],
    description: 'Luxury tailored trackpants engineered with sharp crease architecture and dual contrast side racing tuxedo stripes. Features custom metal-tipped drawstrings, zipped side pockets, and snap ankle gussets for versatile footwear pairing.',
    fabricDetails: 'Heavyweight double-knit stretch poly-cotton twill with moisture-wicking technology.',
    fit: 'Straight Relaxed Fit with Ankle Zip Splits',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Ivory Bone & Navy', hex: '#EAE6DF' },
      { name: 'Obsidian Black & White', hex: '#1A1A1A' }
    ],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: 'dk-neo-03',
    name: 'DK NEO // 2099 "AWAKEN" Cyber-Eye Tee',
    category: 'streetwear',
    categoryLabel: 'Streetwear 2099',
    priceMYR: 149,
    sku: 'DK-NEO-AWK-03',
    image: DK_IMAGES.streetwear.awakenEyeWhite,
    gallery: [
      DK_IMAGES.streetwear.awakenEyeWhite,
      DK_IMAGES.streetwear.awakenEyeDetail
    ],
    description: 'Iconic cyberpunk aesthetic tee showcasing a crimson cybernetic iris hovering over dystopian city silhouettes with the bold motto "SEE BEYOND REALITY". Crafted from breathable 260 GSM combed cotton.',
    fabricDetails: '100% Combed Compact Cotton (260 GSM). Textured multi-layer discharge print.',
    fit: 'Oversized Boxy Silhouette with Reinforced Rib Collar',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Optic White & Crimson', hex: '#FDFDFD' },
      { name: 'Midnight Onyx & Crimson', hex: '#151517' }
    ],
    inStock: true,
    featured: false,
    isNewArrival: true
  },
  {
    id: 'dk-neo-04',
    name: 'DK Japanese Samurai Bushido Heritage Tee',
    category: 'streetwear',
    categoryLabel: 'Streetwear 2099',
    priceMYR: 139,
    sku: 'DK-SAM-BSH-04',
    image: DK_IMAGES.streetwear.samuraiBushidoWhite,
    gallery: [
      DK_IMAGES.streetwear.samuraiBushidoWhite,
      DK_IMAGES.streetwear.samuraiBushidoDetail
    ],
    description: 'Traditional Japanese sumi-e ink wash art depicting a dual-katana samurai standing before an ancient pagoda under blooming sakura and soaring ravens. Accented by authentic kanji calligraphy.',
    fabricDetails: '100% Cotton Fine Jersey (240 GSM). Breathable water-based ink print.',
    fit: 'Drop Shoulder Relaxed Contemporary Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Rice Silk White', hex: '#F7F5EE' },
      { name: 'Charcoal Black', hex: '#202022' }
    ],
    inStock: true,
    featured: false,
    isNewArrival: false
  }
];

export const BRAND_DETAILS = {
  name: 'DK Smart Garments SDN.BHD',
  tagline: 'Modern Elegance, 2099 Cyber Streetwear & Bespoke Atelier Craftsmanship.',
  website: 'https://dkfashionmy.com/',
  domain: 'dkfashionmy.com',
  established: '2021',
  location: 'Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia',
  address: {
    line1: 'Berjaya Times Square',
    line2: 'Lot: 3-22 1, Jln Imbi, Bukit Bintang',
    city: 'Kuala Lumpur',
    postcode: '55100',
    country: 'Wilayah Persekutuan Kuala Lumpur'
  },
  contact: {
    phone: '+6011-37455473',
    phoneFormatted: '+6011‑37455473',
    whatsapp: '601137455473',
    whatsappUrl: 'https://wa.me/601137455473?text=Hello%20DK%20Fashion%2C%20I%20would%20like%20to%20inquire%20about%20your%20collection.',
    email: 'dkfashionkwc@gmail.com',
    supportEmail: 'dkfashionkwc@gmail.com'
  },
  hours: {
    weekdays: 'Monday – Friday: 10:00 AM – 7:30 PM (MYT)',
    saturday: 'Saturday: 11:00 AM – 6:00 PM (MYT)',
    sunday: 'Sunday & Public Holidays: By Private Appointment'
  },
  socials: {
    instagram: 'https://www.instagram.com/dkfashion_my?xtok=MW56YW9oendtOWJ2cA%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1E9x88Da8L/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@_dk_fashion__?_r=1&_t=ZS-9ASRbHoL1Of',
    whatsapp: 'https://wa.me/601137455473'
  }
};
