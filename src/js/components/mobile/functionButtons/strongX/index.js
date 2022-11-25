import { hasMoreProduct } from "../../../../utils/hasMoreProduct";
import { htmlProduct } from "../../../htmls/box-products";

import colorsJson from "../../../../json/colors.json";
import pricesJson from "../../../../json/prices.json";
import sizesJson from "../../../../json/sizes.json";

const removeDesktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile-filter");

let boxProduct = document.querySelector(".box-products .products");

export const strongX = (productsM3) => {
  localStorage.setItem("colors", JSON.stringify(colorsJson));
  localStorage.setItem("prices", JSON.stringify(pricesJson));
  localStorage.setItem("sizes", JSON.stringify(sizesJson));
  removeDesktop.classList.remove("remove-desktop");
  mobile.classList.remove("mobile-filter-active");

  boxProduct.innerHTML = ``;
  productsM3.map((val, index) => {
    boxProduct.innerHTML += `${htmlProduct(val, index)}`;
  });
  hasMoreProduct(productsM3);
};
