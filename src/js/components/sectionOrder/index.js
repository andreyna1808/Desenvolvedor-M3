import { buyProduct } from "../header/buyProduct";
import { filterOrder } from "./filterOrder";

let orderProduct = Array.from(document.querySelectorAll(".box-content select"));

export const sectionOrder = (dataOder, productsM3) => {
  let selected = "";

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

      filterOrder(productsM3);

      buyProduct();
    });
  });
};
