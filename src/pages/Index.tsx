
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-rabee-green">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rabee-green/90 to-rabee-green/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sora text-6xl md:text-8xl font-bold text-rabee-black mb-4">
              Welcome Mart
            </h1>
            <p className="font-spaceGrotesk text-2xl md:text-3xl text-rabee-darkgreen mb-8">
              Wadi AL Rabee FoodStuff Trading
            </p>
            <p className="font-manrope text-xl md:text-2xl text-rabee-black/80 mb-8 max-w-2xl mx-auto">
              Bringing the finest quality food products to your table, from Dubai to the world.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-rabee-darkgreen text-white px-8 py-3 rounded-full font-manrope font-medium hover:bg-opacity-90 transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-rabee-white">
        <div 
          className="relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-rabee-white/95"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-rabee-black text-center mb-12">
              Our Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-rabee-white/80 backdrop-blur-sm p-6 hover:bg-rabee-white transition-colors shadow-lg"
                >
                  <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-black mb-2">
                    {category.name}
                  </h3>
                  <p className="font-manrope text-rabee-black/80 mb-4">
                    {category.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center space-x-2 text-rabee-darkgreen hover:text-rabee-black transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-rabee-green/90"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-rabee-black mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="font-manrope text-xl text-rabee-black/80 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-rabee-darkgreen text-white px-8 py-3 rounded-full font-manrope font-medium hover:bg-opacity-90 transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    name: "Dates",
    description: "Premium quality dates from the finest farms in the region.",
  },
  {
    name: "Grains",
    description: "Wholesome grains sourced from trusted suppliers worldwide.",
  },
  {
    name: "Dairy",
    description: "Fresh dairy products maintaining the highest quality standards.",
  },
  {
    name: "Spices",
    description: "Authentic spices that add flavor to every dish.",
  },
  {
    name: "Juices",
    description: "Natural and refreshing juices for every occasion.",
  },
  {
    name: "Frozen Poultry",
    description: "High-quality frozen poultry products for your needs.",
  },
];

export default Index;
