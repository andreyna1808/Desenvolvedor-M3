import { filterProducts } from "../components/filterProducts";
import { htmlProduct } from "../components/htmls/box-products";
import { hasMoreProduct } from "./hasMoreProduct";

const boxProduct = document.querySelector(".box-products .products");

export const utilFilterHtml = (productM3) => {
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

  hasMoreProduct(productFilters);
};
