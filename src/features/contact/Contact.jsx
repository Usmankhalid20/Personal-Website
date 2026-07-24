"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../../components/ui/MagneticButton";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Close form after 3 seconds on success
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#111] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Have a product idea?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's turn it into something people can use. I am currently available for freelance work and full-time opportunities.
          </motion.p>

          <AnimatePresence mode="wait">
            {!isFormOpen ? (
              <motion.div
                key="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="inline-block"
              >
                <MagneticButton>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center px-10 py-5 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition-all duration-300"
                  >
                    Start a Conversation <span className="ml-3">→</span>
                  </button>
                </MagneticButton>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto text-left space-y-6 mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 font-medium text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 font-medium text-center">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] px-6 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}