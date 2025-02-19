
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-rabee-offwhite pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-gray mb-6">
              Our Story
            </h1>
            <p className="font-manrope text-lg text-rabee-gray/80 mb-8">
              At Rabee FoodStuff Trading, we believe in bringing the finest quality food products to tables across Dubai and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-peach/10 p-8 rounded-2xl"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-gray mb-4">
                Our Mission
              </h2>
              <p className="font-manrope text-rabee-gray/80">
                To deliver premium quality food products while maintaining the highest standards of service and customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-teal/10 p-8 rounded-2xl"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-gray mb-4">
                Our Vision
              </h2>
              <p className="font-manrope text-rabee-gray/80">
                To become the leading food trading company in Dubai, known for our quality products and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
