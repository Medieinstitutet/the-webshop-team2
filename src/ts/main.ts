import "./../scss/style.scss";
import { checkIfCartIsEmpty } from "./functions/checkIfCartIsEmpty";
import { checkoutContainerCart } from "./functions/checkoutContainerCart";
import { createHtmlForCart } from "./functions/createHtmlForCart";
import { createHtmlForFlowers } from "./functions/createHtmlForFlowers";
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
import { CartItem } from "./modules/cartItemClass";
import { createHtmlForTotalAmount } from "./functions/createHtmlForTotalAmount";

export const flowerList: Flowers[] = [
  flower1,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
];
export let cartList: CartItem[] = [];

createHtmlForFlowers(flowerList);

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
    createHtmlForTotalAmount();
  });
}

createMenu();
getCartListLen();
