export const htmlSize = (val, index) => {
  return `<option class="size ${val.class}" key="${index}">${val.type}</option>`;
};
