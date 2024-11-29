import React from 'react';

const ParentFeedbackSection = () => {
  const feedbacks = [
    {
      name: 'Emily Johnson',
      rating: 5,
      comment: 'An incredible learning experience for my child. The personalized attention is remarkable! The instructors truly understand how to engage and inspire young learners.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Rodriguez',
      rating: 4,
      comment: 'Great program that has shown significant improvement in my son\'s skills. The curriculum is well-structured and the teachers are passionate about education.',
      date: '1 month ago',
    },
    {
      name: 'Sarah Thompson',
      rating: 5,
      comment: 'Absolutely transformative! My daughter\'s confidence has skyrocketed since joining the program. The approach to learning is both fun and educational.',
      date: '3 weeks ago',
    },
    {
      name: 'David Kim',
      rating: 5,
      comment: 'I\'m impressed by the comprehensive learning approach. The instructors go above and beyond to ensure each student receives individualized attention.',
      date: '2 months ago',
    },
    {
      name: 'Rachel Lee',
      rating: 4,
      comment: 'A fantastic educational experience. The interactive classes and innovative teaching methods have made learning exciting for my child.',
      date: '1 month ago',
    },
    {
      name: 'Jason Wong',
      rating: 5,
      comment: 'The best decision we made for our child\'s education. The program not only teaches academic skills but also builds character and confidence.',
      date: '6 weeks ago',
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-8 lg:px-24 max-w-full mx-auto rounded-lg shadow-2xl">
      <h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Parent Feedback
      </h2>

      {/* Existing Feedbacks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl text-white">{feedback.name}</h3>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${
                      feedback.rating >= star
                        ? 'text-yellow-400'
                        : 'text-gray-500'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-base leading-relaxed">
              {feedback.comment}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{feedback.date}</span>
              <div className="flex items-center space-x-2">
                <button className="hover:bg-gray-800 p-1 rounded text-xl transition-colors">
                  👍
                </button>
                <button className="hover:bg-gray-800 p-1 rounded text-xl transition-colors">
                  👎
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentFeedbackSection;