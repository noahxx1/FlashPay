import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({
  children,
  animationProps,
  transitionProps,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? animationProps : { opacity: 0 }}
      transition={transitionProps}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
