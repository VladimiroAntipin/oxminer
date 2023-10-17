import AppStyle from "../../components/App/App.module.css";
import Style from "./Gen1NFT.module.css";
import Logo from "../../images/ox-bulls-logo.png";
import BullBig from "../../images/bull-big.png";
import NFTPreview from "../../images/nfts-preview.png";
import Tick from "../../images/tick-icon.png";
import { useState } from "react";
import Wallet from "../../images/wallet-icon.png";

function Gen1NFT() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    return (
        <>
            <div className={AppStyle.body}>
                <div className={AppStyle.page}>
                    <section className={Style.nft}>
                        <div className={Style.nft__content}>
                            <img className={Style.nft__img} src={Logo} alt="Logo" />

                            <div className={Style.nft__wrapper}>
                                <img className={Style.nft__bullbig} src={BullBig} alt="BullBig" />

                                <div className={Style.nft__boxContainer}>
                                    <div className={Style.nft__textContainer}>

                                        {isWalletConnected ?
                                            <>
                                                <div className={Style.nft__textsWrapperConnected}>

                                                    <div className={Style.nft__headerConnected}>
                                                        <div className={Style.nft__headerTextContainerConnected}>
                                                            <p className={Style.nft__walletNumberConnected}>•&nbsp;0x000d0e0000w0w0w</p>
                                                            <p className={Style.nft__walletBalanceConnected}>14,67 ETH Available</p>
                                                        </div>
                                                    </div>

                                                    <div className={Style.nft__mintContainerConnected}>

                                                        <div className={Style.nft__mintTitleContainerConnected}>
                                                            <h1 className={Style.nft__mintTitleConnected}>Mint OxBull</h1>
                                                            <button className={Style.nft__disconnectBtnConnected} onClick={() => setIsWalletConnected(false)}>disconnect</button>
                                                        </div>

                                                        <div className={Style.nft__mintTextContainerConnected}>
                                                            <div className={Style.nft__mintTextWrapperConnected}>
                                                                <p className={Style.nft__mintTextConnected}>Mint price: <span className={Style.nft__mintCost}>1 OxBull = 1.5 ETH</span></p>
                                                                <p className={Style.nft__mintTextConnected}>Collection Size: 530</p>
                                                                <p className={Style.nft__mintTextConnected}>Limits: none</p>
                                                            </div>
                                                        </div>

                                                        <div className={Style.nft__counterContainerConnected}>
                                                            <div className={Style.nft__counterTextConnected}>
                                                                <p className={Style.nft__textConnected}>Amount of NFTs</p>
                                                            </div>

                                                            <div className={Style.nft__counterConnected}>
                                                                <div className={Style.nft__counterQuantityContainerConnected}>
                                                                    <p className={Style.nft__quantityConnected}>{counter}</p>
                                                                </div>
                                                                <div className={Style.nft__quantityChangerContainerConnected}>
                                                                    <p className={Style.nft__counterChangerConnected} onClick={increase}>▲</p>
                                                                    <p className={Style.nft__counterChangerConnected} onClick={decrease}>▼</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <p className={Style.nft__mintTextConnectedCount}>Mint price: <span className={Style.nft__mintSpanGreenConnected}>{(counter) * 1.5} ETH</span></p>

                                                <div className={Style.nft__walletContainer}>
                                                    <p className={Style.nft__walletText}>MINT</p>
                                                </div>

                                            </>

                                            :

                                            <>
                                                <div className={Style.nft__textsWrapper}>

                                                    <h1 className={Style.nft__title}>Founders NFTs<span className={Style.nft__span}>&nbsp; (GEN1)</span></h1>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <span className={Style.nft__spanYellow}>530</span>
                                                        <p className={Style.nft__yellowText}>&nbsp;Unique Founders NFTs</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Direct profit share from Bitcoin Industrial Mining</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__yellowText}>Minimum estimated <span className={Style.nft__spanYellow}>ROI = 300%</span> in BTC</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Profit share from all OxMiner products <br />
                                                            <span className={Style.nft__spanWhite}>(Public Mining Farms, Liquid staking ...)</span></p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Pre-Emption right for next utility collections</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Profit share from next products launches</p>
                                                    </div>

                                                </div>

                                                <p className={Style.nft__mintText}>Mint price: <span className={Style.nft__mintSpan}>1 OxBull = 1.5 ETH</span></p>

                                                <div className={Style.nft__walletContainer} onClick={() => setIsWalletConnected(true)}>
                                                    <img className={Style.nft__walletImg} src={Wallet} alt="wallet" />
                                                    <p className={Style.nft__walletText}>CONNECT WALLET</p>
                                                </div>

                                            </>}

                                    </div>

                                    <div className={Style.nft__nftImgContainer}>
                                        <div className={Style.nft__mintCounterContainer}>
                                            <p className={Style.nft__mintCounterText}>Minted <span className={Style.nft__mintSpanGreen}>30</span>/500</p>
                                        </div>
                                        <img className={Style.nft__nftImg} src={NFTPreview} alt="NFT" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Gen1NFT;