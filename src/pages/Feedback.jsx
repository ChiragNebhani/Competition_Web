import React, { useState } from 'react';

const ParentFeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Emily Johnson',
      rating: 5,
      comment: 'An incredible learning experience for my child. The personalized attention is remarkable!',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Rodriguez',
      rating: 4,
      comment: 'Great program, my son has shown significant improvement in his skills.',
      date: '1 month ago',
    },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (rating) => {
    setNewFeedback((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.name && newFeedback.comment && newFeedback.rating > 0) {
      setFeedbacks([
        {
          ...newFeedback,
          date: 'Just now',
        },
        ...feedbacks,
      ]);
      setNewFeedback({ name: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className="bg-black text-white p-8 max-w-2xl mx-auto rounded-lg shadow-2xl">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Parent Feedback
      </h2>

      {/* Feedback Submission Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-900 p-6 rounded-lg">
        <input
          type="text"
          placeholder="Your Name"
          value={newFeedback.name}
          onChange={(e) =>
            setNewFeedback((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
        />

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              className={`mx-1 text-2xl ${
                newFeedback.rating >= star ? 'text-yellow-400' : 'text-gray-500'
              }`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Your Feedback"
          value={newFeedback.comment}
          onChange={(e) =>
            setNewFeedback((prev) => ({ ...prev, comment: e.target.value }))
          }
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded h-24"
        />

        <button
          type="submit"
          className="w-full p-3 rounded"
          style={{
            backgroundColor: 'rgb(192, 255, 20)',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          Submit Feedback
        </button>
      </form>

      {/* Existing Feedbacks */}
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-gray-900 p-5 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">{feedback.name}</h3>
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
            <p className="text-gray-300 mb-2">{feedback.comment}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{feedback.date}</span>
              <div className="flex items-center space-x-2">
                <button className="hover:bg-gray-800 p-1 rounded text-xl">
                  👍
                </button>
                <button className="hover:bg-gray-800 p-1 rounded text-xl">
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
