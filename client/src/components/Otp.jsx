import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';


const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpref = useRef([]);

  const navigate = useNavigate();
  const location = useLocation();
  const { email = "pammi" } = location.state || {};
  console.log(email);

  const onFinishOtp = async () => {
    try {
      const response = await fetch("https://333f-117-217-222-183.ngrok-free.app/public/otp", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Login Successful!");
        navigate('/dashboard');
      } else {
        message.error("Invalid OTP. Try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (value, index) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 5) {
      otpref.current[index + 1].focus();
    }
  };

  const handleKey = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpref.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 5) {
      otpref.current[index + 1].focus();
    }
  };

  const [time, setTime] = useState(10);
  

  useEffect(()=>{

    if(time <= 0){
      return
    }
  
  const timer = setInterval(() => {
    setTime((prev)=> prev-1)
  }, 1000);

  return ()=> clearInterval(timer)

  },[time])

  console.log(time)



  return (
    <div className="w-full min-h-screen px-4 flex justify-center items-center bg-gradient-to-b from-slate-950 to-blue-950">
      <main className="w-full max-w-lg gap-1 p-6 sm:p-8 md:p-10 lg:p-12 sm:bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-2xl text-center flex flex-col items-center justify-center">

        <ShieldCheck className=' text-green-400 size-9 sm:size-11 mb-6' ></ShieldCheck>
        <p className="text-base sm:text-md mb-2 font-mono">
          Enter the OTP sent to your mail:
          <span className=' text-slate-400 '> {email} </span>
        </p>

        <div className="flex w-full items-center justify-center gap-2 sm:gap-3 p-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              className="p-3 text-center text-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14  bg-white/20 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleKey(e, index)}
              ref={(reference) => (otpref.current[index] = reference)}
            />
          ))}
        </div>

        <Form onFinish={onFinishOtp} className="w-full">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-2 text-base sm:text-lg font-semibold"
            >
              Verify OTP
            </Button>
            <div className='text-gray-300 font-light text-sm mt-2'>
              {time > 0 ? `Time remaining: 00:${time < 10 ? `0${time}` : time}` : "OTP expired"}
            </div>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default Otp;
