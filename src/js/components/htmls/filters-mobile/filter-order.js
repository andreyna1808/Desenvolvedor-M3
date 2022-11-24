export const htmlOrderMobile = (val, index) => {
  return `<option class="ul-mobile" key="${index}" value="${val.value} ${val.selected}">${val.name}</option>`;
};
