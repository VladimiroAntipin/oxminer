import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Principals() {


    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>Principals: What Makes Us Different?</h1>
                                <h2 className={Style.terms__title}>1. Security First</h2>
                                <p className={Style.terms__text}>At OxMiner, security is our top priority. We understand the importance of
                                    safeguarding your investments and personal information in crypto. Here's how we ensure your
                                    security:
                                    <br /><br /><br />
                                    - Robust Infrastructure: Our mining factory, located in Armenia's Economic Free Zone, utilizes an
                                    advanced and ready-to-use infrastructure, ensuring reliability and stability.
                                    <br /><br />
                                    - Green Bitcoin Mining: We're committed to sustainable and low-impact energy sources for Bitcoin
                                    mining, reducing environmental impact and ensuring long-term viability.
                                    <br /><br />
                                    - Smart Contract Security: Our smart contracts undergo rigorous auditing and testing to eliminate
                                    vulnerabilities and ensure your investments are safe.
                                    <br /><br />
                                    - Data Protection: We adhere to the highest data protection standards, ensuring that your personal
                                    information remains confidential and secure.
                                </p>

                                <h2 className={Style.terms__title}>2. Guaranteed Returns</h2>
                                <p className={Style.terms__text}>What truly sets us apart is our commitment to providing guaranteed returns. With
                                    our Gen 1 NFTs,
                                    investors can enjoy a guaranteed 300% ROI over 4 years. This level of assurance is unparalleled in
                                    the crypto space, giving you peace of mind as you invest.</p>


                                <h2 className={Style.terms__title}>3. Community-Centric</h2>
                                <p className={Style.terms__text}>We believe in the power of community. OxMiner Gen 1 NFT holders are not just
                                    investors; they become integral members of our project. You'll have the opportunity to participate
                                    in shaping the project's future through our special "Board of Genesis investors."</p>


                                <h2 className={Style.terms__title}>4. Access to Exclusive Opportunities</h2>
                                <p className={Style.terms__text}>Investing with OxMiner opens doors to exclusive crypto and real-world asset
                                    opportunities. You'll
                                    gain access to investment proposals that are typically reserved for very high-net-worth individuals
                                    and institutional investors.</p>

                                <h2 className={Style.terms__title}>5. Continuous Growth and Innovation</h2>
                                <p className={Style.terms__text}>Our commitment to innovation means we always look for new ways to enhance your
                                    investment experience. We are dedicated to exploring diverse investment avenues and expanding our
                                    service range, ensuring that your investments with us continue to grow.</p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/values" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowBack} alt="back" />Values</Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/business-model" onClick={scrollToTopInstant}><img className={Style.dapp__button} src={ArrowNext}
                                alt="next" />Business Model</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export default Principals;