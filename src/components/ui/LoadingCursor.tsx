import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Cog, Settings } from "lucide-react";

const LoadingCursor = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 5%) 100%)",
          }}
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

          {/* Animated gear system */}
          <div className="relative flex items-center justify-center">
            {/* Large outer gear */}
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cog 
                size={120} 
                className="text-muted-foreground/20"
                strokeWidth={1}
              />
            </motion.div>

            {/* Medium gear - counter rotate */}
            <motion.div
              className="absolute -right-8 -top-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Settings 
                size={60} 
                className="text-primary/40"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Small gear */}
            <motion.div
              className="absolute -left-6 -bottom-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Cog 
                size={40} 
                className="text-primary/30"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Metallic logo circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, hsl(0 0% 25%), hsl(0 0% 15%))",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <span 
                    className="text-3xl font-bold"
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
                  className="absolute -inset-2 rounded-full border-2 border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    borderTopColor: "hsl(0 83% 50%)",
                    borderRightColor: "transparent",
                  }}
                />
              </motion.div>

              {/* Company name with metallic effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <h1 
                  className="text-xl font-bold tracking-wider"
                  style={{
                    background: "linear-gradient(180deg, hsl(0 0% 90%) 0%, hsl(0 0% 60%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  KARNI ENTERPRISES
                </h1>
                <p className="text-xs text-muted-foreground mt-1 tracking-widest">
                  PRECISION MANUFACTURING
                </p>
              </motion.div>

              {/* Industrial loading bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-48 h-1 bg-muted/30 rounded-full overflow-hidden"
                style={{
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Corner decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingCursor;
