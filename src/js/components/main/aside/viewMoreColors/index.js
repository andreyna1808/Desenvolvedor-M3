import { htmlColorPrice } from "../../../htmls/box-colorPrice";
import { eventListColorPrice } from "../filterColorPrice/eventListener";

let textViewMore = document.querySelector(".box-colors .box-textColors");
let boxColors = document.querySelector(".box-colors .colors");

export const viewMoreColors = (dataColor, productM3) => {
  const basicText = "Ver todas as cores v";
  const isChecked = JSON.parse(localStorage.getItem("colors")) || dataColor;

  if (textViewMore.textContent === basicText) {
    boxColors.innerHTML = ``;
    isChecked.map((val, index) => {
      boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
    });

    textViewMore.innerHTML = "Ver menos ∧";
    textViewMore.classList.add("view-colors");
  } else {
    boxColors.innerHTML = ``;
    isChecked.slice(0, 5).map((val, index) => {
      boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
    });

    textViewMore.innerHTML = basicText;
    textViewMore.classList.remove("view-colors");
  }
  const domColors = Array.from(boxColors.querySelectorAll("li"));
  eventListColorPrice(domColors, dataColor, "colors", productM3);
};
