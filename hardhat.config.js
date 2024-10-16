require("@nomicfoundation/hardhat-toolbox");

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const NEXT_PUBLIC_POLYGON_AMOY_RPC =
  "https://polygon-amoy.g.alchemy.com/v2/qcqokJ_oMN6zSP6ZXQcVL1Corb7Tv_Xc";
// const NEXT_PUBLIC_PRIVATE_KEY = "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const NEXT_PUBLIC_PRIVATE_KEY =
  "19e0a2ebc4faf9908034d7e82f439d2fcd10b2a3f16f4f17fafbea0a71db0ddf";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_AMOY_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
