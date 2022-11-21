let textViewMore = document.querySelector(".box-colors .box-textColors");
let moreColors = document.querySelector(".box-colors .box-moreColors");

const basicText = "Ver todas as cores v";

export const viewMoreColors = () => {
  textViewMore.innerHTML = basicText;
  textViewMore.addEventListener("click", () => {
    if (textViewMore.textContent === basicText) {
      textViewMore.innerHTML = "Ver menos ∧";
      return moreColors.classList.add("view-colors");
    } else {
      textViewMore.innerHTML = basicText;
      moreColors.classList.remove("view-colors");
    }
  });
};
