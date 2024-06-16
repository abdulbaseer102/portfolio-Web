import { motion } from 'framer-motion'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Project = () => {
    const projects = [
        {
          id: 1,
          title: 'Portfolio Website',
          description: '3D Design',
          image: 'https://cdn.dribbble.com/users/1862011/screenshots/11140644/media/958a3082dcb6892f2db76542b48960d9.png',
          highlights: ['Custom 3D animations', 'Responsive design', 'SEO optimization'],
        },
        {
          id: 2,
          title: 'E commerce Website',
          description: 'Illustration',
          image: 'https://static.vecteezy.com/system/resources/previews/002/179/047/original/website-landing-page-mockup-for-e-commerce-free-vector.jpg',
          highlights: ['Illustrated UI elements', 'Payment gateway integration', 'Product filtering'],
        },
        {
          id: 3,
          title: 'Jobs Website',
          description: 'User Interface',
          image: 'https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/06/34_Builtin-1.png',
          highlights: ['Advanced search functionality', 'Job application tracking', 'Candidate profiles'],
        },
      ];
      
  return (
    <div>
      <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Featured Work & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover rounded-lg w-full h-[50%]"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <hr className="border-white w-[100%] ml-[-2px]" />
    <section id="clients" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
          <p className="text-lg mb-6">Explore our worldwide reach and collaborations.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-20 h-20 mb-4">
              <HiOutlineLocationMarker className="absolute top-0 left-0 w-full h-full text-gray-500" />
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.ELcegre6DaNO2LIVAetrQAHaE8&pid=Api&P=0&h=220" // Replace with your image path
                alt="America"
                className="rounded-lg mt-[58px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-8">North America</h3>
            <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-8 border-t border-gray-700 w-12 mx-auto"></div>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-20 h-20 mb-4">
              <HiOutlineLocationMarker className="absolute top-0 left-0 w-full h-full text-gray-500" />
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.mAV10HhF77JerP7aLKg3JwHaGV&pid=Api&P=0&h=220" // Replace with your image path
                alt="Europe"
                className="rounded-lg mt-[58px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-8">Europe</h3>
            <p className="text-gray-300 text-center">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-8 border-t border-gray-700 w-12 mx-auto"></div>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-20 h-20 mb-4">
              <HiOutlineLocationMarker className="absolute top-0 left-0 w-full h-full text-gray-500" />
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.WcDtSqoQadVKJ8csKcVQzwHaGi&pid=Api&P=0&h=220" // Replace with your image path
                alt="Asia"
                className="rounded-lg mt-[58px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-8">Asia</h3>
            <p className="text-gray-300 text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="mt-8 border-t border-gray-700 w-12 mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Project
