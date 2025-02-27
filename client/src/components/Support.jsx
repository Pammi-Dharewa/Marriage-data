import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Support = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/blue-technical-background-1_78370-98.avif')] 
    flex flex-col items-center justify-center text-white text-center px-6 py-20">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Support Team</h2>
        <p className="text-lg sm:text-xl max-w-2xl">
        We’re always looking to improve! If you have any suggestions or improvements, we’d love to hear from you. Feel free to reach out to us.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ">
            <h3 className="text-xl font-semibold mb-3">Frontend Developer</h3>
            <div className='w-30 h-30 rounded-full overflow-hidden '>
              <img className='object-cover' src="/Picture1.jpg" alt="" />
            </div>
            <h2 className="text-lg mb-3 font-mono">Pammi Dharewa</h2>
            <p>Responsible for UI/UX & frontend development.</p>

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
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ">
            <h3 className="text-xl font-semibold mb-3">Backend Developer</h3>
            <div className='w-30 h-30 rounded-full overflow-hidden '>
              <img className='object-cover' src="/Picture2.jpg" alt="" />
            </div>
            <h2 className="text-lg mb-3 font-mono">Yogesh Joga</h2>
            <p>Handles HLD, APIs, Database, Security, and DevOps(Jenkins, Docker, Kubernetes, and AWS)</p>
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
