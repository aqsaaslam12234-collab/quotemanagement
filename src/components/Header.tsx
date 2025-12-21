import { BookOpen, Plus } from "lucide-react";

interface HeaderProps {
  onAddClick: () => void;
}


const Header = ({ onAddClick }: HeaderProps) => {
   
  return (
    <div>
        <header className="bg-teal-800 text-white p-4 w-full shadow-lg sticky top-0 z-50">
           <div  className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16"> 
                <div className="flex items-center space-x-2">
                                <BookOpen className="w-8 h-8 text-teal-400" />
                    <span className=" text-3xl font-bold ">Quote Management System</span>
                </div>
                  <button
            onClick={onAddClick}
            className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Quote</span>
          </button>
                
            </div>
          
          
           </div>
            </header>

        </div>
       
    
  )
}

export default Header
