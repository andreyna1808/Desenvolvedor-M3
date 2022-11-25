import { filterProducts } from "../../../filterProducts";
import { htmlProduct } from "../../../htmls/box-products";

export const onViewMore = (boxProduct, productM3, buttonMore) => {
  const dataColor = JSON.parse(localStorage.getItem("colors")) || [];
  const dataPrice = JSON.parse(localStorage.getItem("prices")) || [];
  const dataSize = JSON.parse(localStorage.getItem("sizes")) || [];

  let productFilters = filterProducts(
    productM3,
    dataColor,
    dataPrice,
    dataSize
  );

  if (buttonMore.textContent === "Ver mais") {
    productFilters.slice(10, productFilters.length).map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    buttonMore.classList.add("view-less");
    buttonMore.innerHTML = "Ver menos";
  } else {
    boxProduct.innerHTML = ``;
    productFilters.slice(0, 9).map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    buttonMore.classList.add("view-more");
    buttonMore.classList.remove("view-less");
    buttonMore.innerHTML = "Ver mais";
  }
};
