import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Cog, Settings } from "lucide-react";

interface PageTransitionProps {
  children: ReactNode;
}

// Generate random spark particles
const generateSparks = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.3,
    duration: 0.4 + Math.random() * 0.3,
    offsetX: (Math.random() - 0.5) * 40,
    offsetY: (Math.random() - 0.5) * 40,
    size: 2 + Math.random() * 4,
    startPosition: Math.random() * 100,
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
          {/* Diagonal wipe - top left triangle */}
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 0 0, 0 0)" }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 8%) 100%)",
            }}
          />
          
          {/* Diagonal wipe - bottom right triangle */}
          <motion.div
            initial={{ clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(315deg, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 100%)",
            }}
          />

          {/* Red accent diagonal line */}
          <motion.div
            initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
            animate={{ clipPath: "polygon(48% 0, 52% 0, 52% 100%, 48% 100%)" }}
            exit={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="fixed inset-0 z-[9998] pointer-events-none rotate-45 scale-[2]"
            style={{
              background: "linear-gradient(180deg, hsl(0 83% 50% / 0.3) 0%, hsl(0 83% 40% / 0.5) 50%, hsl(0 83% 50% / 0.3) 100%)",
            }}
          />

          {/* Spark particles flying along the diagonal */}
          <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {sparks.map((spark) => (
              <motion.div
                key={spark.id}
                className="absolute"
                initial={{ 
                  top: "-5%",
                  left: `${spark.startPosition}%`,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{ 
                  top: "105%",
                  left: `${spark.startPosition - 50}%`,
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.2, 1, 0],
                }}
                transition={{ 
                  duration: spark.duration,
                  delay: 0.1 + spark.delay,
                  ease: "easeOut",
                }}
                style={{
                  transform: `translate(${spark.offsetX}px, ${spark.offsetY}px)`,
                }}
              >
                {/* Spark core */}
                <div 
                  className="rounded-full"
                  style={{
                    width: spark.size,
                    height: spark.size,
                    background: "radial-gradient(circle, hsl(0 83% 70%) 0%, hsl(0 83% 50%) 50%, transparent 100%)",
                    boxShadow: `0 0 ${spark.size * 2}px hsl(0 83% 50%), 0 0 ${spark.size * 4}px hsl(0 83% 40% / 0.5)`,
                  }}
                />
                {/* Spark trail */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: spark.size * 8, opacity: [0, 0.6, 0] }}
                  transition={{ 
                    duration: spark.duration * 0.8,
                    delay: 0.1 + spark.delay,
                    ease: "easeOut",
                  }}
                  style={{
                    width: spark.size * 0.5,
                    background: `linear-gradient(to bottom, hsl(0 83% 60% / 0.8), transparent)`,
                    borderRadius: spark.size,
                  }}
                />
              </motion.div>
            ))}
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
