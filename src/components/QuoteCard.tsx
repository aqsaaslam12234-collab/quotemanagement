import { useState } from "react";

const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
];

export default function DailyInspirationHero() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const getNewQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="h-120 bg-gray-50 flex items-center justify-center p-6 mt-0">
      <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily</h1>
          <h2 className="text-4xl font-bold text-teal-600 mb-8">Inspiration</h2>

          <blockquote className="text-xl text-gray-600 italic mb-6 flex-grow">
            "{quotes[currentQuote].text}"
          </blockquote>

          <p className="text-lg text-teal-600 font-medium mb-8">
            — {quotes[currentQuote].author}
          </p>

          
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily</h1>
          <h2 className="text-4xl font-bold text-teal-600 mb-8">Inspiration</h2>

          <blockquote className="text-xl text-gray-600 italic mb-6 flex-grow">
            "{quotes[(currentQuote + 1) % quotes.length].text}"
          </blockquote>

          <p className="text-lg text-teal-600 font-medium mb-8">
            — {quotes[(currentQuote + 1) % quotes.length].author}
          </p>

          
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily</h1>
          <h2 className="text-4xl font-bold text-teal-600 mb-8">Inspiration</h2>

          <blockquote className="text-xl text-gray-600 italic mb-6 flex-grow">
            "{quotes[(currentQuote + 2) % quotes.length].text}"
          </blockquote>

          <p className="text-lg text-teal-600 font-medium mb-8">
            — {quotes[(currentQuote + 2) % quotes.length].author}
          </p>

          
        </div>
      </div>
    </div>
  );
}
