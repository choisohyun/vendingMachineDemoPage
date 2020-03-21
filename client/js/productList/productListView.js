import { addProductList } from "./productListTemplate.js";

class ProductListView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.productListModel.subscribe(this.getAvailableProducts.bind(this));
    addProductList(this.productListModel.productInfoList);
  }

  getAvailableProducts({ leftMoney }) {
    const currencyList = document.querySelectorAll(".product-content > span");

    Array.from(currencyList).forEach(currency => {
      const product = currency.parentElement.parentElement.parentElement;

      if (Number(currency.textContent) <= leftMoney) {
        product.className = "active";
      } else if (product.className === "active") {
        product.className = "";
      }
    });
  }
}

export default ProductListView;
