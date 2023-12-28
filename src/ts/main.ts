import "./../scss/style.scss";
import {
  checkoutContainer1,
  createHtmlForCart,
  createHtmlForFlowers,
  createHtmlForFlowers2,
  toggleHamburger,
} from "./functions";
import {
  flower1,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
} from "./modules/flowerObjects";
import { Flowers } from "./modules/flowersClass";
const hamburgerbtn = document.getElementById("hamburger-btn");

hamburgerbtn?.addEventListener("click", toggleHamburger);

export const flowerList: Flowers[] = [flower1, flower2, flower3];
export const flowerList2: Flowers[] = [flower4, flower5, flower6];
export let cartList: Flowers[] = [];

/* if (localStorage.getItem("product")) {
  cartList = JSON.parse(localStorage.getItem("product") || "");
} */

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
});

const closeCartContainer = document.getElementById(
  "close-cart-container"
) as HTMLButtonElement;

closeCartContainer.addEventListener("click", () => {
  cartContainer.style.display = "none";
});

/* const checkoutContainer = document.getElementById(
  "checkout-Container"
) as HTMLDivElement;

const checkoutBtn = document.createElement("button");
checkoutBtn.innerHTML = "Checkout";
checkoutBtn.className = "checkoutBtn";
checkoutContainer.appendChild(checkoutBtn);
 */
