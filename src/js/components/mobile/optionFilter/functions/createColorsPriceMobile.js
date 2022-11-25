import { htmlColorPrice } from "../../../htmls/box-colorPrice";
import { eventListColorPrice } from "../../../main/aside/filterColorPrice/eventListener";

import colorsJson from "../../../../json/colors.json";
import pricesJson from "../../../../json/prices.json";

export const createColorsPriceMobile = (
  divDOM,
  dataColorPrice,
  productsM3,
  type
) => {
  let json = "";

  if (type === "colors") {
    json = JSON.parse(localStorage.getItem("colors")) || colorsJson;
  } else {
    json = JSON.parse(localStorage.getItem("prices")) || pricesJson;
  }

  const createColorsPrice = divDOM.querySelector(
    ".selectFilter-mobile-colorPrice"
  );

  if (createColorsPrice.textContent.length > 0) {
    createColorsPrice.innerHTML = ``;
  } else {
    createColorsPrice.innerHTML = ``;
    dataColorPrice.map((val, index) => {
      createColorsPrice.innerHTML += `${htmlColorPrice(val, index)}`;
    });
  }

  const arrayLi = Array.from(createColorsPrice.querySelectorAll("li"));
  eventListColorPrice(arrayLi, json, type, productsM3);
};
