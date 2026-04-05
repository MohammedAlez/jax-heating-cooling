import { motion } from 'motion/react';

// 1. We remove '/public' from the path. Vite maps the root '/' to the public folder.
// 2. We add { as: 'url' } to ensure we get the string path directly.
const galleryModules = import.meta.glob('/gallery/*.{jpg,jpeg,png,webp,gif}', { 
  eager: true, 
  as: 'url' 
});

// Extract the URL strings from the module object
const uploadedImages = Object.values(galleryModules);

// Process the images for the grid layout
const displayImages = uploadedImages.map((src, index) => ({
  src,
  alt: `Gallery Image ${index + 1}`,
  className: index % 5 === 0 ? "md:col-span-2 md:row-span-2" : 
             index % 4 === 0 ? "md:col-span-2 md:row-span-1" : 
             index % 3 === 0 ? "md:col-span-1 md:row-span-2" :
             "md:col-span-1 md:row-span-1"
}));

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
            className="w-24 h-1 bg-jax-green mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Take a look at some of our recent installations and repair projects across the country.
          </motion.p>
          
          {uploadedImages.length === 0 && (
            <p className="mt-4 text-sm text-amber-600 bg-amber-50 inline-block px-4 py-2 rounded-md border border-amber-200">
              Note: Upload images to the <strong>/public/gallery</strong> folder to see them here.
            </p>
          )}
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
                // Adding loading="lazy" helps with performance for large galleries
                loading="lazy" 
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
