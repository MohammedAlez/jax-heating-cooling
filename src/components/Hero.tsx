import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="HVAC Technician" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jax-dark/90 to-jax-dark/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-jax-green/20 text-jax-green font-semibold text-sm mb-4 border border-jax-green/30">
              Nationwide Coverage from Wales
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert <span className="text-jax-green">Heating</span> & <span className="text-jax-green">Cooling</span> Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Upfront pricing, quick response, and guaranteed satisfaction every time. We're committed to providing transparent service and reliable results for all your HVAC and refrigeration needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-jax-green text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
                Book a Service Call
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
