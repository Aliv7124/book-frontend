import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white max-w-3xl p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">About Our Bookstore</h2>
        <p className="text-lg mb-4">
          Welcome to our Bookstore – your one-stop destination for the best handpicked books across genres.
          Whether you’re a student, a professional, or just someone who loves to read, we’ve got something for you.
        </p>
        <p className="text-lg mb-4">
          We believe books have the power to change lives. That’s why we bring only the most recommended,
          bestselling, and timeless reads to your fingertips – at affordable prices.
        </p>
        <p className="text-lg mb-4">
          With a smooth and secure shopping experience, fast delivery, and a growing collection of books,
          we are here to help you discover, learn, and grow.
        </p>
        <p className="text-lg font-semibold text-blue-600">
          Thank you for choosing our bookstore. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;

