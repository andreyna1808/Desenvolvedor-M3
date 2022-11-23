import { htmlColorPrice } from "../../../htmls/box-colorPrice";

let textViewMore = document.querySelector(".box-colors .box-textColors");

export const viewMoreColors = (dataColor) => {
  let boxColors = document.querySelector(".box-colors .colors");

  const basicText = "Ver todas as cores v";
  const isChecked = JSON.parse(localStorage.getItem("colors")) || dataColor;

  if (textViewMore.textContent === basicText) {
    isChecked.slice(5, isChecked.length).map((val, index) => {
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
  return boxColors;
};
