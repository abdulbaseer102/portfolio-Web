"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { HiAcademicCap, HiCode, HiStar, HiUserGroup } from 'react-icons/hi';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.3,
      },
    }),
  };

  return (
    <div>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-100 mb-8">
              I am passionate about technology and have achieved several milestones in my career. Here's a glimpse into my journey.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: HiAcademicCap,
                title: "First Degree",
                description:
                  "Graduated from University XYZ with a degree in Computer Science.",
              },
              {
                icon: HiCode,
                title: "Coding Journey",
                description:
                  "Started coding at age 15 and developed numerous projects, including XYZ.",
              },
              {
                icon: HiAcademicCap,
                title: "Advanced Degree",
                description:
                  "Completed Masters in Computer Science with specialization in XYZ.",
                rotate: "rotate-180",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <item.icon
                      className={`text-3xl text-gray-700 ${
                        item.rotate ? item.rotate : ""
                      }`}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gray-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                <div className="mt-4 border-t border-gray-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <motion.div
            className="mt-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "UI/UX Design",
                "Front-End Development",
                "JavaScript",
                "React",
                "HTML & CSS",
                "Graphic Design",
                "Node.js",
                "Python",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg text-center"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <HiStar className="text-2xl text-blue-500 mb-2" />
                  <p className="text-lg text-gray-700">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mt-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Experience</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Senior Developer",
                  company: "Tech Company",
                  duration: "2020 - Present",
                  description:
                    "Lead developer on multiple high-profile projects, focusing on performance and user experience.",
                },
                {
                  title: "Mid-Level Developer",
                  company: "Web Solutions",
                  duration: "2017 - 2020",
                  description:
                    "Developed various web applications and collaborated with cross-functional teams.",
                },
                {
                  title: "Junior Developer",
                  company: "Startup Inc.",
                  duration: "2015 - 2017",
                  description:
                    "Started my career here, working on frontend and backend development.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            className="mt-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "John Doe",
                  role: "CEO of Company",
                  testimonial:
                    "Wade is an exceptional developer and designer. His work is always top-notch and exceeds expectations.",
                },
                {
                  name: "Jane Smith",
                  role: "Project Manager",
                  testimonial:
                    "Working with Wade has been a pleasure. His attention to detail and problem-solving skills are unmatched.",
                },
              ].map((testi, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <HiUserGroup className="text-2xl text-gray-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">{testi.name}</h4>
                      <p className="text-sm text-gray-600">{testi.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testi.testimonial}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
