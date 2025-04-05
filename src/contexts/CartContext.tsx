
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "@/types/product";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string, size: string) => void;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the item with the same ID and size already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
      );

      if (existingItemIndex !== -1) {
        // If it exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // If not, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (itemId: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === itemId && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (itemId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId, size);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => {
      const itemPrice = item.discountPercentage > 0 
        ? item.price * (1 - item.discountPercentage / 100) 
        : item.price;
      return total + itemPrice * item.quantity;
    },
    0
  );

  // Calculate total items
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
