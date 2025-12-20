
const Quotetable = () => {
    //   const [searchTerm, setSearchTerm] = useState('');
  return (

     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-teal-100">
       <div className="bg-teal-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
           <h2 className="text-xl font-bold text-white whitespace-nowrap">Qoute System</h2>
       <div className="relative w-full md:w-64">
          <input type="text" placeholder="Search Qoute..." className="w-full bg-teal-500 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-teal-500 placeholder-teal-500 text-sm"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
                />
         <search className="absolute left-3 top-2.5 w-4 h-4 text-teal-400" />
           </div>
         </div>
        <div className="overflow-x-auto">
             <table className="w-full">
               <thead className="bg-teal-50 border-b">
                   <tr>
                         <th className="px-6 py-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider">Show Qoute</th>
                         <th className="px-6 py-4 text-left text-xs font-semibold text-teal-500 uppercase tracking-wider hidden lg:table-cell">More Details</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-teal-100">

                 </tbody>
         </table>

         </div>
      
      </div> 

 )
}

export default Quotetable
          
    














 
