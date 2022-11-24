import { buyProduct } from "../../header/buyProduct";
import { htmlOrderMobile } from "../../htmls/filters-mobile/filter-order";
import { sectionOrder } from "../../sectionOrder";

const orderProduct = document.querySelector(".filterMobile .button-filter");
const removeDesktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile-filter");
const removeFilter = document.querySelector(".mobile-filter .filter");
const removeButtons = document.querySelector(".mobile-filter .buttons-apply");
const boxOrdersMobile = document.querySelector(
  ".mobile-filter .filters-mobile"
);

export const optionOrder = (dataOder, productsM3) => {
  orderProduct.addEventListener("click", () => {
    removeDesktop.classList.add("remove-desktop");
    mobile.classList.add("mobile-filter-active");
    removeFilter.classList.add("filter-removed");
    removeButtons.classList.add("buttons-apply-removed");

    boxOrdersMobile.innerHTML = ``;
    dataOder.map((val, index) => {
      boxOrdersMobile.innerHTML += `${htmlOrderMobile(val, index)}`;
    });

    let orderProductDOM = Array.from(
      document.querySelectorAll(".filters-mobile option")
    );

    orderProductDOM.map((data) => {
      data.addEventListener("click", () => {
        const selected = data.textContent;
        sectionOrder(dataOder, productsM3, selected);
        removeDesktop.classList.remove("remove-desktop");
        mobile.classList.remove("mobile-filter-active");
        buyProduct();
      });
    });
  });
};
