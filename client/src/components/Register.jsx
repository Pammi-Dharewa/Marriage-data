import React from 'react';
import { Button, message, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await fetch('https://333f-117-217-222-183.ngrok-free.app/api/auth/v2/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (response.ok) {
        message.success("Registered successfully");
        navigate('/get-otp', { state: { email: values.email } });
      } else {
        message.error(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center  text-white bg-gradient-to-r from-slate-950 to-teal-950  md:p-5">
      <div className="container mx-auto w-250 h-auto md:h-[600px] max-w-6xl md:rounded-2xl flex flex-col md:flex-row shadow-lg ">

        {/* Left - Image and Text */}
        <div className="w-full md:w-1/2 min-h-[400px] md:h-full flex flex-col md:rounded-l-2xl bg-[#51a0b1]">
          <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
            <div className="w-full flex flex-col items-center justify-center gap-6">
              <img 
                src="/media.jpg" 
                alt="Marriage Celebration" 
                className="w-full max-w-[300px] h-auto object-contain"
              />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Welcome to <span className="text-teal-950">Our Platform</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-300 text-center">
                Join us to explore amazing features.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Registration Form */}
        <div className="w-full md:w-1/2 min-h-[400px] md:h-full flex md:rounded-r-2xl bg-white/10 backdrop-blur-3xl">
          <div className="flex-1 flex items-center justify-center p-8 md:p-12">
            <main className="w-full max-w-md">
              <h2 className="text-xl md:text-2xl font-bold mb-8">Register</h2>
              <Form 
                layout="vertical" 
                onFinish={onFinish} 
                className="w-full flex flex-col gap-4"
              >
                <Form.Item
                  label={<span className="text-white">Name</span>}
                  name="userName"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 rounded-md text-black"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-white">Email</span>}
                  name="email"
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 rounded-md text-black"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-white">Password</span>}
                  name="password"
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-12 rounded-md text-black"
                  />
                </Form.Item>

                <Form.Item className="mb-0 mt-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-12 text-base font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Get OTP
                  </Button>
                </Form.Item>
              </Form>
            </main>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes borderAnimation {
            0% { border-color: #00f2ff; }
            50% { border-color: teal; }
            100% { border-color: white; }
          }
          .animate-border-animation {
            animation: borderAnimation 3s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Register;


// import React, { useState } from 'react';
// import { Button, message, Input, Form } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { Sparkles, Star, GraduationCap } from 'lucide-react';

// const Register = () => {
//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);

//   const onFinish = async (values) => {
//     try {
//       const response = await fetch('https://fec1-91-207-174-11.ngrok-free.app/public/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         message.success("Registered successfully");
//         navigate('/get-otp', { state: { email: values.email } });
//       } else {
//         message.error(data.message);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-4 overflow-hidden">
//       {/* Animated background shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-96 h-96 -top-48 -left-48 bg-gray-500/10 rounded-full blur-3xl animate-blob" />
//         <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       <div 
//         className="container relative mx-auto max-w-6xl h-[800px] rounded-2xl flex flex-col md:flex-row"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Glass effect wrapper */}
//         <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
        
//         {/* Left Section */}
//         <div className="relative w-full md:w-1/2 h-full p-12 flex flex-col justify-center items-center overflow-hidden">
//           <div className="relative w-full max-w-md flex flex-col items-center gap-8 z-10">
//             {/* Animated logo/icon */}
//             <div className="relative w-40 h-40 flex items-center justify-center">
//               <div className="absolute inset-1 bg-gradient-to-r from-gray-400 to-gray-800 rounded-full animate-spin-slow opacity-80" />
//               <div className="relative bg-black/80 p-6 rounded-full backdrop-blur-sm">
//                 <Sparkles className="w-16 h-16 text-white" />
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//               Join Our Platform
//             </h1>
            
//             <p className="text-lg text-center text-gray-400 leading-relaxed">
//               Experience the next generation of connectivity and collaboration
//             </p>

//             <div className="flex gap-4 mt-4">
//               <Star className="w-6 h-6 text-gray-400" />
//               <GraduationCap className="w-6 h-6 text-white" />
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Form */}
//         <div className="relative w-full md:w-1/2 h-full p-12 flex items-center justify-center">
//           <div className="w-full max-w-md space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                 Create Account
//               </h2>
//               <p className="text-gray-400">Begin your journey with us</p>
//             </div>

//             <Form 
//               layout="vertical" 
//               onFinish={onFinish} 
//               className="space-y-6"
//             >
//               <Form.Item
//                 label={<span className="text-gray-400">Full Name</span>}
//                 name="userName"
//                 rules={[{ required: true, message: "Name is required" }]}
//               >
//                 <Input
//                   className="h-12 bg-black/30 border-gray-700 rounded-lg text-white placeholder:text-gray-600
//                             focus:bg-black/50 transition-all duration-300"
//                   placeholder="Enter your name"
//                 />
//               </Form.Item>

//               <Form.Item
//                 label={<span className="text-gray-400">Email Address</span>}
//                 name="email"
//                 rules={[{ required: true, message: "Email is required" }]}
//               >
//                 <Input
//                   className="h-12 bg-black/30 border-gray-700 rounded-lg text-white placeholder:text-gray-600
//                             focus:bg-black/50 transition-all duration-300"
//                   placeholder="Enter your email"
//                   type="email"
//                 />
//               </Form.Item>

//               <Form.Item
//                 label={<span className="text-gray-400">Password</span>}
//                 name="password"
//                 rules={[{ required: true, message: "Password is required" }]}
//               >
//                 <Input
//                   type="password"
//                   className="h-12 bg-black/30 border-gray-700 rounded-lg text-white placeholder:text-gray-600
//                             focus:bg-black/50 transition-all duration-300"
//                   placeholder="Create a password"
//                 />
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="w-full h-12 bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 rounded-lg
//                            hover:from-gray-800 hover:to-black transition-all duration-300
//                            text-base font-semibold uppercase tracking-wider"
//                 >
//                   Get Started
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .animate-spin-slow {
//             animation: spin 5s linear infinite;
//           }
          
//           /* Custom input styles */
//           .ant-input {
//             background: !important;
//             border: 1px solid rgb(55, 65, 81) !important;
//           }

//           .ant-input:focus {
//             background: rgba(0, 0, 0, 0.5) !important;
//             border-color: rgb(75, 85, 99) !important;
//             box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1) !important;
//           }
            
//           .ant-form-item-explain-error {
//             color: #ff4d4f !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Register;


// import React from 'react';
// import { Button, message, Input, Form } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import GlareCard from './GlareCard';

// const Register = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     try {
//       const response = await fetch('https://fec1-91-207-174-11.ngrok-free.app/public/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         message.success("Registered successfully");
//         navigate('/get-otp', { state: { email: values.email } });
//       } else {
//         message.error(data.message);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 to-blue-950">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
//           {/* Welcome Section with GlareCard */}
//           <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
//             <div className="max-w-md w-full">
//               <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-right">
//                 Welcome to <span className="text-blue-400">Our Platform</span>
//               </h1>
//               <p className="text-lg text-gray-300 mb-8 text-center lg:text-right">
//                 Join us to explore amazing features and connect with the community.
//               </p>
//               {/* <GlareCard /> */}
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
//             <main className="w-full max-w-lg mx-4 p-6 sm:p-10 md:p-14 lg:p-20 bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-2xl text-center">
//               <h2 className="text-2xl font-bold mb-4">Register</h2>

//               <section className="w-full">
//                 <Form layout="vertical" onFinish={onFinish} className="w-full">
//                   <Form.Item
//                     label={<span style={{ color: 'white' }}>Name</span>}
//                     name="userName"
//                     rules={[{ required: true, message: "Name is required" }]}
//                     className="mb-4"
//                   >
//                     <Input
//                       id="name"
//                       type="text"
//                       placeholder="Enter your name"
//                       className="rounded-md p-2 text-black"
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     label={<span style={{ color: 'white' }}>Email</span>}
//                     name="email"
//                     rules={[{ required: true, message: "Email is required" }]}
//                     className="mb-4"
//                   >
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       className="rounded-md p-2 text-black"
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     label={<span style={{ color: 'white' }}>Password</span>}
//                     name="password"
//                     rules={[{ required: true, message: "Password is required" }]}
//                     className="mb-4"
//                   >
//                     <Input
//                       id="password"
//                       type="password"
//                       placeholder="Enter your password"
//                       className="rounded-md p-2 text-black"
//                     />
//                   </Form.Item>


//                   <Form.Item>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       className="w-full py-3 mt-5 text-base sm:text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out"
//                     >
//                       Get OTP
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </section>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


