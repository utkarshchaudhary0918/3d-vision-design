import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cog, Settings } from "lucide-react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const TransitionOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <>
          {/* Left panel slides in from left */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-y-0 left-0 w-1/2 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 8%) 100%)",
            }}
          />
          
          {/* Right panel slides in from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-y-0 right-0 w-1/2 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 12%) 100%)",
            }}
          />

          {/* Center content overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          >
          {/* Metallic grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Animated gear system - compact version */}
          <div className="relative flex items-center justify-center">
            {/* Large outer gear */}
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Cog 
                size={80} 
                className="text-muted-foreground/20"
                strokeWidth={1}
              />
            </motion.div>

            {/* Medium gear - counter rotate */}
            <motion.div
              className="absolute -right-6 -top-6"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Settings 
                size={40} 
                className="text-primary/40"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Small gear */}
            <motion.div
              className="absolute -left-5 -bottom-5"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Cog 
                size={28} 
                className="text-primary/30"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Center K logo */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, hsl(0 0% 25%), hsl(0 0% 15%))",
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                <span 
                  className="text-xl font-bold"
                  style={{
                    background: "linear-gradient(180deg, hsl(0 83% 55%) 0%, hsl(0 83% 40%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  K
                </span>
              </div>
              
              {/* Spinning ring around logo */}
              <motion.div
                className="absolute -inset-1.5 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{
                  borderTopColor: "hsl(0 83% 50%)",
                  borderRightColor: "transparent",
                }}
              />
            </motion.div>
          </div>

          {/* Corner decorative elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/20" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/20" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/20" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/20" 
          />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      <TransitionOverlay />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
