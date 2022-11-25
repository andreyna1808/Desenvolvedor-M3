import { htmlSize } from "../../../htmls/box-sizes";
import { selectSize } from "../../../main/aside/selectSize";

import sizesJson from "../../../../json/sizes.json";

export const createSize = (divDOM, dataSize, productsM3) => {
  const createSizes = divDOM.querySelector(".selectFilter-mobile-size");
  const dataSizeJson = JSON.parse(localStorage.getItem("sizes")) || sizesJson;

  if (createSizes.textContent.length > 0) {
    createSizes.innerHTML = ``;
  } else {
    createSizes.innerHTML = ``;
    dataSize.map((val, index) => {
      createSizes.innerHTML += `${htmlSize(val, index)}`;
    });
  }

  const arrayLi = Array.from(createSizes.querySelectorAll("option"));
  selectSize(dataSizeJson, productsM3, arrayLi);
};
