let orderProduct = Array.from(document.querySelectorAll(".box-content select"));

export const sectionOrder = () => {
  let selected = "";

  orderProduct.map((data) => {
    data.addEventListener("click", () => {
      selected = data.options[data.selectedIndex].text;
      localStorage.setItem("filter", selected);
    });
  });
};
