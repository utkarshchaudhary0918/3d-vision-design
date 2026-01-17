import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Factory, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 500, suffix: "+", label: "Projects Completed", icon: Factory },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 6, suffix: "", label: "Service Types", icon: Award },
];

const About = () => {
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
              About Karni Enterprises
            </h1>
            <p className="text-lg text-muted-foreground">
              A legacy of excellence in electroplating and surface finishing, 
              built on precision, quality, and unwavering commitment to customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Karni Enterprises was founded with a vision to become the most trusted name 
                  in electroplating and surface finishing solutions. Located in the heart of 
                  Faridabad's industrial zone, we have grown from a small workshop to a 
                  comprehensive plating facility serving clients across multiple industries.
                </p>
                <p>
                  Our state-of-the-art facility in the Electroplating Zone of Sector 58, 
                  Ballabgarh, is equipped with modern technology and operated by skilled 
                  professionals who bring years of expertise to every project.
                </p>
                <p>
                  We take pride in our ability to handle diverse requirements, from small 
                  precision components to large industrial parts, all with the same level 
                  of attention to quality and detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-primary rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-primary-foreground font-bold text-7xl">KE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide superior quality electroplating and surface finishing services 
                that exceed customer expectations, while maintaining the highest standards 
                of environmental responsibility and workplace safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as the leading electroplating service provider in India, 
                known for innovation, reliability, and commitment to excellence in every 
                aspect of our operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality First", description: "We never compromise on quality, ensuring every product meets the highest standards." },
              { title: "Customer Focus", description: "Your success is our success. We work closely with clients to meet their unique needs." },
              { title: "Innovation", description: "We continuously invest in technology and processes to deliver better solutions." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
