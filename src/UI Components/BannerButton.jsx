import React from "react";
import { Button } from "antd";
import styled from "styled-components";

export const AntButton = styled(Button)`
    background-color: ${(props) => props.bgColor !== undefined ? props.bgColor : "#0092ff"};
    color: ${(props) => props.textColor !== undefined ? props.textColor : "black"};
    width: 140px;
    height: 40px;
    border: #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    &:active, &:focus, &:hover {
        background-color: ${(props) => props.bgColor !== undefined ? props.bgColor : "#0092ff"};
        color: ${(props) => props.textColor !== undefined ? props.textColor : "black"};
        border: #707070;
    }
`;

const BannerButton = (props) => {
    return (
        <AntButton 
            bgColor={props.bgColor}
            textColor={props.textColor} 
            style={props.style} 
            onClick={props.onClick}
            htmlType={props.htmlType}
        >
            {props.text}
        </AntButton>
    );
};

export default BannerButton;