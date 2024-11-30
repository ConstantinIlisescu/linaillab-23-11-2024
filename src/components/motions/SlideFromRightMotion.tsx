import { motion } from "motion/react";
interface SlideFromRightMotionProps {
  delay?: number;
  children: React.ReactNode;
}

const SlideFromRightMotion = ({
  delay = 1,
  children,
}: SlideFromRightMotionProps) => {
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

export default SlideFromRightMotion;
