import React from 'react'

const About = () => {
  return (
     <section id="about" className="max-w-3xl mx-auto py-24 px-4 text-center scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 flex items-center justify-center">
        <span className="mr-2">👤</span> About <span className="text-purple-600 ml-2">Me</span>
      </h2>
      <h3 className="text-2xl font-bold mb-2">I'm Sourabh</h3>
      <p className="text-blue-700 font-semibold mb-4">Full Stack Developer</p>
      <p className="mb-4">
        I'm a Full Stack Developer based in Bangalore, India. I'm passionate about improving my coding skills,
        building user-friendly web applications, and working with the MERN stack and Django.
      </p>
      <p className="mb-2"><span className="text-blue-600 font-semibold">Email</span>: reach2sourabhkarale@gmail.com</p>
      <p className="mb-6"><span className="text-blue-600 font-semibold">Place</span>: Bangalore, India</p>
      <a
        href="/Sourabh_Karale_Resume.pdf"
        className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded-lg shadow"
        download
      >
        Resume ›
      </a>
    </section>
  )
}

export default About
