const path = require("path")
const HDWalletProvider = require("@truffle/hdwallet-provider")
const mnemonic = (module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/")
      },
      network_id: 3
    }
  },
  compilers: {
    solc: {
      version: "0.6.1"
    }
  }
})
