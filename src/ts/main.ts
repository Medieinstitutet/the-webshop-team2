import "./../scss/style.scss";
import { checkIfCartIsEmpty } from "./functions/checkIfCartIsEmpty";
import { checkoutContainerCart } from "./functions/checkoutContainerCart";
import { createHtmlForCart } from "./functions/createHtmlForCart";
import { createHtmlForFlowers } from "./functions/createHtmlForFlowers";
import { createHtmlForFlowers2 } from "./functions/createHtmlForFlowers2";
import { createMenu } from "./functions/createMenu";
import { getCartListLen } from "./functions/getCartListLen";
import {
  flower1,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
} from "./modules/flowerObjects";
import { Flowers } from "./modules/flowersClass";

//hamburgerbtn?.addEventListener("click", toggleHamburger);

export const flowerList: Flowers[] = [flower1, flower2, flower3];
export const flowerList2: Flowers[] = [flower4, flower5, flower6];
export let cartList: Flowers[] = [];
//export let paymentList: Flowers[] = [];

createHtmlForFlowers(flowerList);
createHtmlForFlowers2(flowerList2);

export const cartbtn = document.getElementById("cartbtn");
export const cartContainer = document.getElementById(
  "cart-container"
) as HTMLDivElement;

cartbtn?.addEventListener("click", () => {
  cartContainer.style.display = "block";
  createHtmlForCart(cartList);
  checkoutContainerCart();
  checkIfCartIsEmpty();
});

const closeCartContainer = document.getElementById(
  "close-cart-container"
) as HTMLButtonElement;

closeCartContainer.addEventListener("click", () => {
  cartContainer.style.display = "none";
});

export const paymentbtn = document.getElementById("paymentbtn");
export const paymentContainer = document.getElementById(
  "payment-container"
) as HTMLDivElement;

paymentbtn?.addEventListener("click", () => {
  paymentContainer.style.display = "block";
});

export const closePaymentContainer = document.getElementById(
  "closePaymentContainer"
) as HTMLButtonElement;

closePaymentContainer.addEventListener("click", () => {
  paymentContainer.style.display = "none";
  document.body.style.overflow = "visible";
});

export const checkoutBtn = document.getElementById(
  "checkoutBtn"
) as HTMLButtonElement;
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    paymentContainer.style.display = "block";
    createHtmlForCart(cartList);
  });
}

createMenu();
getCartListLen();
