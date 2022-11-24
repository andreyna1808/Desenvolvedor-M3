import { filterProducts } from "../../../filterProducts";
import { buyProduct } from "../../../header/buyProduct";
import { htmlProduct } from "../../../htmls/box-products";

export const selectSize = (json, productM3) => {
  let boxSizes = Array.from(
    document.querySelectorAll(".box-sizes .sizes .size")
  );
  let boxProduct = document.querySelector(".box-products .products");

  let checked = JSON.parse(localStorage.getItem("sizes")) || json;

  boxSizes.map((data) => {
    data.addEventListener("click", () => {
      const isHave = checked.filter(
        (size) => data.textContent === size.type && size.class
      );
      if (isHave.length >= 1) {
        json.filter((jsonData) => {
          if (jsonData.type === data.textContent) {
            return (jsonData.class = "");
          }
          return data;
        });
        checked = json;
        localStorage.setItem("sizes", JSON.stringify(checked));
        data.classList.remove("select-size");

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
        json.filter((jsonData) => {
          if (jsonData.type === data.textContent) {
            return (jsonData.class = "select-size");
          }
          return data;
        });
        checked = json;
        localStorage.setItem("sizes", JSON.stringify(checked));
        data.classList.add("select-size");

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
