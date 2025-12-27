import { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";

const initialQuotes = [
  {
    id: 1,
    text: "A bird doesn't sing because it has an answer; it sings because it has a song",
    author: "Maya Angelou's",
    category: "Leadership",
    dateAdded: "2024-01-15",
  },
  {
    id: 2,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
    category: "Motivation",
    dateAdded: "2024-01-14",
  },
  {
    id: 3,
    text: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
    category: "Life",
    dateAdded: "2024-01-13",
  },
  {
    id: 4,
    text: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
    category: "Work",
    dateAdded: "2024-01-12",
  },
  {
    id: 5,
    text: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
    category: "Leadership",
    dateAdded: "2024-01-11",
  },
];

export default function QuotesTable() {
  const [quotes, setQuotes] = useState(initialQuotes);

  const handleEdit = (id: number) => {
    console.log("Edit quote:", id);
  };

  const handleDelete = (id: number) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return (
    <div className="h-140 bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          All Quotes
        </h1>

        <div className="bg-white rounded-lg shadow overflow-hidden top-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600 uppercase">
                  Quote
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600 uppercase">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600 uppercase">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600 uppercase">
                  Date Added
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quotes.map((quote) => (
                <tr
                  key={quote.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700 ">"{quote.text}"</td>
                  <td className="px-6 py-4 text-gray-700">- {quote.author}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {quote.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{quote.dateAdded}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(quote.id)}
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(quote.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
