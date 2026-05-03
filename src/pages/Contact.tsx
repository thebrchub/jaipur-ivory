import { useState } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export default function Contact() {
  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("Room Reservation");
  const inquiries = ["Room Reservation", "Dining Reservation", "Wedding & Events", "General Inquiry"];

  return (
    <div className="min-h-screen bg-beige pt-32 pb-32 animate-fade-in relative z-0">
      
      {/* Subtle royal glow behind the hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent -z-10 pointer-events-none"></div>

      {/* Expanded width to match the premium global standard */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center mb-24 pt-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="w-16 h-[1px] bg-gold/50"></span>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-medium">Guest Services</span>
            <span className="w-16 h-[1px] bg-gold/50"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-primary text-burgundy mt-4 font-light">Get in Touch</h1>
          <p className="mt-8 text-charcoal/70 max-w-2xl mx-auto font-light text-lg italic">
            We are entirely at your service. Allow our concierge to assist you in curating your perfect stay in Jaipur.
          </p>
        </div>

        {/* Upgraded to the Split-Palace Card */}
        <div className="flex flex-col lg:flex-row bg-ivory rounded-3xl shadow-2xl relative overflow-hidden border border-gold/20">
          
          {/* LEFT SIDE: Deep Charcoal "Business Card" Look */}
          <div className="w-full lg:w-2/5 bg-charcoal p-10 md:p-16 lg:p-20 relative z-10 text-ivory flex flex-col justify-between overflow-hidden">
            
            {/* Subtle gold corner flares */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-br-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-tl-full blur-3xl pointer-events-none"></div>

            <div className="relative z-20">
              <h3 className="text-3xl font-primary text-gold mb-10 border-b border-gold/20 pb-6 font-light">Contact Details</h3>
              
              <div className="space-y-8 text-ivory/80 font-light text-lg">
                <p className="flex items-center gap-5 group cursor-pointer">
                  <span className="p-3 border border-gold/20 rounded-full group-hover:bg-gold/10 transition-colors">
                    <Phone className="text-gold" size={20} /> 
                  </span>
                  <span className="group-hover:text-gold transition-colors tracking-wide">+91 98765 43210</span>
                </p>
                
                <p className="flex items-center gap-5 group cursor-pointer">
                  <span className="p-3 border border-gold/20 rounded-full group-hover:bg-gold/10 transition-colors">
                    <Mail className="text-gold" size={20} /> 
                  </span>
                  <span className="group-hover:text-gold transition-colors tracking-wide">reservations@ivoryember.com</span>
                </p>
                
                <p className="flex items-start gap-5 group">
                  <span className="p-3 border border-gold/20 rounded-full mt-1">
                    <MapPin className="text-gold" size={20} /> 
                  </span>
                  <span className="leading-relaxed tracking-wide mt-2">1 Palace Road, Jaipur,<br />Rajasthan 302001, India</span>
                </p>
              </div>
            </div>
            
            {/* Real Map Integration with Premium Blend Modes */}
            <div className="mt-16 h-56 bg-ivory/5 rounded-2xl border border-gold/20 relative overflow-hidden group cursor-pointer shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7346857187125!2d75.8234857150445!3d26.92305598312285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1bd30ba5%3A0x860e5d5db9eabdb5!2sThe%20City%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                 className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               {/* Label that fades out on hover */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-charcoal/30">
                 <span className="bg-charcoal/80 text-gold px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md flex items-center gap-2 border border-gold/20">
                   <MapPin size={14}/> Explore Jaipur
                 </span>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: Crisp Ivory Form */}
          <div className="w-full lg:w-3/5 p-10 md:p-16 lg:p-20 relative z-10">
            <h3 className="text-3xl font-primary text-burgundy mb-10 border-b border-gold/30 pb-6 font-light">Send an Inquiry</h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col group">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">First Name</label>
                  <input type="text" className="bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal" />
                </div>
                <div className="flex flex-col group">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Last Name</label>
                  <input type="text" className="bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal" />
                </div>
              </div>
              
              <div className="flex flex-col group">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Email Address</label>
                <input type="email" className="bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light text-lg text-charcoal" />
              </div>
              
              {/* UPGRADED: Custom Royal Dropdown */}
              <div className="flex flex-col relative group">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Inquiry Type</label>
                
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-transparent border-b border-charcoal/20 py-3 flex justify-between items-center cursor-pointer font-light text-lg text-charcoal group-focus-within:border-gold transition-colors"
                >
                  {selectedInquiry}
                  <ChevronDown size={20} className={`text-charcoal/40 transition-transform duration-500 ${isDropdownOpen ? "rotate-180 text-gold" : ""}`} />
                </div>

                {/* Dropdown Menu Options */}
                <div className={`absolute top-[110%] left-0 w-full bg-ivory border border-gold/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 z-50 ${isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}`}>
                  {inquiries.map((inquiry, index) => (
                    <div 
                      key={index}
                      onClick={() => {
                        setSelectedInquiry(inquiry);
                        setIsDropdownOpen(false);
                      }}
                      className="px-6 py-4 text-charcoal font-light hover:bg-gold/10 hover:text-burgundy cursor-pointer transition-colors border-b last:border-none border-charcoal/5"
                    >
                      {inquiry}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col group">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-medium group-focus-within:text-gold transition-colors">Message</label>
                <textarea rows={3} className="bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors resize-none font-light text-lg text-charcoal"></textarea>
              </div>
              
              <div className="pt-6">
                <button type="submit" className="bg-burgundy text-ivory border border-burgundy px-12 py-5 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-charcoal hover:border-charcoal transition-all duration-500 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}