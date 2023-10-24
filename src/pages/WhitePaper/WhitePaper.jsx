import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function WhitePaper() {

    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>


                                <h1 className={Style.terms__title}>Disclaimer:</h1>
                                <p className={Style.terms__text}>After reading this document or engaging with 0xMiner in any other way, please
                                    ensure that you are
                                    familiar with all the terms used in this document, on our website, and in any other issued
                                    materials. If you have any questions or doubts about the terms and definitions we use, please feel
                                    free to contact us via email at info@oxminer.io. Understanding the project's terminology is
                                    essential for a transparent and informed engagement with 0xMiner.</p>

                                <h2 className={Style.terms__title}>Executive Summary</h2>
                                <p className={Style.terms__text}>This document serves as the official whitepaper of 0xMiner, a visionary company
                                    at the forefront of decentralized finance and blockchain technology. 0xMiner stands as a beacon of
                                    innovation in the cryptocurrency landscape, offering a Secure and profitable Crypto Solution that
                                    combines NFTs with Bitcoin mining to provide users with unparalleled opportunities for lucrative
                                    returns and long-term investment avenues.
                                    <br /><br />
                                    Bitcoin mining, the process of verifying and adding new transactions to the blockchain, has
                                    traditionally demanded specialized hardware, software, and substantial energy resources. This
                                    exclusivity has made it challenging for individuals to participate in Bitcoin mining.
                                    <br /><br />
                                    0xMiner solves this problem by tokenizing Bitcoin mining contracts. This means that users can
                                    purchase a fraction of a mining contract without having to invest in the hardware, software, and
                                    energy required to mine Bitcoin themselves.
                                    <br /><br />
                                    But we don't stop there. 0xMiner's mission is to enhance the utility of various digital assets,
                                    including meme, multiverse, and gaming tokens, with a focus on boosting both token value and
                                    community engagement.
                                    <br /><br />
                                    The time to invest in 0xMiner is now. We strategically acquired mining devices during the Bear
                                    market, positioning ourselves for the impending Bull Run. With the potential for ASIC prices to
                                    surge up to 10x during Bull Markets and Bitcoin's value forecasted to reach $100,000 by 2024, the
                                    opportunities for long-term gains are quite remarkable.
                                    <br /><br /><br />
                                </p>
                            </div>

                        </div>


                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowBack} alt="home" />Homepage</Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/introduction" onClick={scrollToTopInstant}><img className={Style.dapp__button}
                                src={ArrowNext} alt="next" />Introduction</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default WhitePaper;