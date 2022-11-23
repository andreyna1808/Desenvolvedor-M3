import colorsJson from "../../json/colors.json";
import pricesJson from "../../json/prices.json";
import ordersJson from "../../json/selectOrder.json";
import sizesJson from "../../json/sizes.json";
import { filterAll } from "./filterAll";
import { oneFilterSelect } from "./oneFilters";
import { twoFiltersSelect } from "./twoFilters";

const serverurl = process.env.SERVER_API;

export const filterProducts = async () => {
  const getAllProducts = await fetch(`${serverurl}/products`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  const dataColor = JSON.parse(localStorage.getItem("colors")) || colorsJson;
  const dataPrice = JSON.parse(localStorage.getItem("prices")) || pricesJson;
  const dataSize = JSON.parse(localStorage.getItem("sizes")) || sizesJson;
  const dataOder = JSON.parse(localStorage.getItem("order")) || ordersJson;

  const colors = dataColor
    .filter((color) => color.checked === "checked")
    .map((color) => color.name.toLowerCase());
  const pricesMax = dataPrice
    .filter((price) => price.checked === "checked")
    .map((price) => Number(price.max));
  const pricesMin = dataPrice
    .filter((price) => price.checked === "checked")
    .map((price) => Number(price.min));
  const sizes = dataSize
    .filter((size) => size.class === "select-size")
    .map((size) => size.type);
  const orders = dataOder
    .filter((oder) => oder.selected === "selected")
    .map((order) => order.name);

  const filterProducts = () => {
    const allProducts = [];
    let typeFilter = "";

    if (colors.length > 0 && pricesMax.length > 0 && sizes.length > 0) {
      const allFilter = filterAll(
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );

      allProducts.push(allFilter);
    } else if (colors.length > 0 && pricesMax.length > 0) {
      typeFilter = "colorPrice";

      const filterTwoSelect = twoFiltersSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterTwoSelect);
    } else if (sizes.length > 0 && colors.length > 0) {
      typeFilter = "colorSize";

      const filterTwoSelect = twoFiltersSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterTwoSelect);
    } else if (pricesMax.length > 0 && sizes.length) {
      typeFilter = "sizePrice";

      const filterTwoSelect = twoFiltersSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterTwoSelect);
    } else if (colors.length) {
      typeFilter = "color";

      const filterOneSelect = oneFilterSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterOneSelect);
    } else if (pricesMax.length) {
      typeFilter = "price";

      const filterOneSelect = oneFilterSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterOneSelect);
    } else if (sizes.length) {
      typeFilter = "size";

      const filterOneSelect = oneFilterSelect(
        typeFilter,
        colors,
        pricesMax,
        pricesMin,
        sizes,
        getAllProducts
      );
      allProducts.push(filterOneSelect);
    }

    return allProducts[0];
  };

  console.log("hereeeeeee", filterProducts());
  console.log("vim", getAllProducts);
};
