"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Wrench,
  Headset,
  Percent,
  Trophy,
  Tag,
  Truck,
  UserCheck,
  Clock,
  Home,
  Smartphone,
  CheckCircle2,
  Check,
  Laptop,
  Lock,
  Cpu,
  RefreshCw,
  Printer,
  X,
  Trash2,
   Search,
  Store,
  UserCircle,
  ShoppingCart,
  ChevronDown,
  Menu,
  Disc,
  Sliders,
  Activity,
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  period: string;
}

export default function BestBuyPlansPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [savedUserName, setSavedUserName] = useState("");
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [userPhone, setUserPhone] = useState("");

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const handleStoreSelect = (state: string) => {
  setSelectedStore(state);
  setIsStoreOpen(false);
};

  const handleSignIn = () => {
    if (!userName.trim() || !userEmail.trim()) {
      return;
    }

    setSavedUserName(userName.trim());
    setIsSignInOpen(false);
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Top Navigation Bar / Header */}
      <header className="sticky top-0 z-40 w-full bg-[#0046BE] text-white">
  {/* TOP HEADER */}
  <div className="border-b border-blue-400/50">
    <div className="h-[64px] sm:h-[72px] lg:h-[88px] px-3 sm:px-5 lg:px-8 xl:px-12 flex items-center gap-2 sm:gap-4 lg:gap-5">

      {/* LOGO */}
      <div className="flex-shrink-0 w-[58px] sm:w-[70px] lg:w-[80px]">
        <div className="relative leading-[0.78] text-[18px] sm:text-[22px] lg:text-[27px] font-black tracking-[-1.5px]">
          <div>BEST</div>
          <div className="mt-0.5">BUY</div>
          <span className="absolute left-[51px] sm:left-[61px] lg:left-[55px] bottom-0 w-[14px] sm:w-[17px] lg:w-[19px] h-[9px] sm:h-[10px] lg:h-[12px] bg-[#ffe000]">
            <span className="absolute -left-[3px] top-[3px] w-[4px] h-[4px] rounded-full bg-[#0046BE]" />
          </span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex-1 mx-4 h-[38px] sm:h-[44px] lg:h-[50px] bg-white rounded-[6px] lg:rounded-[9px] overflow-hidden flex items-center min-w-0">
        <input
          type="text"
          placeholder="Search Best Buy"
          className="flex-1 min-w-0 h-full px-3 sm:px-4 text-[13px] sm:text-[14px] lg:text-[16px] text-gray-700 placeholder:text-gray-500 outline-none"
        />
        <button
          type="button"
          className="h-full w-[40px] sm:w-[48px] lg:w-[54px] flex items-center justify-center border-l border-gray-100 hover:bg-gray-50"
        >
          <Search className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-black" />
        </button>
      </div>

      {/* STORE - DESKTOP */}
      {/* STORE - DESKTOP */}
<div className="relative hidden xl:flex items-center">
  <button
    type="button"
    onClick={() => setIsStoreOpen((prev) => !prev)}
    className="flex items-center gap-2 min-w-[110px] text-left"
  >
    <Store className="w-7 h-7 flex-shrink-0" />

    <div className="text-[14px] leading-[1.15]">
      <div>Select your store</div>
      <div className="font-bold text-[16px]">
        {selectedStore || "Choose state"}
      </div>
    </div>

    <ChevronDown
      className={`w-4 h-4 transition-transform ${
        isStoreOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* STORE DROPDOWN */}
  {isStoreOpen && (
    <div className="absolute right-0 top-[calc(100%+14px)] z-[80] w-[250px] rounded-xl bg-white text-gray-900 shadow-2xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <p className="font-bold text-sm">Select your store</p>
        <p className="text-xs text-gray-500 mt-0.5">
          Choose your state
        </p>
      </div>

      <div className="max-h-[320px] overflow-y-auto py-1">
        {usStates.map((state) => (
          <button
            key={state}
            type="button"
            onClick={() => handleStoreSelect(state)}
            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition ${
              selectedStore === state
                ? "bg-blue-50 text-[#0046BE] font-bold"
                : "text-gray-700"
            }`}
          >
            {state}
          </button>
        ))}
      </div>
    </div>
  )}
