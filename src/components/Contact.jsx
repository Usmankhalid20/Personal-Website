import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Have a question or want to work together? Reach out directly via email.
        </motion.p>

        {/* Email button with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <a
            href="mailto:magicmaker2315@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <HiOutlineMail className="mr-3 w-6 h-6" />
            magicmaker2315@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}