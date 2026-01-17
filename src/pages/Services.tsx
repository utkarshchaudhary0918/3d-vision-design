import { motion } from "framer-motion";
import { Check, Zap, Shield, Sparkles, Palette, Layers, Droplets } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TiltCard from "@/components/ui/TiltCard";
import InteractiveMetalPart from "@/components/3d/InteractiveMetalPart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CTASection from "@/components/sections/CTASection";

const zincPlatingServices = [
  {
    icon: Palette,
    title: "Blue Zinc Plating",
    color: "#4A90D9",
    description: "Bright blue passivation offering excellent corrosion resistance with an attractive aesthetic finish.",
    benefits: [
      "72-96 hours salt spray resistance",
      "Attractive blue-bright appearance",
      "Cost-effective corrosion protection",
      "Ideal for automotive & hardware",
    ],
  },
  {
    icon: Sparkles,
    title: "White Zinc Plating",
    color: "#E8E8E8",
    description: "Clear/white chromate conversion providing superior protection with a clean, bright appearance.",
    benefits: [
      "24-48 hours salt spray resistance",
      "Clean, bright silver appearance",
      "Good paint adhesion base",
      "Suitable for decorative applications",
    ],
  },
  {
    icon: Layers,
    title: "Green Zinc Plating",
    color: "#5D7E3D",
    description: "Olive drab passivation ideal for military specifications and heavy-duty industrial applications.",
    benefits: [
      "96-200 hours salt spray resistance",
      "Military specification compliant",
      "Maximum corrosion protection",
      "Heavy-duty industrial use",
    ],
  },
  {
    icon: Shield,
    title: "Black Zinc Plating",
    color: "#2D2D2D",
    description: "Sleek black finish combining excellent corrosion resistance with modern aesthetics.",
    benefits: [
      "72-120 hours salt spray resistance",
      "Modern, professional appearance",
      "Reduced light reflection",
      "Perfect for visible components",
    ],
  },
  {
    icon: Zap,
    title: "Trivalent Zinc Plating",
    color: "#C0C0C0",
    description: "Environmentally friendly chromate conversion meeting RoHS and ELV compliance standards.",
    benefits: [
      "RoHS & ELV compliant",
      "Environmentally friendly process",
      "Comparable corrosion resistance",
      "No hexavalent chromium",
    ],
  },
];

const Services = () => {
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
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive electroplating and surface finishing solutions, 
              delivering precision and quality for every industrial requirement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive 3D Showcase */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-accent-foreground mb-4">
                Precision Metal Finishing
              </h2>
              <p className="text-muted-foreground mb-6">
                Experience our quality through this interactive 3D model. Drag to rotate 
                and see the smooth, uniform finish that defines our work.
              </p>
              <p className="text-sm text-muted-foreground">
                ↻ Drag to rotate • Auto-rotates when idle
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <InteractiveMetalPart variant="gear" color="#c0c0c0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zinc Plating Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zinc Electroplating Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five specialized zinc plating options to meet diverse industrial and aesthetic requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zincPlatingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard>
                  <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-border overflow-hidden">
                    <div
                      className="h-2"
                      style={{ backgroundColor: service.color }}
                    />
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manganese Phosphating */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <InteractiveMetalPart variant="cylinder" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Droplets className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Manganese Phosphating
              </h2>
              <p className="text-muted-foreground mb-8">
                Manganese phosphating creates a crystalline surface layer that provides 
                exceptional wear resistance and oil retention properties. This process 
                is essential for precision mechanical components that require long-term 
                performance under demanding conditions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Enhanced wear resistance",
                  "Superior oil retention",
                  "Anti-galling properties",
                  "Break-in lubrication",
                  "Corrosion protection",
                  "Improved paint adhesion",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
