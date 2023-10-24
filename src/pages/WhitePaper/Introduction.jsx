import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Introduction() {

    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>

                                <h1 className={Style.terms__title}>Introduction</h1>
                                <p className={Style.terms__text}>The blockchain ecosystem is rapidly changing, and new and innovative solutions
                                    are always emerging.
                                    0xMiner is one solution that aims to solve some of the industry's key challenges, such as the lack
                                    of secure and profitable investment platforms, the trust and transparency gap in DeFi, and the
                                    volatility of crypto-linked assets.</p>

                                <h2 className={Style.terms__title}>The Problem</h2>
                                <p className={Style.terms__text}> Retail investors struggle to find secure crypto platforms with top APY/APR,
                                    limiting their passive
                                    income opportunities. DeFi platforms are often plagued by trust and transparency issues, which
                                    hinder informed investing and deter institutional participation. Additionally, crypto-linked DeFi
                                    platforms face price fluctuations, which create uncertainty in asset values and deter cautious
                                    users.
                                    <br /><br /><br />
                                    1. APY/APR Platform Shortage:
                                    Retail investors have long grappled with the scarcity of secure crypto platforms offering attractive
                                    Annual Percentage Yield (APY) and Annual Percentage Rate (APR). This shortage limits their ability
                                    to generate passive income from their crypto assets.
                                    <br /><br /><br />
                                    2. DeFi's Trust & Transparency Issue:
                                    The inherent trust gap within the DeFi sector creates uncertainty among investors and discourages
                                    institutional participation. The lack of transparency and accountability has been a roadblock to
                                    informed investing in crypto platforms.
                                    <br /><br /><br />
                                    3. DeFi's Volatility Challenge:
                                    The crypto-linked DeFi platforms are often subject to extreme price fluctuations, leading to
                                    uncertainty in the valuation of assets. This volatility dissuades cautious users from participating
                                    in the DeFi ecosystem.
                                    <br /><br /><br />
                                    4. Token Utility & Earnings Gap:
                                    A notorious amount of tokens in the crypto space, including meme and gaming coins, lack practical
                                    utility and yield opportunities. This deficiency diminishes their adoption and value for token
                                    holders.
                                </p>

                                <h2 className={Style.terms__title}>0xMiner: A Secure And Profitable Crypto Solution</h2>
                                <p className={Style.terms__text}>0xMiner is a secure and profitable crypto solution addressing the aforementioned
                                    challenges, combining NFTs with Bitcoin mining to offer lucrative returns and long-term investment
                                    avenues.
                                    <br /><br /><br />
                                    At 0xMiner, we place paramount importance on utility and stability. We understand the trust and
                                    transparency concerns afflicting the DeFi landscape. Therefore, we have engineered a platform that
                                    transcends these issues, offering a secure haven for global users to accrue passive Bitcoin yields
                                    with unwavering confidence. Our platform is designed to be your steadfast companion in a volatile
                                    crypto market, ensuring dependable returns.
                                    <br /><br /><br />
                                    NFT & Bitcoin Fusion
                                    0xMiner's NFT & Bitcoin Fusion solution offers investors a unique and innovative way to participate
                                    in the Bitcoin mining industry. By purchasing Genesis NFTs, users can gain access to a fraction of a
                                    Bitcoin mining farm without having to invest in the hardware, software, and energy required to mine
                                    Bitcoin themselves.
                                    <br /><br /><br />
                                    0xMiner's NFT mining contracts are backed by real Bitcoin mining ASICS. This makes 0xMiner a secure
                                    and transparent way to participate in the Bitcoin mining industry. Additionally, 0xMiner offers some
                                    of the industry's highest returns, with up to 75% APRs.
                                    <br /><br /><br />
                                    Stability & Global Reach
                                    0xMiner is committed to providing a stable and reliable platform for its users, with NFTs backed by
                                    real Bitcoin mining ASICS, allowing holders to track their earnings in real-time. Additionally,
                                    0xMiner's DeFi-based real world assets (RWA) tokenization helps mitigate crypto-linked asset
                                    volatility. 0xMiner is also available to users all over the world making it a truly global platform
                                    for investors to earn passive BTC yields securely.
                                    <br /><br /><br />
                                    Recovery in Volatile Markets
                                    0xMiner's DeFi-based RWA tokenization is a unique feature that allows investors to regain the lost
                                    value of tokens in fluctuating markets. This is done by tokenizing the bitcoin mining process: an
                                    industrial activity that produces real value . When the value of crypto-linked assets declines,
                                    investors can exchange their tokens for RWA tokens backed by real-world assets. This allows
                                    investors to preserve their capital and even profit from market volatility.
                                    <br /><br /><br />
                                    Enhanced Digital Asset Utility
                                    0xMiner is focused on amplifying the utility of various digital assets, including meme, multiverse,
                                    and gaming tokens. 0xMiner does this by offering a variety of features that allow users to interact
                                    with their digital assets in new and innovative ways. Similar to real estate - own the NFT and earn
                                    returns. By enhancing the utility of digital assets, 0xMiner is helping to boost both token value
                                    and community engagement.
                                    <br /><br /><br />
                                    Effortless Diversification
                                    0xMiner is designed to make it easy for investors to diversify their portfolios by offering a
                                    variety of investment options, including Bitcoin mining NFTs, DeFi-based RWA tokens, and Liquid
                                    staking, allowing investors to create a diversified portfolio of crypto assets without spending
                                    hours researching and monitoring the market.
                                    <br /><br />
                                </p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowBack} alt="back" />WhitePaper</Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/values" onClick={scrollToTopInstant}><img className={Style.dapp__button} src={ArrowNext}
                                alt="next" />Values</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Introduction;