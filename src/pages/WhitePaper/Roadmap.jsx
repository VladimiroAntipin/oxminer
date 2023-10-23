import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Roadmap() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>Roadmap and Development Plan <br /><br />
                                    Timeline</h1>
                                <p className={Style.terms__text}>
                                    Our journey at 0xMiner is marked by significant milestones that outline our commitment to
                                    innovation, user engagement, and the continuous expansion of our offerings. Here's a glimpse of our
                                    roadmap:
                                    <br /><br />
                                    Gen 1 NFT Sale: (October - November 2023) <br />
                                    In the initial phase, we will launch the Gen 1 NFT sale, offering you the exclusive opportunity to
                                    own these highly valuable tokens.
                                    <br /><br />
                                    Platform Launch: (December 2023) <br />
                                    As we move forward, we are dedicated to launching our comprehensive platform in December 2023. This
                                    platform will be your gateway to passive income through Bitcoin mining and NFT minting.
                                    <br /><br />
                                    Bitcoin Rewards: (Unlocked after 1 year from platform launch) <br />
                                    To ensure the sustainability of our ecosystem, we will unlock Bitcoin rewards for our users after
                                    one year from the platform's launch.
                                </p>

                                <h2 className={Style.terms__title}>Roadmap</h2>
                                <p className={Style.terms__text}>
                                    Our roadmap is a testament to our commitment to creating a secure, profitable, and innovative
                                    financial ecosystem. We have identified key strategic initiatives that will guide our development
                                    and growth:
                                    <br /><br />
                                    1. Community Building: <br />
                                    Our first priority is to engage with our community and foster its growth. We believe that a strong
                                    community is the foundation of success. Through continuous interaction and support, we aim to create
                                    an active and passionate user base.
                                    <br /><br /><br />
                                    2. NFT Bitcoin Mining: <br />
                                    At the core of our platform lies the fusion of NFTs and Bitcoin mining. We will introduce our unique
                                    mining platform, offering you the opportunity to mint NFTs and benefit from Bitcoin mining's
                                    stability and profitability.
                                    <br /><br /><br />
                                    3. Diverse Investment Avenues: <br />
                                    We are committed to exploring and offering new financial opportunities to our users. Our goal is to
                                    provide you with a diverse range of investment options to suit your financial objectives.
                                </p>

                                <h2 className={Style.terms__title}>Development Plan</h2>
                                <p className={Style.terms__text}>
                                    0xMiner's development team is composed of experienced engineers and professionals with a proven
                                    track record in the cryptocurrency industry. We are committed to building a secure, reliable, and
                                    user-friendly platform for our users.
                                    <br /><br />
                                    Our development process is agile and iterative, which allows us to quickly respond to feedback from
                                    our users and adapt to changing market conditions. We also have a strong focus on quality assurance
                                    and testing, to ensure that our platform is as secure and bug-free as possible.
                                    <br /><br />
                                    We are committed to transparency and communication with our community. We regularly publish updates
                                    on our development progress and roadmap, and we are always open to feedback from our users.
                                    <br /><br />
                                    We believe that 0xMiner has the potential to revolutionize the way people invest in Bitcoin mining
                                    and NFTs. We are excited to continue developing our platform and helping our users achieve their
                                    financial goals.
                                </p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/how-it-works" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowBack} alt="back" />
                                How it works?
                            </Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/team" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowNext} alt="next" />
                                Team
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Roadmap;