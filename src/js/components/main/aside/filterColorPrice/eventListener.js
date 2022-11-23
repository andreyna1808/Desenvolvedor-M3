import { filterProducts } from "../../../filterProducts";
import { htmlProduct } from "../../../htmls/box-products";

let boxColors = document.querySelector(".box-colors .colors");

export const eventListColorPrice = (dom, json, type, productM3) => {
  let checked = JSON.parse(localStorage.getItem(type)) || json;
  let boxProduct = document.querySelector(".box-products .products");

  dom.map((data) => {
    data.addEventListener("click", () => {
      const isChecked = data.querySelector("input").getAttribute("value");
      if (data.querySelectorAll("input")[0].checked) {
        json.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            return (data.checked = "checked");
          }
          return data;
        });
        checked = json;
        localStorage.setItem(type, JSON.stringify(checked));

        const dataColor = JSON.parse(localStorage.getItem("colors")) || [];
        const dataPrice = JSON.parse(localStorage.getItem("prices")) || [];

        let productFilters = filterProducts(
          productM3,
          dataColor,
          dataPrice,
          [],
          []
        );
        boxProduct.innerHTML = ``;
        productFilters.map((val, index) => {
          boxProduct.innerHTML += `${htmlProduct(val, index)}`;
        });
      } else {
        json.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            return (data.checked = null);
          }
          return data;
        });
        checked = json;
        localStorage.setItem(type, JSON.stringify(checked));

        const dataColor = JSON.parse(localStorage.getItem("colors")) || [];
        const dataPrice = JSON.parse(localStorage.getItem("prices")) || [];

        let productFilters = filterProducts(
          productM3,
          dataColor,
          dataPrice,
          [],
          []
        );
        boxProduct.innerHTML = ``;
        productFilters.map((val, index) => {
          boxProduct.innerHTML += `${htmlProduct(val, index)}`;
        });
      }
    });
  });
};
