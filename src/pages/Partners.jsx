import React from 'react';
import { IconSchool, IconMapPin, IconUsers } from "@tabler/icons-react";

// Ensure the file is named Partners.jsx or Partners.tsx
const Partners = () => {
  const partners = [
    {
      name: "Tech Innovators High School",
      location: "New York, NY",
      students: 1200,
      logo: "https://via.placeholder.com/250x120?text=Tech+Innovators+High",
      description: "Leading STEM education and robotic research programs"
    },
    {
      name: "Robotics Academy",
      location: "San Francisco, CA", 
      students: 950,
      logo: "https://via.placeholder.com/250x120?text=Robotics+Academy",
      description: "Pioneering advanced robotics and AI curriculum"
    },
    {
      name: "Innovation Charter School",
      location: "Boston, MA",
      students: 800,
      logo: "https://via.placeholder.com/250x120?text=Innovation+Charter",
      description: "Specialized in hands-on technology and engineering education"
    },
    {
      name: "Future Scientists Preparatory",
      location: "Chicago, IL",
      students: 1100,
      logo: "https://via.placeholder.com/250x120?text=Future+Scientists+Prep",
      description: "Comprehensive STEM-focused educational institution"
    },
    {
      name: "Global Tech High School",
      location: "Seattle, WA",
      students: 1300,
      logo: "https://via.placeholder.com/250x120?text=Global+Tech+High",
      description: "International approach to technology and innovation education"
    },
    {
      name: "Quantum Learning Center",
      location: "Austin, TX",
      students: 750,
      logo: "https://via.placeholder.com/250x120?text=Quantum+Learning",
      description: "Cutting-edge research and educational technologies"
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-24 max-w-[92rem] mx-auto rounded-lg shadow-2xl">
      <h2 
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Our School Partners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-24 object-contain rounded-lg"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">{partner.name}</h3>
              
              <div className="flex justify-center space-x-4 mb-4 text-neutral-300">
                <div className="flex items-center">
                  <IconMapPin size={20} className="mr-2 text-green-400" />
                  <span>{partner.location}</span>
                </div>
                <div className="flex items-center">
                  <IconUsers size={20} className="mr-2 text-yellow-400" />
                  <span>{partner.students} Students</span>
                </div>
              </div>

              <p className="text-neutral-400 italic">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 
          className="text-3xl font-bold mb-8"
          style={{ color: 'rgb(192, 255, 20)' }}
        >
          Interested in Partnering?
        </h3>
        <button 
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Contact Our Partnership Team
        </button>
        <p className="text-neutral-400 mt-4">Expand technological education together</p>
      </div>
    </div>
  );
};

export default Partners;