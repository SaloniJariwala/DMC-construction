import styled from "styled-components";

export const ReviewWrapper = styled.div`
    margin-top: 40px;
    .content-style {
        display: flex;
        flex-direction: column;
    }
    .card-style {
        display: flex;
        flex-direction: column;
        border: 1px solid #7ABAF2;
        padding: 20px;
    }
    .slick-slide > div {
        margin: 0 10px;
    }
    .slick-list {
        margin: 0 -10px;
    }
    .slick-dots li {
        background-color: #CEE5FB;
    }
    .slick-dots li button:before {
        content: unset;
    }
    .slick-dots li.slick-active, .slick-dots li:hover {
        background-color: #014995;
    }
    .button-style {
        border: none;
        height: 44px;
        width: 44px;
        color: #2172BB;
        border: 1px solid #2172BB;
        background-color: #CEE5FB;
    }
`;