'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Adjust based on your router setup
import Page from './components/heroSection/page';
import About from './components/about/page';
import Contact from './components/contact/page';
import Project from './components/project/page';
import Services from './components/services/page';
import { CgCloseR } from 'react-icons/cg';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='text-white'>
    <header className="top-0 left-0 w-full p-6 bg-black z-50">
      <nav className="flex justify-between items-center">
        <div className="text-4xl font-bold">Abdulbaseer</div>
        <hr />
        <div className="flex text-2xl items-center">
          <div className="hidden md:flex gap-[100px]">
            {/* Desktop Links */}
            <Link href="#home" className="hover:text-gray-400">Home</Link>
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Toggle Button */}
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full bg-black text-white py-6 px-3 md:hidden"
      >
        <button onClick={toggleMenu} className="text-right text-pink-400 text-3xl hover:text-white focus:outline-none">
          Close
        </button>
        <div className="flex flex-col items-center">
          <Link href="#home" className="text-3xl my-2 hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link href="#about" className="text-3xl my-2 hover:text-gray-400" onClick={toggleMenu}>About</Link>
          <Link href="#projects" className="text-3xl my-2 hover:text-gray-400" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" className="text-3xl my-2 hover:text-gray-400" onClick={toggleMenu}>Contact</Link>
        </div>
      </motion.div>
    </header>
    
    {/* Sections with Framer Motion */}
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="section"
    >
      <Page />
    </motion.div>
    <hr className="border-white w-[100%] ml-[-2px]" />

    <motion.div
      id="about"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="section"
    >
      <About />
    </motion.div>
    <hr className="border-white w-[100%] ml-[-2px]" />
    <motion.div
      id="projects"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="section"
    >
      <Project />
      
    </motion.div>
    <hr className="border-white w-[100%] ml-[-2px]" />
    <motion.div
      id="contact"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="section"
    >
      <Contact />
    </motion.div>
  </div>
  );
};

export default LandingPage;
