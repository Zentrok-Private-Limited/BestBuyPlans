"use client";
import React, { createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  period?: string;
  quantity?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  discount: number;
  setDiscount: (discount: number) => void;
  appliedCoupon: string | null;
  setAppliedCoupon: (coupon: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [discount, setDiscount] = useState<number>(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Item add hote hi cart drawer apne aap khul jayega
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isCartOpen, setIsCartOpen, discount, setDiscount, appliedCoupon, setAppliedCoupon }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}