"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function DealOfTheDay() {
  const [billingCycle, setBillingCycle] = useState<string>("5-year");
  const { addToCart } = useCart();

  const deals = [
    {
      id: "webroot-antivirus",
      name: "Webroot SecureAnywhere Antivirus",
      category: "Antivirus & Security",
      image: "/webroot.avif",
      oneTimePrice: 49.99,
      fiveYearPrice: 219.99,
      lifetimePrice: 299.99,
      savings5Year: "Save 55% vs Monthly/Annual renewal",
      savingsLifetime: "Best Value - Never pay again",
      badge: "Top Protection"
    },
    {
      id: "office-365",
      name: "Microsoft Office 365 Family Subscription",
      category: "Software Toolkits",
      image: "/microsoft365.jpg",
      oneTimePrice: 99.99,
      fiveYearPrice: 299.99,
      lifetimePrice: 449.99,
      savings5Year: "Save $200 over 5 years",
      savingsLifetime: "Ultimate Productivity Suite",
      badge: "Essential"
    },
    {
      id: "private-ip-vpn",
      name: "Secure Dedicated Private IP & VPN Toolkit",
      category: "Network Security",
      image: "/ip.webp",
      oneTimePrice: 39.99,
      fiveYearPrice: 799.99,
      lifetimePrice: 999.99,
      savings5Year: "Static IP Guaranteed",
      savingsLifetime: "Absolute Privacy Forever",
      badge: "High Demand"
    },
  ];

  const getPricingInfo = (item: typeof deals[0]) => {
    if (billingCycle === "one-time") {
      return { price: item.oneTimePrice, label: "One-Time Price", saveText: "Standard Purchase" };
    } else if (billingCycle === "5-year") {
      return { price: item.fiveYearPrice, label: "5-Year Complete Plan", saveText: item.savings5Year };
    } else {
      return { price: item.lifetimePrice, label: "Lifetime Access Plan", saveText: item.savingsLifetime };
    }
  };

  // Use shared CartContext so items appear in the header cart
  const handleAddToCart = (item: typeof deals[0], pricing: ReturnType<typeof getPricingInfo>) => {
    addToCart({
      id: `${item.id}-${billingCycle}`,
      name: `${item.name} (${billingCycle.toUpperCase()})`,
      price: pricing.price,
      period: `/${billingCycle}`,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="bg-red-100 text-red-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
            🔥 Deal of the Day
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 mb-3">
            Lock in Massive Savings with Long-Term Plans
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            Upgrade your software, security toolkits, and hardware with exclusive 5-Year or Lifetime discounted packages.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 inline-flex space-x-1">
              <button
                onClick={() => setBillingCycle("one-time")}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  billingCycle === "one-time" ? "bg-gray-900 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                One-Time Purchase
              </button>
              <button
                onClick={() => setBillingCycle("5-year")}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  billingCycle === "5-year" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                ⚡ 5-Year Plan <span className="text-xs bg-yellow-300 text-black px-1.5 py-0.5 rounded ml-1 font-bold">Save Big</span>
              </button>
              <button
                onClick={() => setBillingCycle("lifetime")}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  billingCycle === "lifetime" ? "bg-purple-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                👑 Lifetime Access <span className="text-xs bg-yellow-300 text-black px-1.5 py-0.5 rounded ml-1 font-bold">Best Value</span>
              </button>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((item) => {
            const pricing = getPricingInfo(item);
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {item.category}
                  </span>

                  <div className="h-52 flex items-center justify-center my-4 bg-gray-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <img src={item.image} alt={item.name} className="max-h-44 object-contain" />
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm mb-3 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="mb-2">
                    <div className="text-3xl font-extrabold text-gray-900">
                      ${pricing.price.toFixed(2)}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {pricing.label}
                    </span>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-lg p-2.5 mb-6 text-xs text-green-700 font-semibold flex items-center space-x-1.5">
                    <span>✨</span>
                    <span>{pricing.saveText}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(item, pricing)}
                  className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition"
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}