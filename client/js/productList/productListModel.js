import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor(productInfoList) {
    super();
    this.productInfoList = productInfoList;

    this.selectProductInfo = {
      name: null,
      price: null,
      isActive: null
    };
  }

  getSelectProductInfo({ target }) {
    const buttonTarget = target.closest("button");
    console.log("", buttonTarget);
    const productInfos = buttonTarget.innerText.split("\n");

    this.selectProductInfo.name = buttonTarget.value;
    this.selectProductInfo.price = productInfos[2];
    this.selectProductInfo.isActive = buttonTarget.parentElement.className === "active";

    this.notify(this.selectProductInfo);
  }
}

export default ProductListModel;
