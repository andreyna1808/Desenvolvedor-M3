import { filterProducts } from "./components/filterProducts";
import { buyProduct } from "./components/header/buyProduct";
import { htmlColorPrice } from "./components/htmls/box-colorPrice";
import { htmlSelectOrder } from "./components/htmls/box-content";
import { htmlProduct } from "./components/htmls/box-products";
import { htmlSize } from "./components/htmls/box-sizes";
import { filterColorPrice } from "./components/main/aside/filterColorPrice";
import { selectSize } from "./components/main/aside/selectSize";
import { onViewMore } from "./components/main/products/onViewMore";
import { sectionOrder } from "./components/sectionOrder";

import colorsJson from "./json/colors.json";
import pricesJson from "./json/prices.json";
import ordersJson from "./json/selectOrder.json";
import sizesJson from "./json/sizes.json";
import { hasMoreProduct } from "./utils/buttonViewMore";

const serverurl = process.env.SERVER_API;

let boxProduct = document.querySelector(".box-products .products");
let boxPrices = document.querySelector(".box-prices .prices");
let boxColors = document.querySelector(".box-colors .colors");
let boxSizes = document.querySelector(".box-sizes .sizes");
let boxOrders = document.querySelector(".box-content select");
let buttonMore = document.querySelector(".box-products .box-button button");

fetch(`${serverurl}/products`)
  .then((response) => response.json())
  .then((data) => {
    App(data);
  });

const App = (productsM3) => {
  const resetOrder = localStorage.setItem("order", JSON.stringify(ordersJson));

  const dataColor = JSON.parse(localStorage.getItem("colors")) || colorsJson;
  const dataPrice = JSON.parse(localStorage.getItem("prices")) || pricesJson;
  const dataSize = JSON.parse(localStorage.getItem("sizes")) || sizesJson;
  const dataOder = JSON.parse(localStorage.getItem("order")) || ordersJson;

  let productFilters = filterProducts(
    productsM3,
    dataColor,
    dataPrice,
    dataSize
  );

  productFilters.slice(0, 9).map((val, index) => {
    boxProduct.innerHTML += `${htmlProduct(val, index)}`;
  });

  dataColor.slice(0, 5).map((val, index) => {
    boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
  });

  dataPrice.map((val, index) => {
    boxPrices.innerHTML += `${htmlColorPrice(val, index)}`;
  });

  dataSize.map((val, index) => {
    boxSizes.innerHTML += `${htmlSize(val, index)}`;
  });

  dataOder.map((val, index) => {
    boxOrders.innerHTML += `${htmlSelectOrder(val, index)}`;
  });

  hasMoreProduct(productFilters);
  buttonMore.addEventListener("click", () => {
    onViewMore(boxProduct, productsM3, buttonMore);
    buyProduct();
  });

  buyProduct();

  filterColorPrice(boxPrices, "prices", dataPrice, productsM3);
  filterColorPrice(boxColors, "colors", dataColor, productsM3);

  selectSize(dataSize, productsM3);

  //TODO order
  sectionOrder(dataOder, productsM3);
};
