import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FlashDeals } from "@/components/home/FlashDeals";
import { TopBrands } from "@/components/home/TopBrands";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <FlashDeals />
        <TopBrands />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
