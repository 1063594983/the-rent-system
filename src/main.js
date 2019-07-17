// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import Web3 from 'web3'

//安装element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
//Vue.prototype.$Web3 = Web3;

//import animate.css
import animated from 'animate.css'

Vue.use(animated)

//import Velocity
import Velocity from 'velocity-animate'

Vue.prototype.$Velocity = Velocity;

//import axios
import axios from 'axios'
Vue.prototype.$axios = axios;
//api 地址
Vue.prototype.$api = "http://127.0.0.1:3000/api";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//var Web3 = require('web3');
/*
import UserFactory from "./contracts/UserFactory.json";
import UserHelper from "./contracts/UserHelper.json";
import TradeHouse from "./contracts/TradeHouse.json";
*/
/*
var UserFactory = require('./contracts/UserFactory.json');
var UserHelper = require('./contracts/UserHelper.json');
var TradeHouse = require('./contracts/TradeHouse.json');



const Contract = {
  web3: null,
  account: null,
  userFactory: null,
  userHelper: null,
  tradeHouse: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      //var address = "0xf2a61d804b33726d67925f00317ad074eb3d603d";
      //debugger
      const networkId = await web3.eth.net.getId();
      
      let deployedNetwork = TradeHouse.networks[networkId];
      this.userFactory = new web3.eth.Contract(
        UserFactory.abi,
        deployedNetwork.address
      );
      console.log(this.userFactory);
      this.userHelper = new web3.eth.Contract(
        UserHelper.abi,
        //deployedNetwork.address,
        deployedNetwork.address
      );
      this.tradeHouse = new web3.eth.Contract(
        TradeHouse.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

      this.refreshBalance();
    } catch (error) {
      //console.error("Could not connect to contract or chain.");
    }
  },

  createUser: async function(name, phoneNumber) {
    const { createUser } = this.userFactory.methods;
    await createUser(name, phoneNumber).send({from: this.account, gas: 3141592});
  },

  addHouse: async function(imageUrl, location, price) {
    const { addHouse } = this.userFactory.methods;
    await addHouse(imageUrl, location, price).send({from: this.account, gas: 3141592});
  },

  getUserName: async function(userAddress) {
    let user;
    const { getUserByOwner } = this.userHelper.methods;
    await getUserByOwner(userAddress).call().then((result) => {
      user = result;
    }).catch(function(result) {
      console.log(result);
    });
    await this.userFactory.methods.users(user).call().then((result) => {
      return result.userName;
    }).catch(function(result) {
      console.log(result);
    });
  },

  getUserPhoneNumber: async function(userAddress) {
    let user;
    const { getUserByOwner } = this.userHelper.methods;
    await getUserByOwner(userAddress).call().then((result) => {
      user = result;
    }).catch(function(result) {
      console.log(result);
    });
    await this.userFactory.methods.users(user).call().then((result) => {
      return result.phoneNumber;
    }).catch(function(result) {
      console.log(result);
    });
  },

  idsToHouses: async function(a) {
    for(let i = 0; i < a.length; i++) {
      await this.userFactory.methods.houses(a[i]).call().then((result) => {
        a[i] = result;
      }).catch(function(result) {
        console.log(result);
      });
    }
    return a;
  },

  getHousesByOwner: async function() {
    const { getHousesByOwner } = this.userHelper.methods;
    await getHousesByOwner(this.account).call().then((result) => {
      idsToHouses(result).then((r) => { return r; });
    }).catch(function(result) {
      console.log(result);
    });
  },

  getHousesByRenter: async function() {
    const { getHousesByRenter } = this.userHelper.methods;
    await getHousesByRenter(this.account).call().then((result) => {
      idsToHouses(result).then((r) => { return r; });
    }).catch(function(result) {
      console.log(result);
    });
  },

  changeUserName: async function(userId, newUserName) {
    const { changeUserName } = this.userHelper.methods;
    await changeUserName(userId, newUserName).send({from: this.account, gas: 3141592});
  },

  changeUserPhoneNumber: async function(userId, newPhoneNumber) {
    const { changeUserPhoneNumber } = this.userHelper.methods;
    await changeUserName(userId, newPhoneNumber).send({from: this.account, gas: 3141592});
  },

  changeHouseImageUrl: async function(houseId, newImageUrl) {
    const { changeHouseImageUrl } = this.userHelper.methods;
    await changeHouseImageUrl(houseId, newImageUrl).send({from: this.account, gas: 3141592});
  },

  changeHouseLocation: async function(houseId, newLocation) {
    const { changeHouseLocation } = this.userHelper.methods;
    await changeHouseImageUrl(houseId, newLocation).send({from: this.account, gas: 3141592});
  },

  changeHousePrice: async function(houseId, newPrice) {
    const { changeHousePrice } = this.userHelper.methods;
    await changeHouseImageUrl(houseId, newPrice).send({from: this.account, gas: 3141592});
  },

  rent: async function(ownerAddress, houseId) {
    const { rent } = this.tradeHouse.methods;
    await rent(ownerAddress, houseId).send({from: this.account, gas: 3141592});
  },
/*
  refreshBalance: async function() {
    const { getBalance } = this.meta.methods;
    const balance = await getBalance(this.account).call();

    const balanceElement = document.getElementsByClassName("balance")[0];
    balanceElement.innerHTML = balance;
  },

  sendCoin: async function() {
    const amount = parseInt(document.getElementById("amount").value);
    const receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");

    const { sendCoin } = this.meta.methods;
    await sendCoin(receiver, amount).send({ from: this.account });

    this.setStatus("Transaction complete!");
    this.refreshBalance();
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },
  */
 /*
};

//window.App = Contract;

Vue.prototype.$Contract = Contract;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    Contract.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    Contract.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  Contract.start();
});*/