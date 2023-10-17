import Style from "./Roadmap.module.css";
import RoadmapJoin from "../../../components/RoadmapJoin/RoadmapJoin";
import Spade from "../../../images/spade-flat.png";
import NFT from "../../../images/NFT-flat.png";
import Townhall from "../../../images/townhall-flat.png";
import B2B from "../../../images/b2b-flat.png";

function RoadmapSection() {
    return (
        <section className={Style.roadmap} id="roadmap">
            <div className={Style.roadmap__content}>

                <h2 className={Style.roadmap__title}>Roadmap Keypoints</h2>
                <p className={Style.roadmap__text}>Detailed Roadmap to be released after launch of Genesis NFT collection</p>

                <div className={Style.roadmap__tablewrapper}>
                    <div className={Style.roadmap__table}>

                        <div className={Style.roadmap__tablecard}>
                            <img className={Style.roadmap__tablecardimg} src={Spade} alt="spade" />
                            <h3 className={Style.roadmap__tablecardtitle}>NFT Minting<br />and BTC<br /> Mining Platform</h3>
                        </div>

                        <div className={Style.roadmap__tablecard}>
                            <img className={Style.roadmap__tablecardimg} src={NFT} alt="nft" />
                            <h3 className={Style.roadmap__tablecardtitle}>NFT Ecosystem<br />Booster Collection</h3>
                        </div>

                        <div className={Style.roadmap__tablecard}>
                            <img className={Style.roadmap__tablecardimg} src={Townhall} alt="townhall" />
                            <h3 className={Style.roadmap__tablecardtitle}>Liquid Staking Token<br />and staking Platform</h3>
                        </div>

                        <div className={Style.roadmap__tablecard}>
                            <img className={Style.roadmap__tablecardimg} src={B2B} alt="b2b" />
                            <h3 className={Style.roadmap__tablecardtitle}>B2B Liquidity<br />Services</h3>
                        </div>

                    </div>
                </div>
            </div>

            <RoadmapJoin />
        </section>
    )
}

export default RoadmapSection;