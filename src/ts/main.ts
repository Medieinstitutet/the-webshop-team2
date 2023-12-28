import "./../scss/style.scss";
import {
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

const hamburgerbtn = document.getElementById("hamburger-btn");

hamburgerbtn?.addEventListener("click", toggleHamburger);

export const flowerList = [flower1, flower2, flower3];
export const flowerList2 = [flower4, flower5, flower6];
export let cartList:any = [];


createHtmlForFlowers(flowerList);
createHtmlForFlowers2(flowerList2);

export const cartbtn = document.getElementById("cartbtn");
export const cartContainer = document.getElementById(
  "cart-container"
) as HTMLDivElement;

cartbtn?.addEventListener("click", () => {
  cartContainer.style.display = "block";
  createHtmlForCart(cartList);
});

const closeCartContainer = document.getElementById(
  "close-cart-container"
) as HTMLButtonElement;

closeCartContainer.addEventListener("click", () => {
  cartContainer.style.display = "none";
});


const checkoutContainer = document.getElementById("checkout-Container") as HTMLDivElement;


  const checkoutBtn = document.createElement("button");
  checkoutBtn.innerHTML = "Checkout";
  checkoutBtn.className = "checkoutBtn";
  checkoutContainer.appendChild(checkoutBtn);

