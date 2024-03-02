import React from "react";
import { motion } from "framer-motion";
import { MonthLoadingEffectProps } from "components/types";

const MonthLoadingEffect: React.FC<MonthLoadingEffectProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.2, scale: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default MonthLoadingEffect;
