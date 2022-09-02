import styled from "styled-components";

export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin-top: 15px;
    position: relative;
    background-color: rgb(122, 186, 242, 0.1);
    .heading-text {
        font-size: 14px;
        text-align: center;
        margin: 20px auto;
    }
    .c-style {
        z-index: 70;
        position: absolute;
        left: -108px;
        bottom: 170px;
        height: 245px;
    }
    .heading-style {
        font-weight: bold;
        color: #014995;
        font-size: 30px;
    }
    .content-style {
        margin-top: 50;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .card-style {
        width: 270px;
        height: auto;
        word-wrap: break-word;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`;