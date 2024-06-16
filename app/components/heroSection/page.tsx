import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
       {/* Hero Section */}
       <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-black text-center py-[100px]">
        <motion.div
          className="rounded-full overflow-hidden border-8 border-white relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/WhatsApp Image 2024-06-16 at 1.16.16 PM.jpeg"
            alt="Wade Warren"
            width={200}
            height={200}
            className="object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold mt-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Abdulbaseer
          <hr className="border-white w-[100%] ml-[-2px]" />
        </motion.h1>
    
        <motion.h2
          className="text-2xl mt-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          UI/UX Designer & Developer
        </motion.h2>
        <motion.p
          className="text-center mt-6 max-w-5xl z-10 text-1xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Creating beautiful and functional designs that elevate user experience and solve real-world problems. Let's build something amazing together.
        </motion.p>
        <motion.div
          className="flex space-x-6 mt-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-xl">
            Hire Me
          </button>
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-xl">
            View Portfolio
          </button>
        </motion.div>
        <div className="flex space-x-12 mt-16 z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-gray-400">Hours of Work</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default page
