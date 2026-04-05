import { motion } from 'motion/react';
import { Clock, Zap, Star, CheckCircle2, Truck, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Clock className="text-jax-green" size={24} />,
    title: "Punctual Technicians",
    description: "Our team arrives on time, so you're never left waiting for them to arrive."
  },
  {
    icon: <Zap className="text-slate-700" />,
    title: "Latest Technology",
    description: "We use the latest tools and equipment for faster, longer-lasting repairs."
  },
  {
    icon: <Star className="text-jax-green" />,
    title: "Best in Class Experience",
    description: "We consistently earn 5-star reviews for our customer service."
  },
  {
    icon: <CheckCircle2 className="text-jax-green" />,
    title: "Efficient Work",
    description: "You want the job done quickly. We start work promptly and don't stop until it's finished."
  },
  {
    icon: <Truck className="text-slate-700" />,
    title: "Fully Stocked Trucks",
    description: "We carry the most common parts and equipment, nearly all repairs are completed on the first visit."
  },
  {
    icon: <MessageSquare className="text-jax-green" />,
    title: "Clear Communication",
    description: "Our technicians tell you exactly what needs doing so you can make the most informed decision."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Quality You Can Count On Every Time
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We strive to provide exceptional service, equipment quality, and value. That means you can count on fair upfront pricing and shockingly great service every time. Our upfront flat rate prices mean you'll never experience a surprise, because we charge for the service you require, not by the hour.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="HVAC Team" 
                className="rounded-xl shadow-lg w-full object-cover h-64"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
