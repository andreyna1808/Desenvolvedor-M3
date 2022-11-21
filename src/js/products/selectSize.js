export const selectSize = (dataDOM) => {
  let arraySizes = [];

  dataDOM.map((data) => {
    data.addEventListener("click", () => {
      const isHave = arraySizes.filter((size) => data.textContent === size);
      if (isHave.length >= 1) {
        data.classList.remove("select-size");
        const removeDataToSize = arraySizes.filter(
          (sizes) => data.textContent !== sizes
        );
        arraySizes = removeDataToSize;
      } else {
        arraySizes.push(data.textContent);
        data.classList.add("select-size");
      }
      localStorage.setItem("sizes", JSON.stringify(arraySizes));
    });
  });

  return arraySizes;
};
