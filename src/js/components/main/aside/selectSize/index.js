export const selectSize = (json) => {
  let boxSizes = Array.from(
    document.querySelectorAll(".box-sizes .sizes .size")
  );

  let checked = JSON.parse(localStorage.getItem("sizes")) || json;

  boxSizes.map((data) => {
    data.addEventListener("click", () => {
      const isHave = checked.filter(
        (size) => data.textContent === size.type && size.class
      );
      if (isHave.length >= 1) {
        json.filter((jsonData) => {
          if (jsonData.type === data.textContent) {
            return (jsonData.class = "");
          }
          return data;
        });
        checked = json;
        localStorage.setItem("sizes", JSON.stringify(checked));
        data.classList.remove("select-size");
      } else {
        json.filter((jsonData) => {
          if (jsonData.type === data.textContent) {
            return (jsonData.class = "select-size");
          }
          return data;
        });
        checked = json;
        localStorage.setItem("sizes", JSON.stringify(checked));
        data.classList.add("select-size");
      }
    });
  });
};
