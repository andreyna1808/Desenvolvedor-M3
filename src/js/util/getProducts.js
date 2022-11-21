export const getProducts = async () => {
  return await fetch(`${serverurl}/products`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn("Something went wrong.", err);
    });
};
