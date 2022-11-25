export const htmlPriceSizeColor = (data) => {
  return `<div class='${data.type}'>
            <ul class='ul-mobile'>${data.type.toUpperCase()}<p>v</p></ul>
            <div class="${data.className}"></div>
          </div>`;
};
