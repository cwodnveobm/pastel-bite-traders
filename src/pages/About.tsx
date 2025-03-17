
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-rabee-green pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-black mb-6">
              Our Story
            </h1>
            <p className="font-manrope text-lg text-rabee-black/80 mb-8">
              At Wadi AL Rabee FoodStuff Trading, we believe in bringing the finest quality food products to tables across Dubai and beyond.
            </p>
            <div className="mt-12 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                alt="Our Warehouse"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-rabee-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-green/20 p-8 rounded-2xl shadow-md"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-black mb-4">
                Our Mission
              </h2>
              <p className="font-manrope text-rabee-black/80">
                To deliver premium quality food products while maintaining the highest standards of service and customer satisfaction.
              </p>
              <div className="mt-6 h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1580913428023-02c695666d61?auto=format&fit=crop&w=800&q=80"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-green/20 p-8 rounded-2xl shadow-md"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-black mb-4">
                Our Vision
              </h2>
              <p className="font-manrope text-rabee-black/80">
                To become the leading food trading company in Dubai, known for our quality products and exceptional service.
              </p>
              <div className="mt-6 h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
