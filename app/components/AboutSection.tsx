import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C Programming" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Hardware and Software Technical Support" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        {/* Skills Section */}
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Get to know me!</h2>
            <p>
              Hi, my name is Ruzben Jhon Santos and I am a{" "}
              <span className="font-bold">highly ambitious</span>,{" "}
              <span className="font-bold">self-motivated</span>, and{" "}
              <span className="font-bold">driven</span> computer engineering graduate. I currently work as a freelance web developer and continuously explore new technologies.
            </p>
            <br />
            <p>
              I graduated from STI College Munoz-EDSA in 2025 with a BS in Computer Engineering. Since then, I’ve been involved in various project-based development initiatives and innovation competitions.
            </p>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">My Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 space-y-12">
          {/* DOST Challenge */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <Image
              src="/about/image1.jpg"
              alt="DOST Challenge"
              width={400}
              height={300}
              className="rounded-lg shadow-md mb-4 md:mb-0"
            />
            <p className="md:w-2/3 text-white-700 dark:text-black-300">
              On July 7, 2025, We participated in the DOST Spark-A-Change Pitching Competition. We proposed RecogNice, a tech-driven solution to empower visually impaired individuals who are part of the workforce in the Philippines. It was a rewarding experience that sharpened our innovation and presentation skills.
            </p>
          </div>

          {/* Thesis - MCU-Based Rain Harvesting */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <Image
              src="/about/image2.jpg"
              alt="Rain Harvesting Thesis"
              width={400}
              height={300}
              className="rounded-lg shadow-md mb-4 md:mb-0"
            />
            <p className="md:w-2/3 text-white-700 dark:text-black-300">
              For our thesis, we developed an MCU-Based Rain Harvesting and Smart Watering system for Raymond's Garden. This project automated rainwater collection using microcontrollers and sensors, promoting sustainable water management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
