const addProductList = list => {
  const productListView = `
  <div class="product-view">
    <ul class="product">
      ${productList(list)}
    </ul>
  </div>
  `;

  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = productListView;
};

const productList = list => {
  let li = ``;

  list.forEach(productInfo => {
    const { productIndex, productImg, productName, productPrice } = productInfo;

    li += `
    <li>
    <button  type="button" value=${productName}>
      <div class="product-image"><span>${productIndex}</span>${productImg}</div>
      <div class="product-content">
        <span>${productPrice}</span>
      </div>
    </button>
    </li>`;
  });

  return li;
};

export { addProductList, productList };
