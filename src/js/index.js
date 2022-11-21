import { onViewMore } from "./components/onViewMore";
import { htmlProduct } from "./components/productHtml";
import { filters } from "./products/filters";
import { viewMoreColors } from "./products/viewMoreColors";

const serverurl = process.env.SERVER_API;

console.log("Dev m3", serverurl);

//Criando o saiba mais
let boxProduct = document.querySelector(".box-products .products");

fetch(`${serverurl}/products`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const basicProducts = [];
    basicProducts.push(data.slice(0, 9));

    onViewMore(boxProduct, data);
    filters();
    viewMoreColors();

    console.log("data", data);

    basicProducts[0].map((val, index) => {
      boxProduct.innerHTML += `${htmlProduct(val, index)}`;
    });
  })
  .catch((err) => {
    console.warn("Something went wrong.", err);
  });
