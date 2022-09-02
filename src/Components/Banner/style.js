import { Button } from "antd";
import styled from "styled-components";

export const BannerWrapper = styled.div`
    background-image: url("/Images/HomeBg.jpg");
    height: 497px;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    .title-style {
        font-size: 20px;
        color: #7ABAF2;
        line-height: 30px;
    }
    .heading-style {
        font-size: 46px;
        color: white;
        font-weight: 700;
        line-height: 50px;
    }
    .content-style {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .button-style {
        display: flex;
        margin-top: 10px;
    }
    .c-style {
        position: absolute;
        top: -345px;
        right: -280px;
    }
`;
