export const filterColorPrice = (dataDOM, productsM3, type, json) => {
  let boxProduct = document.querySelector(".box-products .products");

  let dom = Array.from(dataDOM.querySelectorAll("li"));
  let checked = JSON.parse(localStorage.getItem(type)) || [];
  let selectionsJson = json;

  dom.map((data) => {
    data.addEventListener("click", () => {
      const isChecked = data.querySelector("input").getAttribute("value");
      if (data.querySelectorAll("input")[0].checked) {
        selectionsJson.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            data.checked = "checked";
          }
          return data;
        });
        checked = selectionsJson;
        localStorage.setItem(type, JSON.stringify(checked));
      } else {
        selectionsJson.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            data.checked = null;
          }
          return data;
        });
        checked = selectionsJson;
        localStorage.setItem(type, JSON.stringify(checked));
      }
      console.log("checked fora do if", checked);
    });
  });
  console.log("checked fora", checked);

  return checked;
};
