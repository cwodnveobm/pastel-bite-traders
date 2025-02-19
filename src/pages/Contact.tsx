
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-rabee-green pt-20">
      {/* Contact Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-black mb-6">
              Get in Touch
            </h1>
            <p className="font-manrope text-lg text-rabee-black/80 max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-rabee-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-black mb-6">
                Contact Information
              </h2>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-rabee-darkgreen shrink-0 mt-1" />
                <div>
                  <h3 className="font-spaceGrotesk font-bold text-rabee-black">Location</h3>
                  <p className="font-manrope text-rabee-black/80">
                    Welcome Mart, near Bellasa Driving Centre,<br />
                    Al Waha Street, Al Quoz 3, Dubai
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-rabee-darkgreen shrink-0 mt-1" />
                <div>
                  <h3 className="font-spaceGrotesk font-bold text-rabee-black">Phone</h3>
                  <p className="font-manrope text-rabee-black/80">
                    +971 52 258 6807
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-green/30 p-8 rounded-2xl"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-black mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-manrope font-medium text-rabee-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-manrope font-medium text-rabee-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-manrope font-medium text-rabee-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rabee-darkgreen text-white font-manrope font-medium py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
