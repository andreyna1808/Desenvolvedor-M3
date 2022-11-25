import { buyProduct } from "../../header/buyProduct";

let isApply = document.querySelector(".mobile-filter .buttons-apply .apply");
let isClean = document.querySelector(".mobile-filter .buttons-apply .clean");

import colorsJson from "../../../json/colors.json";
import pricesJson from "../../../json/prices.json";
import sizesJson from "../../../json/sizes.json";
import { hasMoreProduct } from "../../../utils/hasMoreProduct";
import { htmlProduct } from "../../htmls/box-products";

let boxProduct = document.querySelector(".box-products .products");

export const applyCleanMobile = (removeDesktop, mobile, productsM3) => {
  isApply.addEventListener("click", () => {
    removeDesktop.classList.remove("remove-desktop");
    mobile.classList.remove("mobile-filter-active");
    buyProduct();
  });

  isClean.addEventListener("click", () => {
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
  });
};
