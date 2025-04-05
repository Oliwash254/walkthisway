
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProduct } from "@/lib/api";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const productData = await getProduct(id);
        setProduct(productData);
        
        if (productData && productData.availableSizes.length > 0) {
          setSelectedSize(productData.availableSizes[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    addToCart({
      ...product,
      quantity,
      selectedSize,
    });
    
    toast.success(`${product.name} added to cart!`);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-20 mt-16">
          <div className="animate-pulse">
            <div className="h-6 bg-muted rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-6 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-32 bg-muted rounded w-full mt-6"></div>
                <div className="h-10 bg-muted rounded w-full mt-6"></div>
                <div className="h-12 bg-muted rounded w-full mt-6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-20 mt-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 mt-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${product.category.toLowerCase()}`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${product.category.toLowerCase()}/${product.type.toLowerCase()}`}>
                  {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="truncate max-w-[200px]">{product.name}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden aspect-square bg-muted/20">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto py-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative rounded-md overflow-hidden w-16 h-16 flex-shrink-0 ${
                      activeImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.brand}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className="flex items-center mb-6">
              {product.discountPercentage > 0 ? (
                <>
                  <span className="text-2xl font-bold">
                    ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                  <span className="ml-2 text-muted-foreground line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-2 bg-destructive/10 text-destructive px-2 py-1 rounded-md text-sm">
                    {product.discountPercentage}% Off
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[2.5rem] px-3 rounded-md border ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-input hover:bg-muted"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-input rounded-md w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-muted"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="px-3 py-2 hover:bg-muted"
                  aria-label="Increase quantity"
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {product.stockCount} items in stock
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                className="flex-1 gap-2"
                size="lg"
                onClick={handleAddToCart}
                disabled={product.stockCount === 0}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-none gap-2">
                <Heart className="h-5 w-5" />
                <span className="sr-only sm:not-sr-only">Wishlist</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
