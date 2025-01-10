import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const schools = [
    "Green Valley Sr Sec School",
    "Arihant International School",
    "Vedant International School",
    "IBVM School",
    "Navjeevan School",
    "Xavier School",
    "SVGMS Gangwar",
    "SVGMS Banega",
    "SVGMS Badi Dadri",
    "SVGMS Banswara",
    "SVGMS Anoop Vadh",
    "SVGMS Dungarpur",
    "SVGMS Titri",
    "SVGMS Jahazpur",
    "Calliber Academy Sr Sec School Chittorgarh",
    "DPS Ahmedabad",
    "Miranda Sr Sec School Udaipur",
    "AIM Sr Sec School Mandavi, Gujarat",
    "SVGMS Churu",
    "SVGMS Devli",
    "Swift Public School Bhilwara",
    "APS Nasirabad"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-8 lg:px-24 max-w-[92rem] mx-auto rounded-lg shadow-2xl">
      <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Our School Partners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school, index) => (
          <div 
            key={index} 
            className="group hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-slate-700 hover:border-slate-600 h-full flex items-center justify-center">
              <h3 className="text-center text-lg font-medium bg-gradient-to-r from-cyan-200 to-cyan-100 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-200 transition-all duration-300">
                {school}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;