
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="min-h-screen bg-rabee-offwhite pt-20">
      {/* Products Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-gray mb-6">
              Our Products
            </h1>
            <p className="font-manrope text-lg text-rabee-gray/80 max-w-2xl mx-auto">
              Discover our wide range of premium food products, carefully sourced from trusted suppliers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-rabee-offwhite rounded-2xl overflow-hidden"
              >
                <div className="h-48 bg-rabee-teal/10"></div>
                <div className="p-6">
                  <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-gray mb-2">
                    {category.name}
                  </h3>
                  <p className="font-manrope text-rabee-gray/80 mb-4">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const productCategories = [
  {
    name: "Dates",
    description: "Premium quality dates sourced from the finest farms in the region.",
  },
  {
    name: "Grains",
    description: "Wholesome grains from trusted suppliers worldwide.",
  },
  {
    name: "Dairy Products",
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

export default Products;
