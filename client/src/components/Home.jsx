import React,{useState} from "react";
import { Link } from "react-router-dom";
import { CaretDownFilled, DownCircleTwoTone } from '@ant-design/icons'

const Home = () => {

  const[openIndex, setIsopenIndex] = useState(false)


  const steps = [
    {
      icon: "📝",
      title: "Sign Up",
      description: "Enter your credentials and get the OTP.",
    },
    {
      icon: "🎁",
      title: "Track Gifts",
      description: "Add gifts and amount of your event.",
    },
    {
      icon: "📊",
      title: "Generate Reports",
      description: "Get instant reports on all contributions.",
    },
    {
      icon: "🎉",
      title: "Enjoy Your Event",
      description: "Focus on your special day while we handle the rest.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-20 bg-gray-950 flex items-center justify-between px-8 fixed z-50">
        {/* Left - Gift Track Name */}
        <div className="text-white text-2xl font-bold cursor-pointer">
          GiftTracker
        </div>

        {/* Right - Register Button */}
        <Link to="/register">
          <button className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 animate-pulse">
            Register
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-950">

        <div className="min-h-screen pt-24 sm:pt-15 border-t p-3 bg-gradient-to-b from-black to-gray-950 text-white flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          {/* Left - Text Content */}
          <div className="w-full sm:w-2/3 flex flex-col items-center sm:items-start justify-center px-4 gap-8 animate-fade-in">
            {/* Animated Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Effortless Gift Tracking Solutions
            </h1>

            {/* Animated Subtitle */}
            <p className="text-lg text-gray-300 max-w-2xl">
              Keep track of all the gifts received at your wedding or special event.
              Easily manage guest contributions and ensure everyone gets the appreciation they deserve.
            </p>

            {/* Animated Call to Action */}
            <Link to="/presentation">
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 animate-bounce-in">
                Get Started Now
              </button>
            </Link>
          </div>

          {/* Right - Image */}
          <div className="w-full pt-12 sm:pr-15 sm:pt-2 sm:w-1/2 flex justify-center sm:justify-end">
            <img
              src="Designer (1).jpeg"
              alt="Gift Tracking Illustration"
              className="rounded-full w-full max-w-md"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl px-4 mx-auto">
          <h3 className="text-3xl pb-5 font-semibold text-center text-gray-300 animate-fade-in">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 ">
            {/* Feature Cards */}
            {[
              {
                title: "Easy Tracking",
                description: "Keep a digital record of all gifts and contributors effortlessly.",
              },
              {
                title: "Stress-Free Events",
                description: "Enjoy your big day without worrying about tracking gifts manually.",
                color: "yellow"
              },
              {
                title: "Instant Reports",
                description: "No more missing names or duplicate records. Get a detailed report in one click.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg border-r border-b-3 bg-gray-900 border-gray-400 text-center transform hover:scale-105 transition duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className={`text-xl font-semibold text-white `}>{feature.title}</h4>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* works */}
        <div className="w-full max-w-6xl mx-auto mt-20 px-4 md:px-6 ">
          <h3 className="text-3xl font-semibold text-center text-gray-300 mb-16">
            How It Works
          </h3>

          <div className="relative flex right-[20%]">
            {/* Centered Timeline Line */}
            <div className="absolute left-1/2 w-[0.1rem] h-full bg-blue-800">
              {/* Glowing Animated Progress Bar */}
            </div>

            {/* Steps Container */}
            <div className="relative w-full space-y-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center group"
                >
                  {/* Icon Container - Left Side */}
                  <div className="flex-1 flex justify-end pr-8">
                    <div className="relative">
                      <div className="absolute  w-16 h-16 bg-blue-500/10 rounded-full animate-ping" />
                      <div className="absolute w-14 h-14 bg-blue-500/20 rounded-full animate-pulse" />
                      <div className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border border-blue-500/50 shadow-lg shadow-blue-500/20">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Container - Right Side */}
                  <div className="flex-1 pl-8">
                    <div className="w-full max-w-md group-hover:translate-x-2 transition-transform duration-300">
                      <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-300">
                        <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                          {step.title}
                        </h4>
                        <div className="h-px w-12 bg-blue-500/30 mb-3 group-hover:w-24 transition-all duration-300" />
                        <p className="text-gray-300 text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Number Indicator on Timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full border border-blue-500/50 text-blue-500 text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* FAQ Section */}
        <div className="w-full max-w-6xl mx-auto mt-16 px-4">
          <h3 className="text-3xl font-semibold text-center text-gray-300 animate-fade-in">
            Frequently Asked Questions
          </h3>
          <div className="mt-6 space-y-4">
            {[
              {
                question: "How do I get started?",
                answer: "Simply sign up, add your data, and start tracking gifts!",
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we use industry-standard encryption to protect your data.",
              },
              {
                question: "Can I export my data?",
                answer: "Yes, you can export your data as a CSV or PDF file.",
              },
            ].map((faq, index) => {
              const isOpen = openIndex === index;

              return (
              
              <div
                key={index}
                className="group p-6 bg-gray-800/40 cursor-pointer rounded-lg shadow-lg animate-fade-in-up"
              >
                <div className="flex justify-between" onClick={() => setIsopenIndex(isOpen ? null : index)}> 
                <div >
                  <h4 className="text-xl font-semibold text-white">{faq.question}</h4>
                  <p className={`text-gray-300 mt-2 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 
                    ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0" }
                      "md: group-hover:h-auto group-hover:opacity-100" `}
                  
                  >{faq.answer}</p>
                </div>
                <DownCircleTwoTone className={`text-2xl ${isOpen ? "rotate-180" : "rotate-0" }`}/>     
                 </div>
               
              </div>
            )})}
          </div>
        </div>



        <div className="w-full bg-white mt-16 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 animate-fade-in">
              Ready to Simplify Your Event?
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              Sign up today and start tracking gifts effortlessly.
            </p>
            <Link to="/register">
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 animate-bounce-in">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-950 text-white py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4">About Gift Track</h4>
              <p className="text-gray-300">
                Gift Track is your ultimate solution for managing gifts and contributions during special events.
                Simplify your life and focus on what truly matters.
              </p>
            </div>



            {/* Contact Info */}
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="text-gray-300 mb-2">Email: support@gifttrack.com</p>
              <p className="text-gray-300 mb-2">Phone: xxxxxxxxx</p>
              <p className="text-gray-300">Address: India</p>
            </div>

            {/* Social Media */}

          </div>

          {/* Copyright */}
          <div className="border-t pb-2 border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} GiftTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;