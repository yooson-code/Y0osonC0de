"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactMeButton() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {/* Tombol utama */}
      <button
        onClick={() => setShowIcons(!showIcons)}
        className="px-4 py-2 
                   bg-blue-800 text-white font-semibold rounded-lg 
                   hover:bg-blue-700 transition
                   dark:bg-gray-600 dark:hover:bg-gray-400"
      >
        Contact Me
      </button>

      {/* AnimatePresence untuk efek muncul */}
      <AnimatePresence>
        {showIcons && (
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://instagram.com/_yoo.son/" target="_blank">
              <FaInstagram className="text-2xl text-blue-600 dark:text-pink-500 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/yooson-code/" target="_blank">
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200 hover:scale-110 transition" />
            </a>
            <a
              href="https://linkedin.com/in/samson-abdullah-8a062a249/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl text-blue-700 dark:text-blue-400 hover:scale-110 transition" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
