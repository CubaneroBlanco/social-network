module.exports = {
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/abis",
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache GUI or CLI port
      network_id: "*"        // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.5.0",      // Match your contract pragma
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
