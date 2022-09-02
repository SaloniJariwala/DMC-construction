import Title from "../../UI Components/Title";
import React from "react";
import { AntInput, AntSelect, AntTextArea, InquiryWrapper } from "./style";
import { Form, Select } from "antd";
import Button from "../../UI Components/BannerButton";

const Inquiry = () => {

    const [form] = Form.useForm();
    const { Option } = Select;

    const handleOnFinish = (values) => {
        console.log(values);
    };

    return (
        <InquiryWrapper>
            <Title size="20px" text="BATHROOM REMODELING" color="#7ABAF2" />
            <div style={{ marginTop: 30 }}>
                <Form form={form} onFinish={handleOnFinish} scrollToFirstError>
                    <Form.Item 
                        name="fullname"
                        rules={[{
                            required: true,
                            message: 'Please Enter Your Full Name',
                        }]}
                    >
                        <AntInput placeholder="Full Name*" style={{ color: '#7ABAF2' }} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                              type: 'email',
                              message: 'The Enter valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please Enter your E-mail!',
                            },
                        ]}
                    >
                        <AntInput placeholder="Email*" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                              required: true,
                              message: 'Please Enter your phone number!',
                            },
                        ]}
                    >
                        <AntInput placeholder="Phone No.*" />
                    </Form.Item>
                    <Form.Item
                        name="services"
                        rules={[
                            {
                                required: true,
                                message: 'Please Select Service',
                            },
                        ]}
                    >
                        <AntSelect placeholder="Service Needed Dropdown*" >
                            <Option value="kitchen remodeling">Kitchen Remodeling</Option>
                            <Option value="bathroom remodeling">Bathroom Remodeling</Option>
                            <Option value="basement&garage">Basement & Garage</Option>
                            <Option value="windows&sidings">Windows & Sidings</Option>
                            <Option value="Deck&porches">Deck & Porches</Option>
                        </AntSelect>
                    </Form.Item>
                    <Form.Item name="message">
                        <AntTextArea rows={3} placeholder="Message" />
                    </Form.Item>
                    <Form.Item> 
                        <Button bgColor="#2172BB" textColor="white" text="Submit" htmlType="submit" />
                    </Form.Item> 
                </Form>
            </div>
        </InquiryWrapper>
    );
};

export default Inquiry;