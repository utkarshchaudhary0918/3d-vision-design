import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
