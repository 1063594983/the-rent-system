const contract = require('truffle-contract')
const Web3 = require('web3');
const marketplaceArtifacts = require('./Marketplace.json')
// import ethUtil from 'ethereumjs-util'
// 和以太坊交互
class EthLayer {
  constructor(){
    let provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545/");
    // let marketplaceContract = contract(marketplaceArtifacts)
    // marketplaceContract.setProvider(provider)
    // this.web3 = Web3
    // console.log(window.web3)
    this.account = web3.eth.defaultAccount
    console.log(this.account)
    this.marketplaceContract = contract(marketplaceArtifacts)
    this.marketplaceContract.setProvider(provider)
  }
  async createListing(house){
    console.log(house)
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49");

    let ret = await inst.createListing(house.depositWei,house.city,house.title,house.descHash,house.price,house.imageHash,{from:"0x4f3Febd5bE9ea6a701620D36A0EBf2CA91Bc9f89",value:house.depositWei, gas:1000000})
    console.log('listing created => ', ret)

  }

  async cancelListing(listingId){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.cancelListing(listingId,{from:this.account})
    console.log('listing withdrawed => ',ret)
  }

  async makeOffer(offer){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.makeOffer(offer.listingId,offer.value,offer.checkIn,offer.nights,offer.arbitrator,{from:this.account,value:offer.value})
    console.log('offer made => ',ret)
  }

  async getUserCredit(){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.getCredit(this.account)
    // console.log(ret)
    return ret
  }

  async cancelOffer(listingId,offerId){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.cancelOffer(listingId,offerId,{from:this.account})
    console.log('offer canceled => ',ret)
  }

  async acceptOffer(listingId,offerId){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.acceptOffer(listingId,offerId,{from:this.account})
    console.log('offer accepted => ',ret)
  }

  async finalizeOffer(listingId,offerId){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.finalizeOffer(listingId,offerId,{from:this.account})
    console.log('offer finalized => ',ret)
  }

  async disputeOffer(listingId,offerId){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.disputeOffer(listingId,offerId,{from:this.account})
    console.log('offer disputed => ',ret)
  }

  async arbitrateOffer(listingId,offerId,refund){
    let inst = await this.marketplaceContract.at("0xb92F8455be61e41F7365A659dBfF6f0C89850F49")
    let ret = await inst.arbitrateOffer(listingId,offerId,refund,{from:this.account})
    console.log('offer arbitrated => ',ret)
  }

}

export default EthLayer
// async function getExchangeRate(from,to){
//     let url = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`
//     let rsp = await fetch(url)
//     rsp = await rsp.json()
//     return +rsp[to]
//   }

//   console.log(getExchangeRate("CNY", "ETH"))

// let eth = new EthLayer();
// var house = {
//     depositWei: "1542600000000000000",
//     city: '上海',
//     title: '华师大',
//     descHash: '',
//     price: '300',
//     imageHash: ''
// }

// eth.createListing(house)
// eth.getUserCredit()