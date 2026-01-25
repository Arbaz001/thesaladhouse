import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, ShieldCheck, Heart, ChefHat, Sparkles } from "lucide-react";

const BrandPhilosophy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>100% Veg & Vibe Check ✓</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-6">
              Our Brand Philosophy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're a <span className="font-bold text-purple-600">100% vegetarian kitchen</span> serving fresh, gourmet salads, wraps, and wholesome meal bowls. 
              No cap, we follow strict quality practices 💯
            </p>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-4 text-gray-800">Quality Hits Different 🔥</h2>
            <p className="text-center text-gray-500 mb-12">fr fr, we don't play with your food</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-transparent hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Fresh Daily 🥬</h3>
                <p className="text-gray-600">
                  No reuse or storage of pre-cut vegetables. All ingredients are prepared fresh every day. Period.
                </p>
              </div>
              
              <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-transparent hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Zero Waste 💕</h3>
                <p className="text-gray-600">
                  Any leftover food is responsibly donated. We're all about that sustainable life.
                </p>
              </div>
              
              <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-transparent hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Hygiene First ✨</h3>
                <p className="text-gray-600">
                  We're very confident in our hygiene standards. Pull up anytime during the day, we're ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Friendly Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[2rem] p-1">
              <div className="bg-white rounded-[1.8rem] p-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
                    <Recycle className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-800">Eco Friendly 🌍</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                    <span className="text-4xl mb-4 block">⚡</span>
                    <h4 className="font-bold text-gray-800 mb-2">Clean Energy</h4>
                    <p className="text-gray-600 text-sm">
                      Contributing our used cooking oil towards renewable biodiesel production.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <span className="text-4xl mb-4 block">📦</span>
                    <h4 className="font-bold text-gray-800 mb-2">Eco Packaging</h4>
                    <p className="text-gray-600 text-sm">
                      All our packaging is eco-friendly and sustainable. We care.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <span className="text-4xl mb-4 block">♻️</span>
                    <h4 className="font-bold text-gray-800 mb-2">Waste Segregation</h4>
                    <p className="text-gray-600 text-sm">
                      Proper dry and wet waste segregation. It's giving responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Food Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-800">Responsible Food 🍳</h2>
            </div>
            <p className="text-center text-gray-500 mb-10">
              Nutrition profiling done for all our food. We know what's up.
            </p>
            
            <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Made In-House <span className="text-orange-500">✌️</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "In-house hung curd",
                  "In-house pickled veggies and onions",
                  "In-house roasted chickpeas",
                  "Candied spicy nuts",
                  "In-house tomato paste",
                  "In-house ginger garlic paste"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:scale-102 transition-transform"
                  >
                    <span className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-black mb-4">Come Vibe With Us 🤙</h2>
              <p className="text-white/90 mb-6">
                Fresh food, good vibes, zero judgment. Just salads that slap.
              </p>
              <a 
                href="/#menu" 
                className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Check Our Menu →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
