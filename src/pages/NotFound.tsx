
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rabee-green/10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-rabee-black mb-2">404</h1>
        <h2 className="text-xl font-semibold text-rabee-black/90 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
          <br />
          <span className="text-sm italic mt-1 block">
            Attempted to access: {location.pathname}
          </span>
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="block w-full bg-rabee-darkgreen text-white font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
          >
            Return to Home
          </Link>
          
          <Link 
            to="/contact" 
            className="block w-full bg-white border border-rabee-darkgreen text-rabee-darkgreen font-medium py-2 px-4 rounded hover:bg-rabee-darkgreen/5 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
