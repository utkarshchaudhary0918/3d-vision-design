import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sparkles, Palette, Layers, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TiltCard from "@/components/ui/TiltCard";

const services = [
  {
    icon: Palette,
    title: "Blue Zinc Plating",
    description: "Bright blue passivation providing excellent corrosion resistance with aesthetic appeal.",
  },
  {
    icon: Sparkles,
    title: "White Zinc Plating",
    description: "Clear chromate finish offering superior protection with a clean, bright appearance.",
  },
  {
    icon: Layers,
    title: "Green Zinc Plating",
    description: "Olive drab passivation ideal for military and heavy-duty industrial applications.",
  },
  {
    icon: Shield,
    title: "Black Zinc Plating",
    description: "Sleek black finish combining corrosion resistance with modern aesthetics.",
  },
  {
    icon: Zap,
    title: "Trivalent Zinc",
    description: "Environmentally friendly chromate conversion meeting RoHS compliance standards.",
  },
  {
    icon: Droplets,
    title: "Manganese Phosphating",
    description: "Enhanced wear resistance and oil retention for precision mechanical components.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electroplating and surface finishing solutions 
            tailored to meet your industrial needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <Card className="h-full bg-card hover:shadow-xl transition-shadow duration-300 border-border">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
