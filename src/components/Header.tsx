


const Header = () => {
   
  return (
    <div>
        <header className="bg-teal-800 text-white p-4 w-full shadow-lg sticky top-0 z-50">
           <div  className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16"> 
                <div className="flex items-center space-x-2">
                    
                    <span className="text-xl font-bold">Quote Management System</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-teal-400 transition font-bold">Home</a>
                    <a href="#qoutes" className="hover:text-teal-400 transition font-bold">Quotes</a>
                    <a href="#settings" className="hover:text-teal-400 transition font-bold">Settings</a>

                </nav>
                
            </div>
          
          
           </div>
            </header>

        </div>
       
    
  )
}

export default Header
