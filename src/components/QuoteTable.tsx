import { Edit, Trash2 } from "lucide-react"

const Quotetable = () => {
    //   const [searchTerm, setSearchTerm] = useState('');
  return (
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  




      <div className="px-6 py-4 bg-gray-50 border-b border-teal-200">
        <h3 className="text-xl font-bold text-teal-900 ">All Quotes</h3>
      </div>
         <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider">
                Quote
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider">
                Date Added
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
           <tbody className="bg-white divide-y divide-gray-200">
          
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-md">
                   "A bird doesn't sing because it has an answer; it sings because it has a song"
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">- Maya Angelou's</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-teal-800">
                 LeaderShip
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                  </div>
                </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    
                    className="text-teal-600 hover:text-teal-900 mr-4"
                  >
                    <Edit className="w-4 h-4 inline" />
                  </button>
                  <button
  
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            
          </tbody>


</table>
      </div>







     
      </div>

 )
}

export default Quotetable
          
    














 
