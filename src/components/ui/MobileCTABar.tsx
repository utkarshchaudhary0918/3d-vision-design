import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./button";

const MobileCTABar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-lg px-4 py-3 safe-area-bottom">
        <div className="flex gap-3">
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            size="lg"
          >
            <a href="tel:+917988516142">
              <Phone className="mr-2" size={20} />
              Call Now
            </a>
          </Button>
          
          <Button
            asChild
            className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
            size="lg"
          >
            <a
              href="https://wa.me/917988516142?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTABar;
