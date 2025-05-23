import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";
import profile from '../sections/profile.jpeg'
// import { TypeAnimation } from 'react-type-animation';
import { TypeAnimation } from 'react-type-animation';






const Home = () => {
    return (
        <section id="home" className="relative h-screen bg-white flex flex-col justify-center items-center text-center px-4 scroll-mt-20">
            {/* Avatar */}
            <img src={profile} alt="Sourabh" className="rounded-full w-40 h-40 mb-6 shadow-lg  object-fill" />

            {/* Main content */}
            <h1 className="text-4xl md:text-6xl font-bold">
                Hi There, I'm <span className="text-orange-500">Sourabh</span>
            </h1>
            <h2 className="text-lg md:text-2xl mt-4">
            <strong>I Am into</strong> <span> </span>
        <span style={{ width: 'auto', height: 'auto' }}>
          <TypeAnimation
            sequence={[
              'Frotend Developer',
              1000,
              'Backend Developer',
              1000,
              'MERN Fullstack',
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '24px', display: 'inline-block', color: '#f27f3d', fontWeight: 'bolder' }}
            repeat={Infinity}
          />
        </span>
      </h2>
            <a href="#about" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md">
                About Me
            </a>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-6 text-xl text-gray-600">
                <a href="https://www.linkedin.com/in/sourabh-karale-3a2974299" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/Sskarale"><FaGithub /></a>
                <a href="mailto:reach2sourabhkarale@gmail.com"><FaEnvelope /></a>
            </div>
        </section>
    )
}

export default Home
