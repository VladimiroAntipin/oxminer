import Style from "./Team.module.css";
import Antonio from "../../../images/antonio-photo.png";
import Paul from "../../../images/paul-photo.png";
import Tatiana from "../../../images/tatiana-photo.png";
import Jordan from "../../../images/jordan-photo.png";
import Hato from "../../../images/hato-photo.png";
import Gleb from "../../../images/gleb-photo.png";

function TeamSection() {
    return (
        <section className={Style.team} id="team">
        <div className={Style.team__content}>
            <h2 className={Style.team__title} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">Team
            </h2>
            <div className={Style.team__tablewrapper}>
                <div className={Style.team__table}>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Antonio} alt="CEO" />
                        <h3 className={Style.team__tablecardtitle}>Antonio Grego<br/>CEO</h3>
                        <p className={Style.team__tablecardtext}>CBDO Ecos mining, C level roles<br/>in EdTech Industry (Foxford,
                            Novakid)</p>
                    </div>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Paul} alt="CTO" />
                        <h3 className={Style.team__tablecardtitle}>Paul West<br/>CTO</h3>
                        <p className={Style.team__tablecardtext}>CTO of PiProtocol, CTO of Block<br/>Leader, CTO of StraDefi,
                            Blockchain<br/>Architect, Smart Contract Developer</p>
                    </div>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Tatiana} alt="CFO" />
                        <h3 className={Style.team__tablecardtitle}>Tatiana Scherb<br/>CFO</h3>
                        <p className={Style.team__tablecardtext}>ex KPMG Head of Crypto<br/>& Digital Assets</p>
                    </div>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Jordan} alt="CMO" />
                        <h3 className={Style.team__tablecardtitle}>Jordan Charters<br/>CMO</h3>
                        <p className={Style.team__tablecardtext}>Co-founder of PolyDoge, Creator of<br/>Polycon, PR,
                            Marketing<br/>and
                            communication specialist</p>
                    </div>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Hato} alt="Creative director" />
                        <h3 className={Style.team__tablecardtitle}>Hato Mato<br/>Creative director</h3>
                        <p className={Style.team__tablecardtext}>16 years of graphic design, product<br/>design, brand building
                            and
                            visual<br/>communication experience. NFT Artist.<br/>Worked with dozens Blockchain projects
                        </p>
                    </div>

                    <div className={Style.team__tablecard}>
                        <img className={Style.team__tablecardimg} src={Gleb} alt="CPO" />
                        <h3 className={Style.team__tablecardtitle}>Gleb Vinogradov<br/>CPO</h3>
                        <p className={Style.team__tablecardtext}>Co-founder and CMO<br/>at Sinum</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default TeamSection;