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
  Gift, 
  Clock, 
  Home, 
  Smartphone, 
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  Check,
  CreditCard,
  Lock,
  Cpu,
  RefreshCw,
  Printer,
  X,
  Trash2
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
      <header className="bg-blue-700 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-black tracking-wider bg-yellow-400 text-blue-900 px-2 py-1 rounded">BEST BUY PLANS</span>
            <div className="hidden md:flex items-center bg-white rounded-md w-96 overflow-hidden">
              <input 
                type="text" 
                placeholder="Search Best Buy Plans" 
                className="w-full px-4 py-2 text-sm text-black focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="hidden sm:inline">Your store: Aiea</span>
            <span className="hidden sm:inline">Account Sign in</span>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded-lg transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
        <nav className="bg-blue-800 text-sm hidden md:flex space-x-6 px-6 py-2 overflow-x-auto">
          <span>Shop</span>
          <span>Deals</span>
          <span>Support & Services</span>
          <span>My Best Buy Memberships</span>
          <span>Security & Toolkits</span>
          <span>Credit Cards</span>
          <span>Gift Cards</span>
        </nav>
      </header>



      {/* --- SCREENSHOT 148: Hero Section & My Best Buy Total Intro --- */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-blue-900 font-bold text-xs px-2 py-1 rounded mb-4 uppercase tracking-wider">
              My Best Buy
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Meet the My Best Buy Memberships™
            </h1>
            <p className="text-lg mb-4 text-blue-100">
              Plus members get rewards*, exclusive prices and free 2-day shipping*. Total members get everything in Plus, and powerful benefits like protection plans* and 24/7 tech support.
            </p>
            <p className="text-sm">
              Already a member? <a href="#" className="underline font-semibold">Go to your dashboard.</a>
            </p>
          </div>
          <div className="relative h-72 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-teal-800/40 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-32 h-32 bg-teal-400/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-teal-200" />
              </div>
              <p className="text-teal-100 font-medium">Member Experience & Tech Support Visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Card Banner */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 mb-16">
        <div className="bg-white border rounded-2xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
              TRUSTED BY MILLIONS OF MEMBERS
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded text-lg">🏷️</span>
              <h2 className="text-2xl lg:text-3xl font-black">My Best Buy Total™</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Featuring protection plans*, 24/7 tech support, rewards* and exclusive savings
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex items-center space-x-1 text-yellow-500 mb-1 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-gray-500 ml-1">(16,729 reviews)</span>
            </div>
            <div className="text-3xl font-bold mb-3">
              $199.99 <span className="text-sm font-normal text-gray-500">/year*</span>
            </div>
            <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition">
              Add to cart
            </button>
            <span className="text-xs text-gray-400 mt-2">Auto renews. Cancel anytime. See terms.</span>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS 149 & 150: My Best Buy Total Feature Grid --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Protection plans, including AppleCare+*</h3>
              <p className="text-sm text-gray-600 mb-4">Up to 24 months of product protection on all eligible Best Buy purchases while your membership is active.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Computer and tablet support</h3>
              <p className="text-sm text-gray-600 mb-4">Unlimited in-store and remote service for your computer or tablet.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 VIP tech support</h3>
              <p className="text-sm text-gray-600 mb-4">Get help anytime with your tech problems and enjoy priority access to our support lines.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">20% off repairs*</h3>
              <p className="text-sm text-gray-600 mb-4">Save 20% on the cost of labor, no matter where you purchased your device.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">1% back* in rewards</h3>
              <p className="text-sm text-gray-600 mb-4">with qualifying Best Buy purchases. Get 6% back* in rewards when you also use a My Best Buy™ Credit Card.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Exclusive savings</h3>
              <p className="text-sm text-gray-600 mb-4">Member prices on popular products, special access to sales and events.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Extended returns and exchanges*</h3>
              <p className="text-sm text-gray-600 mb-4">A 60-day window gives you time to make sure your product is working properly.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free 2-day shipping*</h3>
              <p className="text-sm text-gray-600 mb-4">Get your tech that much faster, with no extra charge.</p>
            </div>
            <a href="#" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT 151: My Best Buy Plus Plan Section --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-white border rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b pb-8">
            <div>
              <div className="inline-block bg-teal-500 text-white font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
                EXCLUSIVE PRICES & PERKS
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded text-lg">🏷️</span>
                <h2 className="text-2xl lg:text-3xl font-black">My Best Buy Plus™</h2>
              </div>
              <p className="text-gray-600 text-sm">
                Get rewards*, access to deals and events, and extended returns and exchanges*
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <div className="flex items-center space-x-1 text-yellow-500 mb-1 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="text-gray-500 ml-1">(42,407 reviews)</span>
              </div>
              <div className="text-3xl font-bold mb-3">
                $29.99 <span className="text-sm font-normal text-gray-500">/year*</span>
              </div>
              <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition">
                Add to cart
              </button>
              <span className="text-xs text-gray-400 mt-2">Auto renews. Cancel anytime. See terms.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Percent className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Exclusive savings</h4>
              <p className="text-sm text-gray-600 mb-4">Member prices on popular products, special access to sales and events.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold">Learn more</a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Trophy className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">1% back* in rewards</h4>
              <p className="text-sm text-gray-600 mb-4">with qualifying Best Buy purchases. Get 6% back* in rewards when you use a credit card.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold">Learn more</a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Clock className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Extended returns and exchanges*</h4>
              <p className="text-sm text-gray-600 mb-4">A 60-day window gives you time to make sure your product is working properly.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold">Learn more</a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Truck className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Free 2-day shipping*</h4>
              <p className="text-sm text-gray-600 mb-4">Get your tech that much faster, with no extra charge.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS 152 & 153: Free Membership & Earning Points --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-white border rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded text-lg">🏷️</span>
                <h2 className="text-2xl lg:text-3xl font-black">My Best Buy™</h2>
              </div>
              <p className="text-gray-600 text-sm">
                Join for free and get free standard shipping* and personalized shopping
              </p>
            </div>
            <div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow transition">
                Join today
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /><span>Free standard shipping*</span></div>
            <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /><span>Easy order tracking</span></div>
            <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /><span>Convenient checkout</span></div>
            <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /><span>Personalized shopping</span></div>
          </div>
        </div>

        {/* Get 6% back banner */}
        <div className="bg-white border rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-black mb-2 text-blue-900">Get 6% back* in rewards</h2>
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">
            With a Total or Plus membership and the My Best Buy Credit Card, your points and rewards will add up quickly when you purchase at Best Buy. Also, earn more points during special promotions.
          </p>

          <h3 className="text-xl font-bold mb-6">Shopping at Best Buy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 text-center bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 mb-2">Total or Plus member + My Best Buy® Credit Card</p>
              <div className="text-4xl font-black text-blue-600 mb-2">6% back*</div>
              <p className="text-xs text-gray-500">in rewards</p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 mb-2">Use the My Best Buy® Credit Card</p>
              <div className="text-4xl font-black text-blue-600 mb-2">5% back*</div>
              <p className="text-xs text-gray-500">in rewards</p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 mb-2">Shop as a Total or Plus member</p>
              <div className="text-4xl font-black text-blue-600 mb-2">1% back*</div>
              <p className="text-xs text-gray-500">in rewards</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">Learn more about earning points and rewards</a>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT 154: Exclusive Access to Sales & Events --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-block bg-teal-500 text-white font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
          TOTAL & PLUS MEMBERS
        </div>
        <h2 className="text-3xl font-black mb-2">Exclusive access to sales and events</h2>
        <p className="text-gray-600 mb-8">Here&apos;s a small sample of what you can expect as a member:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <Smartphone className="w-12 h-12 text-blue-600" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Every day savings</h3>
              <p className="text-sm text-gray-600">Member-only prices on popular products.</p>
            </div>
          </div>
          <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <Gift className="w-12 h-12 text-amber-600" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Member Picks</h3>
              <p className="text-sm text-gray-600">Discover deeply discounted items in your Best Buy app.</p>
            </div>
          </div>
          <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <span className="text-purple-700 font-bold text-xl">Discord NITRO</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Subscription offers</h3>
              <p className="text-sm text-gray-600">Regular savings delivered to your member dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT 155: Don't miss out on exclusive deals --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="inline-block bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded text-xs mb-2">🏷️ My Best Buy Plus & Total</div>
            <h2 className="text-3xl font-black">Don&apos;t miss out on exclusive deals.</h2>
            <p className="text-gray-600 text-sm mt-1">Unlock even more exclusive member deals when you become a My Best Buy Plus™ or My Best Buy Total™ member.</p>
          </div>
          <a href="#" className="text-blue-600 font-semibold text-sm hidden md:block hover:underline">Discover more exclusive deals</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <span className="text-gray-400 font-semibold">[Headphones Image]</span>
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">Turtle Beach - Stealth 700 Gen 3 Wireless Over-Ear Gaming Headset for XBOX Series X/S, XBOX One, PC,...</p>
              <div className="text-2xl font-bold mb-1">$159.99</div>
              <p className="text-xs text-green-600 font-semibold mb-2">Save $40 <span className="text-gray-400 font-normal">Comp. Value: $199.99</span></p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">+ 2 offers for you</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <span className="text-gray-400 font-semibold">[Mac Mini Image]</span>
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">Mac mini Desktop Apple M4 chip with 16GB Memory and 256GB SSD - Silver</p>
              <div className="text-2xl font-bold mb-1">$899.00</div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">+ 7 offers for you</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <span className="text-gray-400 font-semibold">[Mac Mini Image]</span>
              </div>
              <p className="text-sm text-gray-700 mb-3 font-medium">Mac mini Desktop Apple M4 chip with 16GB Memory and 512GB SSD - Silver</p>
              <div className="text-2xl font-bold mb-1">$1,099.00</div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-semibold">+ 7 offers for you</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded-lg text-sm transition">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS 156 & 157: Product Protection & Popular Services --- */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-teal-800 text-teal-200 font-semibold text-xs px-2.5 py-1 rounded-full mb-2">
            TOTAL MEMBER EXCLUSIVE
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-12">Product protection is included for Total members*</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">Peace of mind when buying new tech</h3>
              <p className="text-xs text-blue-100">Up to 24 months of Best Buy Protection or AppleCare+ on all eligible purchases.*</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">Extend your coverage</h3>
              <p className="text-xs text-blue-100">After the included 24 months of protection ends, you can continue coverage with affordable monthly protection.*</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <Home className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">We make house calls</h3>
              <p className="text-xs text-blue-100">If your covered major appliance or TV (42&quot; class or larger) needs a repair, we&apos;ll come to your home.*</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <Smartphone className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-bold text-base mb-2">Here for you when accidents happen</h3>
              <p className="text-xs text-blue-100">Accidental damage coverage for drops, spills and cracks on portable products.</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <div className="text-red-400 font-bold text-2xl mb-4"></div>
              <h3 className="font-bold text-base mb-2">Applecare+</h3>
              <p className="text-xs text-blue-100">AppleCare+ is included for Apple purchases, so you get unlimited Apple-certified repairs for accidents, battery replacement service, 24/7 priority support, and more.</p>
            </div>
          </div>
          <a href="#" className="text-yellow-400 font-semibold text-sm hover:underline">Learn more about protection plans</a>
        </div>
      </section>

      {/* Popular Services Included */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white border rounded-2xl shadow-xl p-8 max-w-xl">
          <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-2.5 py-1 rounded-full mb-3">
            TOTAL MEMBER EXCLUSIVE
          </div>
          <h2 className="text-2xl font-black mb-6">Popular services are included</h2>

          <div className="space-y-4 divide-y">
            <div className="pt-4 flex justify-between items-center text-sm">
              <div>
                <p className="font-bold">Virus Removal and Operating System Repair</p>
                <p className="text-xs text-gray-400 line-through">$149.99 <span className="text-teal-600 no-underline font-semibold ml-1">Included with Total</span></p>
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center text-sm">
              <div>
                <p className="font-bold">Data Backup or Transfer</p>
                <p className="text-xs text-gray-400 line-through">$99.99 <span className="text-teal-600 no-underline font-semibold ml-1">Included with Total</span></p>
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center text-sm">
              <div>
                <p className="font-bold">PC Tune-Up and Cleaning</p>
                <p className="text-xs text-gray-400 line-through">$49.99 <span className="text-teal-600 no-underline font-semibold ml-1">Included with Total</span></p>
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center text-sm">
              <div>
                <p className="font-bold">PC or Tablet Setup</p>
                <p className="text-xs text-gray-400 line-through">$39.99 <span className="text-teal-600 no-underline font-semibold ml-1">Included with Total</span></p>
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center text-sm">
              <div>
                <p className="font-bold">Hardware Installation</p>
                <p className="text-xs text-gray-400 line-through">$39.99 <span className="text-teal-600 no-underline font-semibold ml-1">Included with Total</span></p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">See Computer & Tablet services</a>
          </div>
        </div>
      </section>

      {/* Main Memberships Comparison Section */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-3">Ready to get more from every purchase?</h2>
            <p className="text-blue-200">Choose the plan or membership that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* Total Tier */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-black text-xl mb-1">My Best Buy Total™</h3>
                <div className="text-2xl font-extrabold mb-4">$199.99<span className="text-xs font-normal text-gray-500">/year*</span></div>
                <button 
                  onClick={() => addToCart({ id: 'total-membership', name: 'My Best Buy Total™', price: 199.99, period: '/year' })}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Add to cart
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">Auto renews. Cancel anytime.</p>
                
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
                    <span>Free in-store and remote computer/tablet services</span>
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
                <h3 className="font-black text-xl mb-1">My Best Buy Plus™</h3>
                <div className="text-2xl font-extrabold mb-4">$29.99<span className="text-xs font-normal text-gray-500">/year*</span></div>
                <button 
                  onClick={() => addToCart({ id: 'plus-membership', name: 'My Best Buy Plus™', price: 29.99, period: '/year' })}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Add to cart
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">Auto renews. Cancel anytime.</p>
                
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
                <h3 className="font-black text-xl mb-1">My Best Buy™</h3>
                <div className="text-2xl font-extrabold mb-4">Free</div>
                <button 
                  onClick={() => addToCart({ id: 'free-membership', name: 'My Best Buy™ (Free)', price: 0, period: 'Free' })}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-bold py-2.5 rounded-lg text-sm mb-2 shadow transition"
                >
                  Join today
                </button>
                <p className="text-[11px] text-gray-400 text-center mb-6">No annual fee</p>
                
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
                <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded w-max mb-2">MAXIMIZE REWARDS</div>
                <h3 className="font-black text-xl mb-4">My Best Buy® Credit Card</h3>
                <div className="h-16 bg-gradient-to-r from-teal-600 to-blue-800 rounded-lg mb-4 flex items-center justify-between px-4 text-white text-xs font-bold shadow-inner">
                  <CreditCard className="w-6 h-6" />
                  <span>VISA / citi</span>
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
                onClick={() => addToCart({ id: 'credit-card', name: 'My Best Buy® Credit Card Setup', price: 0, period: 'No Annual Fee' })}
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
          <div className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs px-3 py-1 rounded-full mb-2">
            SPECIALIZED TOOLKITS
          </div>
          <h2 className="text-3xl font-black mb-3">Security & Setup Toolkits</h2>
          <p className="text-gray-600">Enhance your digital infrastructure with professional licenses and optimization suites.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Toolkit 1 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Private IP & License Key Security</h3>
              <div className="text-2xl font-bold mb-4">$399.99 <span className="text-xs font-normal text-gray-500">/ Year</span></div>
              <p className="text-sm text-gray-600 mb-6">Advanced protection for your privacy networks, secure IP routing, and licensed asset verification.</p>
            </div>
            <button 
              onClick={() => addToCart({ id: 'toolkit-ip', name: 'Private IP & License Key Security', price: 399.99, period: '/Year' })}
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
              <h3 className="font-bold text-lg mb-2">Windows OS License & Setup Toolkit</h3>
              <div className="text-2xl font-bold mb-4">$149.99 <span className="text-xs font-normal text-gray-500">/ One Time</span></div>
              <p className="text-sm text-gray-600 mb-6">Complete configuration package for clean Windows OS activation, deployment, and personalized setup.</p>
            </div>
            <button 
              onClick={() => addToCart({ id: 'toolkit-win', name: 'Windows OS License & Setup Toolkit', price: 149.99, period: '/One Time' })}
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
              <h3 className="font-bold text-lg mb-2">Driver & Module Update Toolkit</h3>
              <div className="text-2xl font-bold mb-4">$99.99 <span className="text-xs font-normal text-gray-500">/ One Time</span></div>
              <p className="text-sm text-gray-600 mb-6">Automated utility suite to detect, download, and configure stable driver packages and system modules.</p>
            </div>
            <button 
              onClick={() => addToCart({ id: 'toolkit-driver', name: 'Driver & Module Update Toolkit', price: 99.99, period: '/One Time' })}
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
              <h3 className="font-bold text-lg mb-2">PC Optimization Toolkit</h3>
              <div className="text-2xl font-bold mb-4">$129.99 <span className="text-xs font-normal text-gray-500">/ One Time</span></div>
              <p className="text-sm text-gray-600 mb-6">Speed up performance, clear redundant processes, optimize startup times, and tune system memory.</p>
            </div>
            <button 
              onClick={() => addToCart({ id: 'toolkit-pc', name: 'PC Optimization Toolkit', price: 129.99, period: '/One Time' })}
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
              <h3 className="font-bold text-lg mb-2">Printer Setup & Configuration</h3>
              <div className="text-2xl font-bold mb-4">$79.99 <span className="text-xs font-normal text-gray-500">/ One Time</span></div>
              <p className="text-sm text-gray-600 mb-6">Expert diagnostic troubleshooting, wireless pairing, network printing setup, and driver installation.</p>
            </div>
            <button 
              onClick={() => addToCart({ id: 'toolkit-printer', name: 'Printer Setup & Configuration', price: 79.99, period: '/One Time' })}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg text-sm shadow transition"
            >
              Add to cart
            </button>
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
                  <h2 className="font-bold text-lg">Your Cart ({cart.length})</h2>
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
                    <p className="text-xs text-gray-400 mt-1">Add memberships or toolkits to get started.</p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 border rounded-xl p-4 shadow-sm">
                      <div className="pr-4">
                        <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                        <p className="text-xs text-blue-600 font-semibold mt-1">
                          ${item.price.toFixed(2)} <span className="text-gray-400 font-normal">{item.period}</span>
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
                    <span className="text-blue-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500">Taxes and recurring fees calculated at checkout.</p>
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