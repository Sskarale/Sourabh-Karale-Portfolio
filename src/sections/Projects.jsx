import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4 bg-gray-50 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Web Page Builder using Django</h3>
          <p>Developed a platform that enables small businesses to create and customize websites without coding. Used Django for backend and dynamic content generation.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Air Canvas - Drawing with Finger Gestures</h3>
          <p>Created a hands-free drawing tool using Python and OpenCV for real-time finger tracking, enhancing accessibility for users with limited mobility.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
