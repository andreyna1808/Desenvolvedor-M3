import { htmlProduct } from "../../../htmls/box-products";

// TODO Se tiver menos que 9 remover o botão de ver mai
export const onViewMore = (boxProduct, dataProducts, buttonMore) => {
  let arrayProducts = [];
  if (buttonMore.textContent === "Ver mais") {
    arrayProducts = dataProducts;
    dataProducts.slice(10, dataProducts.length).map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    buttonMore.classList.add("view-less");
    buttonMore.innerHTML = "Ver menos";
  } else {
    boxProduct.innerHTML = ``;
    arrayProducts = dataProducts.slice(0, 9);
    dataProducts.slice(0, 9).map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    buttonMore.classList.add("view-more");
    buttonMore.classList.remove("view-less");
    buttonMore.innerHTML = "Ver mais";
  }
  return arrayProducts;
};
