const addWallet = (currency, amount) => {
  let moneyWrap = ``;
  currency.forEach(walletInfo => {
    const { walletAmount, numberCount } = walletInfo;

    moneyWrap += `
    <div class="money-unit">
    <button type="button" value="${walletAmount}">${walletAmount}</button>
    <span class="money-count" value="${numberCount}">${numberCount}</span></div>`;
  });

  const wallet = `
  <div class="wallet">
    <div class="money-wrap">
      ${moneyWrap}
    </div>
    <div class="total-money" value="${amount}">${amount}</div>
  </div>`;

  const wrap = document.querySelector(".wrap");
  wrap.innerHTML += wallet;
};

export default addWallet;
