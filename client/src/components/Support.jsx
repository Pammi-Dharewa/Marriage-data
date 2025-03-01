import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import back arrow icon

const Support = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/blue-technical-background-1_78370-98.avif')] flex flex-col items-center justify-center
     text-white text-center px-6 py-20">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full 
      h-full bg-black/50"></div>

      {/* Back Arrow Button */}
      <Link
        to="/dashboard"
        className="absolute top-6 left-6 z-20 text-white hover:text-blue-500 transition duration-300"
      >
        <ArrowBackIcon className="text-3xl" />
      </Link>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Support Team</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          We’re always looking to improve! If you have any suggestions or improvements, we’d love to hear from you. Feel free to reach out to us.
        </p>

        {/* Developer Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Frontend Developer */}
          <div className="bg-white/90 text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Frontend Developer</h3>
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img className="object-cover" src="/Picture1.jpg" alt="Frontend Developer" />
            </div>
            <h2 className="text-lg mb-3 font-mono">Pammi Dharewa</h2>
            <p className="text-center">Responsible for UI/UX & frontend development.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/pammi-Dharewa/" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/pammi-dharewa-08008a1a8/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="mailto:pammidharewa31@gmail.com">
                <EmailIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="tel:7903930098">
                <PhoneIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="bg-white/90 text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Backend Developer</h3>
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img className="object-cover w-full h-full" src="/Picture2.jpg" alt="Backend Developer" />
            </div>
            <h2 className="text-lg mb-3 font-mono">Yogesh Joga</h2>
            <p className="text-center">Handles HLD, APIs, Database, Security, and DevOps (Jenkins, Docker, Kubernetes, and AWS)</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/yogeshjoga" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/yogeshjoga/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="mailto:jogayogeshedu@gmail.com">
                <EmailIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
              <a href="tel:9110566354">
                <PhoneIcon className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;