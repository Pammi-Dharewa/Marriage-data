import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import {Button, Form, Input, message} from 'antd'

const Login = () => {

  const navigate = useNavigate();

  const onFinish = async (values)=>{
    try{
      const response = await fetch("" ,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
      })

      const data = await response.json();
      if(data.success){
        message.success("OTP sent to your email");
        navigate('/get-otp')
       
      }else{
        message.error(data.message)
      }
    }catch(error){
      console.log(error)
    }
  }



  return (
    <main className=' bg-gray-100 p-4'>
      <h1>Login </h1>

      <section>
       

        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' htmlFor='email' name={'email'}
          rules={[{
            required: true, message: "Please enter valid Email"
          }]}>

            <Input id='email' name='email' type='email' placeholder='Enter your email'>
            </Input>
          </Form.Item>

          <Form.Item label='Password' htmlFor='password' name={'password'}
          rules={[{
            required: true, message: "Please enter valid password"
          }]}>

            <Input id='password' type='password' name='password' placeholder='Enter your password'></Input>
          </Form.Item>

          <Form.Item>
            <Button type='primary' block>Login</Button>
          </Form.Item>
        </Form>
      

  
           <div>
           <p>
             New user ? <Link to={'/register'}>Register Here</Link>
           </p>
         </div> 
      
       
      </section>
    </main>
  )
}


export default Login
