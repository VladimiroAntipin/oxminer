import Style from "./Home.module.css";
import Logo from "../../../images/logo-type-part.svg";
import Arrow from "../../../images/arrow.svg";
import Discord from "../../../images/discord-icon.png";
import Telegram from "../../../images/telegram-blue.png";
import Email from "../../../images/mail-blue.png";
import Bull from "../../../images/bull-in-mine-cart.png";
import ScrollIcon from "../../../images/mouse-scroll-icon.png";
import { Link } from "react-router-dom";


function HomeSection() {
    return (
        <section className={Style.home} id="home">
            <div className={Style.home__content}>
                <div className={Style.home__textcontainer} >
                    <img className={Style.home__logo} src={Logo} alt="OxMiner" />
                    <h1 className={Style.home__text}>Unlocking Sustainable Passive Income<br />via Bitcoin Mining Tokenization</h1>
                    <p className={Style.home__textgreen}>for Sustainable<br />PASSIVE INCOME</p>
                    <div className={Style.home__yellowtextcontainer}>
                        <p className={Style.home__textyellow}>Don't Miss the DeFi Revolution</p>
                        <img className={Style.home__arrow} src={Arrow} alt="Arrow" />
                    </div>
                    <div className={Style.home__links}>
                        <Link className={Style.home__linkpurple} to="https://discord.com/" target="_blank" >
                            <img className={Style.home__socialicon} src={Discord} alt="Discord" />
                            Join Community</Link>
                        <Link className={Style.home__linkyellow} to="https://t.me/+x-Gjf6a2M_1jZmZi" target="_blank" >
                            <img class={Style.home__socialicon} src={Telegram} alt="Tg" />
                            Join Community</Link>
                        <Link className={Style.home__linkgreen} to="/home">
                            <img class={Style.home__socialicon} src={Email} alt="Newsletter" />
                            Join our newsletter</Link>
                    </div>
                </div>
                <img className={Style.home__img} src={Bull} alt="bull-in-mine-cart" />
            </div>

            <div className={Style.home__scrollcontainer}>
                <span className={Style.home__scrollline}>-</span>
                <img className={Style.home__scrollicon} src={ScrollIcon} alt="scroll" />
                <span className={Style.home__scrollline}>-</span>
            </div>
        </section>
    );
};

export default HomeSection;