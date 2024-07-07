import { Product, Review } from "../../types/global";

// Sample reviews for demonstration
const sampleReviews: Review[] = [
  { user: "John Doe", comment: "Great product!", rating: 5 },
  { user: "Jane Smith", comment: "Not bad, but could be better.", rating: 3 },
  { user: "Alice Brown", comment: "Excellent quality.", rating: 4.5 },
];

// Sample products array
const products: Product[] = [
  {
    id: "1",
    name: "Product A",
    description: "This is product A.",
    imagePath: "/images/Product1.png",
    availableSizes: ["S", "M", "L"],
    colors: { primary: "#000000", secondary: "#FFFFFF" },
    price: 49.99,
    brand: "Brand A",
    category: "Category A",
    rating: 4.5,
    stock: 10,
    reviews: sampleReviews.slice(0, 2), // Using first two reviews
  },
  {
    id: "2",
    name: "Product B",
    description: "This is product B.",
    imagePath: "/images/Product2.png",
    availableSizes: ["M", "L", "XL"],
    colors: { primary: "#FF0000", secondary: "#0000FF" },
    price: 59.99,
    brand: "Brand B",
    category: "Category B",
    rating: 4.0,
    stock: 15,
    reviews: sampleReviews.slice(1, 3), // Using reviews 2 and 3
  },
  {
    id: "3",
    name: "Product C",
    description: "This is product C.",
    imagePath: "/images/Product3.png",
    availableSizes: ["XS", "S", "M", "L"],
    colors: { primary: "#00FF00", secondary: "#FFFF00" },
    price: 39.99,
    brand: "Brand C",
    category: "Category C",
    rating: 4.2,
    stock: 20,
    reviews: sampleReviews.slice(0, 1), // Using first review
  },
  {
    id: "4",
    name: "Product D",
    description: "This is product D.",
    imagePath: "/images/Product4.png",
    availableSizes: ["M", "L"],
    colors: { primary: "#0000FF", secondary: "#FFFFFF" },
    price: 69.99,
    brand: "Brand D",
    category: "Category A",
    rating: 4.8,
    stock: 8,
    reviews: sampleReviews.slice(2), // Using last review
  },
  {
    id: "5",
    name: "Product E",
    description: "This is product E.",
    imagePath: "/images/Product5.png",
    availableSizes: ["S", "L", "XL"],
    colors: { primary: "#FF00FF", secondary: "#00FFFF" },
    price: 79.99,
    brand: "Brand E",
    category: "Category B",
    rating: 3.9,
    stock: 12,
    reviews: sampleReviews.slice(0, 3), // Using first three reviews
  },
  {
    id: "6",
    name: "Product F",
    description: "This is product F.",
    imagePath: "/images/Product6.png",
    availableSizes: ["S", "M", "XL"],
    colors: { primary: "#FFFF00", secondary: "#FF0000" },
    price: 54.99,
    brand: "Brand F",
    category: "Category C",
    rating: 4.1,
    stock: 18,
    reviews: sampleReviews.slice(1, 2), // Using second review
  },
  {
    id: "7",
    name: "Product G",
    description: "This is product G.",
    imagePath: "/images/Product1.png",
    availableSizes: ["XS", "S", "M"],
    colors: { primary: "#00FFFF", secondary: "#000000" },
    price: 44.99,
    brand: "Brand G",
    category: "Category A",
    rating: 4.4,
    stock: 14,
    reviews: sampleReviews.slice(0, 2), // Using first two reviews
  },
  {
    id: "8",
    name: "Product H",
    description: "This is product H.",
    imagePath: "/images/Product2.png",
    availableSizes: ["L", "XL"],
    colors: { primary: "#FFA500", secondary: "#A52A2A" },
    price: 64.99,
    brand: "Brand H",
    category: "Category B",
    rating: 4.7,
    stock: 9,
    reviews: sampleReviews.slice(1, 3), // Using reviews 2 and 3
  },
  {
    id: "9",
    name: "Product I",
    description: "This is product I.",
    imagePath: "/images/Product3.png",
    availableSizes: ["S", "M", "L", "XL"],
    colors: { primary: "#808080", secondary: "#FFFFFF" },
    price: 49.99,
    brand: "Brand I",
    category: "Category C",
    rating: 3.8,
    stock: 16,
    reviews: sampleReviews.slice(0, 1), // Using first review
  },
  {
    id: "10",
    name: "Product J",
    description: "This is product J.",
    imagePath: "/images/Product4.png",
    availableSizes: ["M", "L"],
    colors: { primary: "#800080", secondary: "#FFA500" },
    price: 59.99,
    brand: "Brand J",
    category: "Category A",
    rating: 4.6,
    stock: 11,
    reviews: sampleReviews.slice(2), // Using last review
  },
];

export default products;
