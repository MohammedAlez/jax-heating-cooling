import { Flame, Snowflake, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.jpg" alt="Jax Heating & Cooling Logo" className="h-16 w-auto object-contain rounded-md" referrerPolicy="no-referrer" />
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              Our licensed technicians deliver fast, reliable, and affordable heating, ventilation, air conditioning, and refrigeration services nationwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-jax-green hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-jax-green hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-jax-green hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-jax-green hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-jax-green transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-jax-green transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-jax-green transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-jax-green transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-jax-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-jax-green transition-colors">Heating Repair</a></li>
              <li><a href="#" className="hover:text-jax-green transition-colors">AC Installation</a></li>
              <li><a href="#" className="hover:text-jax-green transition-colors">Ventilation</a></li>
              <li><a href="#" className="hover:text-jax-green transition-colors">Commercial Refrigeration</a></li>
              <li><a href="#" className="hover:text-jax-green transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jax Heating & Cooling. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Email: <a href="mailto:info@jaxheatingandcooling.co.uk" className="hover:text-white transition-colors">info@jaxheatingandcooling.co.uk</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
