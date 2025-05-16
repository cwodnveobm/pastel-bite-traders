
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the WhatsApp message
      const whatsappMessage = `Name: ${data.name}%0AEmail: ${data.email}%0AMessage: ${data.message}`;
      const whatsappUrl = `https://wa.me/971522586807?text=${whatsappMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      toast.success("WhatsApp opened successfully!", {
        description: "Your message is ready to be sent via WhatsApp.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      toast.error("Failed to open WhatsApp", {
        description: "Please try again or contact us directly via phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    Mobile: +971 52 258 6807<br />
                    Landline: 04 552 1765
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-manrope font-medium text-rabee-black">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-manrope font-medium text-rabee-black">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-manrope font-medium text-rabee-black">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-rabee-darkgreen/20 focus:outline-none focus:ring-2 focus:ring-rabee-darkgreen/20" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rabee-darkgreen text-white font-manrope font-medium py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : "Send via WhatsApp"}
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
