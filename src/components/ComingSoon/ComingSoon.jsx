import Style from "./ComingSoon.module.css";
import Logo from "../../images/logo-type-part.svg";
import { Link } from "react-router-dom";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function ComingSoon() {
    return (
        <>
            <section className={Style.comingsoon}>
                <img className={Style.home__logo} src={Logo} alt="OxMiner" />
                <h1 className={Style.comingsoon__title}>Coming soon</h1>
                <Link className={Style.comingsoon__link} to="/" onClick={scrollToTopInstant}>Go to the homepage</Link>
            </section>
        </>
    )
}

export default ComingSoon;