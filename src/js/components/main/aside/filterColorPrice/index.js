export const filterColorPrice = (dataDOM) => {
  let checked = [];

  dataDOM.map((data) => {
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
