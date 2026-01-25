import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Cog, Settings } from "lucide-react";

interface PageTransitionProps {
  children: ReactNode;
}

// Generate random spark particles for radial burst
const generateSparks = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.2,
    duration: 0.5 + Math.random() * 0.3,
    angle: (i / count) * 360 + (Math.random() - 0.5) * 30,
    distance: 150 + Math.random() * 100,
    size: 2 + Math.random() * 4,
  }));
};

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
  
  // Memoize sparks so they regenerate on each route change
  const sparks = useMemo(() => generateSparks(12), [location.pathname]);

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
          {/* Background blur overlay */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9997] pointer-events-none bg-background/20"
          />
          {/* Circular reveal - main background */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 100%)",
            }}
          />
          
          {/* Red accent ring that expands */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, transparent 0%, transparent 48%, hsl(0 83% 50% / 0.4) 49%, hsl(0 83% 50% / 0.6) 50%, hsl(0 83% 50% / 0.4) 51%, transparent 52%, transparent 100%)",
            }}
          />

          {/* Outer glow ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 0.5, 0] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="fixed z-[9998] pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              width: "200px",
              height: "200px",
              marginLeft: "-100px",
              marginTop: "-100px",
              borderRadius: "50%",
              border: "2px solid hsl(0 83% 50% / 0.5)",
              boxShadow: "0 0 40px hsl(0 83% 50% / 0.3), inset 0 0 40px hsl(0 83% 50% / 0.2)",
            }}
          />

          {/* Spark particles bursting outward from center */}
          <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {sparks.map((spark) => {
              const radians = (spark.angle * Math.PI) / 180;
              const endX = Math.cos(radians) * spark.distance;
              const endY = Math.sin(radians) * spark.distance;
              
              return (
                <motion.div
                  key={spark.id}
                  className="absolute left-1/2 top-1/2"
                  initial={{ 
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{ 
                    x: endX,
                    y: endY,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 1, 0],
                  }}
                  transition={{ 
                    duration: spark.duration,
                    delay: 0.15 + spark.delay,
                    ease: "easeOut",
                  }}
                >
                  {/* Spark core */}
                  <div 
                    className="rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: spark.size,
                      height: spark.size,
                      background: "radial-gradient(circle, hsl(0 83% 70%) 0%, hsl(0 83% 50%) 50%, transparent 100%)",
                      boxShadow: `0 0 ${spark.size * 2}px hsl(0 83% 50%), 0 0 ${spark.size * 4}px hsl(0 83% 40% / 0.5)`,
                    }}
                  />
                  {/* Spark trail */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 origin-center"
                    style={{
                      width: spark.size * 0.5,
                      height: spark.size * 12,
                      background: `linear-gradient(to bottom, transparent, hsl(0 83% 60% / 0.6), transparent)`,
                      borderRadius: spark.size,
                      transform: `translate(-50%, -50%) rotate(${spark.angle + 90}deg)`,
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
                    transition={{ 
                      duration: spark.duration * 0.6,
                      delay: 0.15 + spark.delay,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

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
