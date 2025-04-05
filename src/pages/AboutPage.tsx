
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 mt-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
                alt="Our store" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">
                Welcome to walk this way, where passion for footwear meets unwavering 
                commitment to quality and style. Founded in 2010, we've dedicated over a decade to 
                sourcing and creating the finest shoes that combine craftsmanship, comfort, 
                and contemporary design.
              </p>
              
              <p>
                Our journey began with a simple vision: to provide footwear that not only elevates your 
                style but also enhances your comfort and confidence. We believe that the right pair of 
                shoes can transform not just your outfit, but your entire day.
              </p>
              
              <p>
                Every pair in our collection is carefully selected or designed with attention to detail, 
                quality materials, and timeless appeal. We work directly with skilled artisans and ethical 
                manufacturers to ensure our products meet the highest standards.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
              <p>
                Our mission is to provide exceptional footwear that combines style, comfort, and quality, 
                while offering an outstanding shopping experience. We believe that everyone deserves to 
                feel confident and comfortable in their shoes, regardless of the occasion or budget.
              </p>
              
              <p>
                We're committed to ethical business practices and sustainability. We carefully select our 
                manufacturing partners based on their commitment to fair labor practices and environmentally 
                responsible production methods. Many of our products use eco-friendly materials and packaging 
                to minimize our environmental footprint.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Craftsmanship" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Quality materials" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Team</h2>
              <p>
                Behind Stride Style Haven is a team of passionate footwear enthusiasts, fashion experts, 
                and customer service professionals. Our diverse team brings together decades of experience 
                in retail, design, and e-commerce to create a shopping experience that's second to none.
              </p>
              
              <p>
                We're united by our love for quality shoes and our commitment to helping our customers 
                find the perfect pair for any occasion. From our buyers who seek out the latest trends 
                and timeless classics, to our customer service team who provide personalized assistance, 
                we work together to ensure your satisfaction.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Promise</h2>
              <p>
                At walk this way, we promise to:
              </p>
              
              <ul>
                <li>Offer a curated selection of high-quality footwear for all occasions.</li>
                <li>Provide exceptional customer service and a seamless shopping experience.</li>
                <li>Stand behind the quality of every product we sell.</li>
                <li>Listen to your feedback and continuously improve our offerings.</li>
                <li>Operate with integrity and transparency in all aspects of our business.</li>
              </ul>
              
              <p>
                We're grateful for every customer who chooses to shop with us, and we look forward to 
                being a part of your style journey for years to come.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at walk this way
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Each product in our collection undergoes rigorous 
                  quality checks to ensure durability, comfort, and style.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Style</h3>
                <p className="text-muted-foreground">
                  We believe in the power of great design. Our collections blend timeless elegance 
                  with contemporary trends to deliver footwear that stands out.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental footprint through responsibly sourced 
                  materials, ethical manufacturing, and eco-friendly packaging.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
