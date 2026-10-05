"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, clearCart, isCartOpen, setIsCartOpen, discount, setDiscount, appliedCoupon, setAppliedCoupon } = useCart();
  
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    const validCoupons: Record<string, number> = {
      'ALEX10': 0.1, 'ALEX20': 0.2, 'ALEX30': 0.3, 'ALEX40': 0.4, 'ALEX50': 0.5,
      'ROGER10': 0.1, 'ROGER20': 0.2, 'ROGER30': 0.3, 'ROGER40': 0.4, 'ROGER50': 0.5,
      'DAVID10': 0.1, 'DAVID20': 0.2, 'DAVID30': 0.3, 'DAVID40': 0.4, 'DAVID50': 0.5,
    };

    if (validCoupons[code]) {
      setDiscount(validCoupons[code]);
      setAppliedCoupon(code);
      setCouponError("");
      setCouponInput("");
    } else {
      setCouponError("Invalid coupon code.");
    }
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setAppliedCoupon(null);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop — blurred so the page stays visible underneath */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/10 transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Your Shopping Cart ({cart.length})</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <span className="text-4xl">🛒</span>
                <p className="mt-3 font-medium">Your cart is currently empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                    <p className="text-xs text-blue-600 font-bold mt-1">
                      ${item.price.toFixed(2)} {item.period || ""}
                    </p>
                    <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-semibold bg-red-50 px-2.5 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              {/* Coupon Input */}
              <div className="mb-4">
                {!appliedCoupon ? (
                  <div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Enter coupon code" 
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 text-gray-800"
                      />
                      <button 
                        onClick={handleApplyCoupon}
                        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-red-500 text-xs mt-1">{couponError}</p>}
                  </div>
                ) : (
                  <div className="flex justify-between items-center bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm">
                    <span className="font-semibold">Coupon '{appliedCoupon}' applied!</span>
                    <button onClick={handleRemoveCoupon} className="text-red-500 hover:text-red-700 text-xs font-bold">Remove</button>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 text-sm font-medium">
                    <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-900 font-extrabold text-xl pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => alert("Proceeding to Secure Checkout...")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition mb-2"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-xl text-xs transition"
              >
                Clear Cart
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}