import "../../pages/Homepage/Home/mailerlite";
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
            <button
              className={[Style.ecos__link, "ml-onclick-form"].join(" ")}
              ref={(e) => {
                if (!e) return;
                if (e.attributes.getNamedItem("onclick")) return;
                e.setAttribute("onclick", 'window.ml("show", "sIV6lP", true);');
              }}
            >
                <img className={Style.ecos__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </button> 
        </div>
    )
}

export default EcosJoin;