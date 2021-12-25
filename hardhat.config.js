require("@nomiclabs/hardhat-waffle");

const projectId = "e925d00d497c4e86b77a682648f4ca63";

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
            accounts: []
        },
        mainnet: {
            url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
            accounts: []
        }
    },
    solidity: "0.8.4",
};
