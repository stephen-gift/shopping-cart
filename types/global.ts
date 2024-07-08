export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Product {
  id: string; // Add id field
  name: string;
  description: string;
  imagePath: string;
  availableSizes: string[];
  colors: {
    primary: string;
    secondary: string;
  };
  colorName: string;
  price: number;
  brand: string;
  category: string;
  rating: number;
  stock: number;
  reviews: Review[];
}
