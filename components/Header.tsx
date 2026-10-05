"use client"
import {useState} from 'react'
import Link from "next/link";
import { useCart } from "@/context/CartContext";
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

function Header() {
  // Cart state now comes from shared CartContext
  const { cart, isCartOpen, setIsCartOpen } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [savedUserName, setSavedUserName] = useState("");
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

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

  return (
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
            {totalCartCount > 0 && (
              <span className="absolute -top-2 -right-1 bg-[#ffe000] text-[#0046BE] font-bold text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {totalCartCount}
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
          <Link href="/deal-of-the-day">Deal of the Day</Link>
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

            <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
              Fall Football
            </button>
            <button type="button" className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
              Top Deals
            </button>
            <Link href="/deal-of-the-day" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700">
              Deal of the Day
            </Link>
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

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Email ID</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="Enter your phone number"
                maxLength={15}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0046BE] focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="button"
              onClick={handleSignIn}
              disabled={!userName.trim() || !userEmail.trim() || !userPhone.trim()}
              className="w-full rounded-lg bg-[#0046BE] px-4 py-3 font-bold text-white transition hover:bg-[#003b9f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header;