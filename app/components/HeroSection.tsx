"use client"
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 px-4 md:px-0">
        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ruzben Jhon Santos
            </span>
            !
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">Computer Engineer</span>. I make projects such as innovation, web development, and building devices.
          </p>

          {/* Contact Info with Backgrounds */}
          <div className="space-y-4 text-base md:text-lg mb-8">
            <div className="flex justify-center items-center gap-3 bg-gray-100 dark:bg-stone-800 px-4 py-2 rounded-lg shadow">
              <FaPhoneAlt className="text-teal-600" />
              <span className="text-gray-800 dark:text-gray-200">+63 963 662 1812</span>
            </div>
            <div className="flex justify-center items-center gap-3 bg-gray-100 dark:bg-stone-800 px-4 py-2 rounded-lg shadow">
              <FaEnvelope className="text-teal-600" />
              <span className="text-gray-800 dark:text-gray-200">ruzbenjhonsantos@gmail.com</span>
            </div>
            <div className="flex justify-center items-center gap-3 bg-gray-100 dark:bg-stone-800 px-4 py-2 rounded-lg shadow">
              <FaLinkedin className="text-teal-600" />
              <a
                href="https://www.linkedin.com/in/ruzben-jhon-santos-6779a3375/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                linkedin.com/in/ruzbenjhonsantos
              </a>
            </div>
          </div>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center mt-6">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
