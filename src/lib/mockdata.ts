
import { Product } from "@/types/product";

// Generate unique IDs for mock products
const generateId = () => Math.random().toString(36).substring(2, 10);

export const mockProducts: Product[] = [
  {
    id: generateId(),
    name: "Elite Runner Pro",
    brand: "Velocity",
    category: "men",
    type: "sports",
    description: "Premium running shoes with advanced cushioning technology, perfect for marathon runners and daily training. Features breathable mesh upper and responsive midsole for superior energy return.",
    price: 129.99,
    discountPercentage: 0,
    stockCount: 42,
    availableSizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: ["Black/Red", "Blue/White", "Gray/Neon"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 142
  },
  {
    id: generateId(),
    name: "Classic Oxford Brogue",
    brand: "Heritage",
    category: "men",
    type: "formal",
    description: "Timeless Oxford brogues crafted from premium leather with traditional perforation detailing. Features a leather sole and cushioned insole for all-day comfort.",
    price: 189.99,
    discountPercentage: 10,
    stockCount: 25,
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1613995795387-996c272cb195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614252233118-4ed68394a323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: generateId(),
    name: "Urban Street Sneaker",
    brand: "Metropolis",
    category: "men",
    type: "sneakers",
    description: "Trendy street-style sneakers with premium canvas upper and vulcanized rubber sole. Features padded collar and tongue for enhanced comfort and support.",
    price: 79.99,
    discountPercentage: 0,
    stockCount: 63,
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 215
  },
  {
    id: generateId(),
    name: "Casual Comfort Loafer",
    brand: "EasyStep",
    category: "men",
    type: "casual",
    description: "Lightweight slip-on loafers with soft leather upper and flexible rubber sole. Features memory foam insole for exceptional comfort during extended wear.",
    price: 99.99,
    discountPercentage: 15,
    stockCount: 37,
    availableSizes: ["8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 103
  },
  {
    id: generateId(),
    name: "Elegant Stiletto Heel",
    brand: "Glamour",
    category: "women",
    type: "heels",
    description: "Sophisticated stiletto heels with soft suede upper and pointed toe. Features a 4-inch heel and cushioned footbed for comfort and stability.",
    price: 149.99,
    discountPercentage: 0,
    stockCount: 28,
    availableSizes: ["5", "6", "7", "8", "9"],
    colors: ["Black", "Red", "Nude"],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 87
  },
  {
    id: generateId(),
    name: "Classic Ballet Flat",
    brand: "Elegance",
    category: "women",
    type: "flats",
    description: "Timeless ballet flats crafted from soft leather with elastic topline for a secure fit. Features a cushioned insole and flexible outsole for all-day comfort.",
    price: 89.99,
    discountPercentage: 0,
    stockCount: 56,
    availableSizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Nude", "Red", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1554238113-0c9c048cbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581101767979-7d40f3f53bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 148
  },
  {
    id: generateId(),
    name: "Fashion Sneaker",
    brand: "Urban Chic",
    category: "women",
    type: "sneakers",
    description: "Trendy fashion sneakers with breathable knit upper and lightweight cushioned sole. Perfect blend of style and comfort for everyday wear.",
    price: 79.99,
    discountPercentage: 0,
    stockCount: 72,
    availableSizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["White", "Black", "Pink", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581017316471-1f6ef5fbfdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: true,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 196
  },
  {
    id: generateId(),
    name: "Winter Chelsea Boot",
    brand: "Alpine",
    category: "women",
    type: "boots",
    description: "Stylish Chelsea boots with water-resistant leather upper and warm lining. Features elastic side panels for easy on/off and durable lug sole for excellent traction.",
    price: 159.99,
    discountPercentage: 20,
    stockCount: 34,
    availableSizes: ["5", "6", "7", "8", "9"],
    colors: ["Black", "Brown", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1551115303-eb1e2e0a4c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 73
  },
  {
    id: generateId(),
    name: "Kids Sport Runner",
    brand: "JuniorStep",
    category: "children",
    type: "sports",
    description: "Lightweight and durable running shoes designed specifically for active kids. Features breathable upper, secure closure, and cushioned midsole for comfort during play.",
    price: 59.99,
    discountPercentage: 0,
    stockCount: 48,
    availableSizes: ["K10", "K11", "K12", "K13", "1", "2", "3"],
    colors: ["Blue/Yellow", "Black/Red", "Pink/Purple"],
    images: [
      "https://images.unsplash.com/photo-1617260257367-ca56bf51bac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622170829003-f8df8de94f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: true,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 64
  },
  {
    id: generateId(),
    name: "Kids School Shoe",
    brand: "ClassicKids",
    category: "children",
    type: "school",
    description: "Durable and comfortable school shoes with scuff-resistant leather upper and non-marking outsole. Features adjustable strap for secure fit and cushioned insole for all-day comfort.",
    price: 49.99,
    discountPercentage: 0,
    stockCount: 62,
    availableSizes: ["K12", "K13", "1", "2", "3", "4", "5"],
    colors: ["Black", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1541290300459-c8f2f9c91d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1628626126093-97c2c464ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: generateId(),
    name: "Kids Casual Sneaker",
    brand: "FunStep",
    category: "children",
    type: "casual",
    description: "Colorful and comfortable casual sneakers perfect for everyday adventures. Features easy on/off design, flexible outsole, and cushioned collar for ankle support.",
    price: 44.99,
    discountPercentage: 10,
    stockCount: 53,
    availableSizes: ["K10", "K11", "K12", "K13", "1", "2", "3"],
    colors: ["Red/Blue", "Green/Yellow", "Pink/Purple"],
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505619307292-55ae4ec35e65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: false,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 96
  },
  {
    id: generateId(),
    name: "Kids Light-Up Sneaker",
    brand: "GlowKicks",
    category: "children",
    type: "sneakers",
    description: "Fun light-up sneakers that illuminate with each step. Features durable construction, easy hook-and-loop closure, and comfortable cushioned insole.",
    price: 54.99,
    discountPercentage: 0,
    stockCount: 38,
    availableSizes: ["K10", "K11", "K12", "K13", "1", "2"],
    colors: ["Blue", "Black", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1571141884996-75902a6f84ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    isNewArrival: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 58
  }
];
