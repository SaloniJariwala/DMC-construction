import React from "react";
import styled from "styled-components";
import { RightOutlined } from "@ant-design/icons";

export const Link = styled.a`
    margin-top: ${(props) => props.marginTop !== undefined ? props.marginTop : "30px"};
`;

const LearnMore = (props) => {
    return (
        <Link 
            href="" 
            onClick={props.onClick} 
            marginTop={props.marginTop}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <span>Learn More</span>
            <RightOutlined />
        </Link>
    );
};

export default LearnMore;