import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-jax-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-jax-green blur-[150px]"></div>
        <div className="absolute left-0 top-0 w-1/2 h-full bg-jax-green blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Map & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white rounded-xl p-2 shadow-xl"
          >
            <div className="bg-slate-100 rounded-lg h-64 w-full mb-4 relative overflow-hidden flex items-center justify-center">
              {/* Placeholder for actual map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-50 grayscale"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-slate-800 flex items-center gap-2 shadow-lg text-center">
                <MapPin className="text-jax-green flex-shrink-0" />
                <span>St Martins, Oswestry SY11 3<br/><span className="text-sm font-normal text-slate-600">Covering Nationwide</span></span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-jax-green" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Service Area</p>
                  <p className="text-slate-600">St Martins, Oswestry SY11 3 (Covering Nationwide)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-jax-green" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href="tel:07496554205" className="text-slate-600 hover:text-jax-green transition-colors">07496 554205</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-jax-green" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:info@jaxheatingandcooling.co.uk" className="text-jax-green hover:underline">info@jaxheatingandcooling.co.uk</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 bg-white rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Book Your Service</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-jax-green focus:border-jax-green outline-none transition-all" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-jax-green focus:border-jax-green outline-none transition-all" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-jax-green focus:border-jax-green outline-none transition-all" placeholder="Enter your number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-jax-green focus:border-jax-green outline-none transition-all bg-white">
                  <option>Select a Service</option>
                  <option>Heating Repair</option>
                  <option>AC Installation</option>
                  <option>Ventilation Maintenance</option>
                  <option>Commercial Refrigeration</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button type="button" className="w-full bg-jax-green text-white py-4 rounded-md font-bold text-lg hover:bg-green-800 transition-colors shadow-md mt-4">
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
