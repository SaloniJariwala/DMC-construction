import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ReviewWrapper } from "./style";
import Title from "../../UI Components/Title";
import Description from "../../UI Components/Description";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const reviewData = [
    {
        "content": "DNC was recommended to us by family friends as we were planning a full home renovation. They did a stellar job overall and managed to stay within the initial budget, even though I was initially skeptical about that being possible. Very punctual about their.",
        "writer": "Liam Douglas"
    },
    {
        "content": "Dominic and his team did a fantastic job on my porch! Very professional about their work, and pleasant to talk to. I’ll definitely get back in touch once I decide to get my kitchen redone.",
        "writer": "Holly, West Chester PA"
    },
    {
        "content": "gsdga yjusf dtydhf ufdsy fddyi yfuhu hlro ASdti gyydgs gidkus guidfush dgysg guisg gfui gfuidg dg uish jpd gjij gjfj fhfo hauesl hfgdfg.",
        "writer": "gftuf jscftus"
    },
    {
        "content": "sjdf ggesi yiuis dggd dgdf skb dgskg dghsg sygd dghhf fgsui ghs9e hgp9-r jjfdh iygiy jftuf fgft ghf tffgyh yfygfy gyg hgfhgy fgf.",
        "writer": "fdjsgf ftuxd"
    },
    {
        "content": "fv djfu yuygf gyikg  urejr r utgbf  yutg t frf re ffd tfdsv fjsgf sho8 huhdl iusj dh  huh hjh jhj jhj jhj jnk ftfy kijkih hih.",
        "writer": "vgut ufsb"
    }
];

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0
    };

    const onPrevious = () => {
        Slider.slickPrev();
    }

    const onNext = () => {
        Slider.slickNext();
    }

    return (
        <ReviewWrapper>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Title text="REVIEWS" size="24px" />
                    </div>
                    <div>
                        <button id="btn1" className="button-style" onClick={onPrevious}>
                            <ArrowLeftOutlined />
                        </button>
                        <button id="btn2" className="button-style" style={{ marginLeft: 10 }} onClick={onNext}>
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
                <div style={{ margin: '0 auto', marginTop: 30, marginBottom: 60 }}>
                    <Slider {...settings}>
                        {
                            reviewData.map((item) => (
                                <div className="card-style">
                                    <Description>{item.content}</Description>
                                    <h4 style={{ color: '#014995', marginTop: 30 }}>{item.writer}</h4>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </ReviewWrapper>
    );
};

export default Reviews;