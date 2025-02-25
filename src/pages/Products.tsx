
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="min-h-screen bg-rabee-green pt-20">
      {/* Products Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-black mb-6">
              Our Products
            </h1>
            <p className="font-manrope text-lg text-rabee-black/80 max-w-2xl mx-auto">
              Discover our wide range of premium food products, carefully sourced from trusted suppliers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-rabee-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-rabee-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-spaceGrotesk text-xl font-bold text-rabee-black mb-2">
                    {category.name}
                  </h3>
                  <p className="font-manrope text-rabee-black/80 mb-4">
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
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Grains",
    description: "Wholesome grains from trusted suppliers worldwide.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d32f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dairy Products",
    description: "Fresh dairy products maintaining the highest quality standards.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spices",
    description: "Authentic spices that add flavor to every dish.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Juices",
    description: "Natural and refreshing juices for every occasion.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Frozen Poultry",
    description: "High-quality frozen poultry products for your needs.",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80",
  },
];

export default Products;
