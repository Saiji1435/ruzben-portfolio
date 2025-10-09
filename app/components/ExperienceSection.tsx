"use client"
import React from "react"
import Image from "next/image"

const experiences = [
  {
    title: "ICT Intern",
    company: "Global Officium Limited Inc.",
    duration: "May 6, 2025 – June 25, 2025",
    description:
      "Experienced in supporting various software and hardware technical issues across departments within the company.",
    image: "/experience/GOLI.jpg",
  },
  {
    title: "MIS (Management Information Systems) Assistant",
    company: "STI College Munoz-EDSA",
    duration: "September 17, 2025 – September 30, 2025",
    description:
      "Facilitated the computer laboratory alongside student assistants and conducted data inventory of printer caskets and inks.",
    image: "/experience/STI.jpg",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-20 bg-white dark:bg-stone-900">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-xl border-4 border-purple-500 bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg p-6"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <Image
                src={exp.image}
                alt={exp.company}
                width={100}
                height={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
              <p className="text-sm mt-2 inline-block px-3 py-1 rounded-lg bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                <span className="font-medium">{exp.company}</span> • {exp.duration}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
