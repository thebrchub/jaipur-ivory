import { Check } from "lucide-react";

const rooms = [
  {
    name: "The Royal Chamber",
    price: "₹25,000",
    image: "images/room4.webp",
    description: "An intimate escape blending modern comforts with heritage aesthetics.",
    amenities: ["King Size Bed", "City View", "Freestanding Tub", "24/7 Butler"]
  },
  {
    name: "The Heritage Pavilion",
    price: "₹45,000",
    image: "images/pavillion.webp",
    description: "Expansive luxury featuring authentic Rajasthani textiles and a private balcony.",
    amenities: ["Private Balcony", "Lounge Area", "Premium Minibar", "Spa Access"]
  },
  {
    name: "The Maharani Suite",
    price: "₹85,000",
    image: "images/room3.webp",
    description: "Our crown jewel. A sprawling estate with panoramic city views and a private plunge pool.",
    amenities: ["Private Plunge Pool", "Dining Area", "Helipad Access", "Dedicated Chef"]
  }
];

export default function Rooms() {
  return (
    <div className="pt-32 pb-32 bg-ivory min-h-screen animate-fade-in">
      {/* Expanded width to match the new Navbar and Home page */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center mb-24">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium">Accommodations</span>
          <h1 className="text-5xl md:text-6xl font-primary text-burgundy mt-4 font-light">Rooms & Suites</h1>
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto font-light text-lg">
            Every room at The Ivory Ember is a testament to the grand era of Rajputana, designed for those who appreciate the finer things in life.
          </p>
        </div>

        {/* Increased vertical spacing between rooms */}
        <div className="space-y-32">
          {rooms.map((room, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Soft rounded corners, deep shadow, and slightly taller image container */}
              <div className="w-full lg:w-1/2 h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-primary text-burgundy font-light">{room.name}</h2>
                <p className="text-charcoal/80 font-light text-lg leading-relaxed">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-y-6 py-8 border-y border-beige/60">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-charcoal font-light tracking-wide">
                      <Check size={18} className="text-gold" /> {amenity}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 gap-6">
                  <div>
                    <p className="text-xs text-charcoal/60 uppercase tracking-[0.2em] font-medium mb-1">Starting from</p>
                    <p className="text-3xl font-primary text-burgundy">{room.price} <span className="text-sm font-secondary font-light text-charcoal/60">/ night</span></p>
                  </div>
                  {/* Upgraded pill-shaped button */}
                  <button className="bg-charcoal text-ivory border border-charcoal px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-500 w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
                    Request Booking
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}