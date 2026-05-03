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
  // We assume "/" (Home) and "/dining" have dark full-screen image heroes.
  const isLightPage = ["/rooms", "/weddings", "/about", "/contact"].includes(currentPath);

  // 3. Determine if the navbar should use the dark theme (either scrolled down OR on a light page)
  const useDarkTheme = scrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    // Run once on mount to set initial state correctly
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Dining", path: "/dining" },
    { name: "Weddings", path: "/weddings" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
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

        {/* Mobile Menu Toggle - dynamically colored */}
        <button className={`lg:hidden ${useDarkTheme ? "text-charcoal" : "text-ivory drop-shadow-md"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-ivory shadow-lg flex flex-col items-center py-6 gap-6 text-sm tracking-widest uppercase border-t border-beige">
          {links.map((link) => {
             const isActive = currentPath === link.path;
             return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${isActive ? "text-gold font-bold" : "text-charcoal hover:text-gold"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/rooms"
            className="bg-burgundy text-ivory px-8 py-3 w-3/4 rounded-full text-center hover:bg-charcoal transition-colors shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Book a Stay
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left border-b border-gray-700 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-3xl font-primary text-gold tracking-widest uppercase">The Ivory Ember</h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
            A luxury heritage destination in the heart of Jaipur. Experience timeless elegance, royal hospitality, and unforgettable moments.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-lg font-primary tracking-widest uppercase">Contact Us</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start font-light">
            <span className="flex items-center gap-3"><MapPin size={18} className="text-gold" /> 1 Palace Road, Jaipur, Rajasthan</span>
            <span className="flex items-center gap-3"><Phone size={18} className="text-gold" /> +91 98765 43210</span>
            <span className="cursor-pointer hover:text-gold transition-colors">reservations@ivoryember.com</span>
          </div>
        </div>

        {/* Newsletter - Minimalist Editorial Style */}
        <div className="space-y-6">
          <h3 className="text-lg font-primary tracking-widest uppercase">Exclusive Offers</h3>
          <p className="text-sm text-gray-400 font-light">Join our society for seasonal privileges and private invitations.</p>
          <div className="flex w-full mt-4 border-b border-gray-600 focus-within:border-gold transition-colors pb-2 group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent px-2 py-2 w-full text-sm focus:outline-none text-ivory placeholder-gray-500 font-light"
            />
            <button className="text-gold px-4 py-2 text-sm uppercase tracking-widest font-medium hover:text-ivory transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 uppercase tracking-widest font-light">
        &copy; {new Date().getFullYear()} The Ivory Ember. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
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