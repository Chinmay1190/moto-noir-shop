import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Search, SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000000]); // 0 to 30,00,000
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("default");

  const allCategories = [...new Set(products.map(product => product.category))];
  const allBrands = [...new Set(products.map(product => product.brand))];

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Sort products
    switch (sortOrder) {
      case "price-low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      // default: keep original order
    }

    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, selectedCategories, selectedBrands, sortOrder]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(item => item !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 3000000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortOrder("default");
  };

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Explore Our Bikes
          </motion.h1>
          <p className="text-muted-foreground">
            Discover our collection of premium motorcycles
          </p>
        </div>

        {/* Search and Filter Toggle for Mobile */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search bikes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="sm:hidden flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <motion.aside
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showFilters || window.innerWidth >= 1024 ? "auto" : 0,
              opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className={`bg-card rounded-lg p-6 shadow-sm overflow-hidden ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>

            {/* Price Range */}
            <div className="py-4 border-t">
              <h4 className="font-medium mb-4">Price Range</h4>
              <Slider
                defaultValue={[0, 3000000]}
                min={0}
                max={3000000}
                step={50000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center justify-between text-sm">
                <span>₹{(priceRange[0] / 100000).toFixed(1)}L</span>
                <span>₹{(priceRange[1] / 100000).toFixed(1)}L</span>
              </div>
            </div>

            {/* Categories */}
            <div className="py-4 border-t">
              <h4 className="font-medium mb-4">Categories</h4>
              <ScrollArea className="h-[180px] pr-4">
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Brands */}
            <div className="py-4 border-t">
              <h4 className="font-medium mb-4">Brands</h4>
              <ScrollArea className="h-[180px] pr-4">
                <div className="space-y-2">
                  {allBrands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <Label
                        htmlFor={`brand-${brand}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">{filteredProducts.length}</span> products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</Label>
                <select
                  id="sort"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCategories.map(category => (
                  <Badge key={`cat-${category}`} variant="secondary" className="px-3 py-1">
                    {category}
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="ml-2 text-xs font-semibold"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {selectedBrands.map(brand => (
                  <Badge key={`brand-${brand}`} variant="outline" className="px-3 py-1">
                    {brand}
                    <button
                      onClick={() => handleBrandChange(brand)}
                      className="ml-2 text-xs font-semibold"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="py-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
