export const filters = (dataDOM) => {
  let selected = "";

  dataDOM.map((data) => {
    data.addEventListener("click", () => {
      selected = data.options[data.selectedIndex].text;
    });
  });

  return selected;
};
