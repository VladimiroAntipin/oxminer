import "./mailerlite";
import Style from "./Home.module.css";
import Logo from "../../../images/logo-type-part.svg";
import Arrow from "../../../images/arrow.svg";
import Discord from "../../../images/discord-icon.png";
import Email from "../../../images/mail-blue.png";
import Bull from "../../../images/bull-in-mine-cart.png";
import ScrollIcon from "../../../images/mouse-scroll-icon.png";
import { Link } from "react-router-dom";
import Pdf from "../../../document/project-brief.pdf";
import PdfIcon from "../../../images/pdf-icon.png";

function HomeSection() {
  return (
    <section className={Style.home} id="home">
      <div className={Style.home__content}>
        <div
          className={Style.home__textcontainer}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img className={Style.home__logo} src={Logo} alt="OxMiner" />
          <h1 className={Style.home__text}>
            Unlocking Sustainable Passive Income
            <br />
            via Bitcoin Mining Tokenization
          </h1>
          <p className={Style.home__textgreen}>
            for Sustainable
            <br />
            PASSIVE INCOME
          </p>

          <div className={Style.home__yellowtextcontainer}>
            <p className={Style.home__textyellow}>
              Don't Miss the DeFi Revolution
            </p>
            <img className={Style.home__arrow} src={Arrow} alt="Arrow" />
          </div>

          <div className={Style.home__links}>
            <Link
              className={Style.home__linkpurple}
              to="https://discord.com/"
              target="_blank"
            >
              <img
                className={Style.home__socialicon}
                src={Discord}
                alt="Discord"
              />
              Join Community
            </Link>

            <a
              className={Style.home__linkyellow}
              href={Pdf}
              target="_blank"
              rel="noreferrer"
            >
              <img className={Style.home__socialicon} src={PdfIcon} alt="pdf" />
              Project Brief
            </a>

            <button
              className={[Style.home__linkgreen, "ml-onclick-form"].join(" ")}
              ref={(e) => {
                if (!e) return;
                if (e.attributes.getNamedItem("onclick")) return;
                e.setAttribute("onclick", 'window.ml("show", "sIV6lP", true);');
              }}
            >
              <img
                className={Style.home__socialicon}
                src={Email}
                alt="Newsletter"
              />
              Join our newsletter
            </button>
          </div>
        </div>

        <img className={Style.home__img} src={Bull} alt="bull-in-mine-cart" />
      </div>

      <div className={Style.home__scrollcontainer}>
        <span className={Style.home__scrollline}>-</span>
        <img className={Style.home__scrollicon} src={ScrollIcon} alt="scroll" />
        <span className={Style.home__scrollline}>-</span>
      </div>
    </section>
  );
}

export default HomeSection;
