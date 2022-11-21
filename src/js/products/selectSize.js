let boxSizes = Array.from(document.querySelectorAll(".box-sizes option"));

export const selectSize = () => {
  let arraySizes = [];

  console.log("sizes", boxSizes);
  return boxSizes.map((data, index) => {
    return data.addEventListener("click", () => {
      const isHave = arraySizes.filter((size) => data.textContent === size);
      if (isHave.length >= 1) {
        data.classList.remove("select-size");
        const removeDataToSize = arraySizes.filter(
          (sizes) => data.textContent !== sizes
        );
        arraySizes = removeDataToSize;
      } else {
        console.log("sai", data.textContent);

        arraySizes.push(data.textContent);
        data.classList.add("select-size");
      }

      console.log("Aqqq", arraySizes);
      window.localStorage.setItem("sizes", JSON.stringify(arraySizes));
    });
  });
};
