import { addProductList } from "./productListTemplate.js";

class ProductListView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.getAvailableProducts.bind(this));
    addProductList(this.productListModel.productInfoList);
  }

  getAvailableProducts() {
    const inputAmount = document.querySelector(".input-amount").textContent;
    const currencyList = document.querySelectorAll(".product-content > span");

    Array.from(currencyList).forEach(currency => {
      const product = currency.parentElement.parentElement.parentElement;

      if (Number(currency.textContent) <= Number(inputAmount)) {
        product.className = "active";
      } else if (
        Number(currency.textContent) > Number(inputAmount) ||
        product.className === "active"
      ) {
        product.className = "";
      }
    });
  }

  render(data) {
    const { name, price } = data;
    console.log(data);
  }
}

export default ProductListView;
