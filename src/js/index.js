import { buyProduct } from "./components/header/buyProduct";
import { htmlColorPrice } from "./components/htmls/box-colorPrice";
import { htmlProduct } from "./components/htmls/box-products";
import { htmlSize } from "./components/htmls/box-sizes";
import { filterColorPrice } from "./components/main/aside/filterColorPrice";
import { selectSize } from "./components/main/aside/selectSize";
import { viewMoreColors } from "./components/main/aside/viewMoreColors";
import { onViewMore } from "./components/main/products/onViewMore";
import { sectionOrder } from "./components/sectionOrder";

import colorsJson from "./json/colors.json";
import pricesJson from "./json/prices.json";
import ordersJson from "./json/selectOrder.json";
import sizesJson from "./json/sizes.json";

const serverurl = process.env.SERVER_API;

let boxProduct = document.querySelector(".box-products .products");
let boxPrices = document.querySelector(".box-prices .prices");
let boxColors = document.querySelector(".box-colors .colors");
let boxSizes = document.querySelector(".box-sizes .sizes");

fetch(`${serverurl}/products`)
  .then((response) => response.json())
  .then((data) => App(data));

const App = (products) => {
  const dataColor = colorsJson;
  const dataPrice = pricesJson;
  const dataSize = sizesJson;
  const dataOder = ordersJson;

  products.slice(0, 9).map((val, index) => {
    boxProduct.innerHTML += `${htmlProduct(val, index)}`;
  });

  dataPrice.map((val, index) => {
    boxPrices.innerHTML += `${htmlColorPrice(val, index)}`;
  });

  dataColor.slice(0, 5).map((val, index) => {
    boxColors.innerHTML += `${htmlColorPrice(val, index)}`;
  });

  dataSize.map((val, index) => {
    boxSizes.innerHTML += `${htmlSize(val, index)}`;
  });

  /*   dataOder.map((val, index) => {
    boxPrices.innerHTML += `${htmlColorPrice(val, index)}`;
  }); */

  onViewMore(boxProduct, products);
  viewMoreColors(boxColors, dataColor);

  buyProduct();

  filterColorPrice(boxPrices);
  filterColorPrice(boxColors);
  selectSize(boxSizes);
  sectionOrder();
};
