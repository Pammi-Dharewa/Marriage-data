import React, { useRef, useState } from 'react';
import { Form, Button, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpref = useRef([]);

  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  console.log(email);

  const onFinishOtp = async () => {
    try {
      const response = await fetch("https://fec1-91-207-174-11.ngrok-free.app/public/otp", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email }),
      });
      
      const data = await response.json();

      if (response.ok) {
        message.success("Login Successful!");
        navigate('/');
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

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 to-blue-950">
      <main className="w-full max-w-lg mx-4 p-6 sm:p-10 md:p-14 lg:p-20 bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-2xl text-center flex flex-col items-center justify-center">
        <p className="text-base sm:text-lg mb-2 font-mono">
          {`Enter the OTP sent to your mail: ${email}`}
        </p>

        <div className="flex w-full items-center justify-center gap-2 sm:gap-3 p-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              className="p-3 object-contain text-center text-lg w-8 h-auto sm:w-10 sm:h-10 bg-white/20 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
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
              className="w-full mt-5 text-base sm:text-lg font-semibold bg-blue-500 hover:bg-blue-600"
            >
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default Otp;
