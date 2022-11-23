import colorsJson from "../../json/colors.json";
import pricesJson from "../../json/prices.json";
import ordersJson from "../../json/selectOrder.json";
import sizesJson from "../../json/sizes.json";

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
  const prices = dataPrice
    .filter((price) => price.checked === "checked")
    .map((price) => Number(price.max));
  const sizes = dataSize
    .filter((size) => size.class === "select-size")
    .map((size) => size.type);
  const orders = dataOder
    .filter((oder) => oder.selected === "selected")
    .map((order) => order.name);

  console.log("fui colors", colors);
  console.log("fui prices", prices);
  console.log("fui sizes", sizes);
  console.log("fui order", orders);
  console.log("aqqq", getAllProducts);

  const filterProducts = () => {
    const allProduct = [];

    getAllProducts.filter((product) => {
      const hasColor = colors.includes(product.color.toLowerCase());

      console.log("hasColor", hasColor);

      if (
        hasColor === true &&
        product.price <= prices[prices.length - 1] &&
        product.price > prices[0]
      ) {
        console.log("entreiii", product);
        allProduct.push(product);
        return product;
      } else {
        allProduct.push(product);
      }
    });
    console.log("allProduct", allProduct);

    return allProduct;
  };

  console.log("here", filterProducts());
};
