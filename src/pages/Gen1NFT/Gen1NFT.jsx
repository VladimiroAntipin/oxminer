import { useEffect } from "react";
import AppStyle from "../../components/App/App.module.css";
import Style from "./Gen1NFT.module.css";
import Logo from "../../images/ox-bulls-logo.png";
import BullBig from "../../images/bull-big.png";
import NFTPreview from "../../images/nfts-preview.png";
import Tick from "../../images/tick-icon.png";
import { useState } from "react";
//import Wallet from "../../images/wallet-icon.png";
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
    useContractRead,
} from "wagmi";
import { useBalance } from 'wagmi'

import { useToast } from "@chakra-ui/react";
import Web3 from "web3";
import { CONTRACT_ADDRESS } from "../../contract/contract";
import { abi } from "../../contract/abi";
import { useAccount, useDisconnect } from 'wagmi'
import { CButton } from "./ConnectButton";

function Gen1NFT() {
    const [counter, setCounter] = useState(1);
    const { isConnected, address } = useAccount();
    const increase = () => {
        setCounter(count => count < MAX_COUNT ? count + 1 : count);
    };
    const MAX_COUNT = 9;

    const toast = useToast();
    const [mintBalance, setMintBalance] = useState(0);
    const [maxSupply, setMaxSupply] = useState(0)
    const [price, setPrice] = useState("0")
    const [txStatus, setTxStatus] = useState('idle');
    const { disconnect } = useDisconnect()
    const { data: balancedata } = useBalance({
        address: address,
    })

    useEffect(() => {
        if (!isConnected) {
            const fetchTotalSupplyUsingInfura = async () => {
                const infuraURL = `https://mainnet.infura.io/v3/5dfb566a37304417851c084860c1f737`;
                const web3 = new Web3(infuraURL);
                const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
                try {
                    const supply = await contract.methods.totalSupply().call();
                    setMintBalance(Number(supply));

                    const mintPrice = await contract.methods.paymentAmount().call();
                    setPrice(String(mintPrice));
                } catch (err) {
                    console.error("Failed to fetch data using Infura:", err);
                }
            };

            fetchTotalSupplyUsingInfura();
        }
    }, [isConnected]);


    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    const { data: response, refetch: refetchProjects } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "totalSupply",
        args: [],
        onError: (error) => {
            console.log("Error", error);
        },
        onSuccess: (result) => {
            if (!isNaN(Number(response))) {
                setMintBalance(Number(response));
            }
        },
    });


    const { data: response2, refetch: refetchProjects2 } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "maxSupply",
        args: [],
        onError: (error) => {
            console.log("Error", error);
        },
        onSuccess: (result) => {
            if (!isNaN(Number(response2))) {
                setMaxSupply(Number(response2));
            }
        },
    });

    const { data: response3, refetch: refetchProjects3 } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "paymentAmount",
        args: [],
        onError: (error) => {
            console.log("Error", error);
        },
        onSuccess: (result) => {
            if (!isNaN(Number(response3))) {
                setPrice(String(response3));
            }
        },
    });

    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "buy",
        args: [counter],
        value: price * counter,
        onError: (error) => {
            console.log("Error", error);
            if (isConnected) {
                refetchProjects?.();
                refetchProjects2?.();
                refetchProjects3?.();
            }
        },
        onSuccess: (result) => {
            console.log("Success", result);
        },
    });

    const { data, write, error } = useContractWrite(config);
    const { isSuccess } = useWaitForTransaction({ hash: data?.hash });

    useEffect(() => {
        if (isConnected) {
            refetchProjects?.();
            refetchProjects2?.();
            refetchProjects3?.();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price, mintBalance, maxSupply, isConnected]);


    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "NFT Minted",
                description: "Your OxBull NFT has been minted successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
        if (error) {
            toast({
                title: "Error",
                description: "There was an error minting this token: " + error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                zindex: 9999,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, error]);

    useEffect(() => {
        if (data?.hash) {
            setTxStatus('pending');
        }
        if (isSuccess) {
            setTxStatus('success');
        }
        if (error) {
            setTxStatus('error');
        }
    }, [data, isSuccess, error]);

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

                                        {isConnected ?
                                            <>
                                                <div className={Style.nft__textsWrapperConnected}>

                                                    <div className={Style.nft__headerConnected}>
                                                        <div className={Style.nft__headerTextContainerConnected}>
                                                            <p className={Style.nft__walletNumberConnected}>•{address?.slice(0, 2) + '...' + address?.slice(-5)}</p>
                                                            <p className={Style.nft__walletBalanceConnected}>{(parseFloat(balancedata?.formatted).toFixed(2))} {balancedata?.symbol} Available</p>
                                                        </div>
                                                    </div>

                                                    <div className={Style.nft__mintContainerConnected}>

                                                        <div className={Style.nft__mintTitleContainerConnected}>
                                                            <h1 className={Style.nft__mintTitleConnected}>Mint OxBull</h1>
                                                            <button className={Style.nft__disconnectBtnConnected} onClick={() => disconnect()}>disconnect</button>
                                                        </div>

                                                        <div className={Style.nft__mintTextContainerConnected}>
                                                            <div className={Style.nft__mintTextWrapperConnected}>
                                                                <p className={Style.nft__mintTextConnected}>Mint price: <span className={Style.nft__mintCost}>1 OxBull = {price / 1e18} ETH</span></p>
                                                                <p className={Style.nft__mintTextConnected}>Collection Size: {maxSupply}</p>
                                                                <p className={Style.nft__mintTextConnected}>Limits: none</p>
                                                            </div>
                                                        </div>

                                                        <div className={Style.nft__counterContainerConnected}>
                                                            <div className={Style.nft__counterTextConnected}>
                                                                <p className={Style.nft__textConnected}>NFTs</p>
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

                                                <p className={Style.nft__mintTextConnectedCount}>Mint price: <span className={Style.nft__mintSpanGreenConnected}>{(counter) * price / 1e18} ETH</span></p>

                                                <div className={Style.nft__walletContainer} onClick={() => {
                                                    write?.();
                                                    setTxStatus('pending')
                                                }}>
                                                    <p className={Style.nft__walletText}>
                                                        {txStatus === 'pending' && isConnected
                                                            ? "Pending..."
                                                            : txStatus === 'error'
                                                                ? "Error occurred!"
                                                                : isConnected
                                                                    ? "MINT"
                                                                    : "not connected"
                                                        }</p>
                                                </div>

                                            </>

                                            :

                                            <>
                                                <div className={Style.nft__textsWrapper}>

                                                    <h1 className={Style.nft__title}>Founders NFTs<span className={Style.nft__span}>&nbsp; (GEN1)</span></h1>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <span className={Style.nft__spanYellow}>{maxSupply}</span>
                                                        <p className={Style.nft__yellowText}>&nbsp;Unique Founders NFTs</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Direct profit share from Bitcoin Industrial Mining</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__yellowText}>Estimated <span className={Style.nft__spanYellow}>ROI = 300%</span> in BTC</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Profit from all OxMiner offerings <br />
                                                            <span className={Style.nft__spanWhite}>(e.g. Public Mining Farms, Liquid Staking)</span></p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Priority access to future utility collections</p>
                                                    </div>

                                                    <div className={Style.nft__textsContainer}>
                                                        <img className={Style.nft__tick} src={Tick} alt="tick" />
                                                        <p className={Style.nft__text}>Revenue share from upcoming product launches</p>
                                                    </div>

                                                </div>

                                                <p className={Style.nft__mintText}>Mint price: <span className={Style.nft__mintSpan}>1 OxBull = {price / 1e18} ETH</span></p>


                                                <CButton />
                                                
                                            </>}

                                    </div>

                                    <div className={Style.nft__nftImgContainer}>
                                        <div className={Style.nft__mintCounterContainer}>
                                            <p className={Style.nft__mintCounterText}>Minted <span className={Style.nft__mintSpanGreen}>{mintBalance}</span>/{maxSupply}</p>
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