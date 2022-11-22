export const filterColorPrice = (dataDOM) => {
  let dom = Array.from(dataDOM.querySelectorAll("li"));
  let checked = [];

  dom.map((data) => {
    data.addEventListener("click", () => {
      const isChecked = data.querySelector("input").getAttribute("value");
      if (data.querySelectorAll("input")[0].checked) {
        checked.push(isChecked);
      } else {
        const removeChecked = checked?.filter(
          (dataChecked) => isChecked !== dataChecked
        );
        checked = removeChecked;
      }
    });
  });
  return checked;
};
