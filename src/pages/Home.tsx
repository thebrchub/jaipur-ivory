import { Link } from "react-router-dom";
import { ArrowRight, Star, Camera } from "lucide-react";
import { useState, useEffect, useRef, type ReactNode } from "react";

// --- CUSTOM SCROLL REVEAL COMPONENT ---
// This watches the screen and triggers animations ONLY when scrolled into view
interface RevealProps {
  children: ReactNode;
  animationClass?: string;
  delay?: string;
  className?: string;
}

const Reveal = ({ children, animationClass = "animate-pure-fade", delay = "0s", className = "" }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Unhook once it animates
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const suitesData = [
    { name: "The Maharani Suite", img: "images/room3.webp", price: "₹85,000" },
    { name: "The Heritage Pavilion", img: "images/pavillion.webp", price: "₹45,000" },
    { name: "The Royal Chamber", img: "images/room4.webp", price: "₹25,000" }
  ];

  const instagramPosts = [
    { img: "/images/sunset.webp", caption: "Sunset views at Ember Rooftop." },
    { img: "/images/heritage.webp", caption: "Detailed heritage patterns." },
    { img: "/images/wedding.webp", caption: "A wedding at Ivory Gardens." },
    { img: "/images/room.webp", caption: "Your royal sanctuary awaits." },
  ];

  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Maharaja Hero Section */}
      <section className="relative h-screen flex items-center text-left bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ivory.webp"
            alt="The Ivory Ember Palace Courtyard"
            onLoad={() => setIsHeroLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out transform ${
              isHeroLoaded ? "blur-0 scale-100 opacity-100" : "blur-2xl scale-110 opacity-50"
            }`}
          />
          <div className="absolute inset-0 bg-charcoal/30 transition-opacity duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-transparent h-48"></div>
        </div>
        
        <div className="relative z-10 text-ivory w-full pb-24 pt-32 gap-12 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:items-end justify-between">
          
          {/* Hero Text - Pure Fade (No movement) */}
          <Reveal animationClass="animate-pure-fade" delay="0.3s" className="max-w-3xl lg:mt-16">
            <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-medium drop-shadow-md">
              A Sanctioned Legacy of Jaipur
            </span>
            <h1 className="text-5xl md:text-8xl font-primary leading-[1.1] md:leading-[1.05] font-light drop-shadow-xl">
              Where Royal Heritage <br /> Meets Modern Luxury
            </h1>
          </Reveal>
          
          {/* Hero CTA - Pure Fade */}
          <Reveal animationClass="animate-pure-fade" delay="0.6s">
            <Link
              to="/rooms"
              className="border-2 border-ivory/80 text-ivory px-12 py-5 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-500 whitespace-nowrap shadow-2xl backdrop-blur-sm bg-charcoal/20 mb-4 block"
            >
              Experience The Ivory
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. Brand Narrative */}
      <section className="py-24 md:py-32 bg-ivory overflow-hidden relative z-10">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text - Pure Fade */}
          <Reveal className="w-full lg:w-1/2 space-y-8" animationClass="animate-pure-fade" delay="0.2s">
            <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium">Est. 1842</span>
            <h2 className="text-4xl md:text-6xl font-primary text-burgundy font-light">A Sanctuary for the Soul</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg font-light max-w-xl">
              Nestled in the golden heart of Jaipur, The Ivory Ember is a lovingly restored boutique palace. Step into a timeless sanctuary where ancient Rajasthani architecture bends seamlessly with contemporary sophistication, offering an unparalleled retreat for the discerning global traveler.
            </p>
          </Reveal>

          {/* Image - Sweeps in from right */}
          <Reveal className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative" animationClass="animate-royal-right" delay="0.4s">
            <img src="/images/archway.webp" alt="Detailed Archway" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent text-ivory text-sm tracking-widest font-light">
              [ Heritage Detail Shot - Our restored archways ]
            </div>
          </Reveal>

        </div>
      </section>

      {/* 3. Featured Suites */}
      <section className="py-24 md:py-32 bg-beige overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
          
          <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6" animationClass="animate-pure-fade">
            <div>
              <span className="text-burgundy tracking-widest uppercase text-xs font-semibold">Residences</span>
              <h2 className="text-5xl font-primary mt-2 font-light text-burgundy">Signature Suites</h2>
            </div>
            <Link to="/rooms" className="flex items-center gap-2 text-burgundy hover:text-gold transition-colors tracking-widest uppercase text-sm font-semibold">
              Discover All <ArrowRight size={18} />
            </Link>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {/* Left Suite */}
            <Reveal animationClass="animate-royal-left">
              <div className="bg-ivory group overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3">
                <div className="overflow-hidden h-[400px] rounded-t-3xl border-b border-gold/10">
                  <img src={suitesData[0].img} alt={suitesData[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 space-y-4 relative">
                  <p className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Starting from <span className="font-bold">{suitesData[0].price} / night</span></p>
                  <h3 className="text-3xl font-primary font-light text-burgundy">{suitesData[0].name}</h3>
                  <Link to="/rooms" className="text-charcoal border-b border-charcoal/20 pb-2 inline-block uppercase tracking-widest text-xs font-semibold group-hover:text-gold group-hover:border-gold transition-colors mt-4">
                    Request Booking
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Center Suite */}
            <Reveal animationClass="animate-royal-center" delay="0.2s" className="md:-mt-8">
              <div className="bg-ivory group overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3">
                <div className="overflow-hidden h-[400px] md:h-[432px] rounded-t-3xl border-b border-gold/10">
                  <img src={suitesData[1].img} alt={suitesData[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 space-y-4 relative">
                  <p className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Starting from <span className="font-bold">{suitesData[1].price} / night</span></p>
                  <h3 className="text-3xl font-primary font-light text-burgundy">{suitesData[1].name}</h3>
                  <Link to="/rooms" className="text-charcoal border-b border-charcoal/20 pb-2 inline-block uppercase tracking-widest text-xs font-semibold group-hover:text-gold group-hover:border-gold transition-colors mt-4">
                    Request Booking
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right Suite */}
            <Reveal animationClass="animate-royal-right" delay="0.4s">
              <div className="bg-ivory group overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:-translate-y-3">
                <div className="overflow-hidden h-[400px] rounded-t-3xl border-b border-gold/10">
                  <img src={suitesData[2].img} alt={suitesData[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 space-y-4 relative">
                  <p className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Starting from <span className="font-bold">{suitesData[2].price} / night</span></p>
                  <h3 className="text-3xl font-primary font-light text-burgundy">{suitesData[2].name}</h3>
                  <Link to="/rooms" className="text-charcoal border-b border-charcoal/20 pb-2 inline-block uppercase tracking-widest text-xs font-semibold group-hover:text-gold group-hover:border-gold transition-colors mt-4">
                    Request Booking
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Signature Dining Teaser */}
      <section className="py-24 md:py-32 bg-ivory overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <Reveal className="w-full lg:w-1/2 space-y-8" animationClass="animate-pure-fade" delay="0.2s">
                <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium">Culinary Excellence</span>
                <h2 className="text-5xl md:text-6xl font-primary text-burgundy font-light leading-tight">The Ember Rooftop</h2>
                <p className="text-charcoal/80 leading-relaxed text-lg font-light max-w-xl">
                  Dine under the stars with breathtaking views of the Pink City. Experience a culinary symphony that honors ancient royal recipes while embracing contemporary arts.
                </p>
                <Link to="/dining" className="bg-charcoal text-ivory border border-charcoal px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:border-gold hover:text-charcoal transition-all shadow-lg hover:shadow-xl inline-block mt-4">
                    Reserve Your Table
                </Link>
            </Reveal>

            <Reveal className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative" animationClass="animate-royal-right" delay="0.4s">
                <img src="images/dine.webp" alt="Dining View" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
            </Reveal>
            
        </div>
      </section>

      {/* 5. Virtual Tour & Member Offers */}
      <section className="py-24 md:py-32 bg-burgundy/5 overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <Reveal className="bg-ivory p-12 md:p-16 rounded-3xl shadow-xl flex flex-col justify-center items-start space-y-8 border border-gold/10" animationClass="animate-pure-fade" delay="0.2s">
                <Star className="text-gold" size={36}/>
                <h3 className="text-4xl font-primary font-light text-burgundy">Exclusive Member Privileges</h3>
                <p className="text-charcoal/70 font-light text-lg">Join our legacy society for seasonal offers, private event invites, and priority reservations.</p>
                <button className="border border-gold text-gold px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-ivory transition-colors mt-4">
                    Join The Legacy
                </button>
            </Reveal>

            <Reveal className="relative rounded-3xl overflow-hidden shadow-xl group h-[400px] md:h-auto border border-ivory/50" animationClass="animate-royal-right" delay="0.4s">
                <img src="images/virtual.webp" alt="Palace Room" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-charcoal/50 flex flex-col items-center justify-center text-center p-12 text-ivory transition-colors duration-500 group-hover:bg-charcoal/40">
                  <Star size={48} className="mb-6 text-gold"/>
                  <h3 className="text-4xl md:text-5xl font-primary font-light mb-8">Virtual Palace Tour</h3>
                  <button className="bg-ivory text-charcoal px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors shadow-lg">Start Tour</button>
                </div>
            </Reveal>

        </div>
      </section>

      {/* 6. Instagram Gallery */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
          
          <Reveal className="text-center mb-16 space-y-6" animationClass="animate-pure-fade">
            <Camera className="text-gold mx-auto" size={36} />
            <h2 className="text-4xl md:text-5xl font-primary font-light text-gold">Follow The Legacy</h2>
            <Link to="#" className="text-gray-400 hover:text-ivory transition-colors text-sm tracking-[0.2em] uppercase block">@TheIvoryEmber</Link>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {instagramPosts.map((post, i) => (
                <Reveal key={i} animationClass="animate-royal-center" delay={`${0.2 + (i * 0.1)}s`}>
                  <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                      <img src={post.img} alt={post.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                          <p className="text-sm text-ivory font-light leading-relaxed tracking-wide">{post.caption}</p>
                      </div>
                  </div>
                </Reveal>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}