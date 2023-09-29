import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      className="text-4xl font-medium py-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
