import React from "react";
import { Link } from "./style";
import { ReactComponent as DmcLogo } from "../../Assets/Svg/Logo Header.svg";
import { ReactComponent as PhoneLogo } from "../../Assets/Svg/phone-alt-solid.svg";
import { ReactComponent as EmailLogo } from "../../Assets/Svg/envelope-solid.svg";
import { ReactComponent as MapLogo } from "../../Assets/Svg/map-marker-alt-solid.svg";
import { ReactComponent as FacebookLogo } from "../../Assets/Svg/facebook-brands.svg";
import { Row, Col } from "antd";

const Information = () => {
    return (
        <>
            <DmcLogo />
            <span className="title-style">
                Contact DMC Construction Inc for all your home renovation and remodeling needs. We are licensed, bonded, and insured!
            </span>
            <div className="contact-style">
                <Row className="contact-item-style">
                    <Col span={1}>
                        <PhoneLogo />
                    </Col>
                    <Col span={5} style={{ marginLeft: 5 }}>
                        <span>(610) 948-1886</span>
                    </Col>
                </Row>
                <Row className="contact-item-style">
                    <Col span={1}>
                        <EmailLogo />
                    </Col>
                    <Col span={5} style={{ marginLeft: 5 }}>
                        <span>domdmc@comcast.net</span>
                    </Col>
                </Row>
                <Row className="contact-item-style">
                    <Col span={1}>
                        <MapLogo />
                    </Col>
                    <Col span={5} style={{ marginLeft: 5 }}>
                        <span>Collegeville, PA</span>
                    </Col>
                </Row>
            </div>
            <FacebookLogo style={{ marginTop: '30px' }} />
            <Row style={{ marginTop: '30px' }}>
                <Col span={18} className="link-style">
                    <Link href="">Home</Link>
                    <Link href="">About</Link>
                    <Link href="">Kitchen Remodeling</Link>
                    <Link href="">Bathroom Remodeling</Link>
                    <Link href="">Contact</Link>
                </Col>
            </Row>
        </>
    );
};

export default Information;