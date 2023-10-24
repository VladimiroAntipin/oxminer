import "../../pages/Homepage/Home/mailerlite";
import Style from "./RoadmapJoin.module.css";
import Mail from "../../images/mail-blue.png";

function RoadmapJoin() {

    return (
        <div className={Style.roadmap__join}>
            <p className={Style.roadmap__mark}>!</p>
            <p className={Style.roadmap__jointext}>
                <span className={Style.roadmap__span}>Don't miss the OxMiner launch.<br /></span>
                Join our community now to stay updated!
            </p>
            <button
              className={[Style.roadmap__link, "ml-onclick-form"].join(" ")}
              ref={(e) => {
                if (!e) return;
                if (e.attributes.getNamedItem("onclick")) return;
                e.setAttribute("onclick", 'window.ml("show", "sIV6lP", true);');
              }}
            >
                <img className={Style.roadmap__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </button>

        </div>
    )
}

export default RoadmapJoin;