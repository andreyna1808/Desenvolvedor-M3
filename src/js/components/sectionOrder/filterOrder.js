import {
  functionDate,
  functionSortCrescent,
  functionSortDescent,
} from "../../utils/sortNumber";
import { htmlProduct } from "../htmls/box-products";

let boxProduct = document.querySelector(".box-products .products");

export const filterOrder = (productsM3) => {
  const orderStorage = JSON.parse(localStorage.getItem("order"));
  const orders = orderStorage
    .filter((oder) => oder.selected === "selected")
    .map((order) => order.name);

  if (orders[0] === "Menor preço") {
    const sortProducts = productsM3.sort(functionSortCrescent);

    boxProduct.innerHTML = ``;
    sortProducts.map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });
  } else if (orders[0] === "Maior preço") {
    const sortProducts = productsM3.sort(functionSortDescent);

    boxProduct.innerHTML = ``;
    sortProducts.map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });
  } else if (orders[0] === "Mais recentes") {
    const sortProducts = productsM3.sort(functionDate);

    boxProduct.innerHTML = ``;
    sortProducts.map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });
  } else {
    boxProduct.innerHTML = ``;
    productsM3.map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });
  }
};
