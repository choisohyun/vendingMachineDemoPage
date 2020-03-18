import addProductSelect from "./productSelectTemplate.js";

class ProductSeletView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    this.productListModel.subscribe(this.renderProductInfo.bind(this));
    addProductSelect();
  }

  render(walletData) {
    const { target, value } = walletData;
    const className = target.className;

    if (className === "input-amount") {
      target.innerHTML = `${value}`;
    } else if (className === "message-list") {
      target.innerHTML += `<li>${value}원이 투입되었습니다.</li>`;
      target.scrollTop = target.scrollHeight;
    }
  }

  renderProductInfo(productInfoData) {
    const { name, price, isActive } = productInfoData;
    console.log("", productInfoData);

    const inputAmount = document.querySelector(".input-amount");
    const messageList = document.querySelector(".message-list");
    const messageWindow = document.querySelector(".message-window");
    const calculateValue = Number(inputAmount.innerText) - price;

    if (!isActive) {
      messageList.innerHTML += `<li>현재 투입 금액으로 구입이 불가능합니다.</li>`;
      messageWindow.scrollTop = messageWindow.scrollHeight;
      return;
    } else if (calculateValue < 0) {
      messageList.innerHTML += `<li>잔액이 부족해 ${name} 구입 실패했습니다.</li>`;
      messageWindow.scrollTop = messageWindow.scrollHeight;
      return;
    }

    inputAmount.innerHTML = calculateValue;
    messageList.innerHTML += `<li>${name} 구입 성공했습니다.</li>`;

    messageWindow.scrollTop = messageWindow.scrollHeight;
  }
}

export default ProductSeletView;