</div>

      {/* ACCOUNT - DESKTOP */}
      <button
        type="button"
        onClick={() => setIsSignInOpen(true)}
        className="hidden lg:flex items-center gap-2 pl-3 xl:pl-4 border-l border-blue-300/60 min-w-[110px] xl:min-w-[125px]"
      >
        <UserCircle className="w-6 h-6 xl:w-7 xl:h-7" />
        <div className="text-[13px] xl:text-[15px] leading-[1.15] text-left">
          <div>Account</div>
          <div className="font-bold text-[14px] xl:text-[16px]">
            {savedUserName || "Sign in"}
          </div>
        </div>
      </button>

      {/* CART */}
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="relative flex items-center justify-center pl-2 sm:pl-3 lg:pl-4 xl:pl-5 border-l border-blue-300/60 h-9 sm:h-10 flex-shrink-0"
      >
        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-1 bg-[#ffe000] text-[#0046BE] font-bold text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {/* MOBILE HAMBURGER */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </div>
  </div>

  {/* DESKTOP NAV */}
  <nav className="hidden md:flex h-[64px] lg:h-[76px] border-b border-blue-300/70 items-center px-5 lg:px-8 xl:px-12">
    <div className="flex items-center gap-3">
      <button className="h-[40px] px-5 rounded-full border border-blue-300/80 hover:bg-blue-600 flex items-center gap-2 text-[12px] lg:text-[14px] font-semibold whitespace-nowrap">
        Shop
        <ChevronDown className="w-4 h-4" />
      </button>

      <button className="h-[40px] px-5 rounded-full border border-blue-300/80 hover:bg-blue-600 flex items-center gap-2 text-[12px] lg:text-[14px] font-semibold whitespace-nowrap">
        Deals
        <ChevronDown className="w-4 h-4" />
      </button>

      <button className="h-[40px] px-5 rounded-full border border-blue-300/80 hover:bg-blue-600 flex items-center gap-2 text-[12px] lg:text-[14px] font-semibold whitespace-nowrap">
        Support & Services
        <ChevronDown className="w-4 h-4" />
      </button>

      <button className="h-[40px] px-5 rounded-full border border-blue-300/80 hover:bg-blue-600 flex items-center gap-2 text-[12px] lg:text-[14px] font-semibold whitespace-nowrap">
        Discover
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>

    <div className="ml-auto flex items-center gap-4 lg:gap-6 pl-6 lg:pl-10 text-[12px] lg:text-[14px] whitespace-nowrap">
      <button type="button">Fall Football</button>
      <button type="button">Top Deals</button>
      <button type="button">Deal of the Day</button>
      <button type="button">Gift Ideas</button>
      <button type="button">My Best Buy Memberships</button>
      <button type="button">Credit Cards</button>
      <button type="button">Gift Cards</button>

      <button type="button" className="flex items-center gap-1">
        More
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  </nav>

  {/* MOBILE MENU */}
  {isMobileMenuOpen && (
    <div className="md:hidden bg-[#003b9f] border-t border-blue-400/50 shadow-xl">
      <div className="px-4 py-4">

       {/* MOBILE STORE */}
<div className="relative">
  <button
    type="button"
    onClick={() => setIsStoreOpen((prev) => !prev)}
    className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-700 text-left"
  >
    <span className="flex items-center gap-3">
      <Store className="w-5 h-5" />

      <span>
        Select your store:{" "}
        <strong>
          {selectedStore || "Choose state"}
        </strong>
      </span>
    </span>

    <ChevronDown
      className={`w-5 h-5 transition-transform ${
        isStoreOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* MOBILE STORE DROPDOWN */}
  {isStoreOpen && (
    <div className="mx-4 mb-2 rounded-lg bg-white text-gray-900 overflow-hidden shadow-lg">
      <div className="max-h-[280px] overflow-y-auto py-1">
        {usStates.map((state) => (
          <button
            key={state}
            type="button"
            onClick={() => handleStoreSelect(state)}
            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition ${
              selectedStore === state
                ? "bg-blue-50 text-[#0046BE] font-bold"
                : "text-gray-700"
            }`}
          >
            {state}
          </button>
        ))}
      </div>
    </div>
  )}
