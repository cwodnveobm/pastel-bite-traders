
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Products = () => {
  // Track page view for product category page
  useEffect(() => {
    // Google Analytics event tracking
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Product Categories',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    // Facebook Pixel tracking
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Product Categories',
        content_category: 'Products'
      });
    }
  }, []);

  // Track category clicks for retargeting
  const trackCategoryClick = (category: string) => {
    // Google Analytics event tracking
    if (window.gtag) {
      window.gtag('event', 'select_content', {
        content_type: 'product_category',
        item_id: category.toLowerCase().replace(' ', '_')
      });
    }
    
    // Facebook Pixel tracking
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: category,
        content_category: 'Product Category'
      });
    }
  };

  return (
    <div className="min-h-screen bg-rabee-green pt-20">
      {/* Products Header - SEO Enhanced */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80')" }}
             aria-hidden="true">
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-black mb-6">
              Premium Food Products
            </h1>
            <p className="font-manrope text-lg text-rabee-black/80 max-w-2xl mx-auto">
              Discover our wide range of high-quality food products, carefully sourced from trusted suppliers worldwide. Welcome Mart brings authentic taste to your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories - SEO Enhanced */}
      <section className="py-20 bg-rabee-white" id="product-categories" aria-labelledby="product-categories-heading">
        <div className="container mx-auto px-4">
          <h2 id="product-categories-heading" className="font-sora text-3xl font-bold text-rabee-black text-center mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full bg-white">
                  <div className="relative">
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img
                        src={category.image}
                        alt={`${category.name} - Premium quality ${category.name.toLowerCase()} from Welcome Mart Dubai`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                  </div>
                  <CardHeader className="p-4">
                    <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-black">
                      {category.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="font-manrope text-rabee-black/80 mb-4">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="ghost" 
                        className="text-rabee-darkgreen p-0 hover:bg-transparent hover:text-rabee-black"
                        onClick={() => trackCategoryClick(category.name)}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full" 
                        onClick={() => window.navigator.share?.({
                          title: `${category.name} - Welcome Mart`,
                          text: category.description,
                          url: `${window.location.origin}/products#${category.name.toLowerCase().replace(' ', '-')}`
                        }).catch(() => {})}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SEO-Enhanced Product Benefits Section */}
      <section className="py-20 bg-rabee-green/50" id="product-benefits" aria-labelledby="product-benefits-heading">
        <div className="container mx-auto px-4">
          <h2 id="product-benefits-heading" className="font-sora text-3xl font-bold text-rabee-black text-center mb-12">
            Why Choose Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-black mb-3">
                  {benefit.title}
                </h3>
                <p className="font-manrope text-rabee-black/80">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Great for SEO */}
      <section className="py-20 bg-rabee-white" id="product-faqs" aria-labelledby="product-faqs-heading">
        <div className="container mx-auto px-4">
          <h2 id="product-faqs-heading" className="font-sora text-3xl font-bold text-rabee-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 border-b border-rabee-green/30 pb-6 last:border-0"
              >
                <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-black mb-2">
                  {faq.question}
                </h3>
                <p className="font-manrope text-rabee-black/80">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-rabee-darkgreen text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sora text-3xl font-bold mb-6">
            Ready to Order Premium Products?
          </h2>
          <p className="font-manrope text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for wholesale inquiries and product information.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-rabee-darkgreen px-8 py-3 rounded-full font-manrope font-medium hover:bg-opacity-90 transition-colors"
            onClick={() => {
              // Track CTA click for retargeting
              if (window.gtag) {
                window.gtag('event', 'generate_lead', {
                  event_category: 'engagement',
                  event_label: 'contact_from_products'
                });
              }
              
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'Products Page CTA',
                  content_category: 'Contact Interest'
                });
              }
            }}
          >
            <span>Get in Touch</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const productCategories = [
  {
    name: "Dates",
    description: "Premium quality dates sourced from the finest farms in the region. Our dates are known for their exceptional sweetness and texture.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Grains",
    description: "Wholesome grains from trusted suppliers worldwide. Our selection includes organic options and traditional varieties.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d32f6?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Dairy Products",
    description: "Fresh dairy products maintaining the highest quality standards. From traditional to modern varieties, we offer a complete range.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spices",
    description: "Authentic spices that add flavor to every dish. Our spices are sourced directly from the regions known for their distinctive aromas.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Juices",
    description: "Natural and refreshing juices for every occasion. Made from the freshest fruits with no artificial additives.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Frozen Poultry",
    description: "High-quality frozen poultry products for your needs. Processed under strict quality control standards for optimal safety and taste.",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80",
  },
];

const benefits = [
  {
    title: "Premium Quality",
    description: "All our products undergo rigorous quality checks to ensure you receive only the finest food items available in the market."
  },
  {
    title: "Authentic Sourcing",
    description: "We source directly from regions renowned for their specific products, ensuring authenticity and traditional quality."
  },
  {
    title: "Wholesale Options",
    description: "Perfect for retailers and businesses, our wholesale options provide competitive pricing without compromising quality."
  },
  {
    title: "Global Distribution",
    description: "From our base in Dubai, we distribute worldwide, bringing premium food products to international markets."
  },
  {
    title: "Sustainable Practices",
    description: "We prioritize partnerships with suppliers who maintain sustainable and ethical production practices."
  },
  {
    title: "Custom Solutions",
    description: "We can tailor our product offerings to meet your specific business requirements and market demands."
  }
];

const faqs = [
  {
    question: "What are your minimum order quantities?",
    answer: "Our minimum order quantities vary by product category. For most items, we offer flexible options starting from small wholesale amounts to container-load quantities. Please contact our sales team for specific product MOQs."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, Welcome Mart ships products worldwide. We have established logistics partnerships that ensure safe and timely delivery of our products to international destinations. Shipping costs and delivery times vary by location."
  },
  {
    question: "Are your products Halal certified?",
    answer: "Yes, all our food products are Halal certified by recognized certification bodies. We can provide the necessary documentation upon request."
  },
  {
    question: "What quality standards do your products meet?",
    answer: "Our products comply with international food safety standards including HACCP, ISO 22000, and GMP. We regularly conduct quality audits and maintain stringent quality control measures throughout our supply chain."
  },
  {
    question: "Can you provide product samples?",
    answer: "Yes, we offer product samples for qualified business inquiries. Please contact our sales team to arrange for product samples based on your specific requirements."
  }
];

// Add TypeScript declaration for window object
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: any) => void;
    fbq?: (command: string, event: string, params?: any) => void;
  }
}

export default Products;
