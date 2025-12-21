import { Edit, Trash2 } from "lucide-react";
import type { Quote } from "../types/QuoteTypes";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  function onDelete(_id: string): void {}

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-teal-100">
        <div className="bg-teal-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-white whitespace-nowrap">
            Qoute System
          </h2>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search Qoute..."
              className="w-full bg-teal-500 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-teal-500 placeholder-teal-500 text-sm"
            />
            <search className="absolute left-3 top-2.5 w-4 h-4 text-teal-400" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-teal-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider">
                  Show Quote
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal-100"></tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <div className="flex flex-col-2 justify-between items-start mb-4">
          <p className="text-gray-700 text-lg mb-4 italic">
            "To live is the rarest thing in the world. Most people exist, that
            is all"
          </p>
          <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
          <p className="text-gray-700 text-lg mb-4 italic">
            "To live is the rarest thing in the world. Most people exist, that
            is all"
          </p>
          <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
            {quote.category}
          </span>
          <div className="flex space-x-2">
            <button className="text-teal-600 hover:text-teal-800">
              <Edit className="w-4 h-4" />
            </button>
            <button className="text-red-600 hover:text-red-800">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
