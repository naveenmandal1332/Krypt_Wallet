require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/BxQD3VWEbcImzyj1k9ZTnkxpHCmE9JuB',
      accounts: ['6ed7e9261bb0ac3eaea32eb19e57e2a91cceb1148fe6385cd7ba0cba097bba55']
    }
  }
}