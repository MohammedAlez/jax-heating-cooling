import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Frances Tung",
    time: "9 months ago",
    text: "Fast response, problems, solutions and options clearly explained, job well done!",
    initial: "F",
    color: "bg-jax-green"
  },
  {
    name: "Domenic Pisante",
    time: "9 months ago",
    text: "Excellent service. The technician was very professional and fixed our AC unit quickly. Highly recommend Jax Heating & Cooling.",
    initial: "D",
    color: "bg-slate-700"
  },
  {
    name: "Tushara Weerasooriya",
    time: "9 months ago",
    text: "This is the second time we've had them come to our house to look at an issue and both times they were fantastic.",
    initial: "T",
    color: "bg-slate-800"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            What Our Valued Customers Are Saying About Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="font-bold text-lg">Excellent</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-slate-500 text-sm">(185 reviews)</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-2xl font-bold text-slate-700">Google</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 min-h-[80px]">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-slate-500 text-xs">{review.time}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-blue-500 font-bold text-xl">G</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-jax-green text-white px-8 py-3 rounded-md font-bold hover:bg-green-800 transition-colors shadow-md">
            Book A Service Call
          </a>
        </div>
      </div>
    </section>
  );
}
