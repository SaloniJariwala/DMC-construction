import React from "react";
import { ServiceWrapper } from "./style";
import LearnMore from "../../UI Components/LearnMore";
import Title from "../../UI Components/Title";
import { Col, Row } from "antd";
import Description from "../../UI Components/Description";

const serviceData = [
    {
        "title": "Kitchen Remodeling",
        "description": "Reimagine your kitchen, turning it into a space that is truly your own! DMC Construction's      kitchen remodeling professionals are known for their skill and attention to detail!",
        "imageUrl": "/Images/KitchenRemodeling.jpg"
    },
    {
        "title": "Bathroom Remodeling",
        "description": "Increase the value of your home by building a bathroom you’ve always dreamed of! Consult our bathroom remodeling experts for help with planning, budgeting, and design decisions.",
        "imageUrl": "/Images/BathroomRemodeling.jpg"
    },
    {
        "title": "Basement & Garage",
        "description": "Expanding your living space? Consider having your basement renovated quickly and efficiently! Perhaps construct a brand new garage, attached or detached! Contact us for advice and estimates.",
        "imageUrl": "/Images/BasementGarage.jpg"
    },
    {
        "title": "Windows & Siding",
        "description": "Get work done on the windows and siding of your home, easily improving its resale value. Trust DMC Construction to provide the right option, from Therma-Tru Fiberglass to Pella® Designer Series windows and doors.",
        "imageUrl": "/Images/WindowsSiding.jpg"
    },
    {
        "title": "Deck and Porches",
        "description": "Spruce up your home’s outdoor area by upgrading your deck, pool cabana, or screen porch! Trust DMC Construction to get these outdoor fixtures expertly remodeled at a price you can afford.",
        "imageUrl": "/Images/DeckAndPorches.jpg"
    },
    {
        "title": "New Additions ",
        "description": "Changing the basic layout of your home? Rely on DMC Construction for all your renovation needs, from adding a sunroom to performing a split-level remodel and much more!",
        "imageUrl": "/Images/NewAdditions.jpg"
    }
];

const Services = () => {
    return (
        <ServiceWrapper>
            <img src="/Images/Service.png" className="c-style" />
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Title text="OUR SERVICES" size="24px" />
                </div>
                <Row>
                    <Col span={16} className="heading-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Col>
                </Row>
                <div className="content-style">
                    {
                        serviceData.map((item) => (
                            <div className="card-style">
                                <img src={item.imageUrl} height={170} width={270} alt={item.name} />
                                <Title size="20px" text={item.title} style={{ marginTop: 10 }} />
                                <Description style={{ marginTop: '10px' }}>{item.description}</Description>
                                <LearnMore marginTop="10px" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </ServiceWrapper>
    );
};

export default Services;