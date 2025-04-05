
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Stride Style Haven, where passion for footwear meets unwavering commitment to quality and style. 
                Founded in 2010, we've dedicated over a decade to sourcing and creating the finest shoes that combine 
                craftsmanship, comfort, and contemporary design.
              </p>
              <p>
                Our journey began with a simple vision: to provide footwear that not only elevates your style but 
                also enhances your comfort and confidence. We believe that the right pair of shoes can transform 
                not just your outfit, but your entire day.
              </p>
              <p>
                Every pair in our collection is carefully selected or designed with attention to detail, 
                quality materials, and timeless appeal. We work directly with skilled artisans and ethical 
                manufacturers to ensure our products meet the highest standards.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Craftsmanship" 
                className="w-full h-auto rounded-lg object-cover aspect-square"
              />
              <img 
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Our workshop" 
                className="w-full h-auto rounded-lg object-cover aspect-square"
              />
            </div>
            <div className="pt-8">
              <img 
                src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Quality materials" 
                className="w-full h-auto rounded-lg object-cover aspect-[9/16] mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
