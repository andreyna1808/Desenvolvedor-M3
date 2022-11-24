import { htmlPriceSizeColor } from "../../htmls/filters-mobile/filter-priceSizeColor";

const orderProduct = document.querySelector(".filterMobile .button-order");
const removeDesktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile-filter");
const removeOrder = document.querySelector(".mobile-filter .order");
const removeButtons = document.querySelector(".mobile-filter .buttons-apply");
const boxFiltersMobile = document.querySelector(
  ".mobile-filter .filters-mobile"
);

export const optionOrder = (dataOder, productsM3) => {
  orderProduct.addEventListener("click", () => {
    removeDesktop.classList.add("remove-desktop");
    mobile.classList.add("mobile-filter-active");
    removeOrder.classList.add("filter-removed");
    removeButtons.classList.add("buttons-apply-removed");

    const filters = ["COLORS", "TAMANHOS", "FAIXA DE PREÇO"];
    boxFiltersMobile.innerHTML = ``;
    filters.map((val) => {
      boxFiltersMobile.innerHTML += `${htmlPriceSizeColor(
        val,
        "selectFilter-mobile"
      )}`;
    });

    /*     boxFiltersMobile.innerHTML = ``;
    dataOder.map((val, index) => {
      boxFiltersMobile.innerHTML += `${htmlPriceSizeColor(val, index, 'CORES')}`;
    });
    dataOder.map((val, index) => {
      boxFiltersMobile.innerHTML += `${htmlPriceSizeColor(val, index, 'TAMANHOS')}`;
    });
    dataOder.map((val, index) => {
      boxFiltersMobile.innerHTML += `${htmlPriceSizeColor(val, index, 'FAIXA DE PREÇO')}`;
    });
 */
  });
};
