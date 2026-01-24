import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MobileCTABar from "@/components/ui/MobileCTABar";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressIndicator />
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-0">{children}</main>
      <Footer />
      {/* WhatsApp button hidden on mobile since we have MobileCTABar */}
      <div className="hidden md:block">
        <WhatsAppButton />
      </div>
      <ScrollToTop />
      <MobileCTABar />
    </div>
  );
};

export default Layout;
