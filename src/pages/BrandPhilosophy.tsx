import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, ShieldCheck, Heart, ChefHat } from "lucide-react";

const BrandPhilosophy = () => {
  return (
    <div className="min-h-screen bg-amber-50/30">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-amber-100/50 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Leaf className="h-12 w-12 text-amber-700 mx-auto" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-amber-900 mb-6 tracking-tight">
              Our Brand Philosophy
            </h1>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-6" />
            <p className="text-lg text-amber-800/80 max-w-2xl mx-auto leading-relaxed font-light">
              We're a 100% vegetarian kitchen. We follow strict quality practices.
            </p>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-amber-900 mb-2 text-center">Quality Practices</h2>
            <p className="text-center text-amber-700/70 mb-16 italic">The foundation of everything we do</p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 border-2 border-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-500">
                  <Leaf className="h-9 w-9 text-amber-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">Fresh Daily</h3>
                <p className="text-amber-800/70 leading-relaxed">
                  No reuse or storage of pre-cut vegetables. All ingredients are prepared fresh every day.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 border-2 border-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-500">
                  <Heart className="h-9 w-9 text-amber-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">Zero Waste</h3>
                <p className="text-amber-800/70 leading-relaxed">
                  Any leftover food is responsibly donated to those in need.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 border-2 border-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-500">
                  <ShieldCheck className="h-9 w-9 text-amber-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">Hygiene First</h3>
                <p className="text-amber-800/70 leading-relaxed">
                  We are confident in our hygiene standards. Feel free to visit us anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Friendly Section */}
        <section className="px-4 py-20 bg-stone-100/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-px w-12 bg-amber-400" />
              <Recycle className="h-8 w-8 text-amber-700" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif font-light text-amber-900">Eco Friendly</h2>
              <div className="h-px w-12 bg-amber-400" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-lg text-amber-900 mb-3">Clean Energy</h4>
                <p className="text-amber-800/70 text-sm leading-relaxed">
                  Responsibly contributing our used cooking oil towards the production of clean, renewable biodiesel.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-lg text-amber-900 mb-3">Eco Packaging</h4>
                <p className="text-amber-800/70 text-sm leading-relaxed">
                  All our packaging is eco-friendly and sustainable, because every choice matters.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-lg text-amber-900 mb-3">Waste Segregation</h4>
                <p className="text-amber-800/70 text-sm leading-relaxed">
                  Proper garbage segregation of dry and wet waste at our kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Food Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <ChefHat className="h-8 w-8 text-amber-700" strokeWidth={1.5} />
              <h2 className="text-3xl font-serif font-light text-amber-900">Responsible Food</h2>
            </div>
            <p className="text-center text-amber-800/70 mb-16 max-w-xl mx-auto">
              We have nutrition profiling done for all our food to ensure every meal is balanced and nourishing.
            </p>
            
            <div className="border border-amber-200 rounded-sm p-10 bg-white">
              <h3 className="text-xl font-serif text-amber-900 mb-8 text-center">Crafted In-House</h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl mx-auto">
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
                    className="flex items-center gap-4 py-3 border-b border-amber-100 last:border-0"
                  >
                    <span className="text-amber-500">—</span>
                    <span className="text-amber-800/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
