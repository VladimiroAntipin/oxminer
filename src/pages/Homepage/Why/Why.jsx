import Style from "./Why.module.css";
import Cart from "../../../images/illustrated-cart.png";
import Map from "../../../images/illustrated-map.png";
import Townhall from "../../../images/illustrated-townhall.png";
import Token from "../../../images/illustrated-community-tokens.png";
import Spade from "../../../images/illustrated-spade.png";
import BTC from "../../../images/illustrated-btc.png";
import Magnifier from "../../../images/illustrated-magnifier.png";
import AiBull from "../../../images/illustrated-ai-bull.png";

function WhySection() {

    return (
        <section className={Style.why} id="why" >

        <div className={Style.why__content}>
            <h2 className={Style.why__title} data-aos="fade-right" data-aos-duration="1000">Why OxMiner?</h2>
            <div className={Style.why__table} data-aos="zoom-in" data-aos-duration="1000">

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Cart} alt="cart" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>Yield</h3>
                        <p className={Style.why__tablecardtext}>OxMiner offers lucrative sustainable APR for your investment.
                        </p>
                    </div>
                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Map} alt="map" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>Easy to Use</h3>
                        <p className={Style.why__tablecardtext}>Intuitive and clear revenue model that is user-friendly.</p>
                    </div>
                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Townhall} alt="townhall" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>Governance</h3>
                        <p className={Style.why__tablecardtext}>Every NFT holder is an Initial Investor in the project, which
                            means he is a Stockholder of the project.</p>
                    </div>
                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Token}
                            alt="community" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>Community tokens</h3>
                        <p className={Style.why__tablecardtext}>We bring investment opportunities for your favourite community
                            tokens.</p>
                    </div>
                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Spade} alt="spade" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>BTC Mining Powered</h3>
                        <p className={Style.why__tablecardtext}>First ever DeFi platform powered by industrial BTC Mining.</p>
                    </div>
                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={BTC} alt="btc" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>BTC Reward</h3>
                        <p className={Style.why__tablecardtext}>No more imaginary value tokens as the primary staking reward.
                        </p>
                    </div>

                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={Magnifier} alt="magnifier" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>Fully Transparent</h3>
                        <p className={Style.why__tablecardtext}>We offer a fully transparent and stable financial system.</p>
                    </div>

                </div>

                <div className={Style.why__tablecard}>
                    <div className={Style.why__tablecardimgwrap}>
                        <img className={Style.why__tablecardimg} src={AiBull} alt="ai-bull" />
                    </div>
                    <div className={Style.why__tablecardtextcontainer}>
                        <h3 className={Style.why__tablecardtitle}>AI Integration</h3>
                        <p className={Style.why__tablecardtext}>OxMiner leverages AI trading algorithms for effective treasury
                            management.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WhySection;