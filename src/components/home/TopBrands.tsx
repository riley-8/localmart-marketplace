import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck, Star } from "lucide-react";
import { brands } from "@/data/mockProducts";

export function TopBrands() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Top Rated Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Shop from South Africa's most trusted and loved local brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/brand/${brand.id}`} className="group block">
                <div className="glass-card rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {brand.name}
                        </h3>
                        {brand.verified && (
                          <BadgeCheck className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                        <span className="text-sm text-foreground">{brand.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {brand.products} products
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
