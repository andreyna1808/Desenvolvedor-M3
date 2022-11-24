import {
  functionDate,
  functionSortCrescent,
  functionSortDescent,
} from "../../utils/sortNumber";
import { buyProduct } from "../header/buyProduct";
import { htmlProduct } from "../htmls/box-products";

let orderProduct = Array.from(document.querySelectorAll(".box-content select"));

export const sectionOrder = (dataOder, productsM3) => {
  let selected = "";
  let boxProduct = document.querySelector(".box-products .products");

  orderProduct.map((data) => {
    data.addEventListener("click", () => {
      selected = data.options[data.selectedIndex].text;

      dataOder.filter((oderData) => {
        if (oderData.name === selected) {
          return (oderData.selected = "selected");
        } else {
          return (oderData.selected = "");
        }
      });
      localStorage.setItem("order", JSON.stringify(dataOder));

      const orderStorage =
        JSON.parse(localStorage.getItem("order")) || ordersJson;
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

      buyProduct();
    });
  });
};
