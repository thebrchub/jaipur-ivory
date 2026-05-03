export default function About() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-32 animate-fade-in relative z-0">
      
      {/* Subtle Background Glow to eliminate flat white space */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 space-y-24 md:space-y-32">
        
        {/* Intro Header Only */}
        <div className="text-center max-w-4xl mx-auto pt-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="w-16 h-[1px] bg-gold/50"></span>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-medium">Our Legacy</span>
            <span className="w-16 h-[1px] bg-gold/50"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-primary text-burgundy font-light">The Heritage Story</h1>
        </div>

        {/* Arch Image with Cinematic Text Overlay */}
        <div className="relative max-w-6xl mx-auto z-10 -mt-8 md:-mt-12">
          {/* Outer Decorative Line Frame */}
          <div className="absolute inset-0 border border-gold/40 rounded-t-[150px] md:rounded-t-[300px] rounded-b-3xl transform scale-[1.03] md:scale-[1.04] -z-10 hidden md:block transition-transform duration-1000"></div>
          
          {/* Inner Arched Image Container */}
          <div className="w-full h-[70vh] md:h-[85vh] rounded-t-[150px] md:rounded-t-[300px] rounded-b-3xl overflow-hidden shadow-2xl group border-8 border-ivory relative bg-charcoal flex flex-col justify-end">
            
            <img 
              src="images/ivory.png" 
              alt="Architecture" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" 
            />
            
            {/* Deep gradient overlay to make the text pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent z-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-90"></div>
            
            {/* Overlay Description Text */}
            <div className="relative z-20 p-8 md:p-16 lg:p-20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-ivory/95 font-light leading-relaxed text-left first-letter:text-7xl md:first-letter:text-8xl first-letter:font-primary first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:pt-2 drop-shadow-lg">
                Built in 1842, The Ivory Ember was originally a private retreat for the noble families of Rajasthan. 
                Today, it stands as a lovingly restored boutique sanctuary, preserving the whispers of the past while 
                embracing the luxuries of tomorrow.
              </p>
            </div>

          </div>
        </div>

        {/* Founder Vision - Elevated with inner borders and overlapping depth */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center bg-beige p-10 md:p-16 lg:p-24 rounded-3xl shadow-2xl relative overflow-hidden border border-gold/20">
          
          {/* Subtle decorative glow element */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/15 rounded-tl-full -mr-10 -mb-10 blur-3xl pointer-events-none"></div>

          <div className="w-full lg:w-1/2 relative z-10">
            <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-4 block">The Vision</span>
            <h2 className="text-4xl md:text-5xl font-primary text-burgundy mb-10 font-light">A Digital Luxury Destination</h2>
            
            <div className="relative">
              {/* Decorative Quote Mark behind text */}
              <span className="absolute -top-12 -left-6 text-8xl font-primary text-gold/20 select-none">"</span>
              <p className="text-charcoal/80 leading-relaxed font-light text-xl md:text-2xl mb-10 italic relative z-10">
                I don’t want a hotel. I want a digital luxury destination. Our guests should feel like they are stepping into luxury before they even arrive at our gates. Every archway, every texture, every flavor has been curated to create an emotional connection with the spirit of Jaipur.
              </p>
            </div>
            
            <span className="font-primary text-2xl text-burgundy flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold block"></span>
              The Founder
            </span>
          </div>
          
          {/* Grayscale image that reveals color on hover */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group z-10 border border-ivory/50">
            <img 
              src="images/sunset.png" 
              alt="Details" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}