import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteLoadingIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start loading animation
    setIsLoading(true);
    setProgress(0);

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 15;
      });
    }, 50);

    // Complete and hide
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998]">
      {/* Progress bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          boxShadow: "0 0 10px hsl(var(--primary)), 0 0 5px hsl(var(--primary))",
        }}
      />
      
      {/* Glow effect at the end */}
      <motion.div
        className="absolute top-0 h-1 w-8 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ left: "0%" }}
        animate={{ left: `${progress - 2}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{ opacity: 0.6 }}
      />
    </div>
  );
};

export default RouteLoadingIndicator;
