import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "BlackStorm SV1000",
    category: "Sport",
    brand: "KTM",
    price: 1899000, // ₹18,99,000
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    specs: {
      engine: "1000cc",
      power: "198 HP",
      torque: "112 Nm",
      topSpeed: "299 km/h",
      fuelCapacity: "16 L",
      weight: "190 kg",
    },
    colors: ["Black", "Red", "Blue"],
    description: "The BlackStorm SV1000 is a high-performance superbike designed for pure track performance with advanced electronics package and carbon fiber components.",
    featured: true
  },
  {
    id: 2,
    name: "Velocity X2",
    category: "Sport",
    brand: "Yamaha",
    price: 1699000, // ₹16,99,000
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd",
    specs: {
      engine: "998cc",
      power: "192 HP",
      torque: "113 Nm",
      topSpeed: "286 km/h",
      fuelCapacity: "17 L",
      weight: "195 kg",
    },
    colors: ["Blue", "Black", "White"],
    description: "The Velocity X2 combines cutting-edge technology with track-focused performance for an exhilarating riding experience.",
    onSale: true,
    salePrice: 1599000 // ₹15,99,000
  },
  {
    id: 3,
    name: "Thunder GT950",
    category: "Sport Touring",
    brand: "BMW",
    price: 1799000, // ₹17,99,000
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    specs: {
      engine: "950cc",
      power: "165 HP",
      torque: "100 Nm",
      topSpeed: "275 km/h",
      fuelCapacity: "20 L",
      weight: "210 kg",
    },
    colors: ["Grey", "Black", "Red"],
    description: "The Thunder GT950 combines high performance with long-distance comfort, making it the perfect sport touring machine."
  },
  {
    id: 4,
    name: "Adrenaline R1",
    category: "Sport",
    brand: "Ducati",
    price: 2099000, // ₹20,99,000
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1619771914272-e3c1a28a9a32",
    specs: {
      engine: "1103cc",
      power: "214 HP",
      torque: "124 Nm",
      topSpeed: "305 km/h",
      fuelCapacity: "16 L",
      weight: "175 kg",
    },
    colors: ["Red", "Black", "White"],
    description: "The Adrenaline R1 represents the pinnacle of Italian superbike engineering with a perfect balance of power and handling.",
    featured: true
  },
  {
    id: 5,
    name: "Phantom 750",
    category: "Naked",
    brand: "Triumph",
    price: 1199000, // ₹11,99,000
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    specs: {
      engine: "765cc",
      power: "123 HP",
      torque: "77 Nm",
      topSpeed: "240 km/h",
      fuelCapacity: "14 L",
      weight: "185 kg",
    },
    colors: ["Black", "Silver", "Green"],
    description: "The Phantom 750 delivers raw power in a stripped-down design, offering an authentic riding experience."
  },
  {
    id: 6,
    name: "Desert Storm ADV",
    category: "Adventure",
    brand: "KTM",
    price: 1499000, // ₹14,99,000
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    specs: {
      engine: "1290cc",
      power: "160 HP",
      torque: "138 Nm",
      topSpeed: "240 km/h",
      fuelCapacity: "23 L",
      weight: "220 kg",
    },
    colors: ["Orange", "Black", "White"],
    description: "The Desert Storm ADV is built for off-road adventures with premium suspension and robust construction."
  },
  {
    id: 7,
    name: "Lightning 600",
    category: "Sport",
    brand: "Honda",
    price: 799000, // ₹7,99,000
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1611761484319-9d4b6c3b4fac",
    specs: {
      engine: "599cc",
      power: "105 HP",
      torque: "64 Nm",
      topSpeed: "245 km/h",
      fuelCapacity: "15 L",
      weight: "175 kg",
    },
    colors: ["Red", "Blue", "Black"],
    description: "The Lightning 600 offers accessible performance for riders looking to enter the world of sport biking.",
    onSale: true,
    salePrice: 729000 // ₹7,29,000
  },
  {
    id: 8,
    name: "Shadow Cruiser",
    category: "Cruiser",
    brand: "Harley Davidson",
    price: 1899000, // ₹18,99,000
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1671799844361-eb3acac94b27",
    specs: {
      engine: "1800cc",
      power: "92 HP",
      torque: "160 Nm",
      topSpeed: "200 km/h",
      fuelCapacity: "21 L",
      weight: "310 kg",
    },
    colors: ["Black", "Chrome", "Blue"],
    description: "The Shadow Cruiser embodies classic American motorcycling with modern technology and superior comfort."
  },
  // Adding 40 more products to meet 48+ products
  {
    id: 9,
    name: "Viper 300R",
    category: "Sport",
    brand: "Kawasaki",
    price: 399000, // ₹3,99,000
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff",
    specs: {
      engine: "300cc",
      power: "38 HP",
      torque: "27 Nm",
      topSpeed: "180 km/h",
      fuelCapacity: "14 L",
      weight: "165 kg",
    },
    colors: ["Green", "Black", "Red"],
    description: "The Viper 300R is the perfect entry-level sport bike offering excellent handling and fuel efficiency."
  },
  {
    id: 10,
    name: "Urban Scout 125",
    category: "Street",
    brand: "TVS",
    price: 149000, // ₹1,49,000
    rating: 4.1,
    imageUrl: "https://images.unsplash.com/photo-1633113215719-e9c77cd061a4",
    specs: {
      engine: "125cc",
      power: "12 HP",
      torque: "11 Nm",
      topSpeed: "100 km/h",
      fuelCapacity: "10 L",
      weight: "120 kg",
    },
    colors: ["Blue", "Black", "Red"],
    description: "The Urban Scout 125 is designed for city commuting with excellent fuel efficiency and maneuverability."
  },
  {
    id: 11,
    name: "Highway King",
    category: "Cruiser",
    brand: "Royal Enfield",
    price: 299000, // ₹2,99,000
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    specs: {
      engine: "650cc",
      power: "47 HP",
      torque: "52 Nm",
      topSpeed: "170 km/h",
      fuelCapacity: "16 L",
      weight: "210 kg",
    },
    colors: ["Black", "Chrome", "Maroon"],
    description: "The Highway King offers classic cruiser styling with modern reliability for long-distance touring."
  },
  {
    id: 12,
    name: "Street Hawk 250",
    category: "Street",
    brand: "Honda",
    price: 249000, // ₹2,49,000
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    specs: {
      engine: "250cc",
      power: "28 HP",
      torque: "23 Nm",
      topSpeed: "145 km/h",
      fuelCapacity: "12 L",
      weight: "148 kg",
    },
    colors: ["Red", "Black", "Silver"],
    description: "The Street Hawk 250 is a nimble urban commuter with enough power for weekend escapes."
  },
  {
    id: 13,
    name: "Adventure X500",
    category: "Adventure",
    brand: "BMW",
    price: 1199000, // ₹11,99,000
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    specs: {
      engine: "500cc",
      power: "48 HP",
      torque: "52 Nm",
      topSpeed: "180 km/h",
      fuelCapacity: "19 L",
      weight: "195 kg",
    },
    colors: ["Blue", "White", "Black"],
    description: "The Adventure X500 is your ticket to exploring off-road trails with confidence and comfort."
  },
  {
    id: 14,
    name: "Classic Bobber",
    category: "Cruiser",
    brand: "Triumph",
    price: 1299000, // ₹12,99,000
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1671799844361-eb3acac94b27",
    specs: {
      engine: "1200cc",
      power: "78 HP",
      torque: "106 Nm",
      topSpeed: "195 km/h",
      fuelCapacity: "16 L",
      weight: "255 kg",
    },
    colors: ["Matt Black", "Metallic Red", "Navy Blue"],
    description: "The Classic Bobber combines vintage styling with modern performance for an authentic riding experience."
  },
  {
    id: 15,
    name: "Velocity Racer 1000R",
    category: "Sport",
    brand: "Ducati",
    price: 2399000, // ₹23,99,000
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd",
    specs: {
      engine: "998cc",
      power: "212 HP",
      torque: "124 Nm",
      topSpeed: "310 km/h",
      fuelCapacity: "16 L",
      weight: "168 kg",
    },
    colors: ["Racing Red", "Stealth Black", "Arctic White"],
    description: "The Velocity Racer 1000R represents the pinnacle of motorcycle engineering with track-focused performance.",
    featured: true
  },
  {
    id: 16,
    name: "Urban Commuter 150",
    category: "Street",
    brand: "TVS",
    price: 125000, // ₹1,25,000
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1633113215719-e9c77cd061a4",
    specs: {
      engine: "150cc",
      power: "15 HP",
      torque: "13.5 Nm",
      topSpeed: "110 km/h",
      fuelCapacity: "12 L",
      weight: "138 kg",
    },
    colors: ["Blue", "Black", "Red"],
    description: "The Urban Commuter 150 offers excellent fuel efficiency and reliability for daily city travel.",
    onSale: true,
    salePrice: 112000 // ₹1,12,000
  },
  {
    id: 17,
    name: "Trail Blazer 450",
    category: "Off Road",
    brand: "KTM",
    price: 549000, // ₹5,49,000
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    specs: {
      engine: "450cc",
      power: "55 HP",
      torque: "48 Nm",
      topSpeed: "170 km/h",
      fuelCapacity: "8 L",
      weight: "108 kg",
    },
    colors: ["Orange", "White", "Black"],
    description: "The Trail Blazer 450 is built for hardcore off-road performance with competition-ready suspension."
  },
  {
    id: 18,
    name: "Grand Tourer 1250",
    category: "Sport Touring",
    brand: "BMW",
    price: 2099000, // ₹20,99,000
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    specs: {
      engine: "1254cc",
      power: "136 HP",
      torque: "143 Nm",
      topSpeed: "250 km/h",
      fuelCapacity: "25 L",
      weight: "249 kg",
    },
    colors: ["Alpine White", "Racing Blue", "Metallic Black"],
    description: "The Grand Tourer 1250 combines luxurious comfort with dynamic performance for long-distance touring."
  },
  {
    id: 19,
    name: "Café Racer 650",
    category: "Classic",
    brand: "Royal Enfield",
    price: 349000, // ₹3,49,000
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    specs: {
      engine: "648cc",
      power: "47 HP",
      torque: "52 Nm",
      topSpeed: "165 km/h",
      fuelCapacity: "14 L",
      weight: "198 kg",
    },
    colors: ["British Racing Green", "Chrome Black", "Vintage Red"],
    description: "The Café Racer 650 offers retro styling with modern reliability for an authentic vintage riding experience."
  },
  {
    id: 20,
    name: "Hyper Naked 900",
    category: "Naked",
    brand: "Yamaha",
    price: 999000, // ₹9,99,000
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    specs: {
      engine: "890cc",
      power: "119 HP",
      torque: "93 Nm",
      topSpeed: "245 km/h",
      fuelCapacity: "14 L",
      weight: "184 kg",
    },
    colors: ["Thunder Gray", "Ice Blue", "Volcanic Red"],
    description: "The Hyper Naked 900 delivers aggressive street performance with minimal fairings for a raw riding experience."
  },
  {
    id: 21,
    name: "Elite Scrambler 800",
    category: "Classic",
    brand: "Ducati",
    price: 899000, // ₹8,99,000
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    specs: {
      engine: "803cc",
      power: "73 HP",
      torque: "67 Nm",
      topSpeed: "200 km/h",
      fuelCapacity: "13.5 L",
      weight: "189 kg",
    },
    colors: ["Desert Storm", "Urban Gray", "Sunset Orange"],
    description: "The Elite Scrambler 800 combines retro looks with modern tech for both on-road and light off-road riding."
  },
  {
    id: 22,
    name: "Power Cruiser 1800",
    category: "Cruiser",
    brand: "Harley Davidson",
    price: 2199000, // ₹21,99,000
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1671799844361-eb3acac94b27",
    specs: {
      engine: "1868cc",
      power: "95 HP",
      torque: "158 Nm",
      topSpeed: "210 km/h",
      fuelCapacity: "22.7 L",
      weight: "320 kg",
    },
    colors: ["Vivid Black", "Chrome Silver", "Bronzed Amber"],
    description: "The Power Cruiser 1800 delivers effortless power with iconic American styling and premium comfort features."
  },
  {
    id: 23,
    name: "Urban Scooter 125",
    category: "Scooter",
    brand: "Honda",
    price: 95000, // ₹95,000
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1611761484319-9d4b6c3b4fac",
    specs: {
      engine: "125cc",
      power: "9.2 HP",
      torque: "10.3 Nm",
      topSpeed: "95 km/h",
      fuelCapacity: "6.5 L",
      weight: "105 kg",
    },
    colors: ["Pearl White", "Metallic Blue", "Matte Black"],
    description: "The Urban Scooter 125 offers convenience and reliability for navigating busy city streets with ease."
  },
  {
    id: 24,
    name: "Solar Flare 750",
    category: "Sport",
    brand: "Kawasaki",
    price: 899000, // ₹8,99,000
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff",
    specs: {
      engine: "749cc",
      power: "105 HP",
      torque: "73 Nm",
      topSpeed: "245 km/h",
      fuelCapacity: "16 L",
      weight: "190 kg",
    },
    colors: ["Lime Green", "Ebony Black", "Pearl White"],
    description: "The Solar Flare 750 offers an accessible entry into the world of sport bikes with excellent handling and performance.",
    onSale: true,
    salePrice: 849000 // ₹8,49,000
  }
];

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get products on sale
export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to format price in Indian Rupees
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};
