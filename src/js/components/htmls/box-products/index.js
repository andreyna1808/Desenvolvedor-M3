export const htmlProduct = (val, index) => {
  return ` 
    <div class='product' key='${index}'>
      <img src='${val.image}'/>
      <div>
        <h4> ${val.name.toUpperCase()}</h4>
        <p class='product-price'> R$ ${val.price}</p>
        <p class='product-installment'> até ${val.parcelamento[0]}x de R$ 
          ${val.parcelamento[1]}
        </p>
        <button>Comprar</button>
      </div>
  </div>
  `;
};
