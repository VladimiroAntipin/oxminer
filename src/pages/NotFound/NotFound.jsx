import Logo from "../../images/logo-type-part.svg";
import { Link } from "react-router-dom";
import Style from "./NotFound.module.css";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function NotFound() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.comingsoon}>
                        <img className={Style.home__logo} src={Logo} alt="OxMiner" />
                        <h1 className={Style.comingsoon__title}>Error 404 - Page not found</h1>
                        <Link className={Style.comingsoon__link} to="/" onClick={scrollToTopInstant}>Go to the homepage</Link>
                    </section>
                </div>
            </div>
        </>

    )
}

export default NotFound;