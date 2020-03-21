import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor(productInfoList) {
    super();
    this.productInfoList = productInfoList;
    this.inputMoney = 0;

    this.selectProductInfo = {
      name: null,
      leftMoney: 0,
      isActive: false,
      isNotAvailablePurchase: false
    };
  }

  getSelectProductInfo(buttonTarget, number) {
    this.selectProductInfo.name = buttonTarget ? buttonTarget.value : null;
    this.selectProductInfo.leftMoney = number;
    this.selectProductInfo.isActive = buttonTarget
      ? buttonTarget.parentElement.className === "active"
      : false;

    this.notify(this.selectProductInfo);
  }

  deliverInputAmount({ target }) {
    const selectedMoney = target.innerText;

    this.inputMoney += Number(selectedMoney);
    this.getSelectProductInfo(null, this.inputMoney);
  }

  selectProduct(buttonTarget) {
    const productInfos = buttonTarget.innerText.split("\n");

    if (this.inputMoney < productInfos[2]) {
      this.selectProductInfo.isNotAvailablePurchase = true;
      return;
    }

    this.inputMoney -= productInfos[2];
    this.getSelectProductInfo(buttonTarget, this.inputMoney);
  }

  selectNumber({ target }) {
    const getSelectNumber = target.innerText;
    const numberWindow = document.querySelector(".show-select-number");
    let selectProductNumber = "";

    if (getSelectNumber === "입력") {
      const productList = document.querySelectorAll(".product > li > button");
      this.selectProduct(productList[Number(numberWindow.innerText) - 1]);
      numberWindow.innerHTML = "";
    } else if (getSelectNumber === "취소") {
      selectProductNumber = "";
      numberWindow.innerHTML = selectProductNumber;
    } else {
      selectProductNumber += getSelectNumber;
      numberWindow.innerHTML += selectProductNumber;
    }
  }
}

export default ProductListModel;
