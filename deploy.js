const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

provider = new HDWalletProvider(
  "brand swift economy rich icon spice boat gift combine bundle ranch bunker",
  "https://goerli.infura.io/v3/3ed5d4e96e184325a1099bec52e859ab"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ["Hi there new!"],
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
