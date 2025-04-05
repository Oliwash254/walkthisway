
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Reach out to us with any questions, concerns, or feedback you may have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-card rounded-lg p-8 shadow-sm h-full">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 mabungo streets<br />
                        maseno, kisumu <br />
                        kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+254746286151" className="hover:text-primary transition-colors">
                          +254746286151
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@stridestylehaven.com" className="hover:text-primary transition-colors">
                          info@walkthisway.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Store Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Customer Service</h2>
                <p className="text-muted-foreground mb-4">
                  Our customer service team is available to assist you with any questions or concerns.
                </p>
                <p className="text-muted-foreground">
                  <strong>Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
                <p className="text-muted-foreground">
                  <strong>Email Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-74.00059565419045!3d40.74142904369969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c3d8!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1666376459108!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
