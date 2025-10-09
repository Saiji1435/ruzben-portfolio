"use client"
import React from "react"
import Image from "next/image"

const certificates = [
  {
    title: "Certificate in Participating in ICPEP: CPE Challenge C Programming 2024",
    description: "Participating and joining ICPEP's CPE Challenge in Programming category.",
    image: "/certificates/Certificate1.png",
    pdfLink: "/certificates/icpep-cpe-challenge-2024.pdf",
  },
  {
    title: "Certificate in Participating in DOST Spark-A-Change Pitching Competition",
    description: "We as team RecogNice participated in DOST's Spark-A-Change Pitching Competition to showcase our innovation for visually impaired worker individuals.",
    image: "/certificates/Certificate2.png",
    pdfLink: "/certificates/Spark-A-Change-Pitching-Competition.pdf",
  },
  {
    title: "Certificate in Attending Engineering Webinar ENGvention and ENGnovation",
    description: "Gained a certificate by attending a Webinar at Colegio de San Lorenzo titled Engnovation.",
    image: "/certificates/Certificate3.png",
    pdfLink: "/certificates/ENGvention_ENGnovation_SANTOS_RUZBEN_COMEN_1-ENG.pdf",
  },
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-20 bg-stone-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Certificates</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl border-4 border-purple-500 bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg p-6"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={300}
              className="rounded-md mb-4 border border-white"
            />
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{cert.title}</h3>
            <p className="text-gray-200 mb-4">{cert.description}</p>
            {cert.pdfLink && (
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-300 hover:underline"
              >
                View Certificate PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
