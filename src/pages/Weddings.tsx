export default function Weddings() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-32 relative z-0 overflow-hidden">
      
      {/* Subtle royal glow behind the hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent -z-10 pointer-events-none animate-fade-in"></div>

      {/* Expanded width to match our new premium standard */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Clean, breathing header section fading in elegantly */}
        <div className="text-center mb-24 md:mb-32 pt-8 animate-fade-in">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="w-16 h-[1px] bg-gold/50"></span>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-medium">Celebrations</span>
            <span className="w-16 h-[1px] bg-gold/50"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-primary text-burgundy mt-4 font-light">A Match Made in Royalty</h1>
        </div>

        {/* Cinematic Imagery Grid - The "Altar" Layout with Royal Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 px-4 md:px-0 items-center relative z-10">
          
          {/* Left Wing - Sweeps in from bottom left */}
          <div className="overflow-hidden rounded-3xl shadow-xl h-80 md:h-[400px] group border-4 border-ivory outline outline-1 outline-gold/20 animate-royal-left">
            <img src="images/wedding1.webp" alt="Heritage Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
          
          {/* Centerpiece - Majestic fade and scale up (delayed slightly) */}
          <div className="overflow-hidden rounded-t-[200px] md:rounded-t-[300px] rounded-b-3xl shadow-2xl h-[400px] md:h-[550px] md:-mt-16 relative z-20 group border-8 border-ivory outline outline-1 outline-gold/40 bg-charcoal animate-royal-center">
            <div className="absolute inset-0 bg-gold/10 z-10 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none"></div>
            <img src="images/wedding.webp" alt="Wedding Details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
          
          {/* Right Wing - Sweeps in from bottom right */}
          <div className="overflow-hidden rounded-3xl shadow-xl h-80 md:h-[400px] group border-4 border-ivory outline outline-1 outline-gold/20 animate-royal-right">
            <img src="images/wedding3.webp" alt="Royal Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
          
        </div>

        {/* Premium Quote Block - Fades in softly */}
        <div className="max-w-4xl mx-auto text-center mb-32 px-6 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-primary text-gold/20 select-none">"</span>
          <p className="text-2xl md:text-4xl font-primary text-burgundy font-light leading-relaxed relative z-10 italic">
            Exchange vows against the backdrop of centuries-old architecture. The Ivory Ember provides a majestic canvas for your perfect day.
          </p>
          <div className="mt-10 flex justify-center">
            <span className="w-24 h-[1px] bg-gold block"></span>
          </div>
        </div>

        {/* Venues & CTA - Fades in securely at the base */}
        <div className="bg-charcoal text-ivory p-3 md:p-4 text-center rounded-3xl shadow-2xl relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {/* Inner Gold Border for that premium envelope feel */}
          <div className="border border-gold/40 rounded-[20px] p-10 md:p-20 relative z-10 overflow-hidden">
            
            {/* Corner flourishes / glow */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-gold/10 rounded-br-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/10 rounded-tl-full blur-2xl pointer-events-none"></div>

            <div className="relative z-20">
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-6 block">Your Venue Awaits</span>
              <h2 className="text-4xl md:text-5xl font-primary text-ivory mb-8 font-light drop-shadow-md">Bespoke Wedding Packages</h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed text-lg">
                From intimate pre-wedding rituals in our Heritage Courtyard to grand receptions on the Royal Lawns accommodating up to 500 guests. Our dedicated event artisans handle every detail—from floral arrangements to custom gastronomy.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gold text-charcoal border border-gold px-12 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-ivory hover:border-ivory transition-all duration-500 shadow-[0_0_20px_rgba(200,169,107,0.3)] hover:shadow-[0_0_30px_rgba(200,169,107,0.5)]">
                  Request a Brochure
                </button>
                <button className="bg-transparent border border-gold text-gold px-12 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-charcoal transition-all duration-500">
                  Speak to a Planner
                </button>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}