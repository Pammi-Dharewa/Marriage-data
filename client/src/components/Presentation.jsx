import React, { useState } from 'react';
import { Button, Form, Input, Checkbox, Select, Card, message, ConfigProvider } from 'antd';
import { axiosInstance } from '../api';

const Presentation = () => {
  const [isGoldChecked, setIsGoldChecked] = useState(false);
  const [isSilverChecked, setIsSilverChecked] = useState(false);
  const [isAmountChecked, setIsAmountChecked] = useState(false);
  const [isObjChecked, setIsObjChecked] = useState(false);

  const onFinish = async (values) => {
    const formData = {
      ...values,
      gold: isGoldChecked ? values.gold : 0,
      silver: isSilverChecked ? values.silver : 0,
      amount: isAmountChecked ? values.amount : 0,
      objects: isObjChecked ? values.objects : 0,
    };
    console.log('Form submitted:', formData);
    try {
      const response = await axiosInstance.post('/formapi', formData);
      message.success('Form submitted successfully!');
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6', // Tailwind's blue-500
          colorBgContainer: 'rgba(56, 65, 81, 0.3)', // Translucent gray-700
          colorBorder: 'rgba(75, 85, 99, 0.3)', // Translucent gray-600
          colorText: '#ffffff', // White text
          borderRadius: 8, // Rounded corners
        },
      }}
    >
      <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-12 flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="w-full p-6 bg-gray-800/30 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700/30 max-w-[60rem]">
          <Form layout="vertical" onFinish={onFinish} className="space-y-4">
            {/* Personal Information */}
            <Form.Item
              label={<span className="text-white">First Name</span>}
              name="firstName"
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input
                placeholder="Enter first name"
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Last Name</span>}
              name="lastName"
              rules={[{ required: true, message: 'Please enter last name' }]}
            >
              <Input
                placeholder="Enter last name"
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">City</span>}
              name="city"
              rules={[{ required: true, message: 'Please enter city' }]}
            >
              <Input
                placeholder="Enter city"
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Phone</span>}
              name="phone"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input
                placeholder="Enter phone number"
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Address</span>}
              name="address"
              rules={[{ required: false, message: 'Please enter address' }]}
            >
              <Input.TextArea
                placeholder="Enter address"
                rows={2}
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
              />
            </Form.Item>

            {/* Items Selection */}
            <Card className="!bg-gray-700/20 !backdrop-blur-sm !border !border-gray-600/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Gold Section */}
                <div>
                  <Checkbox
                    onChange={(e) => setIsGoldChecked(e.target.checked)}
                    className="!text-white"
                  >
                    Gold
                  </Checkbox>
                  {isGoldChecked && (
                    <Form.Item
                      name="gold"
                      rules={[{ required: true, message: 'Please enter gold amount' }]}
                    >
                      <Input
                        type="number"
                        placeholder="Enter gold amount"
                        className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
                      />
                    </Form.Item>
                  )}
                </div>

                {/* Silver Section */}
                <div>
                  <Checkbox
                    onChange={(e) => setIsSilverChecked(e.target.checked)}
                    className="!text-white"
                  >
                    Silver
                  </Checkbox>
                  {isSilverChecked && (
                    <Form.Item
                      name="silver"
                      rules={[{ required: true, message: 'Please enter silver amount' }]}
                    >
                      <Input
                        type="number"
                        placeholder="Enter silver amount"
                        className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
                      />
                    </Form.Item>
                  )}
                </div>

                {/* Amount Section */}
                <div>
                  <Checkbox
                    onChange={(e) => setIsAmountChecked(e.target.checked)}
                    className="!text-white"
                  >
                    Amount
                  </Checkbox>
                  {isAmountChecked && (
                    <Form.Item
                      name="amount"
                      rules={[{ required: true, message: 'Please enter amount' }]}
                    >
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
                      />
                    </Form.Item>
                  )}
                </div>

                {/* Object Section */}
                <div>
                  <Checkbox
                    onChange={(e) => setIsObjChecked(e.target.checked)}
                    className="!text-white"
                  >
                    Object
                  </Checkbox>
                  {isObjChecked && (
                    <Form.Item
                      name="objects"
                      rules={[{ required: true, message: 'Please enter object' }]}
                    >
                      <Input
                        type="string"
                        placeholder="Enter object"
                        className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
                      />
                    </Form.Item>
                  )}
                </div>
              </div>
            </Card>

            {/* Status Selection */}
            <Form.Item
              label={<span className="text-white">Status</span>}
              name="typeOfPresentation"
              rules={[{ required: true, message: 'Please select status' }]}
            >
              <Select
                defaultValue="Gifted"
                placeholder="Select status"
                className="!bg-gray-700/20 !text-white !placeholder-gray-400 !border !border-gray-600/30 !rounded-lg !backdrop-blur-sm"
                dropdownClassName="!bg-gray-700/20 !backdrop-blur-sm !border !border-gray-600/30 !rounded-lg"
                suffixIcon={
                  <span className="ant-select-arrow">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="down"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                      className="!text-white" // Set arrow color to white
                    >
                      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                    </svg>
                  </span>
                }
              >
                <Select.Option value="PRESENTATION" className="!text-white !bg-gray-700/20">
                  Gifted
                </Select.Option>
                <Select.Option value="RECEIVING" className="!text-white !bg-gray-700/20">
                  Taken
                </Select.Option>
              </Select>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="!bg-gradient-to-r !from-blue-500/90 !to-teal-500/90 hover:!from-blue-600/90 hover:!to-teal-600/90 !text-white !rounded-lg !transition-all !duration-300 !shadow-md"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Presentation;