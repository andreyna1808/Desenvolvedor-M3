let boxColors = Array.from(document.querySelectorAll(".box-colors li"));

export const filters = () => {
  let checked = [];

  return boxColors.map((data, index) => {
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
      window.localStorage.setItem("colors", JSON.stringify(checked));
    });
  });
};
