import addWallet from "./walletTemplate.js";

class WalletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));

    addWallet(this.walletModel.wallet, this.walletModel.totalAmount);
    this.moneyCount = "money-count";
    this.totalMoney = "total-money";
  }

  render(data) {
    const { target, value } = data;
    const className = target.className;

    if (className === this.moneyCount || className === this.totalMoney) {
      target.innerHTML = `${value}`;
    }
  }
}

export default WalletView;
