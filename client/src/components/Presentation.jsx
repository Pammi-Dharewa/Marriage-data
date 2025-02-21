import React, { useState } from 'react';
import { Button, Form, Input, Checkbox, Select, Card, message } from 'antd';
import { axiosInstance } from '../api';

const Presentation = () => {
  // const [form] = Form.useForm();
  const [isGoldChecked, setIsGoldChecked] = useState(false);
  const [isSilverChecked, setIsSilverChecked] = useState(false);
  const [isAmountChecked, setIsAmountChecked] = useState(false);
  const [isObjChecked, setIsObjChecked] = useState(false)

  const onFinish = async (values) => {
    const formData = {
      ...values,
      gold: isGoldChecked ? values.gold : 0,
      silver: isSilverChecked ? values.silver : 0,
      amount: isAmountChecked ? values.amount : 0,
      objects: isObjChecked ? values.objects : 0,
    };
    console.log('Form submitted:', formData);
    // alert(`Form submitted successfully! ${JSON.stringify(formData)}`);
    try{
      const response = await axiosInstance.post('/createPre', formData)
    }catch(err){
      message.error(err.message)
    }

  };

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-12 flex justify-center items-center bg-gradient-to-b from-slate-950 to-slate-800">
      <div className="w-full p-6 bg-gray-500 text-white max-w-2xl rounded-md shadow-lg">
        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          {/* Personal Information */}
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}>
            <Input placeholder="Enter first name" />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}>
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter city' }]}>
            <Input placeholder="Enter city" />
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter phone number' }]}>
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item label="Address" name="address" rules={[{ required: false, message: 'Please enter address' }]}>
            <Input.TextArea placeholder="Enter address" rows={2} />
          </Form.Item>

          {/* Items Selection */}
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Gold Section */}
              
              <div>
                <Checkbox onChange={(e) => setIsGoldChecked(e.target.checked)}>Gold</Checkbox>
                {isGoldChecked && (
                  <Form.Item name="gold" rules={[{ required: true, message: 'Please enter gold amount' }]}>
                    <Input type="number" placeholder="Enter gold amount" />
                  </Form.Item>
                )}
              </div>

              {/* Silver Section */}
              <div>
                <Checkbox onChange={(e) => setIsSilverChecked(e.target.checked)}>Silver</Checkbox>
                {isSilverChecked && (
                  <Form.Item name="silver" rules={[{ required: true, message: 'Please enter silver amount' }]}>
                    <Input type="number" placeholder="Enter silver amount" />
                  </Form.Item>
                )}
              </div>

              {/* amount Section */}
              <div>
                <Checkbox onChange={(e) => setIsAmountChecked(e.target.checked)}>Amount</Checkbox>
                {isAmountChecked && (
                  <Form.Item name="amount" rules={[{ required: true, message: 'Please enter amount' }]}>
                    <Input type="number" placeholder="Enter amount" />
                  </Form.Item>
                )}
              </div>

              {/* object Section */}
              <div>
                <Checkbox onChange={(e) => setIsObjChecked(e.target.checked)}>Object</Checkbox>
                {isObjChecked && (
                  <Form.Item name="objects" rules={[{ required: true, message: 'Please enter object' }]}>
                    <Input type="string" placeholder="Enter object" />
                  </Form.Item>
                )}
              </div>


            </div>
          </Card>

          {/* Status Selection */}
          <Form.Item label="Status" name="typeOfPresentation" rules={[{ required: true, message: 'Please select status' }]}>
            <Select placeholder="Select status">
              <Select.Option value="PRESENTATION">Gifted</Select.Option>
              <Select.Option value="RECEIVING">Taken</Select.Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};



export default Presentation;
