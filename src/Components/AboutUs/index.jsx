import React from "react";
import { Row, Col } from "antd";
import { AboutWrapper } from "./style";
import LearnMore from "../../UI Components/LearnMore";
import Title from "../../UI Components/Title";
import Description from "../../UI Components/Description";

const AboutUs = () => {
    return (
        <div className="container" style={{ paddingTop: 40 }}>
            <AboutWrapper>
                <Row>
                    <Col span={12}>
                        <img src="/Images/AboutUs.jpg" height={400} width={300} />
                    </Col>
                    <Col span={12} className="about-style">
                        <Title text="ABOUT US" size="24px" />
                        <Description style={{ marginTop: '30px' }}>
                            Based in Collegeville, Pennsylvania, DMC Construction has fifteen years of experience providing exceptional workmanship and dedicated customer service. Whether it’s kitchen remodeling, basement renovation, or porch expansion, we always deliver an enjoyable construction experience at very reasonable rates. Aiming to build a lasting client relationship, we proudly uphold every last commitment we make. If searching for a contractor you can rely on, you’ve come to the right place!
                            <br/><br/>
                            DMC Construction primarily serves the counties of Montgomery, Chester, Delaware, and Berks. Contact us using the form below, or reach out to us directly at a time of your convenience by calling 610-948-1886.
                        </Description>
                        <LearnMore />
                    </Col>
                </Row>
            </AboutWrapper>
        </div>
    );
};

export default AboutUs;