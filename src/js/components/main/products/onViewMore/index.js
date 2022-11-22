import { htmlProduct } from "../../../htmls/box-products";

let viewMore = document.querySelector(".box-products .box-button button");

export const onViewMore = async (boxProduct, dataProducts) => {
  viewMore.addEventListener("click", () => {
    if (viewMore.textContent === "Ver mais") {
      dataProducts.slice(10, dataProducts.length).map((val, index) => {
        boxProduct.innerHTML += `${htmlProduct(val, index)}`;
      });

      viewMore.classList.add("view-less");
      viewMore.innerHTML = "Ver menos";
    } else {
      boxProduct.innerHTML = ``;
      dataProducts.slice(0, 9).map((val, index) => {
        boxProduct.innerHTML += `${htmlProduct(val, index)}`;
      });

      viewMore.classList.add("view-more");
      viewMore.classList.remove("view-less");
      viewMore.innerHTML = "Ver mais";
    }
  });
};
