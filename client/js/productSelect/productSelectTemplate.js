const addProductSelect = () => {
  const indexArray = Array.from({ length: 9 }, (v, k) => k + 1);
  const buttons = indexArray.map(el => `<li><button>${el}</button></li>`).join("\n");

  const productSelect = `
  <div class="product-select">
    <div class="show-select-number"></div>
    <div class="input-amount"></div>
    <div class="select-number">
    <ul>
      ${buttons}
      <li class="select-button"><button>취소</button></li>
      <li><button>0</button></li>
      <li class="select-button"><button>입력</button></li>
    </ul>
  </div>
  <div class="message-window">
    <ol class="message-list">
      <li>자판기가 시작되었습니다.</li>
    </ol>
  </div>
  </div>`;

  const wrap = document.querySelector(".wrap");
  wrap.innerHTML += productSelect;
};

export default addProductSelect;
