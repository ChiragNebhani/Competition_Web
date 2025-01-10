import React from 'react';

const Codemos = () => {
  const courses = [
    {
      title: "Web Development",
      description: "Master frontend, backend, and full-stack development with modern technologies.",
      features: ["HTML, CSS, JavaScript", "React, Node.js", "Database Management"],
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Create beautiful and functional user interfaces that engage and delight.",
      features: ["User Research", "Wireframing", "Prototyping"],
      icon: "🎨"
    },
    {
      title: "Programming Languages",
      description: "Build a strong foundation with essential programming languages.",
      features: ["Python", "C & C++", "Java"],
      icon: "💻"
    }
  ];

  const features = [
    { icon: "🎯", title: "Expert Instructors", description: "Learn from industry professionals" },
    { icon: "⚡", title: "Hands-on Projects", description: "Build real-world applications" },
    { icon: "🚀", title: "Career Support", description: "Job placement assistance" },
    { icon: "🏆", title: "Certification", description: "Industry-recognized certificates" }
  ];

  const ChevronRight = () => (
    <svg 
      className="w-5 h-5 inline-block" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/api/placeholder/1920/1080" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-white shadow-cyan-400 drop-shadow-lg">
            CODEMOS
          </h1>
          <p className="text-2xl mb-8">Transform Your Future with Code</p>
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/50 flex items-center gap-2 mx-auto">
            Start Learning Today
            <ChevronRight />
          </button>
        </div>
      </header>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white shadow-cyan-400 drop-shadow-lg">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-cyan-400 shadow-lg shadow-cyan-400/20 hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <ul className="text-gray-400 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-cyan-400 text-black py-2 rounded-md font-bold hover:bg-cyan-300 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white shadow-cyan-400 drop-shadow-lg">
            Why Choose Codemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {features.map((feature, index) => (
              <div key={index} className="p-6 hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-4 shadow-cyan-400 drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white shadow-cyan-400 drop-shadow-lg">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of successful students who have transformed their careers with Codemos
          </p>
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/50 flex items-center gap-2 mx-auto">
            Enroll Now
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-10 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-white shadow-cyan-400 drop-shadow-lg">
            CODEMOS
          </h2>
          <div className="flex justify-center space-x-6 mb-6">
            {['About', 'Courses', 'Contact', 'Blog'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-gray-400">© 2024 Codemos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Codemos;