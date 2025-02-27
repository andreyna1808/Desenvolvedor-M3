import { htmlPriceSizeColor } from "../../htmls/filters-mobile/filter-priceSizeColor";
import { applyCleanMobile } from "../functionButtons";
import { createColorsPriceMobile } from "./functions/createColorsPriceMobile";
import { createSize } from "./functions/createSizeMobile";

const filterProduct = document.querySelector(".filterMobile .button-filter");
const removeDesktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile-filter");
const removeOrder = document.querySelector(".mobile-filter .order");
const removeButtons = document.querySelector(".mobile-filter .buttons-apply");
const boxFiltersMobile = document.querySelector(
  ".mobile-filter .filters-mobile"
);

import colorsJson from "../../../json/colors.json";
import pricesJson from "../../../json/prices.json";
import sizesJson from "../../../json/sizes.json";
import { strongX } from "../functionButtons/strongX";

export const optionFilterMobile = (productsM3) => {
  filterProduct.addEventListener("click", () => {
    removeDesktop.classList.add("remove-desktop");
    mobile.classList.add("mobile-filter-active");
    removeOrder.classList.add("filter-removed");
    removeButtons.classList.add("buttons-apply-removed");

    const filters = [
      { type: "cores", className: "selectFilter-mobile-colorPrice" },
      { type: "tamanhos", className: "selectFilter-mobile-size" },
      { type: "faixa de preço", className: "selectFilter-mobile-colorPrice" },
    ];

    boxFiltersMobile.innerHTML = ``;
    filters.map((val) => {
      boxFiltersMobile.innerHTML += `${htmlPriceSizeColor(val)}`;
    });

    const divColors = document.querySelector(".filters-mobile .cores");
    const divSizes = document.querySelector(".filters-mobile .tamanhos");
    const divPrices = document.querySelector(".filters-mobile .faixa");

    divColors.querySelector("ul").addEventListener("click", () => {
      let dataColor = JSON.parse(localStorage.getItem("colors")) || colorsJson;
      createColorsPriceMobile(divColors, dataColor, productsM3, "colors");
    });

    divSizes.querySelector("ul").addEventListener("click", () => {
      let dataSize = JSON.parse(localStorage.getItem("sizes")) || sizesJson;
      createSize(divSizes, dataSize, productsM3);
    });

    divPrices.querySelector("ul").addEventListener("click", () => {
      let dataPrice = JSON.parse(localStorage.getItem("prices")) || pricesJson;
      createColorsPriceMobile(divPrices, dataPrice, productsM3, "prices");
    });

    removeButtons.classList.remove("buttons-apply-removed");

    applyCleanMobile(removeDesktop, mobile, productsM3);

    const xStrong = document.querySelector(".mobile-filter .filter strong");
    xStrong.addEventListener("click", () => {
      strongX(productsM3);
    });
  });
};