</div>

        {/* MOBILE ACCOUNT */}
        <button
          type="button"
          onClick={() => setIsSignInOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 text-left"
        >
          <UserCircle className="w-5 h-5" />
          <span>
            Account{" "}
            <strong>{savedUserName || "Sign in"}</strong>
          </span>
        </button>

        <div className="h-px bg-blue-400/40 my-2" />

        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-700"
        >
          <span>Shop</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-700"
        >
          <span>Deals</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-700"
        >
          <span>Support & Services</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-700"
        >
          <span>Discover</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        <div className="h-px bg-blue-400/40 my-2" />

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Fall Football
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Top Deals
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Deal of the Day
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Gift Ideas
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          My Best Buy Memberships
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Credit Cards
        </button>

        <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
          Gift Cards
        </button>
      </div>
    </div>
  )}

  {/* SIGN IN POPUP */}
  {isSignInOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
    onClick={() => setIsSignInOpen(false)}
  >
    <div
      className="w-full max-w-[400px] rounded-2xl bg-white p-6 sm:p-7 shadow-2xl text-gray-900"
      onClick={(e) => e.stopPropagation()}
    >
      {/* POPUP HEADER */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Sign in
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter your details to continue.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsSignInOpen(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* NAME */}
      <div className="mb-4">
        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
          Name
        </label>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
          Email ID
        </label>

        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* PHONE NUMBER */}
      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          placeholder="Enter your phone number"
          maxLength={15}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* CONTINUE */}
      <button
        type="button"
        onClick={handleSignIn}
        disabled={
          !userName.trim() ||
          !userEmail.trim() ||
          !userPhone.trim()
        }
        className="w-full rounded-lg bg-[#0046BE] px-4 py-3 font-bold text-white transition hover:bg-[#003b9f] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  </div>
)}
</header>

      {/* --- SCREENSHOT 148: Hero Section & My Best Buy Total Intro --- */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-blue-900 font-bold text-xs px-2 py-1 rounded mb-4 uppercase tracking-wider">
              Best Buy Plans
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Meet the Best Buy Membership Plans™
            </h1>
            <p className="text-lg mb-4 text-blue-100">
              Plus members get rewards*, exclusive prices and free 2-day
              shipping*. Total members get everything in Plus, and powerful
              benefits like protection plans* and 24/7 tech support.
            </p>
            <p className="text-sm">
              Already a member?{" "}
              <a href="#" className="underline font-semibold">
                Go to your dashboard.
              </a>
            </p>
          </div>
          <div className="relative h-72 lg:h-110 w-full rounded-2xl overflow-hidden flex items-end justify-center">
            <img src="/hero-img.avif" className="h-11/12" alt="" />
          </div>
        </div>
      </section>

      {/* Total Card Banner */}
      <section className="px-8 mt-8 relative mb-16">
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
              TRUSTED BY MILLIONS OF MEMBERS
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-5xl">🏷️</span>
              <h2 className="text-3xl lg:text-5xl font-semibold">
                My Best Buy Total™
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Featuring protection plans*, 24/7 tech support, rewards* and
              exclusive savings
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex items-center space-x-1 text-yellow-500 mb-1 text-sm">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-500 ml-1">(16,729 reviews)</span>
            </div>
            <div className="text-3xl font-bold mb-3">
              $199.99{" "}
              <span className="text-sm font-normal text-gray-500">/year*</span>
            </div>
            <button
              onClick={() =>
                addToCart({
                  id: "my best buy total",
                  name: "My Best Buy Total™",
                  price: 199.99,
                  period: "/One Time",
                })
              }
              className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition"
            >
              Add to cart
            </button>
            <span className="text-xs text-gray-400 mt-2">
              Auto renews. Cancel anytime. See terms.
            </span>
          </div>
        </div>
        {/* New Features Grid Section (Matched to Screenshots) */}
        <section className="max-w-8xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Protection plans */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card1sec2.png"
                    alt="Protection plans"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  Protection plans, including AppleCare+*
                </h3>
                <p className="text-gray-600 text-sm">
                  Up to 24 months of product protection on all eligible Best Buy
                  purchases while your membership is active.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 2: Computer & tablet support */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card2sec2.avif"
                    alt="Computer and tablet support"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  Computer and tablet support
                </h3>
                <p className="text-gray-600 text-sm">
                  Unlimited in-store and remote service for your computer or
                  tablet.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 3: 24/7 VIP tech support */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card3sec2.avif"
                    alt="24/7 VIP tech support"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  24/7 VIP tech support
                </h3>
                <p className="text-gray-600 text-sm">
                  Get help anytime with your tech problems and enjoy priority
                  access to our support lines.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 4: 20% off repairs */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card4sec2.avif"
                    alt="20% off repairs"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">20% off repairs*</h3>
                <p className="text-gray-600 text-sm">
                  Save 20% on the cost of labor, no matter where you purchased
                  your device.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 5: 1% back in rewards */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card5sec2.avif"
                    alt="1% back in rewards"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  1% back* in rewards
                </h3>
                <p className="text-gray-600 text-sm">
                  with qualifying Best Buy purchases. Get 6% back* in rewards
                  when you also use a My Best Buy® Credit Card.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 6: Exclusive savings */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card6sec2.avif"
                    alt="Exclusive savings"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">Exclusive savings</h3>
                <p className="text-gray-600 text-sm">
                  Member prices on popular products, special access to sales and
                  events.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Card 7: Extended returns and exchanges */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card7sec2.avif"
                    alt="Extended returns and exchanges"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  Extended returns and exchanges*
                </h3>
                <p className="text-gray-600 text-sm">
                  A 60-day window gives you time to make sure your product is
                  working properly.
                </p>
              </div>
              <div className="mt-4">
                <span className="text-gray-400 text-sm font-medium cursor-not-allowed">
                  Learn more
                </span>
              </div>
            </div>

            {/* Card 8: Free 2-day shipping */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/card8sec2.avif"
                    alt="Free 2-day shipping"
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-2">
                  Free 2-day shipping*
                </h3>
                <p className="text-gray-600 text-sm">
                  Get your tech that much faster, with no extra charge.
                </p>
              </div>
              <div className="mt-4">
                <span className="text-gray-400 text-sm font-medium cursor-not-allowed">
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* --- SCREENSHOT 151: My Best Buy Plus Plan Section --- */}
      <section className="px-8 mb-20">
        <div className="bg-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b pb-8">
            <div>
              <div className="inline-block bg-teal-500 text-white font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
                EXCLUSIVE PRICES & PERKS
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-5xl">🏷️</span>
                <h2 className="text-3xl lg:text-5xl font-semibold">
                  Best Buy Plan Plus™
                </h2>
              </div>
              <p className="text-gray-600 text-sm">
                Get rewards*, access to deals and events, and extended returns
                and exchanges*
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <div className="flex items-center space-x-1 text-yellow-500 mb-1 text-sm">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-500 ml-1">(42,407 reviews)</span>
              </div>
              <div className="text-3xl font-bold mb-3">
                $29.99{" "}
                <span className="text-sm font-normal text-gray-500">
                  /year*
                </span>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: "best buy plan plus",
                    name: "Best Buy Plan Plus™",
                    price: 29.99,
                    period: "/One Time",
                  })
                }
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition"
              >
                Add to cart
              </button>
              <span className="text-xs text-gray-400 mt-2">
                Auto renews. Cancel anytime. See terms.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Percent className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Exclusive savings</h4>
              <p className="text-sm text-gray-600 mb-4">
                Member prices on popular products, special access to sales and
                events.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold">
                Learn more
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Trophy className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">1% back* in rewards</h4>
              <p className="text-sm text-gray-600 mb-4">
                with qualifying Best Buy purchases. Get 6% back* in rewards when
                you use a credit card.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold">
                Learn more
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Clock className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">
                Extended returns and exchanges*
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                A 60-day window gives you time to make sure your product is
                working properly.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold">
                Learn more
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Truck className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Free 2-day shipping*</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get your tech that much faster, with no extra charge.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS 152 & 153: Free Membership & Earning Points --- */}
      <section className="mb-20">
        <div className="bg-white p-8 px-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-5xl">🏷️</span>
                <h2 className="text-3xl lg:text-5xl font-semibold">
                  My Best Buy™
                </h2>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Join for free and get free standard shipping* and personalized
                shopping
              </p>
            </div>
            <div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition">
                Join today
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Free standard shipping*</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Easy order tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Convenient checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Personalized shopping</span>
            </div>
          </div>
        </div>

        {/* Get 6% back banner */}
        <div className="bg-linear-to-br from-[#0049B0] via-[#007DB4] to-[#00b2b8] p-8 py-20">
          <div className="bg-white max-w-4xl mx-auto border rounded-2xl shadow-xl p-8 py-10 my-10">
            <h2 className="text-3xl lg:text-5xl font-black mb-2 text-blue-900">
              Get 6% back* in rewards
            </h2>
            <p className="text-gray-600 text-base mb-8 max-w-3xl">
              With a Total or Plus membership and the My Best Buy Credit Card,
              your points and rewards will add up quickly when you purchase at
              Best Buy. Also, earn more points during special promotions.
            </p>

            <h3 className="text-xl lg:text-3xl font-bold mb-10">
              Shopping at Best Buy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6 text-center bg-gray-50">
                <p className="text-base font-semibold text-gray-900 mb-2">
                  Total or Plus member + My Best Buy® Credit Card
                </p>
                <div className="text-4xl font-black text-blue-600 mb-2">
                  6% back*
                </div>
                <p className="text-xs text-gray-900">in rewards</p>
              </div>
              <div className="border rounded-xl p-6 text-center bg-gray-50">
                <p className="text-base font-semibold text-gray-900 mb-2">
                  Use the My Best Buy® Credit Card
                </p>
                <div className="text-4xl font-black text-blue-600 mb-2">
                  5% back*
                </div>
                <p className="text-xs text-gray-900">in rewards</p>
              </div>
              <div className="border rounded-xl p-6 text-center bg-gray-50">
                <p className="text-base font-semibold text-gray-900 mb-2">
                  Shop as a Total or Plus member
                </p>
                <div className="text-4xl font-black text-blue-600 mb-2">
                  1% back*
                </div>
                <p className="text-xs text-gray-900">in rewards</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Learn more about earning points and rewards
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT 154: Exclusive Access to Sales & Events --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-block bg-teal-500 text-white font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
          TOTAL & PLUS MEMBERS
        </div>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
          Exclusive access to sales and events
        </h2>
        <p className="text-gray-600 mb-8">
          Here&apos;s a small sample of what you can expect as a member:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-60 bg-blue-100">
              <img
                src="/card1sec5.avif"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Every day savings</h3>
              <p className="text-sm text-gray-600">
                Member-only prices on popular products.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-60 bg-blue-100">
              <img
                src="/card2sec5.avif"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Member Picks</h3>
              <p className="text-sm text-gray-600">
                Discover deeply discounted items in your Best Buy app.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-60 bg-blue-100">
              <img
                src="/card3sec5.avif"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Subscription offers</h3>
              <p className="text-sm text-gray-600">
                Regular savings delivered to your member dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT 155: Don't miss out on exclusive deals --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-5xl">🏷️</span>
              <h2 className="text-3xl lg:text-5xl font-semibold">
                Buy My Best Plus Total
              </h2>
            </div>
            <h2 className="text-2xl font-semibold">
              Don&apos;t miss out on exclusive deals.
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Unlock even more exclusive member deals when you become a My Best
              Buy Plus™ or My Best Buy Total™ member.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hidden md:block hover:underline"
          >
            Discover more exclusive deals
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-60 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <img src="/product1.avif" className="" alt="" />
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Turtle Beach - Stealth 700 Gen 3 Wireless Over-Ear Gaming
                Headset for XBOX Series X/S, XBOX One, PC,...
              </p>
              <div className="text-2xl font-bold mb-1">$159.99</div>
              <p className="text-xs text-green-600 font-semibold mb-2">
                Save $40{" "}
                <span className="text-gray-400 font-normal">
                  Comp. Value: $199.99
                </span>
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">
                + 2 offers for you
              </span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-60 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <img src="/product2.webp" className="" alt="" />
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Mac mini Desktop Apple M4 chip with 16GB Memory and 256GB SSD -
                Silver
              </p>
              <div className="text-2xl font-bold mb-1">$899.00</div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">
                + 7 offers for you
              </span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-60 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <img src="/product3.avif" className="" alt="" />
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Mac mini Desktop Apple M4 chip with 16GB Memory and 512GB SSD -
                Silver
              </p>
              <div className="text-2xl font-bold mb-1">$1,099.00</div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">
                + 7 offers for you
              </span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS 156 & 157: Product Protection & Popular Services --- */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-teal-800 text-teal-200 font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
            TOTAL MEMBER EXCLUSIVE
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-12">
            Product protection is included for Total members*
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">
                Peace of mind when buying new tech
              </h3>
              <p className="text-xs text-blue-100">
                Up to 24 months of Best Buy Protection or AppleCare+ on all
                eligible purchases.*
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">Extend your coverage</h3>
              <p className="text-xs text-blue-100">
                After the included 24 months of protection ends, you can
                continue coverage with affordable monthly protection.*
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <Home className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">We make house calls</h3>
              <p className="text-xs text-blue-100">
                If your covered major appliance or TV (42&quot; class or larger)
                needs a repair, we&apos;ll come to your home.*
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <Smartphone className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">
                Here for you when accidents happen
              </h3>
              <p className="text-xs text-blue-100">
                Accidental damage coverage for drops, spills and cracks on
                portable products.
              </p>
            </div>
            <div className="bg-white text-black! backdrop-blur border border-white/20 rounded-xl p-6">
              <div className="h-10 w-10 mb-4">
                <img src="/apple.avif" alt="" />
              </div>
              <h3 className="font-bold text-base mb-2">Applecare+</h3>
              <p className="text-xs text-black">
                AppleCare+ is included for Apple purchases, so you get unlimited
                Apple-certified repairs for accidents, battery replacement
                service, 24/7 priority support, and more.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="text-yellow-400 font-semibold text-sm hover:underline"
          >
            Learn more about protection plans
          </a>
        </div>
      </section>

      {/* Popular Services Included */}
      <section
        className="bg-cover bg-center py-16 px-6 mb-24"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border rounded-2xl shadow-xl p-8 max-w-xl">
            <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-2.5 py-1 rounded-full mb-3">
              TOTAL MEMBER EXCLUSIVE
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
              Popular services are included
            </h2>

            <div className="space-y-4 divide-y">
              <div className="pt-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-base">
                    Virus Removal and Operating System Repair
                  </p>
                  <p className="text-sm text-gray-900 line-through">$149.99 </p>
                  <span className="text-teal-600 no-underline font-semibold ml-1">
                    Included with Total
                  </span>
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-base">
                    Data Backup or Transfer
                  </p>
                  <p className="text-sm text-gray-900 line-through">$99.99 </p>{" "}
                  <span className="text-teal-600 no-underline font-semibold ml-1">
                    Included with Total
                  </span>
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-base">
                    PC Tune-Up and Cleaning
                  </p>
                  <p className="text-sm text-gray-900 line-through">$49.99 </p>{" "}
                  <span className="text-teal-600 no-underline font-semibold ml-1">
                    Included with Total
                  </span>
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-base">PC or Tablet Setup</p>
                  <p className="text-sm text-gray-900 line-through">
                    $39.99{" "}
                  </p>{" "}
                  <span className="text-teal-600 no-underline font-semibold ml-1">
                    Included with Total
                  </span>
                </div>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-base">
                    Hardware Installation
                  </p>
                  <p className="text-sm text-gray-900 line-through">$39.99 </p>{" "}
                  <span className="text-teal-600 no-underline font-semibold ml-1">
                    Included with Total
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                See Computer & Tablet services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Memberships Comparison Section */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-3">
              Ready to get more from every purchase?
            </h2>
            <p className="text-blue-200">
              Choose the plan or membership that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Total Tier */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-semibold text-2xl mb-1">
                  My Best Buy Total™
                </h3>
                <div className="text-2xl font-extrabold mb-4">
                  $199.99
                  <span className="text-xs font-normal text-gray-500">
                    /year*
                  </span>
                </div>
                <button
                  onClick={() =>
                    addToCart({
                      id: "total-membership",
                      name: "My Best Buy Total™",
                      price: 199.99,
                      period: "/year",
                    })
                  }
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Add to cart
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">
                  Auto renews. Cancel anytime.
                </p>

                <ul className="space-y-4 text-xs text-gray-700">
                  <li className="flex items-start space-x-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Protection plans, including AppleCare+*</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Headset className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>24/7 VIP tech support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Wrench className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      Free in-store and remote computer/tablet services
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Percent className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>20% off repairs*</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plus Tier */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-semibold text-2xl mb-1">
                  My Best Buy Plus™
                </h3>
                <div className="text-2xl font-extrabold mb-4">
                  $29.99
                  <span className="text-xs font-normal text-gray-500">
                    /year*
                  </span>
                </div>
                <button
                  onClick={() =>
                    addToCart({
                      id: "plus-membership",
                      name: "My Best Buy Plus™",
                      price: 29.99,
                      period: "/year",
                    })
                  }
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Add to cart
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">
                  Auto renews. Cancel anytime.
                </p>

                <ul className="space-y-4 text-xs text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Tag className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Exclusive savings & member prices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Trophy className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>1% back* in rewards on purchases</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Extended 60-day returns*</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Free 2-day shipping*</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Free Tier */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-semibold text-2xl mb-1">My Best Buy™</h3>
                <div className="text-2xl font-extrabold mb-4">Free</div>
                <button
                  onClick={() =>
                    addToCart({
                      id: "free-membership",
                      name: "My Best Buy™ (Free)",
                      price: 0,
                      period: "Free",
                    })
                  }
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Join today
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">
                  No annual fee
                </p>

                <ul className="space-y-4 text-xs text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Free standard shipping*</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Easy order tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Smartphone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Personalized shopping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Credit Card Tier */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded w-max mb-2">
                  MAXIMIZE REWARDS
                </div>
                <h3 className="font-semibold text-2xl mb-4">
                  My Best Buy® Credit Card
                </h3>
                <div className="h-30 flex items-center justify-between px-4 text-white text-xs font-bold shadow-inner mb-5">
                  <img src="/cards.avif" alt="" />
                </div>

                <ul className="space-y-4 text-xs text-gray-700 mb-6">
                  <li className="flex items-start space-x-2">
                    <Percent className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>5% back* in rewards on purchases</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>No annual fee*</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: "credit-card",
                    name: "My Best Buy® Credit Card Setup",
                    price: 0,
                    period: "No Annual Fee",
                  })
                }
                className="w-full bg-white border border-gray-300 hover:bg-gray-50 font-bold py-2.5 rounded-lg text-sm shadow-sm transition"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Setup Toolkits Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-3 py-1 rounded-full mb-5">
          SPECIALIZED TOOLKITS
        </div>
        <h2 className="text-3xl lg:text-5xl font-semibold mb-3">
          Security & Setup Toolkits
        </h2>
        <p className="text-gray-600">
          Enhance your digital infrastructure with professional licenses and
          optimization suites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Toolkit 1 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Private IP & License Key Security
            </h3>
            <div className="text-2xl font-bold mb-4">
              $399.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / Year
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Advanced protection for your privacy networks, secure IP
              routing, and licensed asset verification.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-ip",
                name: "Private IP & License Key Security",
                price: 399.99,
                period: "/Year",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 2 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Windows OS License & Setup Toolkit
            </h3>
            <div className="text-2xl font-bold mb-4">
              $149.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Complete configuration package for clean Windows OS activation,
              deployment, and personalized setup.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-win",
                name: "Windows OS License & Setup Toolkit",
                price: 149.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 3 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Driver & Module Update Toolkit
            </h3>
            <div className="text-2xl font-bold mb-4">
              $99.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Automated utility suite to detect, download, and configure
              stable driver packages and system modules.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-driver",
                name: "Driver & Module Update Toolkit",
                price: 99.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 4 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              PC Optimization Toolkit
            </h3>
            <div className="text-2xl font-bold mb-4">
              $129.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Speed up performance, clear redundant processes, optimize
              startup times, and tune system memory.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-pc",
                name: "PC Optimization Toolkit",
                price: 129.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 5 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Printer Setup & Configuration
            </h3>
            <div className="text-2xl font-bold mb-4">
              $79.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Expert diagnostic troubleshooting, wireless pairing, network
              printing setup, and driver installation.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-printer",
                name: "Printer Setup & Configuration",
                price: 79.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 6 (Mac OS) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Mac OS License & Setup Toolkit
            </h3>
            <div className="text-2xl font-bold mb-4">
              $149.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Genuine activation key and complete configuration package for seamless macOS deployment.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-macos",
                name: "Mac OS License & Setup Toolkit",
                price: 149.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 7 (Technician Support) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              One Time Technician Support & Deployment Fee
            </h3>
            <div className="text-2xl font-bold mb-4">
              $129.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Professional remote diagnostics, full software deployment, and secure environment setup by a certified engineer.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "tech-fee-one-time",
                name: "One Time Technician Support & Deployment Fee",
                price: 129.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 8 (One Time Diagnostic) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              One Time Diagnostic
            </h3>
            <div className="text-2xl font-bold mb-4">
              $39.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Thorough system health check and component analysis to quickly identify hardware and software issues.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-diagnostic",
                name: "One Time Diagnostic",
                price: 39.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 9 (Official Windows 10 Installation) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Official Windows 10 Installation
            </h3>
            <div className="text-2xl font-bold mb-4">
              $109.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Clean operating system setup, initial configuration, and genuine activation package for Windows 10.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-win10",
                name: "Official Windows 10 Installation",
                price: 109.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>

        {/* Toolkit 10 (Official Windows 11 Installation) */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Official Windows 11 Installation
            </h3>
            <div className="text-2xl font-bold mb-4">
              $139.99{" "}
              <span className="text-xs font-normal text-gray-500">
                / One Time
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Secure setup, compatibility checks, and fresh deployment of the official Windows 11 operating system.
            </p>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: "toolkit-win11",
                name: "Official Windows 11 Installation",
                price: 139.99,
                period: "/One Time",
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full mb-5">
            OFFICE SOFTWARE SUITES
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-3">
            Microsoft Software & Subscriptions
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the right productivity software for your personal devices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1: Microsoft 365 Personal (12-Month) */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              {/* Image Placeholder */}
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/microsoft1.webp"
                  alt="Microsoft 365 Personal"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Microsoft - Office 365 Personal (1 Person) (12-Month
                Subscription) - Activation Required
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Windows, Mac OS, Apple iOS....
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (38,520 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $99.99
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Product 1: Microsoft 365 Personal (12-Month) */}
              <button
                onClick={() =>
                  addToCart({
                    id: "ms-365-personal",
                    name: "Microsoft - Office 365 Personal (1 Person)",
                    price: 99.99,
                    period: "/12-Month Subscription", // Added period property
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Product 2: Microsoft Office Home 2024 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              {/* Image Placeholder */}
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/microsoft2.webp"
                  alt="Microsoft Office Home 2024"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Microsoft - Office Home 2024 (1 Device) [Digital]
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Windows, Mac OS [Digital]
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (5,936 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $179.99
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "ms-office-home-2024",
                    name: "Microsoft - Office Home 2024 (1 Device)",
                    price: 179.99,
                    period: "/One Time", // Added period property
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-800 font-semibold text-xs px-3 py-1 rounded-full mb-5">
            CYBERSECURITY SUITES
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-3">
            Official 1-Year Antivirus Plans
          </h2>
          <p className="text-gray-600">
            Protect your personal devices with trusted industry-standard
            security software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Norton 360 Deluxe */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/norton360.jpg"
                  alt="Norton 360 Deluxe"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Norton 360 Deluxe (1 Device) - 1-Year Subscription
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Includes Secure VPN, Dark Web Monitoring, & Cloud Backup.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (24,110 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $39.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-norton",
                    name: "Norton 360 Deluxe (1-Year)",
                    price: 39.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* McAfee Total Protection */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/mcafee.jpg"
                  alt="McAfee Total Protection"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                McAfee Total Protection (1 Device) - 1-Year Subscription
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Award-winning antivirus, password manager, and firewall
                security.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (18,430 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $44.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-mcafee",
                    name: "McAfee Total Protection (1-Year)",
                    price: 44.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Webroot Internet Security */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/webroot.avif"
                  alt="Webroot Internet Security"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Webroot SecureAnywhere AntiVirus (1 Device) - 1-Year
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Lightning-fast cloud-based scans with real-time anti-phishing
                protection.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (9,820 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $59.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-webroot",
                    name: "Webroot SecureAnywhere (1-Year)",
                    price: 59.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Microtrends */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/microtrends.jpg"
                  alt="Microtrends Antivirus"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Trend Micro Antivirus (1 Device) - 1-Year Subscription
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Advanced AI-powered protection against web threats and ransomware.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (7,500 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $29.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-microtrends",
                    name: "Trend Micro Antivirus (1-Year)",
                    price: 29.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* MalwareBytes */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/malwarebytes.jpg"
                  alt="MalwareBytes Premium"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Malwarebytes Premium (1 Device) - 1-Year Subscription
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Proactive malware blocking, ransomware defense, and deep cleaning.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (14,200 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $39.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-malwarebytes",
                    name: "Malwarebytes Premium (1-Year)",
                    price: 39.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Avast */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-full h-44 bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                <img
                  src="/advast.png"
                  alt="Avast Premium Security"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
                Avast Premium Security (1 Device) - 1-Year Subscription
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Advanced protection against viruses, ransomware, and hacker attacks.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-3">
                <span>★★★★★</span>
                <span className="text-gray-500 font-normal">
                  (11,600 reviews)
                </span>
              </div>
              <div className="text-2xl font-bold mb-4">
                $34.99
                <span className="text-xs font-normal text-gray-500">
                  / Year
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span>Digital delivery</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  addToCart({
                    id: "antivirus-avast",
                    name: "Avast Premium Security (1-Year)",
                    price: 34.99,
                    period: "/Year",
                  })
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition text-center"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Slide-out Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Cart Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-blue-900 text-white">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-yellow-400" />
                  <h2 className="font-bold text-lg">
                    Your Cart ({cart.length})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-300 hover:text-white p-1 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-gray-500">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="font-medium text-lg">Your cart is empty</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Add memberships or toolkits to get started.
                    </p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 border rounded-xl p-4 shadow-sm"
                    >
                      <div className="pr-4">
                        <h4 className="font-bold text-sm text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-xs text-blue-600 font-semibold mt-1">
                          ${item.price.toFixed(2)}{" "}
                          <span className="text-gray-400 font-normal">
                            {item.period}
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-lg transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer / Total */}
              {cart.length > 0 && (
                <div className="border-t bg-gray-50 px-6 py-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>Subtotal:</span>
                    <span className="text-blue-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Taxes and recurring fees calculated at checkout.
                  </p>
                  <button
                    onClick={() => alert("Proceeding to secure checkout...")}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3 rounded-xl shadow-md transition"
                  >
                    Checkout Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}