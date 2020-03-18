import WalletView from "./wallet/walletView.js";
import WalletModel from "./wallet/walletModel.js";
import ProductListModel from "./productList/productListModel.js";
import ProductListView from "./productList/productListView.js";
import ProductSelectView from "./productSelect/productSelectView.js";

const JSON_FILE_URL = "../../server/vmData.json";

(async () => {
  const res = await fetch(JSON_FILE_URL);
  const { productInfoList, wallet, totalAmount } = await res.json();

  const productListModel = new ProductListModel(productInfoList);
  const walletModel = new WalletModel(wallet, totalAmount);
  const productListView = new ProductListView(productListModel, walletModel);
  const productSelectView = new ProductSelectView(productListModel, walletModel);
  const walletView = new WalletView(walletModel);
  clickEventListener(productListModel, walletModel);
})();

const clickEventListener = (productListModel, walletModel) => {
  const moneyWrap = document.querySelector(".money-wrap");
  const productWrap = document.querySelector(".product");

  moneyWrap.addEventListener("click", event => walletModel.selectedBtnType(event));
  productWrap.addEventListener("click", event => productListModel.getSelectProductInfo(event));
};
