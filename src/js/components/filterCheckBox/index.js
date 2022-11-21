export const filterCheckBox = (dataDOM, type) => {
  let checked = [];

  return dataDOM.map((data, index) => {
    return data.addEventListener("click", () => {
      const isChecked = data.querySelector("input").getAttribute("value");

      if (data.querySelectorAll("input")[0].checked) {
        checked.push(isChecked);
      } else {
        const removeChecked = checked?.filter(
          (dataChecked) => isChecked !== dataChecked
        );

        checked = removeChecked;
      }
      console.log("checked", checked);
      localStorage.setItem(type, JSON.stringify(checked));
    });
  });
};
