import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

// The custom Reveal component (copied here so the page works perfectly standalone)
const Reveal = ({ children, animationClass = "animate-pure-fade", delay = "0s", className = "" }: any) => {
  return (
    <div className={`${className} ${animationClass} opacity-0`} style={{ animationDelay: delay, animationFillMode: "forwards" }}>
      {children}
    </div>
  );
};

export default function Dining() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Rooftop Terrace");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuHighlights = [
    { name: "Saffron Infused Lamb", desc: "Slow-cooked for 12 hours with authentic Rajasthani spices.", price: "₹2,400" },
    { name: "Truffle Malai Kofta", desc: "A modern twist on a classic, served with gold leaf garnish.", price: "₹1,800" },
    { name: "Smoked Dal Ember", desc: "Our signature black lentil delicacy, simmered overnight.", price: "₹1,200" },
  ];

  const diningAreas = ["Rooftop Terrace", "The Heritage Indoor", "Private Cabana (Requires Minimum Spend)"];

  return (
    <div className="min-h-screen animate-fade-in relative">
      
      {/* --- DINING PAGE CONTENT --- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="images/dine.webp" alt="Fine Dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-transparent h-48"></div>
        </div>
        
        <div className="relative z-10 text-ivory px-6 mt-16 animate-royal-center">
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-medium drop-shadow-md">
            Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-primary font-light drop-shadow-xl">
            The Ember Rooftop
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <Reveal className="w-full lg:w-1/2 space-y-10" animationClass="animate-royal-left">
            <h2 className="text-4xl md:text-5xl font-primary text-burgundy font-light leading-tight">
              A Symphony of Flavors
            </h2>
            <p className="text-charcoal/80 leading-relaxed font-light text-lg max-w-2xl">
              Dine under the stars with breathtaking views of the Pink City. Our executive chefs have curated a menu that honors ancient royal recipes while embracing contemporary culinary arts. Every dish is a masterpiece, paired with our sommelier's global wine selections.
            </p>
            {/* BUTTON TRIGGERS MODAL */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-charcoal text-ivory border border-charcoal px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-500 shadow-lg hover:shadow-xl inline-block mt-4"
            >
              Reserve a Table
            </button>
          </Reveal>
          
          <Reveal className="w-full lg:w-1/2 bg-beige p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden" animationClass="animate-royal-right" delay="0.2s">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-10 -mt-10 blur-2xl"></div>
            <h3 className="text-3xl font-primary text-burgundy mb-10 border-b border-gold/30 pb-6 font-light">
              Chef's Signatures
            </h3>
            <div className="space-y-10 relative z-10">
              {menuHighlights.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-3 gap-2">
                    <h4 className="text-xl font-primary text-charcoal tracking-wide group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h4>
                    <span className="text-burgundy font-primary text-2xl border-b border-dotted border-charcoal/20 sm:border-none flex-grow mx-4 hidden sm:block"></span>
                    <span className="text-burgundy font-primary text-xl font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 font-light tracking-wide">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* --- ROYAL BOOKING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Deep blurred backdrop */}
          <div 
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-md animate-pure-fade" 
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* The Modal Card */}
          <div className="relative w-full max-w-2xl bg-ivory rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-gold/30 animate-royal-center z-10">
            
            {/* Top decorative gold lip */}
            <div className="h-2 w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20"></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 text-charcoal/40 hover:text-burgundy transition-transform hover:rotate-90 duration-500 z-20"
            >
              <X size={28} />
            </button>

            <div className="p-10 md:p-14 relative">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-br-full blur-3xl pointer-events-none"></div>

              <div className="text-center mb-12 relative z-10">
                <span className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4 block">The Ember Rooftop</span>
                <h3 className="text-4xl md:text-5xl font-primary text-burgundy font-light">Request a Table</h3>
              </div>

              {/* Bespoke Form */}
              <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Date Input */}
                  <div className="flex flex-col group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Date</label>
                    <input type="date" className="bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal cursor-pointer" />
                  </div>
                  
                  {/* Time Input */}
                  <div className="flex flex-col group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Time</label>
                    <input type="time" className="bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal cursor-pointer" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Party Size */}
                  <div className="flex flex-col group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Party Size</label>
                    <input type="number" min="1" max="20" placeholder="2 Guests" className="bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal placeholder:text-charcoal/30" />
                  </div>

                  {/* Custom Dropdown for Dining Area */}
                  <div className="flex flex-col relative group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Dining Area</label>
                    
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="bg-transparent border-b border-charcoal/20 py-2 flex justify-between items-center cursor-pointer font-light text-lg text-charcoal group-focus-within:border-gold transition-colors"
                    >
                      <span className="truncate pr-4">{selectedArea}</span>
                      <ChevronDown size={20} className={`text-charcoal/40 transition-transform duration-500 flex-shrink-0 ${isDropdownOpen ? "rotate-180 text-gold" : ""}`} />
                    </div>

                    {/* Dropdown Options */}
                    <div className={`absolute top-[110%] left-0 w-full bg-ivory border border-gold/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 z-50 ${isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}`}>
                      {diningAreas.map((area, index) => (
                        <div 
                          key={index}
                          onClick={() => { setSelectedArea(area); setIsDropdownOpen(false); }}
                          className="px-6 py-4 text-charcoal font-light hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors border-b last:border-none border-charcoal/5 truncate"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="flex flex-col group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Full Name</label>
                    <input type="text" className="bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal" />
                  </div>
                  <div className="flex flex-col group">
                    <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Phone Number</label>
                    <input type="tel" className="bg-transparent border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8 flex justify-center">
                  <button type="submit" className="bg-burgundy text-ivory border border-burgundy px-14 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-charcoal hover:border-charcoal transition-all duration-500 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                    Confirm Request
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}