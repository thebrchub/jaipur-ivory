import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";

// Import Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Weddings from "./pages/Weddings";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. Get the current URL path
  const location = useLocation();
  const currentPath = location.pathname;

  // 2. Define which pages have a LIGHT background at the very top.
  const isLightPage = ["/rooms", "/weddings", "/about", "/contact"].includes(currentPath);

  // 3. Determine if the navbar should use the dark theme (either scrolled down OR on a light page)
  const useDarkTheme = scrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Dining", path: "/dining" },
    { name: "Weddings", path: "/weddings" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo - Dynamically shifts color based on theme */}
          <Link to="/" className={`text-3xl font-primary tracking-widest uppercase transition-colors duration-500 ${useDarkTheme ? "text-burgundy" : "text-ivory drop-shadow-md"}`}>
            The Ivory Ember
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm tracking-[0.15em] uppercase font-medium">
            {links.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors duration-300 hover:text-gold ${
                    isActive 
                      ? "text-gold" // Active state color
                      : useDarkTheme 
                        ? "text-charcoal" 
                        : "text-ivory/90 drop-shadow-sm"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Pill-shaped Premium Button */}
            <Link
              to="/rooms"
              className={`px-8 py-3 rounded-full transition-all duration-500 border ${
                useDarkTheme 
                  ? "bg-burgundy border-burgundy text-ivory hover:bg-charcoal hover:border-charcoal shadow-md" 
                  : "bg-transparent border-ivory/80 text-ivory hover:bg-ivory hover:text-charcoal backdrop-blur-sm"
              }`}
            >
              Book a Stay
            </Link>
          </div>

          {/* Mobile Menu Toggle - Only shows Hamburger (X is inside the full-screen menu) */}
          <button 
            className={`lg:hidden transition-colors duration-500 ${useDarkTheme ? "text-charcoal hover:text-gold" : "text-ivory drop-shadow-md hover:text-gold"}`} 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* --- UPGRADED: Full-Screen Royal Mobile Overlay --- */}
      <div 
        className={`fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-[100] flex flex-col transition-all duration-700 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Top bar inside the menu */}
        <div className="w-full px-6 py-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-primary tracking-widest uppercase text-gold" onClick={() => setIsOpen(false)}>
            The Ivory Ember
          </Link>
          <button className="text-gold hover:text-ivory transition-colors duration-300" onClick={() => setIsOpen(false)}>
            <X size={36} strokeWidth={1.5} />
          </button>
        </div>

        {/* Massive Editorial Links */}
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
             const isActive = currentPath === link.path;
             return (
              <Link
                key={link.name}
                to={link.path}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`text-4xl sm:text-5xl font-primary tracking-widest uppercase transition-all duration-500 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${isActive ? "text-gold" : "text-ivory hover:text-gold"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            to="/rooms"
            style={{ transitionDelay: `${links.length * 100}ms` }}
            className={`mt-8 border border-gold text-gold px-12 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-charcoal transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Reserve Your Stay
          </Link>
        </div>

        {/* Elegant Bottom Heritage Stamp */}
        <div className="pb-12 text-center">
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-6"></div>
          <span className="text-gold/60 tracking-[0.3em] uppercase text-xs font-medium block">
            A Sanctioned Legacy of Jaipur
          </span>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-24 pb-12">
      {/* Upgraded Footer container to exactly match Navbar 1600px width and padding */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left border-b border-gold/20 pb-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-3xl font-primary text-gold tracking-widest uppercase">The Ivory Ember</h2>
          <p className="text-sm text-ivory/70 max-w-sm mx-auto md:mx-0 leading-relaxed font-light tracking-wide">
            A luxury heritage destination in the heart of Jaipur. Experience timeless elegance, royal hospitality, and unforgettable moments.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-8">
          <h3 className="text-sm font-primary tracking-[0.2em] uppercase text-gold">Contact Us</h3>
          <div className="flex flex-col gap-5 text-sm text-ivory/80 items-center md:items-start font-light">
            <span className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer"><MapPin size={20} className="text-gold" /> 1 Palace Road, Jaipur, Rajasthan</span>
            <span className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer"><Phone size={20} className="text-gold" /> +91 98765 43210</span>
            <span className="cursor-pointer hover:text-gold transition-colors ml-9">reservations@ivoryember.com</span>
          </div>
        </div>

        {/* Newsletter - Minimalist Editorial Style */}
        <div className="space-y-8">
          <h3 className="text-sm font-primary tracking-[0.2em] uppercase text-gold">Exclusive Offers</h3>
          <p className="text-sm text-ivory/70 font-light tracking-wide">Join our society for seasonal privileges and private invitations.</p>
          <div className="flex w-full mt-4 border-b border-gold/30 focus-within:border-gold transition-colors pb-3 group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent px-2 py-2 w-full text-sm focus:outline-none text-ivory placeholder-ivory/30 font-light tracking-wide"
            />
            <button className="text-gold px-4 py-2 text-sm uppercase tracking-[0.2em] font-medium hover:text-ivory transition-colors">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-ivory/40 mt-12 uppercase tracking-[0.2em] font-light">
        &copy; {new Date().getFullYear()} The Ivory Ember. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}