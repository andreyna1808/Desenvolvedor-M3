export const eventListColorPrice = (dom, json, type) => {
  let checked = JSON.parse(localStorage.getItem(type)) || json;

  dom.map((data) => {
    data.addEventListener("click", () => {
      const isChecked = data.querySelector("input").getAttribute("value");
      if (data.querySelectorAll("input")[0].checked) {
        json.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            return (data.checked = "checked");
          }
          return data;
        });
        checked = json;
        localStorage.setItem(type, JSON.stringify(checked));
      } else {
        json.filter((data) => {
          if (data.name === isChecked || data.value === isChecked) {
            return (data.checked = null);
          }
          return data;
        });
        checked = json;
        localStorage.setItem(type, JSON.stringify(checked));
      }
    });
  });
};
