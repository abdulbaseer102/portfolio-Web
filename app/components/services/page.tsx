import { motion } from 'framer-motion'
import React from 'react'
import { IconContext } from 'react-icons'
import { FaPaintBrush, FaMobileAlt, FaLaptopCode, FaChartLine, FaUserFriends, FaBullhorn } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <section id="services" className="py-32 bg-gray-600 text-white">
  <div className="container mx-auto px-8">
    <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaPaintBrush />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">Graphics Design</h3>
        <p className="text-lg">
          Crafting visually compelling and cohesive graphics to establish a strong brand identity that resonates with your audience. Our designs ensure your brand stands out in a crowded market.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaMobileAlt />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">Mobile Development</h3>
        <p className="text-lg">
          Developing high-performance mobile applications that provide a seamless user experience. Our apps are designed to be intuitive, user-friendly, and aligned with your business objectives.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaLaptopCode />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">Web Development</h3>
        <p className="text-lg">
          Building responsive, high-quality websites using modern technologies. Our websites offer excellent performance, accessibility, and user experience on all devices.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaChartLine />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">SEO Optimization</h3>
        <p className="text-lg">
          Enhancing your website's visibility on search engines through effective SEO strategies. We drive organic traffic to your site, improving your online presence and search engine rankings.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaUserFriends />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">Social Media Management</h3>
        <p className="text-lg">
          Managing your social media channels to engage your audience and build your brand. Our strategies increase your online visibility and foster a strong connection with your customers.
        </p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <IconContext.Provider value={{ className: 'inline-block text-5xl mb-6 text-orange-500' }}>
          <FaBullhorn />
        </IconContext.Provider>
        <h3 className="text-3xl font-bold mb-6">Digital Marketing</h3>
        <p className="text-lg">
          Developing and executing digital marketing strategies that effectively reach and engage your target audience. We help you grow your brand and achieve your marketing goals.
        </p>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Services
