import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-gym.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import trainingAction from "@/assets/training-action.jpg";

const images = [
  { src: heroImage, alt: "Gym training area" },
  { src: gymInterior, alt: "Weight room" },
  { src: trainingAction, alt: "Battle ropes training" },
  { src: heroImage, alt: "Fitness equipment" },
  { src: gymInterior, alt: "Dumbbell rack" },
  { src: trainingAction, alt: "Personal training session" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Our Space</p>
            <h1 className="section-title">
              <span className="text-primary">Gallery</span>
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Take a look inside Ahmedabad's premium fitness destination.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
