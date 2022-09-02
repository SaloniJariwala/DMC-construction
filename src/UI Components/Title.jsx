import React from "react";
import styled from "styled-components";

const TitleText = styled.span`
    color: ${(props) => props.color !== undefined ? props.color : "#014995"};
    font-size: ${(props) => props.size !== undefined ? props.size : "16px"};
    font-weight: bold;
    text-transform: uppercase;
`;

const Title = (props) => {
    return (
        <TitleText color={props.color} size={props.size} style={props.style}>{props.text}</TitleText>
    );
};

export default Title;