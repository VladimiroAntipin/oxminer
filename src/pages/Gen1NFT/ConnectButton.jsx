import { useState } from 'react'; 
import { ConnectButton } from '@rainbow-me/rainbowkit';

const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.2s linear'
};

const buttonHoverStyle = {
    backgroundColor: '#e0e0e0'
};


const walletContainerStyle = {
    width: '80%',
    minHeight: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    backgroundColor: 'rgb(150, 197, 100)',
    padding: '15px',
    borderRadius: '20px',
    marginBottom: '30px',
    opacity: 1,
    transition: '0.2s linear',
    cursor: 'pointer'
};

const walletContainerHoverStyle = {
    opacity: 0.7,
};


const applyHoverStyle = (isHovered, baseStyle, hoverStyle) => (
    isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle
);


export const CButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected = ready && account;

                return (
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={applyHoverStyle(isHovered, walletContainerStyle, walletContainerHoverStyle)}
                        {...(!ready && {
                            'aria-hidden': true,
                            style: {
                                ...walletContainerStyle,
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        style={applyHoverStyle(isHovered, buttonStyle, buttonHoverStyle)}
                                        onClick={openConnectModal}
                                        type="button"
                                    >
                                        Connect Wallet
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button">
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>

                                    <button onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
