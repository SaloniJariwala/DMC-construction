import { Input, Select } from "antd";
import styled from "styled-components";

const { TextArea } = Input;
 
export const FooterWrapper = styled.div`
    margin-top: 40px;
    padding-top: 30px;
    background-image: url("/Images/FooterBg.jpg");
    /* background-size: contain; */
    background-size: 100%;
    position: relative;
    background-repeat: no-repeat;
    .info-style {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }
    .title-style {
        color: white;
        margin-top: 30px;
    }
    .contact-style {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }
    .contact-item-style {
        display: flex;
        justify-content: left;
        align-items: center;
        color: white;
        margin-bottom: 5px;
    }
    .link-style {
        display: flex;
        flex-wrap: wrap;
        line-height: 35px;
    }
    .footer-style {
        color: #7ABAF2;
        font-size: 10px;
        background-color: #000F20;
        height: 45px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        position: relative;
        z-index: 10;
    }
    .footer-info-style {
        display: flex;
        justify-content: space-between;
    }
    .overlay-footer {
        position: absolute;
        top: 0;
        /* bottom: 2px; */
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0, 47, 89, 0.7);
    }
`;

export const Link = styled.a`
    color: white;
    text-decoration: unset;
    margin-right: 20px;
`;

export const InquiryWrapper = styled.div`
    padding-left: 80px;
    .ant-form-item {
        margin-bottom: 12px;
    }
    .ant-select.ant-select-in-form-item .ant-select-selector {
        background: transparent;
        border: none;
    }
    .ant-select-arrow {
        color: #fff;
    }
    .ant-select-item-option-content {
        background-color: transparent;
        color: white;
    }
    .ant-select-item {
        background-color: transparent;
        color: white;
    }
    .ant-select-dropdown {
        background-color: transparent;
        color: white;
    }
`;

export const AntInput = styled(Input)`
    color: #7ABAF2 !important;
    border: solid 1px #7ABAF2;
    background-color: transparent;
`;

export const AntSelect = styled(Select)`
    color: #7ABAF2 !important;
    border: solid 1px #7ABAF2;
    background-color: transparent;
`;

export const AntTextArea = styled(TextArea)`
    color: #7ABAF2 !important;
    border: solid 1px #7ABAF2;
    background-color: transparent;
`;

