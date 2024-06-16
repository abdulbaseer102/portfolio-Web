"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
          tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = "Email is not valid.";
        }
        if (!formData.message) tempErrors.message = "Message is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    
    
      const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validate()) {
          // Handle form submission
          console.log("Form submitted:", formData);
        }
      };
    
      const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
  return (
    <div>
      <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Contact
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <motion.div
            variants={formVariants}
            custom={0}
            className="relative"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`p-4 bg-gray-800 text-white rounded-lg w-full ${
                errors.name ? "border-2 border-red-500" : ""
              }`}
              value={formData.name}
              onChange={handleInputChange}
              data-tooltip-id="nameTooltip"
              data-tooltip-content={errors.name}
            />
            {errors.name && (
              <Tooltip id="nameTooltip" className="text-red-500" />
            )}
          </motion.div>
          <motion.div
            variants={formVariants}
            custom={1}
            className="relative"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`p-4 bg-gray-800 text-white rounded-lg w-full ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
              value={formData.email}
              onChange={handleInputChange}
              data-tooltip-id="emailTooltip"
              data-tooltip-content={errors.email}
            />
            {errors.email && (
              <Tooltip id="emailTooltip" className="text-red-500" />
            )}
          </motion.div>
          <motion.div
            variants={formVariants}
            custom={2}
            className="relative col-span-1 md:col-span-2"
          >
            <textarea
              name="message"
              placeholder="Your Message"
              className={`p-4 bg-gray-800 text-white rounded-lg w-full ${
                errors.message ? "border-2 border-red-500" : ""
              }`}
              value={formData.message}
              onChange={handleInputChange}
              data-tooltip-id="messageTooltip"
              data-tooltip-content={errors.message}
            />
            {errors.message && (
              <Tooltip id="messageTooltip" className="text-red-500" />
            )}
          </motion.div>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full col-span-1 md:col-span-2 transform hover:scale-105 transition-transform duration-300"
            variants={formVariants}
            custom={3}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
    </div>
  )
}

export default Contact
