import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Conclusion() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>Conclusion</h1>
                                <p className={Style.terms__text}>
                                    0xMiner is a secure and profitable crypto solution that combines NFTs with
                                    Bitcoin mining to offer lucrative returns and long-term investment avenues. It also prioritizes
                                    utility and stability, providing a platform for global users to earn passive BTC yields securely.
                                    <br /><br /><br />
                                    Here are some of the key points discussed throughout the whitepaper:
                                    <br /><br />
                                    0xMiner solves the problem of high upfront investment costs in Bitcoin mining by offering shares of
                                    a real mining factory in the form of NFTs. <br />
                                    0xMiner's DeFi-based RWA tokenization allows investors to regain the lost value of tokens in
                                    fluctuating markets. <br />
                                    0xMiner's platform is secure and transparent, with all investments backed by real Bitcoin mining
                                    Asics and users are able to track their earnings in real time.
                                    <br /><br />
                                    0xMiner is a unique and innovative crypto solution that addresses some of the key challenges facing
                                    the industry. It offers investors a secure and profitable way to participate in the Bitcoin mining
                                    industry. <br /><br /><br />
                                    Join us now.
                                </p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/team" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowBack} alt="back" />
                                Team
                            </Link>
                            <Link className={Style.dapp__linkgreen} to="/" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowNext} alt="next" />
                                Homepage
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Conclusion;