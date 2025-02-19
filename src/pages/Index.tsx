
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-rabee-offwhite">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rabee-offwhite z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sora text-5xl md:text-7xl font-bold text-rabee-gray mb-6">
              Premium Food Trading
            </h1>
            <p className="font-manrope text-xl md:text-2xl text-rabee-gray/80 mb-8 max-w-2xl mx-auto">
              Bringing the finest quality food products to your table, from Dubai to the world.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-rabee-peach text-white px-8 py-3 rounded-full font-manrope font-medium hover:bg-rabee-rose transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-rabee-gray text-center mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-rabee-teal/10 p-6 hover:bg-rabee-teal/20 transition-colors"
              >
                <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-gray mb-2">
                  {category.name}
                </h3>
                <p className="font-manrope text-rabee-gray/80 mb-4">
                  {category.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 text-rabee-teal hover:text-rabee-peach transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rabee-peach/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-rabee-gray mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="font-manrope text-xl text-rabee-gray/80 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-rabee-teal text-white px-8 py-3 rounded-full font-manrope font-medium hover:bg-rabee-rose transition-colors"
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
