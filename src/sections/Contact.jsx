import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const Contact = () => {
  return (
    // <section id="contact" className="max-w-4xl mx-auto py-24 px-4">
    //   <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
    //   <ul className="space-y-4">
    //     <li><strong>Phone:</strong> +91 6363424913</li>
    //     <li><strong>Email:</strong> <a href="mailto:reach2sourabhkarale@gmail.com" className="text-blue-600">reach2sourabhkarale@gmail.com</a></li>
    //     <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sourabh-karale-3a2974299" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/sourabh-karale-3a2974299</a></li>
    //     <li><strong>GitHub:</strong> <a href="https://github.com/Sskarale" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/Sskarale</a></li>
    //     <li><strong>Location:</strong> Bangalore, India</li>
    //   </ul>
    // </section>
    <section id="contact" className="bg-orange-50 py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          {/* <p className="text-green-600 font-medium">How can we help you?</p> */}
          <h2 className="text-4xl font-bold">Contact Information</h2>
          {/* <p className="text-gray-700">
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p> */}
          <div className="space-y-2 text-gray-800">
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-xl" /> Bangalore, India</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-xl" /> +91 6363424913</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-xl" /> <a href="mailto:reach2sourabhkarale@gmail.com" className="text-blue-600">reach2sourabhkarale@gmail.com</a></p>
            <p className="flex items-center gap-2"><FaLinkedin className="text-xl" /> <a href="https://www.linkedin.com/in/sourabh-karale-3a2974299" className="text-blue-600">linkedin.com/in/sourabh-karale-3a2974299</a></p>
            <p className="flex items-center gap-2"><FaGithub className="text-xl" /> <a href="https://github.com/Sskarale" className="text-blue-600">github.com/Sskarale</a></p>

          </div>
        </div>
        {/* <div className="md:w-1/2 text-center">
          <img src="/contact-illustration.png" alt="Contact Illustration" className="w-72 mx-auto" />
        </div> */}
      </div>
    </section>
  )
}

export default Contact
