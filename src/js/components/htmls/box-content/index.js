export const htmlSelectOrder = (val, index) => {
  return `<option key="${index}" value="${val.value} ${val.selected}">${val.name}</option>`;
};
