import Style from "./Info.module.css";
import Bull from "../../../images/thinking-bull.png";
import Pepe from "../../../images/eth-and-pepe-icon.svg";
import Arrow from "../../../images/arrow-blue.png";
import OxMinerIcon from "../../../images/ox-and-miner-icon.svg";
import OxMinerMainIcon from "../../../images/oxminer-main-icon.svg";
import BtcIcon from "../../../images/btc-icon.svg";

function InfoSection() {
   
    return (
        <section className={Style.info} id="info" >
            <div className={Style.info__content}>
                <img className={Style.info__img} src={Bull} alt="bull" />
                <div className={Style.info__textcontainer} data-aos="fade-down" data-aos-duration="1000">
                    <h2 className={Style.info__text}>The First DeFi backed by<br />a real production of value.</h2>
                    <p className={Style.info__textyellow}>Industrial process of BTC Mining<br />as a key to secure
                        profitable<br />crypto investments.</p>
                    <p className={Style.info__textblue}>OxMiner combines NFTs with Bitcoin mining,<br />offering lucrative returns and
                        long-term investment avenues.</p>
                    <p className={Style.info__textlight}>Prioritizing utility and stability,<br />we provide a platform for global
                        users<br />to earn passive BTC yields securely.
                    </p>
                </div>
            </div>

            <div className={Style.info__table} data-aos="zoom-out" data-aos-duration="1000">
                <div className={Style.info__card1}>
                    <div className={Style.info__cardimgcontainer}>
                        <img className={Style.info__cardimg} src={Pepe} alt="icon" />
                    </div>
                    <p className={Style.info__cardtext}>Invest Your Favourite<br />Tokens to Mint NFT<br />on OxMiner
                    </p>
                    <div className={Style.info__cardnumberbox}>
                        <p className={Style.info__cardnumber}>1</p>
                    </div>
                </div>

                <img className={Style.info__tablearrow} src={Arrow} alt="arrow" />

                <div className={Style.info__card2}>
                    <div className={Style.info__cardimgcontainer}>
                        <img className={Style.info__cardimg} src={OxMinerIcon} alt="icon" />
                    </div>
                    <p className={Style.info__cardtext}>Acquire $-valued<br />NFT and earn<br />competitive APR
                    </p>
                    <div className={Style.info__cardnumberbox}>
                        <p className={Style.info__cardnumber}>2</p>
                    </div>
                </div>

                <img className={Style.info__tablearrowreverse} src={Arrow} alt="arrow" />

                <div className={Style.info__card3}>
                    <div className={Style.info__cardimgcontainer}>
                        <img className={Style.info__cardimg} src={OxMinerMainIcon} alt="icon" />
                    </div>
                    <p className={Style.info__cardtext}>Sell NFT at XXX%<br />profit & reinvest</p>
                    <div className={Style.info__cardnumberbox}>
                        <p className={Style.info__cardnumber}>3</p>
                    </div>
                </div>

                <img className={Style.info__tablearrow} src={Arrow} alt="arrow" />

                <div className={Style.info__card4}>
                    <div className={Style.info__cardimgcontainer}>
                        <img className={Style.info__cardimg} src={BtcIcon} alt="icon" />
                    </div>
                    <p className={Style.info__cardtext}>Compound<br />and earn BTC<br />with amazing APR</p>
                    <div className={Style.info__cardnumberboxyellow}>
                        <p className={Style.info__cardnumber}>4</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoSection;