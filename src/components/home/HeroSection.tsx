import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background-elevated">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Authentic South African Fashion</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover <span className="text-gradient">Local</span> Brands
              <br />That Tell Your Story
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Shop authentic African fashion, handcrafted accessories, and unique lifestyle products 
              from South Africa's most talented local creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/brands">
                <Button variant="outline" size="xl" className="gap-2 w-full sm:w-auto">
                  Explore Brands
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Local Brands</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-foreground">100K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden glass-card shadow-glow">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800"
                  alt="Featured African Fashion"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-1/4 glass-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Trending</p>
                    <p className="text-xs text-muted-foreground">+45% sales</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-1/4 glass-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">Orders over R500</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
