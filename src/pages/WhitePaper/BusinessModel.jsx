import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import Location from "../../images/location.png";
import Scheme from "../../images/scheme.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function BusinessModel() {

    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>Business Model</h1>
                                <p className={Style.terms__text}>0xMiner has crafted a distinct financial ecosystem where the investor plays a
                                    pivotal role. Here's a breakdown of how it works:</p>

                                <h2 className={Style.terms__title}>Investor Participation:</h2>
                                <p className={Style.terms__text}>An investor enters the 0xMiner ecosystem, representing a crucial component of our
                                    model. Their
                                    involvement initiates the minting process, linking them directly to the potential rewards generated
                                    by the platform.</p>


                                <h2 className={Style.terms__title}>Minting Process:</h2>
                                <p className={Style.terms__text}>
                                    Once an investor integrates into the 0xMiner platform, they can engage in the minting process. This
                                    phase transforms their investment into a tangible asset within our ecosystem, preparing it for the
                                    reward distribution phase.
                                </p>


                                <h2 className={Style.terms__title}>0xMiner Financial Platform:</h2>
                                <p className={Style.terms__text}>
                                    Central to our business model is the 0xMiner Financial Platform. It acts as the operational hub
                                    where all transactions, minting, and reward distribution occur. The platform is designed for
                                    efficiency, transparency, and security, ensuring that every investor's assets are managed with the
                                    utmost care.
                                </p>

                                <h2 className={Style.terms__title}>Reward Distribution:</h2>
                                <p className={Style.terms__text}>
                                    The culmination of the investor's journey is the reward phase. Based on their minted assets and the
                                    platform's performance, periodic rewards are distributed, ensuring a return on their investment.
                                </p>


                                <h2 className={Style.terms__title}>Strategic Location:</h2>
                                <p className={Style.terms__text}>
                                    Our mining factory is strategically located in Armenia's Economic Free Zone. This advantageous
                                    position offers us several benefits, including regulatory flexibility and operational efficiencies.
                                </p>
                                <img className={Style.dapp__img} src={Location} alt="location" />

                                <h2 className={Style.terms__title}>Commitment to Sustainability:</h2>
                                <p className={Style.terms__text}>
                                    In line with our vision for a sustainable crypto future, our mining operations are powered by
                                    renewable and low-impact energy sources. By utilizing an advanced and ready-to-use infrastructure,
                                    we ensure that our mining activities have a minimal environmental footprint while maximizing returns
                                    for our investors.
                                </p>

                                <h2 className={Style.terms__title}>Benefits of 0xMiner: Financial Approach for Holders</h2>
                                <h2 className={Style.terms__title}>Hardware Value:</h2>
                                <p className={Style.terms__text}>
                                    Holders are provided with transparent information about the capital-to-hardware ratio for mining.
                                    This information empowers them to make informed decisions and clearly understand their investments.
                                </p>

                                <h2 className={Style.terms__title}>Investment Simplicity:</h2>
                                <p className={Style.terms__text}>
                                    Our financial model mirrors the simplicity of real estate investments. By owning an NFT, holders
                                    automatically become eligible to earn returns. Profit realization is as straightforward as selling
                                    and transferring the NFT.
                                </p>

                                <h2 className={Style.terms__title}>Capital Accumulation Plan (CAP):</h2>
                                <p className={Style.terms__text}>
                                    0xMiner introduces a Capital Accumulation Plan (CAP) that provides holders with flexible hardware
                                    investment options. They can choose from one-time investments, staggered contributions, or
                                    reinvestment strategies, allowing for genuine savings and tailored investment approaches.
                                </p>

                                <h2 className={Style.terms__title}>Periodic Returns:</h2>
                                <p className={Style.terms__text}>
                                    NFT holders are entitled to periodic returns based on their investment value and Bitcoin's market
                                    price during the distribution and sale phases. This provides a steady stream of income, contributing
                                    to the sustainability of their investments.
                                </p>

                                <h2 className={Style.terms__title}>Stability Assurance:</h2>
                                <p className={Style.terms__text}>
                                    One of the key benefits is the absence of impermanent loss. Investment value remains fixed upon
                                    deposit, guaranteeing stability regardless of market fluctuations.
                                </p>
                                <img className={Style.dapp__img} src={Scheme} alt="scheme" />
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/principals" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowBack} alt="back" />Principals</Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/how-it-works" onClick={scrollToTopInstant}><img className={Style.dapp__button} src={ArrowNext}
                                alt="next" />How it works?</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>


    )
}

export default BusinessModel;