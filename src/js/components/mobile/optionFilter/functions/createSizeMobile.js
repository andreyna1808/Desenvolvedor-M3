import { htmlSize } from "../../../htmls/box-sizes";

export const createSize = (divDOM, dataSize, productsM3) => {
  const createSizes = divDOM.querySelector(".selectFilter-mobile-size");
  const arrayLi = Array.from(createSizes.querySelectorAll("li"));

  if (createSizes.textContent.length > 0) {
    createSizes.innerHTML = ``;
  } else {
    createSizes.innerHTML = ``;
    dataSize.map((val, index) => {
      createSizes.innerHTML += `${htmlSize(val, index)}`;
    });
  }
};
