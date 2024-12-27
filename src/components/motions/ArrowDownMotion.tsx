import { motion } from "motion/react";
interface ArrowDownMotionProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

const ArrowDownMotion = ({
  delay = 6,
  children,
  duration = 0.5,
}: ArrowDownMotionProps) => {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0], // Move down by 10px, then back to original position
      }}
      transition={{
        scale: { delay: delay, duration: duration },
        y: {
          duration: 3, // Total time for one loop (2 seconds)
          ease: "easeInOut", // Smooth easing
          repeat: Infinity, // Infinite loop
          repeatDelay: 2, // Pause for 1 second before repeating
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ArrowDownMotion;
