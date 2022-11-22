export const buyProduct = () => {
  let buttonBuy = Array.from(document.querySelectorAll(".product div button"));
  let qtdProductsToCart = document.querySelector("header section p");

  const cartProducts = [];

  buttonBuy.map((data) => {
    data.addEventListener("click", () => {
      cartProducts.push(data.textContent);
      qtdProductsToCart.innerHTML = cartProducts.length || 0;
    });
  });
};
