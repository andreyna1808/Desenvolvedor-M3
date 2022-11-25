import { htmlSize } from "../../../htmls/box-sizes";

export const createSize = (divDOM, dataSize) => {
  const createSizes = divDOM.querySelector(".selectFilter-mobile-size");

  if (createSizes.textContent.length > 0) {
    createSizes.innerHTML = ``;
  } else {
    createSizes.innerHTML = ``;
    dataSize.map((val, index) => {
      createSizes.innerHTML += `${htmlSize(val, index)}`;
    });
  }
};
