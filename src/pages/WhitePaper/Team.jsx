import Style from "./WhitePaper.module.css";
import Logo from "../../images/logo-type-part.svg";
import ArrowBack from "../../images/arrow-back.png";
import ArrowNext from "../../images/arrow-next.png";
import { Link } from "react-router-dom";
import AppStyle from "../../components/App/App.module.css";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function Team() {
    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.terms}>
                        <div className={Style.terms__content}>
                            <img className={Style.terms__logo} src={Logo} alt="OxMiner" />

                            <div className={Style.terms__textContainer}>


                                <h1 className={Style.terms__title}>Team and Partners <br /><br />
                                    Meet the 0xMiner Team
                                </h1>
                                <p className={Style.terms__text}>
                                    Our journey at 0xMiner is guided by a dedicated and experienced team committed to pioneering
                                    innovative solutions in the crypto and blockchain space. Get to know the faces behind 0xMiner:
                                    <br /><br /><br />
                                    Antonio Grego (CEO) <br /><br />
                                    Antonio Grego, our CEO, is a visionary leader with a passion for blockchain technology and
                                    decentralized finance. With a wealth of experience and expertise, he leads the 0xMiner team in its
                                    mission to create a secure and profitable DeFi ecosystem.
                                    <br /><br /><br />
                                    Tatiana Scherb (CFO) <br /><br />
                                    Tatiana Scherb is an accomplished CFO with extensive experience in the field of cryptocurrency and
                                    digital assets. Before her role in 0xMiner, she served as the Head of Crypto and Digital Assets at
                                    KPMG, where she provided strategic consulting and advisory services to clients in the blockchain
                                    industry. With her deep knowledge of the crypto market and financial expertise, Tatiana has helped
                                    numerous companies navigate the complexities of the digital asset space and achieve their business
                                    objectives.
                                    <br /><br /><br />
                                    Jordan Charters (CMO) <br /><br />
                                    Jordan Charters is a remarkable personality with a diverse range of skills and experience that has
                                    made him a successful entrepreneur. He is a crypto enthusiast who has spearheaded several successful
                                    projects in the blockchain industry. Jordan is the creator of MetaPetz, a highly innovative
                                    NFT-based project and he is the co-founder of two other crypto projects, PolyDoge and SaiyanPEPE.
                                    <br /><br /><br />
                                    Paul West (CTO) <br /><br />
                                    Paul West is a highly experienced blockchain professional, currently serving as the Chief Technology
                                    Officer (CTO) of Pi Protocol, Block Leader, and StraDefi. With his extensive knowledge and expertise
                                    in blockchain architecture and smart contract development, Paul has been instrumental in the
                                    development and deployment of various blockchain-based projects. As a CTO, he has led his teams to
                                    success using his technical prowess and strategic thinking. Paul is known for his ability to design
                                    and implement complex blockchain solutions that enable seamless transactions while ensuring the
                                    highest level of security and reliability. Throughout his career, he has established himself as a
                                    prominent figure in the blockchain industry and continues to contribute to the growth and
                                    development of the space.
                                    <br /><br /><br />
                                    Hato Mato (Creative Director) <br /><br />
                                    Hato Mato is an accomplished professional with a rich experience of 16 years in the design and
                                    marketing industry. He has collaborated with several Fortune 500 companies, helping them with their
                                    branding elements, websites, and mobile apps/games. Hato Mato is also the proud owner of a
                                    successful lifestyle brand and a web development studio. He co-founded London Tech Stars and Startup
                                    Bootcamp finalist tech startups in the past. Over the last four years, Hato Mato has been actively
                                    working in the crypto industry. He has a proven track record of working on high-value projects with
                                    a market cap of over 300 million dollars. He is well-known in the industry as an NFT OG, having
                                    worked with NFTs since 2019. He was also the top NFT creator seller on Rarible in the early 2020s.
                                    Hato Mato has worked with over 20 crypto projects across various fields such as DeFi, NFT, games,
                                    and meme coins. He held positions in product design, marketing, or creative execution in these
                                    projects.
                                    <br /><br /><br />
                                    Gleb Vinogradov (CPO) <br /><br />
                                    Gleb Vinogradov is co-founder and CPO of Sinum, a well-known name in the crypto industry. He has
                                    been passionate about cryptocurrencies since 2018 and has worked on multiple crypto projects,
                                    including mining, algorithmic trading, node running, and NFT projects. Gleb's main desire is to
                                    create magnificent IT products that make the world a better and more convenient place.
                                </p>

                                <h1 className={Style.terms__title}>Our Partnerships
                                </h1>
                                <p className={Style.terms__text}>
                                    While 0xMiner is driven by a dedicated in-house team, we understand the importance of collaboration
                                    and strategic partnerships in the crypto space. Our partnerships enable us to offer a comprehensive
                                    and diverse range of services to our users.
                                    <br /><br /><br />
                                    As we continue to expand and innovate, we will forge strategic alliances with industry leaders,
                                    innovators, and organizations that share our vision for a decentralized and financially inclusive
                                    future.
                                </p>
                            </div>
                        </div>

                        <div className={Style.dapp__links}>
                            <Link className={Style.dapp__linkyellow} to="/white-paper/roadmap" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowBack} alt="back" />
                                Roadmap
                            </Link>
                            <Link className={Style.dapp__linkgreen} to="/white-paper/conclusion" onClick={scrollToTopInstant}>
                                <img className={Style.dapp__button} src={ArrowNext} alt="next" />
                                Conclusion
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Team;