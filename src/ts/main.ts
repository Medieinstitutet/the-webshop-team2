import "./../scss/style.scss";
import { checkIfCartIsEmpty } from "./funktions/checkIfCartIsEmpty";
import { checkoutContainer1 } from "./funktions/checkoutContainer1";
import { createHtmlForCart } from "./funktions/createHtmlForCart";
import { createHtmlForFlowers } from "./funktions/createHtmlForFlowers";
import { createHtmlForFlowers2 } from "./funktions/createHtmlForFlowers2";
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

createHtmlForFlowers(flowerList);
createHtmlForFlowers2(flowerList2);

export const cartbtn = document.getElementById("cartbtn");
export const cartContainer = document.getElementById(
  "cart-container"
) as HTMLDivElement;

cartbtn?.addEventListener("click", () => {
  cartContainer.style.display = "block";
  createHtmlForCart(cartList);
  checkoutContainer1();
  checkIfCartIsEmpty();
});

const closeCartContainer = document.getElementById(
  "close-cart-container"
) as HTMLButtonElement;

closeCartContainer.addEventListener("click", () => {
  cartContainer.style.display = "none";
});
