// https://eth-ropsten.alchemyapi.io/v2/snTP9S5294WCS8B6fAFJolWAzUY3hOst

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/snTP9S5294WCS8B6fAFJolWAzUY3hOst',
      accounts: ['bace850d8ea9d02b2f9210e5a80a1f84e4527716f6b8700b1ceb48aa8eb74fec']
    }
  }
}
