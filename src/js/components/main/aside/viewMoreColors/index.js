import { htmlColorPrice } from "../../../htmls/box-colorPrice";

let textViewMore = document.querySelector(".box-colors .box-textColors");

const basicText = "Ver todas as cores v";

export const viewMoreColors = (boxColors, dataColor) => {
  textViewMore.innerHTML = basicText;
  textViewMore.addEventListener("click", () => {
    if (textViewMore.textContent === basicText) {
      dataColor.slice(5, dataColor.length).map((val, index) => {
        boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
      });

      textViewMore.innerHTML = "Ver menos ∧";
      textViewMore.classList.add("view-colors");
    } else {
      boxColors.innerHTML = ``;
      dataColor.slice(0, 5).map((val, index) => {
        boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
      });

      textViewMore.innerHTML = basicText;
      textViewMore.classList.remove("view-colors");
    }
  });
};
