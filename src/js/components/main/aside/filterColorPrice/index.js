import { viewMoreColors } from "../viewMoreColors";
import { eventListColorPrice } from "./eventListener";

let textViewMore = document.querySelector(".box-colors .box-textColors");

export const filterColorPrice = (dataDOM, type, json, productsM3) => {
  let dom = Array.from(dataDOM.querySelectorAll("li"));

  eventListColorPrice(dom, json, type, productsM3);

  if (type === "colors") {
    textViewMore.innerHTML = "Ver todas as cores v";
    textViewMore.addEventListener("click", () => {
      viewMoreColors(json, productsM3);
    });
  }
};
