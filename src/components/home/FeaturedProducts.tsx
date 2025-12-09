import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { mockProducts } from "@/data/mockProducts";

export function FeaturedProducts() {
  const featuredProducts = mockProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-background-elevated">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Handpicked selections from our top-rated local brands
            </p>
          </div>
          <Link to="/products?featured=true">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
