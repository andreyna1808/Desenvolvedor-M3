import { filterCheckBox } from "./components/filterCheckBox";
import { filters } from "./components/filters";
import { onViewMore } from "./components/onViewMore";
import { htmlProduct } from "./components/productHtml";
import { selectSize } from "./products/selectSize";
import { viewMoreColors } from "./products/viewMoreColors";

const serverurl = process.env.SERVER_API;

let boxProduct = document.querySelector(".box-products .products");
let qtdProductsToCart = document.querySelector("header section p");
let boxPrices = Array.from(document.querySelectorAll(".box-prices li"));
let boxColors = Array.from(document.querySelectorAll(".box-colors li"));
let domFilters = Array.from(document.querySelectorAll(".box-content select"));
let boxSizes = Array.from(document.querySelectorAll(".box-sizes option"));

fetch(`${serverurl}/products`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const basicProducts = [];
    basicProducts.push(data.slice(0, 9));

    basicProducts[0].map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });

    onViewMore(boxProduct, data);

    filterCheckBox(boxPrices);
    filterCheckBox(boxColors);
    filters(domFilters);
    viewMoreColors();
    selectSize(boxSizes);

    console.log("boxPrices", filterCheckBox(boxPrices));
    console.log("boxColors", filterCheckBox(boxColors));

    console.log("filters", filters(domFilters));
    console.log("selectSize", selectSize(boxSizes));

    let buyProduct = Array.from(
      document.querySelectorAll(".product div button")
    );
    const cartProducts = [];
    buyProduct.map((data, value) => {
      data.addEventListener("click", () => {
        cartProducts.push(data.textContent);
        qtdProductsToCart.innerHTML = cartProducts.length || 0;
      });
    });
  })
  .catch((err) => {
    console.warn("Something went wrong.", err);
  });
