import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import { MdPeopleAlt, MdOutlineSupportAgent } from "react-icons/md";
import { FaTiktok, FaCaretDown, FaComments } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { CgMediaLive } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { GrMenu, GrClose } from 'react-icons/gr';
import LogoWhite from "../assets/images/logo-white.png";
import LogoDark from "../assets/images/logo-dark.png";

const Navbar = () => {
    const [option, setOption] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setOption(false);
        setMenu(false)
    }
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <header className={navbar ? 'header active' : 'header'}>
            <div className="header__content">
                <div className="header__logo">
                    <NavLink to="/">
                        {navbar ? <img src={LogoDark} alt="logo" /> : <img src={LogoWhite} alt="logo" />}
                    </NavLink>
                </div>
                <nav className="header__menu">
                    <ul className={menu ? "mobile-active" : "header__navmenu"}>
                        <li onClick={handleClick}>
                            <NavLink to="/tiktok-likes" className={navbar ? "link navactive" : 'link'}>
                                <AiFillHeart />
                                Buy TikTok Likes
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink to="/tiktok-followers" className={navbar ? "link navactive" : 'link'}>
                                <MdPeopleAlt />
                                Buy TikTok Followers
                            </NavLink>
                        </li>
                        <li>
                            <span className={navbar ? "link navactive option-more" : 'link option-more'} onClick={() => setOption(!option)}>
                                <FaTiktok />
                                More
                                <FaCaretDown />
                            </span>
                            {option && (
                                <ul className="header__more" onClick={handleClick}>
                                    <li>
                                        <NavLink to="/tiktok-views">
                                            <AiFillEye />
                                            Buy TikTok Views
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tiktok-comments">
                                            <FaComments />
                                            Buy TikTok Comments
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tiktok-video-shares">
                                            <IoMdShareAlt />
                                            Buy TikTok Share
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tiktok-live">
                                            <CgMediaLive />
                                            Buy TikTok Live
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li onClick={handleClick}>
                            <NavLink to="/support" className={navbar ? "link navactive" : 'link'}>
                                <MdOutlineSupportAgent />
                                Support
                            </NavLink>
                        </li>
                    </ul>
                    <div className="cart-menuicons">
                        <div className={navbar ? "cart active" : "cart"}>
                            <FiShoppingCart />
                            <span className="cart-item">0</span>
                        </div>
                        <div className="mobile-menu" onClick={() => setMenu(!menu)}>
                            {
                                menu ? <GrClose className={navbar ? "close-icon active" : "close-icon"} /> : <GrMenu className={navbar ? "menu-icon active" : "menu-icon"} />
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
