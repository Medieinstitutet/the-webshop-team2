import { cartList, paymentContainer, paymentList } from "../main";
import { Flowers } from "../modules/flowersClass";
import { countTotalPrice } from "./countTotalPrice";
import { createPaymentContainer } from "./createPaymentContainer";
/* import { createHtmlForCart } from "./createHtmlForCart"; */

export const checkoutContainer1 = () => {
  const totalCartContainer = document.getElementById(
    "totalCart-container"
  ) as HTMLDivElement;
  if (!document.getElementById("checkout-Container")) {
    const checkoutContainer = document.createElement("div");
    const totalAmountText = document.createElement("h3");

    checkoutContainer.id = "checkout-Container";
    totalAmountText.id = "totalAmount-text";

    totalCartContainer.appendChild(checkoutContainer);
    checkoutContainer.appendChild(totalAmountText);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.innerHTML = "Checkout";
    checkoutBtn.className = "checkoutBtn";
    checkoutBtn.id = "checkoutBtn";
    checkoutContainer.appendChild(checkoutBtn);
    countTotalPrice();

  checkoutBtn.addEventListener ("click", () => {
  paymentContainer.style.display = "block";
  for (let i= 0; i < cartList.length; i++) {
    paymentList.push(cartList[i]);
    createPaymentContainer ()
  }
  });

}
  }

