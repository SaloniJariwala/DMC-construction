import { Col, Row } from "antd";
import React from "react";
import Button from "../../UI Components/BannerButton";
import { BannerWrapper } from "./style";

const Banner = () => {
    return (
        <>
            <BannerWrapper>
                <div className="overlay"></div>
                <img src="/Images/C.png" className="c-style" />
                <div className="container">
                    <div style={{ zIndex: 4, overflow: 'hidden' }}>
                        <span className="title-style">Quality Work, Competitive Pricing</span>
                        <Row>
                            <Col span={11} className="heading-style">
                                FOR ALL YOUR REMODELING AND RENOVATION NEEDS
                            </Col>
                        </Row>
                        <div className="button-style">
                            <Button bgColor="#2172BB" textColor="white" text="Call (610) 948-1886" />
                            <Button bgColor="white" textColor="black" text="CONATCT US" style={{ marginLeft: 20 }} />
                        </div>
                    </div>
                </div>
            </BannerWrapper>
        </>
    );
};

export default Banner;
