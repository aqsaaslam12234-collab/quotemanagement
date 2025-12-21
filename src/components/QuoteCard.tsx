import { Edit, Trash2 } from "lucide-react";
import type { Quote } from "../types/QuoteTypes";


interface QuoteCardProps {
  quote: Quote;
  onEdit: (quote: Quote) => void;
  onDelete: (id: string) => void;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  function onDelete(_id: string): void {
    // throw new Error('Function not implemented.');
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col-2 justify-between items-start mb-4">
         <p className="text-gray-700 text-lg mb-4 italic">"To live is the rarest thing in the world. Most people exist, that is all"</p>
      <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
      <p className="text-gray-700 text-lg mb-4 italic">"To live is the rarest thing in the world. Most people exist, that is all"</p>
      <p className="text-gray-900 font-semibold">— Oscar Wilde's</p>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
          {quote.category}
        </span>
        <div className="flex space-x-2">
          <button
            // onClick={() => onEdit(quote)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => quote._id && onDelete(quote._id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default QuoteCard;
