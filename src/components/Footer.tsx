



const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white text-sm">
            Terms
          </a>
          <a href="#" className="hover:text-white text-sm">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
