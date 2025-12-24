
import { useState, useEffect } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }
  ];

  // useEffect to load initial quote
  useEffect(() => {
    loadRandomQuote();
  }, []);

  // useEffect to handle fade-in animation
  useEffect(() => {
    if (!loading) {
      setFadeIn(false);
      const timer = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(timer);
    }
  }, [quote, loading]);

  const loadRandomQuote = () => {
    setLoading(true);
    setFadeIn(false);
    
    // Simulate API delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].text);
      setAuthor(quotes[randomIndex].author);
      setLoading(false);
    }, 500);
  };

  return (
    <div className=" flex ">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-80 flex">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Daily Inspiration
        </h1>
        
        <div className="min-h-48 flex flex-col justify-center">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
          ) : (
            <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{quote}"
              </p>
              <p className="text-xl text-teal-600 font-semibold text-right">
                — {author}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={loadRandomQuote}
          disabled={loading}
          className="mt-8 w-full bg-gradient-to-r from-teal-700 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-500 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {loading ? 'Loading...' : 'New Quote'}
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
        </div>
      </div>
    </div>
  );
}

























































































// import { Edit, Trash2 } from "lucide-react";
// import type { Quote } from "../types/QuoteTypes";

// interface QuoteCardProps {
//   quote: Quote;
// }

// const QuoteCard = ({ quote }: QuoteCardProps) => {
  

//   return (
//     <div>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden border border-teal-100">
//         <div className="bg-teal-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           <h2 className="text-xl font-bold text-white whitespace-nowrap">
//             Qoute System
//           </h2>
//           <div className="relative w-full md:w-64">
//             <input
//               type="text"
//               placeholder="Search Qoute..."
//               className="w-full bg-teal-500 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-teal-500 placeholder-teal-500 text-sm"
//             />
//             <search className="absolute left-3 top-2.5 w-4 h-4 text-teal-400" />
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-teal-50 border-b">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider">
//                   Show Quote
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-teal-100"></tbody>
//           </table>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
//         <div className="flex flex-col-2 justify-between items-start mb-4">
//           <p className="text-gray-700 text-lg mb-4 italic">
//             "To live is the rarest thing in the world. Most people exist, that
//             is all"
//           </p>
//           <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
//           <p className="text-gray-700 text-lg mb-4 italic">
//             "To live is the rarest thing in the world. Most people exist, that
//             is all"
//           </p>
//           <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
//           <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
//             {quote.category}
//           </span>
//           <div className="flex space-x-2">
//             <button className="text-teal-600 hover:text-teal-800">
//               <Edit className="w-4 h-4" />
//             </button>
//             <button className="text-red-600 hover:text-red-800">
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteCard;
