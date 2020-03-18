import Observable from "../observable.js";

class WalletModel extends Observable {
  constructor(wallet, totalAmount) {
    super();
    this.wallet = wallet;

    this.currencyCount = null;
    this.totalAmount = totalAmount;
    this.inputMoney = 0;
    this.currency = null;

    this.notifyInfo = {
      target: null,
      value: null
    };
  }

  selectedBtnType(event) {
    const selectedBtn = event.target.type;
    const nextElement = event.target.nextElementSibling;
    if (selectedBtn !== "button") return;

    const selectedCnt = nextElement.innerText;
    const target = nextElement;

    if (selectedCnt <= 0) return;
    this.spendMoney(target, selectedCnt);
    this.deliverTotalAmount();
    this.deliverInputAmount();
    this.deliverNotification();
  }

  spendMoney(target, value) {
    this.notifyInfo.target = target;
    this.currencyCount = Number(value);
    if (this.currencyCount <= 0) return;
    this.currencyCount -= 1;

    this.notifyInfo.value = this.currencyCount;

    this.notify(this.notifyInfo);
  }

  deliverTotalAmount() {
    const totalMoneyWrap = document.querySelector(".total-money");
    this.totalAmount = Number(totalMoneyWrap.innerText);
    const selectedMoney = event.target.innerText;

    this.reduceTotalMoney(totalMoneyWrap, selectedMoney);
  }

  reduceTotalMoney(target, currency) {
    this.notifyInfo.target = target;
    this.totalAmount -= currency;
    if (this.totalAmount < 0) return;

    this.notifyInfo.value = this.totalAmount;

    this.notify(this.notifyInfo);
  }

  deliverInputAmount() {
    const selectedMoney = event.target.innerText;

    this.notifyInfo.target = document.querySelector(".input-amount");
    this.inputMoney += Number(selectedMoney);

    this.notifyInfo.value = this.inputMoney;

    this.notify(this.notifyInfo);
  }

  deliverNotification() {
    this.notifyInfo.target = document.querySelector(".message-list");
    this.currency = event.target.innerText;

    this.notifyInfo.value = this.currency;

    this.notify(this.notifyInfo);
  }
}

export default WalletModel;
