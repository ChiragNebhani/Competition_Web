import React from 'react';
import { cn } from "../lib/utils";
import { IconCalendar, IconMapPin, IconTrophy, IconUsers, IconBuilding } from "@tabler/icons-react";

const CompetitionDetails = () => {
  const competitionInfo = [
    {
      icon: <IconCalendar className="text-cyan-400" size={32} />,
      title: "Date",
      description: "15-16 September 2024",
      details: "Mark your calendars for this exciting two-day event!"
    },
    {
      icon: <IconMapPin className="text-green-400" size={32} />,
      title: "Venue",
      description: "Tech Innovation Center",
      details: "123 Innovation Street, Tech City, State 54321"
    },
    {
      icon: <IconTrophy className="text-yellow-400" size={32} />,
      title: "Prizes",
      description: "₹5,00,000 Total Prize Pool",
      details: "1st Place: ₹2,00,000 | 2nd Place: ₹1,50,000 | 3rd Place: ₹50,000"
    }
  ];

  const sponsors = [
    {
      name: "Tech Innovators",
      logo: "https://via.placeholder.com/150x60?text=Tech+Innovators",
      tier: "Platinum Sponsor"
    },
    {
      name: "Robotics World",
      logo: "https://via.placeholder.com/150x60?text=Robotics+World",
      tier: "Gold Sponsor"
    },
    {
      name: "Future Labs",
      logo: "https://via.placeholder.com/150x60?text=Future+Labs",
      tier: "Silver Sponsor"
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-24 max-w-[92rem] mx-auto rounded-lg shadow-2xl">
      <h2 
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Competition Details
      </h2>

      {/* Competition Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {competitionInfo.map((info, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              {info.icon}
              <h3 className="text-xl font-semibold ml-4 text-white">{info.title}</h3>
            </div>
            <p className="text-lg font-bold text-cyan-300 mb-2">{info.description}</p>
            <p className="text-neutral-400">{info.details}</p>
          </div>
        ))}
      </div>

      {/* Sponsors Section */}
      <div className="text-center">
        <h3 
          className="text-3xl font-bold mb-8"
          style={{ color: 'rgb(192, 255, 20)' }}
        >
          Our Sponsors
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-4 rounded-lg flex flex-col items-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-16 mb-4 object-contain"
              />
              <p className="text-neutral-300 font-semibold">{sponsor.tier}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration CTA */}
      <div className="text-center mt-16">
        <button 
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Register Now
        </button>
        <p className="text-neutral-400 mt-4">Early Bird Registration Closes on 31st August</p>
      </div>
    </div>
  );
};

export default CompetitionDetails;