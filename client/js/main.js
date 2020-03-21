import WalletView from "./wallet/walletView.js";
import WalletModel from "./wallet/walletModel.js";
import ProductListModel from "./productList/productListModel.js";
import ProductListView from "./productList/productListView.js";
import ProductSelectView from "./productSelect/productSelectView.js";

const LOCAL_JSON_URL = "../../server/vmData.json";
const REMOTE_JSON_URL = "http://localhost:8080/vmData";

(async () => {
  const res = await fetch(REMOTE_JSON_URL);
  // console.log("res", res);
  const vmData = await res.json();
  const data = await JSON.stringify(vmData);
  const { productInfoList, wallet, totalAmount } = JSON.parse(data);

  const productListModel = new ProductListModel(productInfoList);
  const walletModel = new WalletModel(wallet, totalAmount);

  new ProductListView(productListModel, walletModel);
  new ProductSelectView(productListModel, walletModel);
  new WalletView(walletModel);

  clickEventListener(productListModel, walletModel);
})();

const clickEventListener = (productListModel, walletModel) => {
  const moneyWrap = document.querySelector(".money-wrap");
  const productWrap = document.querySelector(".product");
  const selectProductNumberWrap = document.querySelector(".select-number ul");

  productWrap.addEventListener("click", event =>
    productListModel.selectProduct(event.target.closest("button"))
  );
  selectProductNumberWrap.addEventListener("click", event => productListModel.selectNumber(event));
  moneyWrap.addEventListener("click", event => {
    walletModel.selectedBtnType(event);
    productListModel.deliverInputAmount(event);
  });
};
