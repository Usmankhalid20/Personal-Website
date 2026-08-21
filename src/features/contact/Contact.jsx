"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../../components/ui/MagneticButton";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    b_website: '' // Honeypot field for bot trapping
  });

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setSubmitStatus(null);
    setErrorMessage('');
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSubmitStatus(null);
    setErrorMessage('');
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Honeypot check: If bot filled hidden field, simulate success without executing API requests
    if (formData.b_website && formData.b_website.trim() !== '') {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', b_website: '' });
      setTimeout(() => setIsFormOpen(false), 2000);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      honeypot: formData.b_website,
    };

    try {
      // 1. Next.js API Route call (Server validation, rate limiting & MongoDB storage)
      const apiPromise = fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // 2. Direct Web3Forms submission from client (Passes Cloudflare protection & emails recipient)
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "2d1e74ad-b690-4ed6-a77a-c6aeb8d5b761";
      const web3Promise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: payload.name,
          email: payload.email,
          phone: payload.phone || '',
          message: payload.message,
          subject: `New Project Inquiry from ${payload.name}`,
          from_name: payload.name,
        }),
      });

      const [apiRes, web3Res] = await Promise.allSettled([apiPromise, web3Promise]);

      let isSuccess = false;
      let serverErrorMsg = '';

      if (apiRes.status === 'fulfilled') {
        const apiJson = await apiRes.value.json();
        if (apiRes.value.ok && apiJson.success) {
          isSuccess = true;
        } else {
          serverErrorMsg = apiJson.message || '';
        }
      }

      if (web3Res.status === 'fulfilled') {
        try {
          const web3Json = await web3Res.value.json();
          if (web3Json.success) {
            isSuccess = true;
          }
        } catch (e) {
          // ignore non-json
        }
      }

      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', b_website: '' });
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus(null);
        }, 3500);
      } else {
        setSubmitStatus('error');
        setErrorMessage(serverErrorMsg || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
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
                    onClick={handleOpenForm}
                    className="inline-flex items-center px-10 py-5 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95"
                  >
                    Start a Conversation <span className="ml-3">→</span>
                  </button>
                </MagneticButton>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto text-left space-y-6 mt-8"
              >
                {/* Honeypot field - invisible to real users, catches automated bots */}
                <input
                  type="text"
                  name="b_website"
                  value={formData.b_website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
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
                      maxLength={150}
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
                    maxLength={40}
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
                    maxLength={3000}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-xl text-green-700 dark:text-green-300 text-center font-medium"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl text-red-700 dark:text-red-300 text-center font-medium"
                  >
                    {errorMessage || 'Oops! Something went wrong. Please try again later.'}
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] px-6 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center justify-center shadow-md"
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