
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "@/types/product";
import { getProducts } from "@/lib/api";
import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  brands: string[];
  colors: string[];
  inStock: boolean;
}

const CategoryPage = () => {
  const { category, type } = useParams();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 200,
    brands: [],
    colors: [],
    inStock: false,
  });
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  
  const allBrands = Array.from(new Set(products.map(product => product.brand)));
  const allColors = Array.from(new Set(products.flatMap(product => product.colors)));
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(category, type, sortBy);
        setProducts(data);
        
        // Set initial price range based on the actual products
        if (data.length > 0) {
          const prices = data.map(p => p.price);
          const min = Math.floor(Math.min(...prices));
          const max = Math.ceil(Math.max(...prices));
          setPriceRange([min, max]);
          setFilterOptions(prev => ({ ...prev, minPrice: min, maxPrice: max }));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [category, type, sortBy]);
  
  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    // Filter by price
    result = result.filter(
      (product) => 
        product.price >= filterOptions.minPrice && 
        product.price <= filterOptions.maxPrice
    );
    
    // Filter by brand
    if (filterOptions.brands.length > 0) {
      result = result.filter((product) => 
        filterOptions.brands.includes(product.brand)
      );
    }
    
    // Filter by color
    if (filterOptions.colors.length > 0) {
      result = result.filter((product) => 
        product.colors.some(color => 
          filterOptions.colors.includes(color)
        )
      );
    }
    
    // Filter by stock
    if (filterOptions.inStock) {
      result = result.filter((product) => product.stockCount > 0);
    }
    
    setFilteredProducts(result);
  }, [products, filterOptions]);
  
  const handleBrandToggle = (brand: string) => {
    setFilterOptions(prev => {
      const brands = prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand];
      
      return { ...prev, brands };
    });
  };
  
  const handleColorToggle = (color: string) => {
    setFilterOptions(prev => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      
      return { ...prev, colors };
    });
  };
  
  const handlePriceChange = (values: number[]) => {
    setFilterOptions(prev => ({
      ...prev,
      minPrice: values[0],
      maxPrice: values[1]
    }));
  };
  
  const resetFilters = () => {
    setFilterOptions({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      brands: [],
      colors: [],
      inStock: false,
    });
  };
  
  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : "All Products";
  
  const typeTitle = type 
    ? type.charAt(0).toUpperCase() + type.slice(1) 
    : "";
  
  const pageTitle = typeTitle 
    ? `${typeTitle} ${categoryTitle} Shoes` 
    : `${categoryTitle} Collection`;
  
  // Filter sidebar content
  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filterOptions.minPrice, filterOptions.maxPrice]}
            min={priceRange[0]}
            max={priceRange[1]}
            step={1}
            value={[filterOptions.minPrice, filterOptions.maxPrice]}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <span>${filterOptions.minPrice}</span>
            <span>${filterOptions.maxPrice}</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-4">Brands</h3>
        <div className="space-y-2">
          {allBrands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={filterOptions.brands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-4">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {allColors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorToggle(color)}
              className={`px-3 py-1 text-sm rounded-full border ${
                filterOptions.colors.includes(color)
                  ? "bg-primary text-primary-foreground"
                  : "bg-background"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Checkbox
            id="in-stock"
            checked={filterOptions.inStock}
            onCheckedChange={(checked) => 
              setFilterOptions(prev => ({ ...prev, inStock: !!checked }))
            }
          />
          <label htmlFor="in-stock" className="ml-2 text-sm">
            In Stock Only
          </label>
        </div>
      </div>
      
      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
            <p className="text-muted-foreground">
              Discover our collection of {typeTitle.toLowerCase() || "quality"} shoes for {categoryTitle.toLowerCase()}.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
                </div>
                <FilterContent />
              </div>
            </div>
            
            <div className="flex-grow">
              {/* Filter and sort controls */}
              <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <div className="py-6">
                        <h2 className="text-lg font-semibold mb-6">Filters</h2>
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>
                
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="rounded-lg overflow-hidden animate-pulse">
                      <div className="aspect-square bg-muted"></div>
                      <div className="p-4 space-y-2">
                        <div className="h-5 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                        <div className="h-9 bg-muted rounded mt-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or browse our other collections.
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
