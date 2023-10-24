import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";
import PDF from "../../document/how-to-buy-NFT-OxMiner.pdf";

function HowItWorks() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>How it Works</h1>
                                <p className={Style.terms__text}>
                                    0xMiner operates on a simple yet powerful principle, offering cryptocurrency holders the opportunity
                                    to mint NFTs that grant access to our cutting-edge mining farm. Here's a step-by-step breakdown of
                                    how it works:
                                </p>

                                <h2 className={Style.terms__title}>1. NFT Minting:</h2>
                                <p className={Style.terms__text}>
                                    Cryptocurrency holders can mint NFTs on the 0xMiner platform. We proudly present the NFT Genesis 1
                                    collection, comprising 500 NFTs, each priced at 2 ETH. These NFTs are strategically designed to
                                    target an impressive 300% Bitcoin return over a span of 4 years.
                                </p>


                                <h2 className={Style.terms__title}>2. Accessibility for All:</h2>
                                <p className={Style.terms__text}>
                                    0xMiner's NFT minting is inclusive and open to all. To participate, individuals need a minimum of
                                    1000 USDT or an equivalent amount in supported tokens. This modest requirement grants them access to
                                    4 years of Bitcoin mining opportunities.
                                </p>

                                <h2 className={Style.terms__title}>3. Earnings Variation:</h2>
                                <p className={Style.terms__text}>
                                    Earnings generated through NFT minting can vary based on the minting price and the overall
                                    productivity of our mining farm.
                                </p>

                                <h2 className={Style.terms__title}>4. Secondary Market Trading:</h2>
                                <p className={Style.terms__text}>
                                    For added profit potential, holders have the option to trade their minted NFTs on the market, taking
                                    advantage of market dynamics and demand.
                                </p>

                                <h2 className={Style.terms__title}>0xMiner Platform Fees:</h2>
                                <p className={Style.terms__text}>
                                    Genesis 1 NFTs: No fees apply during the Genesis 1 phase.
                                    <br /><br />
                                    Post-launch NFT Minting: A nominal 3% fee is levied for minting NFTs after the Genesis 1 phase.
                                    <br /><br />
                                    Operational Costs: 0xMiner deducts a proportion of Bitcoin for operational expenses during
                                    withdrawals.
                                    <br /><br />
                                    Smart Contracts: Gas fees are incurred based on the blockchain network used.
                                    <br /><br />
                                    NFT Secondary Sales: A modest 3% royalty fee is enforced through smart contracts.
                                </p>

                                <h2 className={Style.terms__title}>Vesting and APR Highlights:</h2>
                                <p className={Style.terms__text}>
                                    Immediate Rewards: Gen 1 NFT holders start earning rewards from day one.
                                    <br /><br />
                                    1-Year Vesting: To optimize the mining setup, rewards are locked for a year.
                                    <br /><br />
                                    Value Appreciation: There is potential for increased NFT value during the vesting period.
                                    <br /><br />
                                    Guaranteed ROI: Exclusive to Gen 1 NFTs, a guaranteed 300% return on investment.
                                    <br /><br />
                                    Rising APR: Over the course of 4 years, the annual percentage rate (APR) is set to increase as
                                    mining power grows, ensuring a lucrative and sustainable investment.
                                </p>

                                <h2 className={Style.terms__title}>Benefits: 0xMiner Gen 1 NFT perks (Why you need to buy them now)</h2>
                                <p className={Style.terms__text}>
                                    At 0xMiner, NFTs are not just collectibles; they are your key to an exclusive world of benefits and
                                    opportunities. Our Gen 1 NFT collection offers an array of unique perks that make them a must-have
                                    in your crypto portfolio:
                                    <br /><br />
                                    1. Handcrafted Masterpieces: <br />
                                    Every Gen 1 NFT in the 0xMiner collection is a meticulously crafted work of art, a testament to
                                    creativity and innovation. These NFTs are not only aesthetically pleasing but also your gateway to
                                    the world of passive income.
                                    <br /><br /><br />
                                    2. Guaranteed ROI: <br />
                                    When you own a Gen 1 NFT, you gain access to our investment platform, and here's where the magic
                                    happens. We guarantee a remarkable 300% return on your investment over a span of 4 years. However,
                                    this is just the beginning; depending on the price of Bitcoin and market conditions, your rewards
                                    could soar even higher. This guarantee is a golden opportunity that may not be available to future
                                    users when our platform reaches full operation capacity. <br />
                                    let's give a concrete example: acquiring a Gen1 NFT is priced at $3,200 based on the current ETH
                                    values, with a projected return of $9,587 over four years, representing an impressive 300% estimated
                                    profit. It's important to note that this projection does not account for potential surges in NFT
                                    value, providing investors with the flexibility for timely resale.
                                    <br /><br /><br />
                                    3. Become an Initial Investor: <br />
                                    By holding a Gen 1 NFT, you become an Initial Investor in the 0xMiner project. This prestigious
                                    status grants you the title of a Stockholder in our project and the related mining farm, giving you
                                    a stake in its success.
                                    <br /><br /><br />
                                    4. Active Project Participation: <br />
                                    Gen 1 NFT holders are not just passive investors; they become active contributors to the 0xMiner
                                    project. As part of the "board of Gen 1 investors" in our Discord server, you have the right to
                                    propose ideas and vote on them. Your voice matters, and you play a vital role in shaping the future
                                    of the project.
                                    <br /><br /><br />
                                    5. Airdrops and Exclusive Access: <br />
                                    Hold onto your Gen 1 NFT, and you'll be eligible for airdrops of our project's NFTs and tokens, as
                                    well as those from our partners. Additionally, you gain private access to special offers and
                                    discounts on future NFT limited collections.
                                    <br /><br /><br />
                                    6. Exclusive Merchandise and VIP Events: <br />
                                    As a Gen 1 NFT holder, you'll receive free limited-edition 0xMiner merchandise or enjoy discounts on
                                    it. Moreover, you'll gain VIP access to our future events in both the metaverse and the real world,
                                    ensuring you're at the forefront of our project's exciting developments.
                                    <br /><br /><br />
                                    7. Exclusive Investment Opportunities: <br />
                                    Join an elite club of 0xMiner investors, with access to investment proposals in the crypto business,
                                    NFTs, and real-world assets. These opportunities are typically reserved for Very High Net Worth
                                    Individuals (VHNWIs) and institutional investors, but as a Gen 1 holder, you'll have access.
                                    <br /><br /><br />
                                    8. Leave Your Mark: <br />
                                    Your journey with 0xMiner will be immortalized. Your name will be engraved on the 0xMiner Chapel, a
                                    symbol of your lasting impact in both the real and metaverse.
                                    <br /><br /><br />
                                    To acquire these coveted Gen 1 NFTs, you'll first need to purchase cryptocurrency and set up a
                                    wallet. We've provided a convenient step-by-step guide to buying 0xMiner Gen 1 NFTs&nbsp;

                                    <a to="/Gen1NFT" className={Style.dapp__textlink} href={PDF} target="_blank" rel="noreferrer">here</a>
                                    . Join us,
                                    own a piece of the future, and unlock a world of possibilities with 0xMiner Gen 1 NFTs!
                                </p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/business-model" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowBack} alt="back" />
                                Business Modal
                            </Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/roadmap" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowNext} alt="next" />
                                Roadmap
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HowItWorks;