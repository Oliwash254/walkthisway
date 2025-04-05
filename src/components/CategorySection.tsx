
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

export function CategorySection() {
  const categories: Record<string, Category[]> = {
    men: [
      {
        id: "men-sneakers",
        name: "Sneakers",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Casual and comfortable sneakers for everyday wear",
        link: "/men/sneakers"
      },
      {
        id: "men-formal",
        name: "Formal",
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Elegant formal shoes for special occasions",
        link: "/men/formal"
      },
      {
        id: "men-casual",
        name: "Casual",
        image: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Stylish casual shoes for a relaxed look",
        link: "/men/casual"
      },
      {
        id: "men-sports",
        name: "Sports",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Performance footwear for athletes and sports enthusiasts",
        link: "/men/sports"
      }
    ],
    women: [
      {
        id: "women-sneakers",
        name: "Sneakers",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Trendy sneakers for the modern woman",
        link: "/women/sneakers"
      },
      {
        id: "women-heels",
        name: "Heels",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Elegant heels for any occasion",
        link: "/women/heels"
      },
      {
        id: "women-flats",
        name: "Flats",
        image: "https://images.unsplash.com/photo-1554238113-0c9c048cbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Comfortable flats for everyday elegance",
        link: "/women/flats"
      },
      {
        id: "women-boots",
        name: "Boots",
        image: "https://images.unsplash.com/photo-1551115303-eb1e2e0a4c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Stylish boots for all seasons",
        link: "/women/boots"
      }
    ],
    children: [
      {
        id: "children-sneakers",
        name: "Sneakers",
        image: "https://images.unsplash.com/photo-1571141884996-75902a6f84ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Comfortable and durable sneakers for active kids",
        link: "/children/sneakers"
      },
      {
        id: "children-casual",
        name: "Casual",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Everyday shoes for children of all ages",
        link: "/children/casual"
      },
      {
        id: "children-sports",
        name: "Sports",
        image: "https://images.unsplash.com/photo-1617260257367-ca56bf51bac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Athletic shoes designed for growing feet",
        link: "/children/sports"
      },
      {
        id: "children-school",
        name: "School",
        image: "https://images.unsplash.com/photo-1541290300459-c8f2f9c91d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "Uniform-friendly footwear for school days",
        link: "/children/school"
      }
    ]
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop By Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of footwear categories designed for everyone in the family
          </p>
        </div>
        
        <Tabs defaultValue="men" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="men">Men</TabsTrigger>
              <TabsTrigger value="women">Women</TabsTrigger>
              <TabsTrigger value="children">Children</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(categories).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((category) => (
                  <Card key={category.id} className="overflow-hidden product-card-shadow">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={category.link}>Explore</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
