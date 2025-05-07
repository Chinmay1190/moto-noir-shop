
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RefreshCw,
  BadgeIndianRupee,
} from "lucide-react";
import { motion } from "framer-motion";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((p) => p.id === Number(productId));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0]);
        
        // Find related products (same category, excluding current)
        const related = products.filter(
          (p) => p.category === foundProduct.category && p.id !== foundProduct.id
        ).slice(0, 4);
        setRelatedProducts(related);
      }
    }
    // Reset scroll position
    window.scrollTo(0, 0);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="container py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg bg-muted"
        >
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            {product.onSale && (
              <Badge className="bg-secondary hover:bg-secondary/90">
                SALE
              </Badge>
            )}
            {product.featured && (
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                FEATURED
              </Badge>
            )}
          </div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover animate-bike-rev"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <div>
            <motion.div variants={itemVariants} className="flex items-center mb-2">
              <Badge variant="outline" className="mr-2">
                {product.category}
              </Badge>
              <span className="text-sm text-muted-foreground">By {product.brand}</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-2">
              {product.name}
            </motion.h1>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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
                <span className="ml-2 text-sm font-medium">
                  {product.rating} ({Math.floor(product.rating * 10)} reviews)
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              {product.onSale && product.salePrice ? (
                <>
                  <span className="text-3xl font-bold text-secondary">
                    {formatPrice(product.salePrice)}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/20">
                    {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                  </Badge>
                </>
              ) : (
                <span className="text-3xl font-bold flex items-center">
                  {formatPrice(product.price)}
                </span>
              )}
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-medium mb-3">Color Options</h3>
            <RadioGroup
              value={selectedColor}
              onValueChange={setSelectedColor}
              className="flex gap-3"
            >
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={color}
                    id={`color-${color}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span>{color}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex border rounded-md">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                className="px-3 py-1 border-r"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline">Buy Now</Button>
          </motion.div>

          {/* Product Features */}
          <motion.div variants={itemVariants} className="border-t pt-6 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="text-sm font-medium">Free Delivery</h4>
                <p className="text-xs text-muted-foreground">
                  Free shipping across India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="text-sm font-medium">2 Year Warranty</h4>
                <p className="text-xs text-muted-foreground">
                  Manufacturer warranty included
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="text-sm font-medium">30-Day Returns</h4>
                <p className="text-xs text-muted-foreground">
                  Satisfaction guaranteed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BadgeIndianRupee className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="text-sm font-medium">Secure Payments</h4>
                <p className="text-xs text-muted-foreground">
                  Multiple payment methods
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="specifications">
          <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-6 border rounded-b-md mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Engine</h4>
                <p className="text-muted-foreground">{product.specs.engine}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Power</h4>
                <p className="text-muted-foreground">{product.specs.power}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Torque</h4>
                <p className="text-muted-foreground">{product.specs.torque}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Top Speed</h4>
                <p className="text-muted-foreground">{product.specs.topSpeed}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Fuel Capacity</h4>
                <p className="text-muted-foreground">{product.specs.fuelCapacity}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Weight</h4>
                <p className="text-muted-foreground">{product.specs.weight}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="p-6 border rounded-b-md mt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Advanced traction control system</li>
              <li>LED lighting package</li>
              <li>Dual-channel ABS</li>
              <li>Digital instrument cluster</li>
              <li>Adjustable suspension</li>
              <li>Bluetooth connectivity</li>
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-b-md mt-2">
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < 5 ? "text-yellow-500" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Raj Sharma</span>
                  <span className="ml-2 text-xs text-muted-foreground">2 months ago</span>
                </div>
                <p className="text-sm">
                  Exceptional bike with amazing power delivery. The riding position is comfortable for long rides and the build quality is top-notch.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Priya Patel</span>
                  <span className="ml-2 text-xs text-muted-foreground">1 month ago</span>
                </div>
                <p className="text-sm">
                  Great performance and looks stunning. Fuel efficiency could be better though.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < 5 ? "text-yellow-500" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Arjun Singh</span>
                  <span className="ml-2 text-xs text-muted-foreground">3 weeks ago</span>
                </div>
                <p className="text-sm">
                  Best bike I've owned so far! The handling is precise and the acceleration is mind-blowing. Worth every rupee.
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-6">
              Write a Review
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
}
