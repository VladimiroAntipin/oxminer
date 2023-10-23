import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Values() {

    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>

                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>


                                <h1 className={Style.terms__title}>Values and Objectives: Pioneering NFT Minting and Bitcoin Mining</h1>
                                <p className={Style.terms__text}>0xMiner is a visionary platform that merges NFT minting with Bitcoin mining,
                                    introducing stability and novel utility for meme/altcoins, backed by a genuine BTC mining farm.
                                    <br /><br /><br />
                                    At 0xMiner, we are committed to pioneering a new era of crypto investment, where NFTs and Bitcoin
                                    mining work together to create a more sustainable and profitable ecosystem for all. 0xMiner is
                                    committed to:
                                    <br /><br />
                                    Innovation:
                                    0xMiner pioneers a groundbreaking concept by merging NFT minting with Bitcoin mining. This
                                    innovative fusion brings stability and unprecedented utility to DeFi. Behind this innovative
                                    approach lies a genuine Bitcoin mining farm, ensuring the foundation of security and authenticity.
                                    <br /><br />
                                    Clear Vision:
                                    Our vision is crystal clear – to create a robust crypto-earning platform that draws inspiration from
                                    the industry's most successful DeFi platforms and DAOs. We aim to offer a platform that empowers
                                    individuals with financial autonomy, setting the stage for the future of Web3 and alternative
                                    financial models.
                                    <br /><br />
                                    Empowerment & Freedom:
                                    0xMiner is not just about generating profits; it's about empowering individuals with the freedom to
                                    control their financial destinies. We are committed to providing a lasting solution that grants
                                    participants financial autonomy, contributing to the evolution of Web3 and diverse investment
                                    tactics.
                                    <br /><br />
                                    Holistic Solution:
                                    Our holistic approach combines cutting-edge NFT minting with Bitcoin mining, emphasizing utility,
                                    stability, and global reach. This strategic integration allows us to offer a comprehensive solution
                                    that addresses the challenges investors face in the crypto space.
                                    <br /><br />
                                    Future-Focused:
                                    Our commitment extends to shaping the future of Web3 and fostering long-term passive income
                                    opportunities. We believe in redefining the investment landscape and providing investors with
                                    innovative ways to navigate the crypto world.
                                </p>

                                <h2 className={Style.terms__title}>How Are We Achieving Our Objectives?</h2>
                                <p className={Style.terms__text}>0xMiner is achieving its objectives through a combination of innovative
                                    technology, a strong team, and a commitment to the community.
                                    <br /><br /><br />
                                    Technology: 0xMiner is powered by a proprietary platform that allows users to easily invest in
                                    Bitcoin mining and NFTs. Our platform is built on the latest security protocols and is constantly
                                    being updated to meet the needs of our users.
                                    <br /><br /><br />
                                    Team: 0xMiner is backed by experienced professionals with a proven track record in the
                                    cryptocurrency industry. Our team is passionate about blockchain technology and committed to
                                    building a successful platform that will benefit everyone involved.
                                    <br /><br /><br />
                                    Community: 0xMiner values its community and strives to create a platform where everyone feels
                                    welcome and supported. We regularly host community events and contests and are always available to
                                    answer our users' questions.</p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/introduction" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowBack} alt="back" />Introduction</Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/principals" onClick={scrollToTopInstant}><img className={Style.dapp__button} src={ArrowNext}
                                alt="next" />Principals</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Values;