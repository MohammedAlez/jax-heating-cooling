import { Phone, Menu, X, Flame, Snowflake } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import logoUrl from '/public/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="Jax Heating & Cooling Logo" className="h-16 w-auto object-contain rounded-sm" referrerPolicy="no-referrer" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-jax-green font-medium transition-colors">Home</a>
            <a href="#services" className="text-slate-700 hover:text-jax-green font-medium transition-colors">Services</a>
            <a href="#about" className="text-slate-700 hover:text-jax-green font-medium transition-colors">About</a>
            <a href="#contact" className="text-slate-700 hover:text-jax-green font-medium transition-colors">Contact</a>
            
            <a href="tel:07496554205" className="flex items-center gap-2 bg-jax-green text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-800 transition-colors shadow-md hover:shadow-lg">
              <Phone size={18} />
              <span>07496 554205</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-jax-green">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-slate-700 font-medium hover:text-jax-green hover:bg-slate-50 rounded-md">Home</a>
            <a href="#services" className="block px-3 py-2 text-slate-700 font-medium hover:text-jax-green hover:bg-slate-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-slate-700 font-medium hover:text-jax-green hover:bg-slate-50 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 text-slate-700 font-medium hover:text-jax-green hover:bg-slate-50 rounded-md">Contact</a>
            <a href="tel:07496554205" className="flex items-center gap-2 px-3 py-2 text-jax-green font-bold">
              <Phone size={18} />
              <span>07496 554205</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
