import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/mockProducts";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0],
      brand: product.brand.name,
    });
  };

  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <article className="glass-card rounded-xl overflow-hidden hover:border-border-hover transition-all duration-300 hover:shadow-lg">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-info text-info-foreground">New</Badge>
              )}
              {discount > 0 && (
                <Badge className="bg-destructive text-destructive-foreground">
                  -{discount}%
                </Badge>
              )}
              {product.stock <= 5 && product.stock > 0 && (
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-warning border-warning/50">
                  Low Stock
                </Badge>
              )}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <Button
                variant="glass"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Add to Cart */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button
                variant="hero"
                size="sm"
                className="w-full gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            {/* Brand */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">{product.brand.name}</span>
              {product.brand.verified && (
                <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              )}
            </div>

            {/* Name */}
            <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                R{(product.salePrice ?? product.price).toLocaleString()}
              </span>
              {product.salePrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R{product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
