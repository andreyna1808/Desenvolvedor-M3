import { htmlProduct } from "../components/htmls/box-products";

let buttonMore = document.querySelector(".box-products .box-button button");
let boxProduct = document.querySelector(".box-products .products");

export const hasMoreProduct = (productFilters) => {
  if (productFilters.length <= 8) {
    buttonMore.classList.add(".box-button-js");
    return (buttonMore.style.display = "none");
  } else {
    boxProduct.innerHTML = ``;
    productFilters.slice(0, 9).map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    buttonMore.classList.remove(".box-button-js");
    return (buttonMore.style.display = "block");
  }
};
