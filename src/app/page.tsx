import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSlider from "@/components/ClientsSlider";
import PortfolioGallery from "@/components/PortfolioGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowWeWork from "@/components/HowWeWork";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FounderSection from "@/components/FounderSection";
import LatestPortfolio from "@/components/LatestPortfolio";
import BrandsTestimonials from "@/components/BrandsTestimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Header />
      <HeroSection />
      <ClientsSlider />
      <PortfolioGallery />
      <TestimonialsSection />
      <HowWeWork />
      <ServicesSection />
      <StatsSection />
      <FounderSection />
      <LatestPortfolio />
      <BrandsTestimonials />
      <FAQSection />
      <CTASection />
    </main>
  );
}
