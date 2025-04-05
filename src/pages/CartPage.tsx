import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Trash, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { 
  ImageDialog,
  DialogContent, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  
  const handlePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error("Invalid or expired promo code.");
    setPromoCode("");
  };
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Shopping Cart</h1>
          <p className="text-muted-foreground">
            Review your items before proceeding to checkout
          </p>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg border shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-muted/20 rounded-md overflow-hidden flex-shrink-0">
                        <ImageDialog>
                          <DialogTrigger asChild>
                            <img 
                              src={item.images[0]} 
                              alt={item.name}
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogTitle>{item.name}</DialogTitle>
                            <div className="aspect-square w-full">
                              <img 
                                src={item.images[0]} 
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </DialogContent>
                        </ImageDialog>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link 
                                to={`/product/${item.id}`}
                                className="hover:text-primary transition-colors"
                              >
                                {item.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-sm text-muted-foreground mr-4">Size: {item.selectedSize}</span>
                              <span className="text-sm text-muted-foreground">Quantity:</span>
                              <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, item.selectedSize, parseInt(e.target.value))}
                                className="ml-2 bg-background border rounded-md text-sm p-1"
                              >
                                {[...Array(10)].map((_, i) => (
                                  <option key={i} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="font-medium">
                              ${(item.price * (1 - item.discountPercentage / 100) * item.quantity).toFixed(2)}
                            </div>
                            {item.discountPercentage > 0 && (
                              <div className="text-sm text-muted-foreground line-through">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            )}
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="text-sm text-muted-foreground hover:text-destructive flex items-center mt-2 ml-auto"
                            >
                              <Trash className="h-3 w-3 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    asChild 
                    className="gap-2"
                  >
                    <Link to="/shop">
                      <ArrowLeft className="h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <Button className="w-full gap-2" size="lg" onClick={handleCheckout}>
                    <ShoppingBag className="h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Have a promo code?</p>
                    <form onSubmit={handlePromoCode} className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" variant="outline">Apply</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
