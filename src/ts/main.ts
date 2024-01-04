import "./../scss/style.scss";
import { checkIfCartIsEmpty } from "./functions/checkIfCartIsEmpty";
import { checkoutContainerCart } from "./functions/checkoutContainerCart";
import { countTotalPrice } from "./functions/countTotalPrice";
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
import { CartItem } from "./modules/cartItem";

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
    pay();
  });
}

createMenu();
getCartListLen();

export const pay = () => {
  const div = document.getElementById("payment-pay") as HTMLDivElement;
  const h3 = document.getElementById("totalAmount-text") as HTMLHeadingElement;
  if (!h3) {
    const h3 = document.createElement("h3");

    h3.className = "totalAmount-text";
    h3.id = "totalAmount-text";
    h3.innerHTML = "";
    div.appendChild(h3);
  }
  countTotalPrice();
};

export const finalPaymentBtn = document.getElementById(
  "finalPaymentBtn"
) as HTMLButtonElement;

finalPaymentBtn.addEventListener("click", () => {
  const simLoad = document.getElementById("simLoad") as HTMLDivElement;
  simLoad.style.display = "block";

  setTimeout(() => {
    const simTitle = document.getElementById("simTitle") as HTMLDivElement;
    const loader = document.getElementById("loader") as HTMLDivElement;
    simTitle.innerHTML = "purchase succeeded!";
    const orderNumber = document.createElement("p");
    orderNumber.id = "orderNumber";
    orderNumber.innerHTML = "Ordernumber: 123456";
    simLoad.appendChild(orderNumber);
    console.log(cartList);
    cartList.splice(0);
    console.log(cartList);
    setTimeout(() => {
      simLoad.style.display = "none";
    }, 1000);
    loader.style.display = "none";
  }, 1000);
});

export const addToCart = (flower: Flowers) => {
  const isItemInCart = cartList.find(
    (cartItem) => cartItem.product.id === flower.id
  );
  if (!isItemInCart) {
    const cartItem = new CartItem(flower, 1);
    cartList.push(cartItem);
  } else {
    isItemInCart.quantity++;
  }
};
