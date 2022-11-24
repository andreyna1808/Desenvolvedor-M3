export const htmlOrderMobile = (val, index) => {
  return `<ul key="${index}" value="${val.value} ${val.selected}">${val.name}</ul>`;
};
