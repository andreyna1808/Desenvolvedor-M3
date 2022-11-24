let buttonMore = document.querySelector(".box-products .box-button button");

export const hasMoreProduct = (productFilters) => {
  if (productFilters.length <= 8) {
    buttonMore.classList.add(".box-button-js");
    return (buttonMore.style.display = "none");
  } else {
    buttonMore.classList.remove(".box-button-js");
    return (buttonMore.style.display = "block");
  }
};
