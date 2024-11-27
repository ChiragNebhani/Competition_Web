import React from 'react';

const PostersSection = () => {
  return (
    <div className="bg-black text-white p-8 lg:px-24 max-w-full mx-auto rounded-lg shadow-2xl mt-16">
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Courses We Offer
      </h2>

      {/* Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Poster 1 */}
        <div className="bg-gray-900 p-6 rounded-lg flex justify-center items-center">
          <img
            src="/src/assets/cards/1.svg"
            alt="Course 1"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Poster 2 */}
        <div className="bg-gray-900 p-6 rounded-lg flex justify-center items-center">
          <img
            src="/src/assets/cards/2.svg"
            alt="Course 2"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Poster 3 */}
        <div className="bg-gray-900 p-6 rounded-lg flex justify-center items-center">
          <img
            src="/src/assets/cards/3.svg"
            alt="Course 3"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PostersSection;
