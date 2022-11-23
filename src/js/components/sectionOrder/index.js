let orderProduct = Array.from(document.querySelectorAll(".box-content select"));

export const sectionOrder = (dataOder) => {
  let selected = "";

  orderProduct.map((data) => {
    data.addEventListener("click", () => {
      selected = data.options[data.selectedIndex].text;

      dataOder.filter((oderData) => {
        if (oderData.name === selected) {
          return (oderData.selected = "selected");
        }
        return data;
      });
      localStorage.setItem("order", JSON.stringify(dataOder));
    });
  });
};
