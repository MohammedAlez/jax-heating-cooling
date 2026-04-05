import { motion } from 'motion/react';

// Hardcoded solution for 1.png through 10.png
// Since these are in /public/gallery/, the browser finds them at /gallery/
const displayImages = Array.from({ length: 10 }, (_, i) => {
  const index = i + 1;
  const src = `/gallery/${index}.png`;
  
  return {
    src,
    alt: `Gallery Image ${index}`,
    // Maintaining your original masonry-style logic
    className: index % 5 === 0 ? "md:col-span-2 md:row-span-2" : 
               index % 4 === 0 ? "md:col-span-2 md:row-span-1" : 
               index % 3 === 0 ? "md:col-span-1 md:row-span-2" :
               "md:col-span-1 md:row-span-1"
  };
});

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Previous Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Take a look at some of our recent installations and repair projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {displayImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${image.className}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                // Error handling: if an image fails to load, we can see it in the console
                onError={(e) => console.error(`Failed to load: ${image.src}`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}