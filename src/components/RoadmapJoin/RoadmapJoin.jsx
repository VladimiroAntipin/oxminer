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
            <a className={Style.roadmap__link} href="/">
                <img className={Style.roadmap__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </a>
        </div>
    )
}

export default RoadmapJoin;