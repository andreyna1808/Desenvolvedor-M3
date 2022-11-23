import { viewMoreColors } from "../viewMoreColors";
import { eventListColorPrice } from "./eventListener";

let textViewMore = document.querySelector(".box-colors .box-textColors");

export const filterColorPrice = (dataDOM, productsM3, type, json) => {
  let boxProduct = document.querySelector(".box-products .products");

  let dom = Array.from(dataDOM.querySelectorAll("li"));

  eventListColorPrice(dom, json, type);

  if (type === "colors") {
    textViewMore.innerHTML = "Ver todas as cores v";
    textViewMore.addEventListener("click", () => {
      viewMoreColors(json);
    });
  }
};
