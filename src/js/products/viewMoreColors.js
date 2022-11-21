let textViewMore = document.querySelector(".box-colors .box-textColors");
let moreColors = document.querySelector(".box-colors .box-moreColors");

const basicText = "Ver todas as cores";

/* TODO arrumar essa função para ficar completa o ver mais e ver menos */
export const viewMoreColors = () => {
  textViewMore.addEventListener("click", () => {
    if (
      textViewMore.querySelector(".textAllColors")?.textContent === basicText
    ) {
      textViewMore.innerHTML = "Ver menos";
      moreColors.classList.add("view-colors");
      console.log("test", textViewMore);
    } /* else {
      textViewMore.innerHTML = basicText;
      moreColors.classList.remove("view-colors");
      console.log("textViewMore", textViewMore);
    } */
  });
};
