import { motion } from "motion/react";
interface ScaleUpMotionProps {
  delay?: number;
  start?: number;
  end?: number;
  stiffness?: number; // Lower stiffness for a slower spring
  damping?: number; // Higher damping to reduce bounciness
  children: React.ReactNode;
}

const ScaleUpMotion = ({
  delay = 0.3,
  children,
  stiffness = 70,
  damping = 7,
  start = 0,
  end = 1
}: ScaleUpMotionProps) => {
  return (
    <motion.div
      initial={{ scale: start }}
      animate={{ scale: end }}
      transition={{
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUpMotion;
