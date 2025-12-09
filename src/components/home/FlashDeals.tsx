import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { mockProducts } from "@/data/mockProducts";

export function FlashDeals() {
  // Products on sale
  const saleProducts = mockProducts.filter((p) => p.salePrice).slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 gradient-glow opacity-50" />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-3">
                  <Clock className="h-4 w-4" />
                  Flash Deals
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Limited Time Offers
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Don't miss out on these amazing deals from local brands
                </p>
              </div>
              <Link to="/products?sale=true">
                <Button variant="outline" className="gap-2">
                  View All Deals
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
