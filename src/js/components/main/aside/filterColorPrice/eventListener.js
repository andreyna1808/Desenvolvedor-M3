import { filterProducts } from "../../../filterProducts";
import { buyProduct } from "../../../header/buyProduct";
import { htmlProduct } from "../../../htmls/box-products";

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
        const dataSize = JSON.parse(localStorage.getItem("sizes")) || [];

        let productFilters = filterProducts(
          productM3,
          dataColor,
          dataPrice,
          dataSize
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
        const dataSize = JSON.parse(localStorage.getItem("sizes")) || [];

        let productFilters = filterProducts(
          productM3,
          dataColor,
          dataPrice,
          dataSize
        );
        boxProduct.innerHTML = ``;
        productFilters.map((val, index) => {
          boxProduct.innerHTML += `${htmlProduct(val, index)}`;
        });
      }
      buyProduct();
    });
  });
};
