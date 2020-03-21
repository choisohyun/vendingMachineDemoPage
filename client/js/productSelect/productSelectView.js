import addProductSelect from "./productSelectTemplate.js";

class ProductSeletView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    this.productListModel.subscribe(this.renderMessageWindow.bind(this));
    addProductSelect();
  }

  render(walletData) {
    const { target, value } = walletData;
    const className = target.className;
    const messageWindow = document.querySelector(".message-window");

    if (className === "message-list") {
      target.innerHTML += `<li>${value}원이 투입되었습니다.</li>`;
      messageWindow.scrollTop = messageWindow.scrollHeight;
    }
  }

  renderMessageWindow(productInfoData) {
    const { name, leftMoney, isActive, isNotAvailablePurchase } = productInfoData;
    const inputTarget = document.querySelector(".input-amount");
    const messageList = document.querySelector(".message-list");
    const messageWindow = document.querySelector(".message-window");

    inputTarget.innerHTML = leftMoney;

    if (isNotAvailablePurchase) {
      messageList.innerHTML += `<li>현재 투입 금액으로 구입이 불가능합니다.</li>`;
    } else if (leftMoney < 0) {
      messageList.innerHTML += `<li>잔액이 부족해 ${name} 구입 실패했습니다.</li>`;
      messageWindow.scrollTop = messageWindow.scrollHeight;
      return;
    } else if (name) {
      messageList.innerHTML += `<li>${name} 구입 성공했습니다.</li>`;
      messageWindow.scrollTop = messageWindow.scrollHeight;
    }
  }
}

export default ProductSeletView;
