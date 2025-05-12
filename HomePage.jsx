import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center text-blue-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to J GROUPS Enterprises
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-center text-blue-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Authorized by J GROUPS
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        {["Automate Government Services", "Fast & Reliable", "Secure Processes", "One-Click Applications"].map((item, index) => (
          <motion.div
            key={index}
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="rounded-2xl shadow-md bg-white p-6 text-center text-blue-700 font-semibold hover:shadow-xl transition duration-300">
              {item}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}