export const twoFiltersSelect = (
  type,
  colors,
  pricesMax,
  pricesMin,
  sizes,
  allProducts
) => {
  if (type === "colorSize") {
    return allProducts.filter((product) => {
      return (
        colors.includes(product.color.toLowerCase()) &&
        product.size
          .map((size) => sizes.includes(size))
          .join()
          .includes(true)
      );
    });
  } else if (type === "colorPrice") {
    return allProducts.filter((product) => {
      return (
        colors.includes(product.color.toLowerCase()) &&
        product.price <= pricesMax[pricesMax.length - 1] &&
        product.price > pricesMin[0]
      );
    });
  } else if (type === "sizePrice") {
    return allProducts.filter((product) => {
      return (
        product.size
          .map((size) => sizes.includes(size))
          .join()
          .includes(true) &&
        product.price <= pricesMax[pricesMax.length - 1] &&
        product.price > pricesMin[0]
      );
    });
  }
};
