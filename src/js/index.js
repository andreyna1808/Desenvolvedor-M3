import { buyProduct } from "./components/header/buyProduct";
import { htmlProduct } from "./components/htmls/box-products";
import { filterColorPrice } from "./components/main/aside/filterColorPrice";
import { selectSize } from "./components/main/aside/selectSize";
import { viewMoreColors } from "./components/main/aside/viewMoreColors";
import { onViewMore } from "./components/main/products/onViewMore";
import { sectionOrder } from "./components/sectionOrder";

const serverurl = process.env.SERVER_API;

let boxProduct = document.querySelector(".box-products .products");
let boxPrices = Array.from(document.querySelectorAll(".box-prices li"));
let boxColors = Array.from(document.querySelectorAll(".box-colors li"));

fetch(`${serverurl}/products`)
  .then((response) => response.json())
  .then((data) => App(data));

const App = (getData) => {
  const basicProducts = [];
  basicProducts.push(getData.slice(0, 9));

  basicProducts[0].map((val, index) => {
    boxProduct.innerHTML += `${htmlProduct(val, index)}`;
  });

  buyProduct();

  onViewMore(boxProduct, getData);
  viewMoreColors();

  filterColorPrice(boxPrices);
  filterColorPrice(boxColors);
  selectSize();
  sectionOrder();
};
