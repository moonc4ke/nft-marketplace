require('@nomiclabs/hardhat-waffle');

const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString();
const projectId = 'e925d00d497c4e86b77a682648f4ca63';

module.exports = {
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        },
        mainnet: {
            url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        }
    },
    solidity: "0.8.4",
};
