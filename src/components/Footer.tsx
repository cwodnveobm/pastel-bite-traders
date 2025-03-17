
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rabee-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-manrope text-rabee-black/70 text-sm">
            Website developed and managed by Ad Web Comic Agency:{" "}
            <a 
              href="https://adwebcomicagency.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-rabee-darkgreen hover:text-rabee-black transition-colors"
            >
              adwebcomicagency.vercel.app
              <ExternalLink size={12} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
