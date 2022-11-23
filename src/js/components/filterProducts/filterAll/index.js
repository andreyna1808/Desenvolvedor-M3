export const filterAll = (colors, pricesMax, pricesMin, sizes, allProducts) => {
  return allProducts.filter((product) => {
    return (
      colors.includes(product.color.toLowerCase()) &&
      product.size
        .map((size) => sizes.includes(size))
        .join()
        .includes(true) &&
      product.price <= pricesMax[pricesMax.length - 1] &&
      product.price > pricesMin[0]
    );
  });
};
