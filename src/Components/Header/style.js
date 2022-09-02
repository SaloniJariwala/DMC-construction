import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: #014995;
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 45;
    .menu-style {
        display: flex;
        list-style: none;
        margin-bottom: unset;
    }
    .heading-style {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Link = styled.a`
    color: white;
    font-size: 16px;
    margin: 0 10px;
    text-decoration: none;
    font-family: ;
`;

export const MenuText = styled.span`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    font-weight: 500;
`;