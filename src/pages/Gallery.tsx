import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TiltCard from "@/components/ui/TiltCard";
import CTASection from "@/components/sections/CTASection";

const galleryItems = [
  {
    id: 1,
    title: "Blue Zinc Plated Bolts",
    category: "Blue Zinc",
    description: "High-quality blue passivated fasteners for automotive applications.",
  },
  {
    id: 2,
    title: "White Zinc Hardware",
    category: "White Zinc",
    description: "Bright silver finish on precision hardware components.",
  },
  {
    id: 3,
    title: "Green Zinc Military Parts",
    category: "Green Zinc",
    description: "Olive drab finish meeting military specifications.",
  },
  {
    id: 4,
    title: "Black Zinc Components",
    category: "Black Zinc",
    description: "Sleek black finish for aesthetic and functional applications.",
  },
  {
    id: 5,
    title: "Trivalent Coated Parts",
    category: "Trivalent",
    description: "RoHS compliant environmentally friendly plating.",
  },
  {
    id: 6,
    title: "Phosphated Gears",
    category: "Phosphating",
    description: "Manganese phosphate coating for enhanced wear resistance.",
  },
  {
    id: 7,
    title: "Automotive Fasteners",
    category: "Blue Zinc",
    description: "Bulk automotive fasteners with consistent quality finish.",
  },
  {
    id: 8,
    title: "Industrial Brackets",
    category: "White Zinc",
    description: "Structural components with corrosion-resistant coating.",
  },
  {
    id: 9,
    title: "Precision Shafts",
    category: "Phosphating",
    description: "Machine shafts with superior oil retention properties.",
  },
];

const categories = ["All", "Blue Zinc", "White Zinc", "Green Zinc", "Black Zinc", "Trivalent", "Phosphating"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of precision electroplating work. 
              Each piece showcases our commitment to quality and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <TiltCard>
                    <div
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer group"
                    >
                      <div className="aspect-square bg-gradient-to-br from-muted to-accent rounded-xl overflow-hidden relative">
                        {/* Placeholder for actual images */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-primary/40">
                              {item.id}
                            </span>
                          </div>
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-xs text-primary-foreground/80 bg-primary/80 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-white mt-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/40">
                    {selectedItem.id}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </Layout>
  );
};

export default Gallery;
