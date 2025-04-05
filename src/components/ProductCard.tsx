
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const isNewArrival = product.isNewArrival;
  const isOnSale = product.discountPercentage > 0;
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.availableSizes[0],
    });
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <Card className="overflow-hidden product-card-shadow">
      <div className="aspect-square relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNewArrival && (
              <Badge className="bg-primary text-white">New</Badge>
            )}
            {isOnSale && (
              <Badge className="bg-destructive text-white">{product.discountPercentage}% Off</Badge>
            )}
          </div>
        </Link>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Link 
            to={`/product/${product.id}`}
            className="text-lg font-medium hover:text-primary transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
          <p className="text-muted-foreground text-sm line-clamp-1">{product.brand}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isOnSale ? (
              <>
                <span className="font-semibold">${product.price * (1 - product.discountPercentage / 100)}</span>
                <span className="text-muted-foreground line-through text-sm">${product.price}</span>
              </>
            ) : (
              <span className="font-semibold">${product.price}</span>
            )}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {product.availableSizes.length} {product.availableSizes.length === 1 ? 'size' : 'sizes'}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2" 
          onClick={handleAddToCart}
          disabled={product.stockCount === 0}
        >
          <ShoppingBag className="h-4 w-4" />
          {product.stockCount > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}
