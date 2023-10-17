import Style from "./Ecos.module.css";
import EcosJoin from "../../../components/EcosJoin/EcosJoin";
import OxMiner from "../../../images/0xminer.png";
import Clock from "../../../images/clock-icon.png";
import Customer from "../../../images/customers-icon.png";
import Capacity from "../../../images/capacity-icon.png";
import Location from "../../../images/location-icon.png";
import Warning from "../../../images/warning-icon.png";
import BullBTC from "../../../images/bull-with-btc.png";

function EcosSection() {

    return (
        <section className={Style.ecos} id="ecos" >

            <EcosJoin />

            <div className={Style.ecos__content}>

                <div className={Style.ecos__textcontainer} data-aos="fade-right" data-aos-duration="1000">
                    <h2 className={Style.ecos__title}>We harness our extensive<br />expertise in the BTC<br />Mining industry</h2>
                    <p className={Style.ecos__text}>and blend it with cutting-edge NFT<br />minting, resulting in an
                        unparalleled<br />investment opportunity.
                    </p>
                    <p className={Style.ecos__textsmall}>Our Mining Factory is based in Armenia<br />in the
                        <span className={Style.ecos__textsmallspan}> “Free Economic Zone" </span>
                        territory using<br />a ready-to-use advanced infrastructure</p>
                    <img className={Style.ecos__img} src={OxMiner} alt="Oxminer" />
                </div>


                <div className={Style.ecos__cardcontainer} data-aos="fade-left" data-aos-duration="1000">
                    <div className={Style.ecos__cardsection}>
                        <img className={Style.ecos__cardsectionimg} src={Clock} alt="clock" />
                        <p className={Style.ecos__cardsectiontext}>
                            <span className={Style.ecos__cardsectionspan}>6 years </span>
                            of providing services<br />in the international market
                        </p>
                    </div>

                    <div className={Style.ecos__cardsection}>
                        <img className={Style.ecos__cardsectionimg} src={Customer} alt="customers" />
                        <p className={Style.ecos__cardsectiontext}>
                            <span className={Style.ecos__cardsectionspan}>Over 160,000</span><br />
                            satisfied customers
                        </p>
                    </div>

                    <div className={Style.ecos__cardsection}>
                        <img className={Style.ecos__cardsectionimg} src={Capacity} alt="capacity" />
                        <p className={Style.ecos__cardsectiontext}>Farm capacity of over
                            <span className={Style.ecos__cardsectionspan}> 200 MW</span>
                        </p>
                    </div>

                    <div className={Style.ecos__cardsection}>
                        <img className={Style.ecos__cardsectionimg} src={Location} alt="location" />
                        <p className={Style.ecos__cardsectiontext}>Located in a
                            <span className={Style.ecos__cardsectionspan}> Free<br />Economic Zone</span>
                        </p>
                    </div>

                    <div className={Style.ecos__cardsection}>
                        <img className={Style.ecos__cardsectionimg} src={Warning} alt="warning" />
                        <p className={Style.ecos__cardsectiontext}>
                            <span className={Style.ecos__cardsectionspan}>No geo-political risks</span>
                            <br />due to FEZ
                        </p>
                    </div>
                    <img className={Style.ecos__imgbull} src={BullBTC} alt="bull-btc" />
                </div>

            </div>
        </section>
    )
}

export default EcosSection;