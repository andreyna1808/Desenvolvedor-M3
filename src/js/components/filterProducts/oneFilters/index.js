export const oneFilterSelect = (
  type,
  colors,
  pricesMax,
  pricesMin,
  sizes,
  allProducts
) => {
  if (type === "color") {
    return allProducts.filter((product) => {
      return colors.includes(product.color.toLowerCase());
    });
  } else if (type === "size") {
    return allProducts.filter((product) => {
      return product.size
        .map((size) => sizes.includes(size))
        .join()
        .includes(true);
    });
  } else if (type === "price") {
    return allProducts.filter((product) => {
      return (
        product.price <= pricesMax[pricesMax.length - 1] &&
        product.price > pricesMin[0]
      );
    });
  }
};
