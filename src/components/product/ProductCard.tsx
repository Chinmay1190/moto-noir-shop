
import { formatPrice } from "@/data/products";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bike-card group bg-card shadow-md"
    >
      <div className="relative overflow-hidden pb-[56.25%]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="bike-image absolute inset-0 w-full h-full object-cover"
        />
        {product.onSale && (
          <Badge className="absolute top-2 right-2 bg-secondary hover:bg-secondary/90">
            SALE
          </Badge>
        )}
        {product.featured && (
          <Badge variant="outline" className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm">
            FEATURED
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <div className="text-right">
            {product.onSale && product.salePrice ? (
              <>
                <p className="font-bold text-secondary">
                  {formatPrice(product.salePrice)}
                </p>
                <p className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.price)}
                </p>
              </>
            ) : (
              <p className="font-bold">{formatPrice(product.price)}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-sm space-x-1 text-muted-foreground">
          <span>{product.rating}</span>
          <span className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </span>
          <span className="text-xs">({Math.floor(product.rating * 10)} reviews)</span>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <Link to={`/product/${product.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
          <Button size="sm" onClick={() => addToCart(product)}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
