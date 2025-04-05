
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Step Into Luxury
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover our premium collection of footwear designed for those who appreciate the perfect blend of style, comfort, and craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/new-arrivals">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
