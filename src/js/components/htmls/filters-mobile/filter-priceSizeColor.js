export const htmlPriceSizeColor = (title, classNameUl, classNameDiv) => {
  return `<div>
            <ul class='ul-mobile ${classNameUl}'>${title}<p>v</p></ul>
            <div class="${classNameDiv}"></div>
          </div>`;
};
