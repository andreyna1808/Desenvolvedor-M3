let textViewMore = document.querySelector(".box-colors .box-textColors");
let moreColors = document.querySelector(".box-colors .box-moreColors");

export const viewMoreColors = async () => {
  console.log("viewMoreColors", textViewMore);
  console.log("moreColors", moreColors);

  textViewMore.addEventListener("click", () => {
    if (
      textViewMore.querySelector(".textAllColors").textContent ===
      "Ver todas as cores"
    ) {
      textViewMore.innerHTML = "";
      textViewMore.style.display = "none";
      moreColors.classList.add("view-colors");
      moreColors.style.display = "none";
    }
  });
};
