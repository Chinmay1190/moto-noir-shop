
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getFeaturedProducts, getSaleProducts } from "@/data/products";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

export default function HomePage() {
  const { theme } = useTheme();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
    setSaleProducts(getSaleProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className={`relative h-[70vh] flex items-center ${
        theme === "dark" ? "bg-black" : "bg-gray-100"
      }`}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Experience the Thrill of Premium Superbikes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Discover our exclusive collection of high-performance motorcycles designed for speed enthusiasts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="bg-background/20 backdrop-blur-sm text-white border-white/20 hover:bg-background/30">
                  Explore Categories
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 container">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2">Featured Collection</Badge>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center"
          >
            Premium Superbikes
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mt-4 rounded"
          ></motion.div>
        </div>

        <ProductGrid products={featuredProducts} />
        
        <div className="flex justify-center mt-10">
          <Link to="/shop">
            <Button>View All Bikes</Button>
          </Link>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Explore Our Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sport Bikes", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87", path: "/categories/sport" },
              { name: "Cruisers", image: "https://images.unsplash.com/photo-1671799844361-eb3acac94b27", path: "/categories/cruiser" },
              { name: "Adventure", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f", path: "/categories/adventure" },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg h-60"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <Link to={category.path}>
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                      Browse Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      {saleProducts.length > 0 && (
        <section className="py-16 container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Badge variant="destructive" className="mb-2">Limited Time</Badge>
              <h2 className="text-3xl font-bold">Special Offers</h2>
            </div>
            <Link to="/sale">
              <Button variant="outline">View All Offers</Button>
            </Link>
          </div>
          
          <ProductGrid products={saleProducts} />
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose MotoNoir
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Premium Selection", description: "Curated collection of top-tier superbikes", icon: "⭐" },
              { title: "Expert Support", description: "Professional assistance from motorcycle enthusiasts", icon: "👨‍🔧" },
              { title: "Secure Payments", description: "Safe and reliable transaction processing", icon: "🔒" },
              { title: "Fast Shipping", description: "Quick delivery to your doorstep", icon: "🚚" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 hover-scale"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-lg opacity-90">
              Subscribe to our newsletter for the latest updates on new arrivals, exclusive offers, and motorcycle news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-foreground"
                required
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
