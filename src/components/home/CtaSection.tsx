import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-background-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920')] bg-cover bg-center mix-blend-overlay opacity-30" />

          {/* Content */}
          <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Become a Brand Owner
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join South Africa's fastest-growing marketplace for local brands. 
              Start selling your products to thousands of customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth?role=brand_owner">
                <Button size="xl" variant="glass" className="bg-background/20 text-primary-foreground border-primary-foreground/30 hover:bg-background/30 gap-2">
                  Start Selling
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about-sellers">
                <Button size="xl" variant="ghost" className="text-primary-foreground hover:bg-background/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
