export const functionSortCrescent = (a, b) => {
  return a.price - b.price;
};

export const functionSortDescent = (a, b) => {
  return b.price - a.price;
};

export const functionDate = (a, b) => {
  return b.date.replace(/\D/g, "") - a.date.replace(/\D/g, "");
};
