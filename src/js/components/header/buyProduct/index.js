export const buyProduct = () => {
  let buttonBuy = Array.from(document.querySelectorAll(".product div button"));
  let qtdProductsToCart = document.querySelector("header section p");
  let removeProduct = document.querySelector(".desktop header section");

  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  qtdProductsToCart.innerHTML = cartProducts?.length || 0;

  buttonBuy.map((data) => {
    data.addEventListener("click", () => {
      cartProducts.push(data.textContent);
      qtdProductsToCart.innerHTML = cartProducts?.length || 0;
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    });
  });

  removeProduct.addEventListener("click", () => {
    qtdProductsToCart.innerHTML = 0;
    localStorage.setItem("cart", JSON.stringify([]));
  });
};
