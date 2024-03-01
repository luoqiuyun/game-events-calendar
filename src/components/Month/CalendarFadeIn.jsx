import React from "react";
import { motion } from "framer-motion";

function CalendarFadeIn({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.2, scale: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default CalendarFadeIn;
