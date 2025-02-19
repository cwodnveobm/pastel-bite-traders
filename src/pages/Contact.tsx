
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-rabee-offwhite pt-20">
      {/* Contact Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-rabee-gray mb-6">
              Get in Touch
            </h1>
            <p className="font-manrope text-lg text-rabee-gray/80 max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-gray mb-6">
                Contact Information
              </h2>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-rabee-peach shrink-0 mt-1" />
                <div>
                  <h3 className="font-spaceGrotesk font-bold text-rabee-gray">Location</h3>
                  <p className="font-manrope text-rabee-gray/80">
                    Welcome Mart, near Bellasa Driving Centre,<br />
                    Al Waha Street, Al Quoz 3, Dubai
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-rabee-peach shrink-0 mt-1" />
                <div>
                  <h3 className="font-spaceGrotesk font-bold text-rabee-gray">Phone</h3>
                  <p className="font-manrope text-rabee-gray/80">
                    +971 52 258 6807
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-rabee-peach shrink-0 mt-1" />
                <div>
                  <h3 className="font-spaceGrotesk font-bold text-rabee-gray">Email</h3>
                  <p className="font-manrope text-rabee-gray/80">
                    info@rabeefoodstuff.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-rabee-offwhite p-8 rounded-2xl"
            >
              <h2 className="font-spaceGrotesk text-2xl font-bold text-rabee-gray mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-manrope font-medium text-rabee-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-rabee-teal/20 focus:outline-none focus:ring-2 focus:ring-rabee-teal/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-manrope font-medium text-rabee-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-rabee-teal/20 focus:outline-none focus:ring-2 focus:ring-rabee-teal/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-manrope font-medium text-rabee-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-rabee-teal/20 focus:outline-none focus:ring-2 focus:ring-rabee-teal/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rabee-peach text-white font-manrope font-medium py-3 rounded-lg hover:bg-rabee-rose transition-colors"
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
