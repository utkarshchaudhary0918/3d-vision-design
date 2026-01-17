import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";

const clients = [
  { name: "Walterscheid", industry: "Automotive" },
  { name: "MITA India", industry: "Manufacturing" },
  { name: "Sadhu Forging Ltd", industry: "Forging" },
  { name: "Welspun", industry: "Industrial" },
  { name: "Knorr Bremse", industry: "Automotive" },
  { name: "Bharat Gears", industry: "Automotive" },
  { name: "Action Construction", industry: "Construction" },
  { name: "Escorts Ltd", industry: "Agriculture" },
];

const testimonials = [
  {
    quote: "Karni Enterprises has been our trusted plating partner for over 5 years. Their quality and consistency are unmatched in the industry.",
    author: "Production Manager",
    company: "Automotive Manufacturer",
    rating: 5,
  },
  {
    quote: "The team at Karni Enterprises understands our stringent quality requirements. They deliver on time, every time.",
    author: "Quality Head",
    company: "Forging Company",
    rating: 5,
  },
  {
    quote: "Excellent service and superior finish quality. Their manganese phosphating has significantly improved our product performance.",
    author: "Technical Director",
    company: "Industrial Equipment",
    rating: 5,
  },
];

const Clients = () => {
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
              Our Valued Clients
            </h1>
            <p className="text-lg text-muted-foreground">
              We're proud to work with industry leaders who trust us with their 
              critical surface finishing requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted By Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/2] bg-card border border-border rounded-xl flex flex-col items-center justify-center p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-center">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-accent-foreground mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our electroplating solutions cater to diverse industrial sectors, 
              each with unique requirements and specifications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Automotive", description: "Fasteners, components, and assemblies" },
              { name: "Agriculture", description: "Tractor parts and farm equipment" },
              { name: "Construction", description: "Structural hardware and fixtures" },
              { name: "Manufacturing", description: "Industrial machinery components" },
              { name: "Defense", description: "Military-spec hardware and parts" },
              { name: "Railways", description: "Rail infrastructure components" },
              { name: "Oil & Gas", description: "Pipeline and drilling equipment" },
              { name: "Aerospace", description: "Precision aviation components" },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Clients;
