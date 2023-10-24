import Style from "./AppFooter.module.css";
import Logo from "../../images/logo-type-part.svg";
import Discord from "../../images/discord-icon.png";
import Telegram from "../../images/telegram-icon.png";
import Twitter from "../../images/twitter-icon.png";
import YouTube from "../../images/yt-icon.png";
import { Link } from "react-router-dom";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function AppFooter() {

    return (
        <footer className={Style.footer} id="contacts">
            <div className={Style.footer__content}>
                <div className={Style.footer__logowrap}>
                    <img className={Style.footer__logo} src={Logo} alt="logo" />
                </div>

                <div className={Style.footer__textcontainer}>
                    <p className={Style.footer__text}>GTAEurope OÜ (16520173)<br />
                        Address: Harju maakond,<br /> Tallinn, Lasnamäe linnaosa,<br /> Lõõtsa tn 2a, 11415, Estonia<br />
                        +372 56810800
                    </p>
                    <p className={Style.footer__email}>Email: <a className={Style.footer__emaillink}
                        href="mailto: info@oxminer.io">info@oxminer.io</a></p>
                    <p className={Style.footer__text}>Copyright{'\u00a9'} 2023 OxMiner{'\xAE'}<br /> All rights reserved.</p>
                </div>

                <div className={Style.footer__socialcontainer}>
                    <p className={Style.footer__text}>Follow us:</p>
                    <div className={Style.footer__socialiconcontainer}>
                        <Link className={Style.footer__social} to="https://discord.com/" target="_blank"><img className={Style.footer__socialicon} src={Discord}
                            alt="Discord" /></Link>
                        <Link className={Style.footer__social} to="https://t.me/OXMiner_news" target="_blank"><img className={Style.footer__socialicon} src={Telegram}
                            alt="Telegram" /></Link>
                        <Link className={Style.footer__social} to="https://twitter.com/OxMiner_DeFi/" target="_blank"><img className={Style.footer__socialicon} src={Twitter}
                            alt="Twitter" /></Link>
                        <Link className={Style.footer__social} to="https://www.youtube.com/@OXMinerDeFi" target="_blank"><img className={Style.footer__socialicon} src={YouTube}
                            alt="YouTube" /></Link>
                    </div>
                </div>

            </div>
            <div className={Style.footer__legalcontainer}>
                <Link className={Style.footer__legaltext} to="/privacy-policy" onClick={scrollToTopInstant}>Privacy Policy</Link>
                <Link className={Style.footer__legaltext} to="/terms-and-conditions" onClick={scrollToTopInstant}>Terms & Conditions</Link>
            </div>
        </footer>
    )
}

export default AppFooter;