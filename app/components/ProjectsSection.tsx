import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "MCU-Based Rain Harvesting and smart watering for Raymond’s Garden",
    description:
      "Our goal on building this device is to make an innovation and make use of rainwater for alternative irrigation for the rainy season and have a web application along with it for our client to monitor the plants and irrigate them using their smartphones.",
    image: "/AquaHarvest.png",
    github: "https://github.com/Saiji1435/Smart-Irrigation.git",
    link: "https://github.com/Saiji1435/Smart-Irrigation.git",
    bgColor: "bg-gradient-to-r from-gray-800 to-gray-900",
  },
  {
    name: "My-Portfolio",
    description: "My-Portfolio is my own created portfolio using Tailwindcss, REACT, Typescript and NextJS.",
    image: "/Myportfolio.png",
    github: "https://github.com/Saiji1435/ruzben-portfolio.git",
    link: "https://github.com/Saiji1435/ruzben-portfolio.git",
    bgColor: "bg-gradient-to-r from-slate-800 to-slate-900",
  },
]

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-20 -mt-10"
    >
      <h1 className="text-center font-bold text-4xl mb-10">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div
                className={`flex flex-col md:flex-row md:space-x-12 p-6 rounded-xl border-4 border-purple-500 shadow-lg ${project.bgColor}`}
              >
                <div className="md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className={`rounded-xl shadow-xl hover:opacity-70 ${
                        project.image === "/Myportfolio.png"
                          ? "border-4 border-teal-500"
                          : ""
                      }`}
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6 text-cyan-400">
                    {project.name}
                  </h1>
                  <p className="text-xl leading-7 mb-4 text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
