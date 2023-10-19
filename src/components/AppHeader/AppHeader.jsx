import headerStyle from "./AppHeader.module.css";
import Logo from "../../images/logo-icon.svg";
import Discord from "../../images/discord-icon.png";
import Telegram from "../../images/telegram-icon.png";
import Twitter from "../../images/twitter-icon.png";
import YouTube from "../../images/yt-icon.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const hambClass = headerStyle.header__hamburger + (showMenu ? ' ' + headerStyle.active : '');
    const navClass = headerStyle.header__navcontainer + (showMenu ? ' ' + headerStyle.active : '');

    const toggleMenu = () => setShowMenu(state => !state);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const scrollToTopInstant = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__content} >

                <nav className={headerStyle.header__navbar}>
                    <Link to="/" onClick={scrollToTop}>
                        <img className={headerStyle.header__logo} src={Logo} alt="Logo" />
                    </Link>

                    <div className={hambClass} onClick={toggleMenu}>

                        <span className={headerStyle.header__hamburgerline}></span>
                        <span className={headerStyle.header__hamburgerline}></span>
                        <span className={headerStyle.header__hamburgerline}></span>
                    </div>

                    <div className={navClass} onClick={toggleMenu}>
                        <ul className={headerStyle.header__linkscontainer}>
                            <li className={headerStyle.header__linkitem}>
                                <NavHashLink className={headerStyle.header__link} to="/#info" >About OxMiner</NavHashLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavHashLink className={headerStyle.header__link} to="/#why">Why OxMiner?</NavHashLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavHashLink className={headerStyle.header__link} to="/#roadmap">Line-up</NavHashLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavHashLink className={headerStyle.header__link} to="/#team">Team</NavHashLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavHashLink className={headerStyle.header__link} to="/#contacts">Contacts</NavHashLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavLink className={headerStyle.header__link} to="/white-paper" onClick={scrollToTopInstant}>White Paper</NavLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavLink className={headerStyle.header__link} to="/DApp">DApp</NavLink>
                            </li>
                            <span className={headerStyle.header__line}>|</span>
                            <li className={headerStyle.header__linkitem}>
                                <NavLink className={headerStyle.header__link} to="/Gen1NFT" onClick={scrollToTopInstant}>Gen 1 NFT</NavLink>
                            </li>
                            <li className={headerStyle.header__linkitem}>
                                <ConnectButton accountStatus="address" />
                            </li>
                        </ul>
                        <div className={headerStyle.header__socialcontainer}>
                            <Link className={headerStyle.header__social} to="https://discord.com/" target="_blank" >
                                <img className={headerStyle.header__socialicon} src={Discord} alt="Discord" />
                            </Link>
                            <Link className={headerStyle.header__social} to="https://t.me/OXMiner_news" target="_blank" >
                                <img className={headerStyle.header__socialicon} src={Telegram} alt="Telegram" />
                            </Link>
                            <Link className={headerStyle.header__social} to="https://twitter.com/OxMiner_DeFi/" target="_blank" >
                                <img className={headerStyle.header__socialicon} src={Twitter} alt="Twitter" />
                            </Link>
                            <Link className={headerStyle.header__social} to="https://www.youtube.com/@OXMinerDeFi" target="_blank" >
                                <img className={headerStyle.header__socialicon} src={YouTube} alt="YouTube" />
                            </Link>

                        </div>


                    </div>
                </nav>

            </div>
        </header>
    );
}

export default AppHeader;