import React, { useState } from 'react';
import { Button, Form, Input, Checkbox, Select, Card } from 'antd';

const Presentation = () => {
  // const [form] = Form.useForm();
  const [isGoldChecked, setIsGoldChecked] = useState(false);
  const [isSilverChecked, setIsSilverChecked] = useState(false);
  const [isAmountChecked, setIsAmountChecked] = useState(false);
  const [isObjChecked, setIsObjChecked] = useState(false)

  const onFinish = (values) => {
    const formData = {
      ...values,
      goldAmount: isGoldChecked ? values.goldAmount : 0,
      silverAmount: isSilverChecked ? values.silverAmount : 0,
      amount: isAmountChecked ? values.amount : 0,
    };
    console.log('Form submitted:', formData);
    alert(`Form submitted successfully! ${JSON.stringify(formData)}`);
    const response = fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
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
                  <Form.Item name="goldAmount" rules={[{ required: true, message: 'Please enter gold amount' }]}>
                    <Input type="number" placeholder="Enter gold amount" />
                  </Form.Item>
                )}
              </div>

              {/* Silver Section */}
              <div>
                <Checkbox onChange={(e) => setIsSilverChecked(e.target.checked)}>Silver</Checkbox>
                {isSilverChecked && (
                  <Form.Item name="silverAmount" rules={[{ required: true, message: 'Please enter silver amount' }]}>
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
                  <Form.Item name="object" rules={[{ required: true, message: 'Please enter object' }]}>
                    <Input type="string" placeholder="Enter object" />
                  </Form.Item>
                )}
              </div>


            </div>
          </Card>

          {/* Status Selection */}
          <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status' }]}>
            <Select placeholder="Select status">
              <Select.Option value="gifted">Gifted</Select.Option>
              <Select.Option value="taken">Taken</Select.Option>
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
