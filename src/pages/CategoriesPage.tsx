
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, ListCheck } from "lucide-react";

export default function CategoriesPage() {
  // Extract unique categories and count products in each
  const categoriesWithCount = Array.from(
    products.reduce((acc, product) => {
      const category = product.category;
      if (!acc.has(category)) {
        acc.set(category, { count: 1, category });
      } else {
        const current = acc.get(category);
        if (current) {
          acc.set(category, { ...current, count: current.count + 1 });
        }
      }
      return acc;
    }, new Map())
  ).map(([_, value]) => value);

  // Sort categories alphabetically
  const sortedCategories = categoriesWithCount.sort((a, b) => 
    a.category.localeCompare(b.category)
  );

  const [activeCategory, setActiveCategory] = useState(sortedCategories[0]?.category || "");

  // Filter products by active category
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="container py-8">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Layers className="mr-2 h-6 w-6" />
            <h1 className="text-3xl font-bold">Categories</h1>
          </div>
          <p className="text-muted-foreground">
            Explore our bikes by category
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {sortedCategories.map((item) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(item.category)}
              className={`cursor-pointer rounded-full px-4 py-2 flex items-center gap-2 transition-colors ${
                activeCategory === item.category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <span>{item.category}</span>
              <span className="inline-flex items-center justify-center rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                {item.count}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ListCheck className="h-5 w-5" />
            <h2 className="text-xl font-semibold">{activeCategory} Motorcycles</h2>
          </div>
          
          <div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
