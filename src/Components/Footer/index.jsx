import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Information from "./Information";
import Inquiry from "./Inquiry";
import { FooterWrapper } from "./style";

const Link = styled.a`
    color: #7ABAF2;
    margin: 0 5px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="overlay-footer"></div>
            <div className="container">
                <Row>
                    <Col span={12} className="info-style">
                        <Information />
                    </Col>
                    <Col span={12}>
                        <Inquiry />
                    </Col>
                </Row>
            </div>
            <div className="footer-style">
                <div className="container footer-info-style">
                    <span>© 2021 DMC Construction Inc</span>
                    <div>
                        <Link href="#">Privacy Policy</Link>|
                        <Link href="#">Terms of Use</Link>|
                        <Link href="#">Cookie Policy</Link>
                    </div>
                    <span>Website Design & Digital Marketing with ♥ by Dotcom Design</span>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;