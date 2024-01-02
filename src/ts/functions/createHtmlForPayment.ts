import { cartList, pay } from "../main";
import { checkIfCartIsEmpty } from "./checkIfCartIsEmpty";
import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForCart } from "./createHtmlForCart";
import { getCartListLen } from "./getCartListLen";

export function createHtmlForPayment() {
  document.body.style.overflow = "hidden";

  const paymentContent = document.getElementById(
    "payment-product"
  ) as HTMLDivElement;
  paymentContent.innerHTML = "";
  for (let i = 0; i < cartList.length; i++) {
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerPrice = document.createElement("p");

    const removeFlowerBtn = document.createElement("button");
    const addFlowerBtn = document.createElement("button");

    removeFlowerBtn.className = "removeFlowerBtn";
    addFlowerBtn.className = "addFlowerBtn";

    removeFlowerBtn.innerHTML = "-";
    addFlowerBtn.innerHTML = "+";

    addFlowerBtn.addEventListener("click", () => {
      cartList.push(cartList[i]);
      localStorage.setItem("product", JSON.stringify(cartList));
      createHtmlForPayment();
      checkIfCartIsEmpty();
      countTotalPrice();
      getCartListLen();
      createHtmlForCart(cartList);
      pay();
    });

    removeFlowerBtn.addEventListener("click", () => {
      cartList.splice(i, 1);
      localStorage.setItem("product", JSON.stringify(cartList));
      createHtmlForPayment();
      checkIfCartIsEmpty();
      countTotalPrice();
      getCartListLen();
      createHtmlForCart(cartList);
      pay();
    });

    flowerImg.src = cartList[i].img;
    flowerTitle.innerHTML = cartList[i].title;
    flowerPrice.innerHTML = cartList[i].price + " kr";

    flowerDiv.className = "paymentProductList";

    flowerImg.className = "paymentProductList__img";
    flowerTitle.className = "paymentProductList__img";
    flowerPrice.className = "paymentProductList__img";


    paymentContent.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
