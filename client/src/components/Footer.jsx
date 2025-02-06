import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bottom-0 h-35 py-6 bg-gray-900 text-white text-center">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm">&copy; {new Date().getFullYear()} Marriage Gift Tracker. All Rights Reserved.</p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
