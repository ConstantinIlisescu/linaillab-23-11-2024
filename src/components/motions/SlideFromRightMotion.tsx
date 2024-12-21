import { motion } from "motion/react";
interface SlideMotionProps {
  delay?: number;
  children: React.ReactNode;
}

export const SlideFromRightMotion = ({
  delay = 1,
  children,
}: SlideMotionProps) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideFromLeftMotion = ({
  delay = 1,
  children,
}: SlideMotionProps) => {
  return (
    <motion.div
      initial={{ x: "200vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
