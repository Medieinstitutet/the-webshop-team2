import { addToCart, cartList} from "../main";
import { checkIfCartIsEmpty } from "./checkIfCartIsEmpty";
import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForCart } from "./createHtmlForCart";
import { createHtmlForTotalAmount } from "./createHtmlForTotalAmount";
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
    const flowerQuantity = document.createElement("p");

    const removeFlowerBtn = document.createElement("button");
    const addFlowerBtn = document.createElement("button");

    removeFlowerBtn.className = "removeFlowerBtn";
    addFlowerBtn.className = "addFlowerBtn";

    removeFlowerBtn.innerHTML = "-";
    addFlowerBtn.innerHTML = "+";

    addFlowerBtn.addEventListener("click", () => {
      addToCart(cartList[i].product);
      createHtmlForPayment();
      checkIfCartIsEmpty();
      countTotalPrice();
      getCartListLen();
      createHtmlForCart(cartList);
      createHtmlForTotalAmount()
    });

    removeFlowerBtn.addEventListener("click", () => {
      if (cartList[i].quantity > 1) {
        cartList[i].quantity = cartList[i].quantity - 1;
      } else {
        cartList.splice(i, 1);
      }
      createHtmlForPayment();
      checkIfCartIsEmpty();
      countTotalPrice();
      getCartListLen();
      createHtmlForCart(cartList);
      createHtmlForTotalAmount()
    });


    flowerImg.src = cartList[i].product.img;
    flowerTitle.innerHTML = cartList[i].product.title;
    flowerPrice.innerHTML = cartList[i].product.price + " kr";
    flowerQuantity.innerHTML = cartList[i].quantity.toString();

    flowerDiv.className = "paymentProductList";

    flowerImg.className = "paymentProductList__img";
    flowerTitle.className = "paymentProductList__title";
    flowerPrice.className = "paymentProductList__price";

    paymentContent.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(flowerQuantity);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
