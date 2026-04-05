import { motion } from 'motion/react';
import { PhoneCall, Truck, ClipboardList, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={24} className="text-white" />,
    title: "Your Call",
    description: "We stand out with upfront pricing, clear communication, and genuine care that you'll notice the moment we answer."
  },
  {
    icon: <Truck size={24} className="text-white" />,
    title: "We Arrive",
    description: "Our technicians arrive on time in fully stocked trucks, ready to diagnose and resolve your HVAC issues."
  },
  {
    icon: <ClipboardList size={24} className="text-white" />,
    title: "We Estimate",
    description: "We provide a thorough inspection and present you with a clear, upfront estimate before any work begins."
  },
  {
    icon: <Wrench size={24} className="text-white" />,
    title: "We Service",
    description: "Our experts complete the repair or installation efficiently, ensuring your system runs perfectly."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="HVAC Technician working" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jax-dark/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Our Work Process</h3>
                <p className="text-slate-200">Our streamlined process ensures safe, efficient, and reliable HVAC solutions.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 relative"
                >
                  {/* Connecting line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-slate-200"></div>
                  )}
                  
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-jax-green flex items-center justify-center shadow-md border-4 border-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
