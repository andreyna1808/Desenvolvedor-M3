import { htmlColorPrice } from "../../../htmls/box-colorPrice";

export const createColorsPriceMobile = (divDOM, dataColorPrice) => {
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
};
