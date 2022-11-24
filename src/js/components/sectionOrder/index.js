import { filterOrder } from "./filterOrder";

export const sectionOrder = (dataOder, productsM3, dataSelect) => {
  dataOder.filter((oderData) => {
    if (oderData.name === dataSelect) {
      return (oderData.selected = "selected");
    } else {
      return (oderData.selected = "");
    }
  });
  localStorage.setItem("order", JSON.stringify(dataOder));

  filterOrder(productsM3);
};
