import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sourabh Karale</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
