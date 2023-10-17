import Style from "./EcosJoin.module.css";
import Mail from "../../images/mail-blue.png";

function EcosJoin() {
    return (
        <div className={Style.ecos__join}>
            <p className={Style.ecos__mark}>!</p>
            <p className={Style.ecos__jointext}>
                <span className={Style.ecos__span}>Don't miss the OxMiner launch.<br /></span>
                Join our community now to stay updated!
            </p>
            <a className={Style.ecos__link} href="/">
                <img className={Style.ecos__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </a>
        </div>
    )
}

export default EcosJoin;