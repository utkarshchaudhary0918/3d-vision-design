import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetallicParticles from "@/components/3d/MetallicParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MetallicParticles />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
            <span className="text-primary-foreground font-bold text-5xl">KE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
        >
          Karni Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary font-semibold mb-4"
        >
          The Plating Experts
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Industry leaders in electroplating and surface finishing solutions. 
          Delivering precision, quality, and excellence in every project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="text-lg px-8">
            <Link to="/services">
              Our Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-muted-foreground" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
