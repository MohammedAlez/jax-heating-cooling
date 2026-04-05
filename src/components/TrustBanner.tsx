import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="bg-jax-green py-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full border-4 border-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white max-w-xl"
          >
            <h2 className="text-3xl font-bold mb-2">Providing trusted HVAC solutions</h2>
            <p className="text-blue-100 text-lg">Reliable service builds trust and trust is the foundation of every great home and business.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full w-32 h-32 border border-white/20">
              <ThumbsUp className="text-white mb-2" size={32} />
              <span className="text-white font-bold text-center leading-tight text-sm">100%<br/>Satisfaction</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full w-32 h-32 border border-white/20">
              <Award className="text-white mb-2" size={32} />
              <span className="text-white font-bold text-center leading-tight text-sm">Best<br/>Quality</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full w-32 h-32 border border-white/20">
              <ShieldCheck className="text-white mb-2" size={32} />
              <span className="text-white font-bold text-center leading-tight text-sm">Verified<br/>License</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
