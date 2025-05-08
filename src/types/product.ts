
export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  imageUrl: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    topSpeed: string;
    fuelCapacity: string;
    weight: string;
  };
  colors: string[];
  description: string;
  featured?: boolean;
  onSale?: boolean;
  salePrice?: number;
  categoryIcon?: string;
}
