import React from "react";
import { HeaderWrapper, Link } from "./style";
import { ReactComponent as DmcLogo } from "../../Assets/Svg/Logo Header.svg";
import "../../../src/App.css";
import OtherServices from "./OtherServices";

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container heading-style">
                <DmcLogo />
                <ul className="menu-style">
                    <li>
                        <Link href="">Home</Link>
                    </li>
                    <li>
                        <Link href="">About</Link>
                    </li>
                    <li>
                        <Link href="">Kitchen Remodeling</Link>
                    </li>
                    <li>
                        <Link href="" style={{ display: 'flex', alignItems: 'center' }}><OtherServices /></Link>
                    </li>
                    <li>
                        <Link href="">Contact</Link>
                    </li>
                </ul>
            </div>
        </HeaderWrapper>
    );
};

export default Header;