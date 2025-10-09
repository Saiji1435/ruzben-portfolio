"use client"
import React from "react"
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-20 bg-gray-100 dark:bg-stone-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-500 dark:text-cyan-400
">Let's Work Together</h2>

      {/* Contact Info */}
      <div className="max-w-xl mx-auto space-y-4 mb-12 text-gray-800 dark:text-gray-200">
        <div className="flex items-center gap-4 bg-gray-200 dark:bg-stone-700 px-4 py-2 rounded-lg shadow-md">
          <FaPhoneAlt className="text-teal-600" />
          <span>+63 912 345 6789</span>
        </div>
        <div className="flex items-center gap-4 bg-gray-200 dark:bg-stone-700 px-4 py-2 rounded-lg shadow-md">
          <FaEnvelope className="text-teal-600" />
          <a
            href="mailto:ruzbenjhonsantos@gmail.com"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            ruzbenjhonsantos@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 bg-gray-200 dark:bg-stone-700 px-4 py-2 rounded-lg shadow-md">
          <FaLinkedin className="text-teal-600" />
          <a
            href="https://www.linkedin.com/in/ruzbenjhonsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            linkedin.com/in/ruzbenjhonsantos
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/movknrga"
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded dark:bg-stone-900 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded dark:bg-stone-900 dark:text-white"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border rounded dark:bg-stone-900 dark:text-white"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
