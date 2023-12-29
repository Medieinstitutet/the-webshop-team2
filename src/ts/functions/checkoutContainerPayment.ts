/* import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForPayment } from "./createHtmlForPayment";

simport { cartList } from "../main";

export const finalContainerPayment = () => {
  const totalPaymentContainer = document.getElementById(
    "totalPayment-container"
  ) as HTMLDivElement;
  const finalPaymentContainer = document.createElement("div");
  const finalAmountText = document.createElement("h3");
  const finalPaymentbtn = document.createElement("button");

  finalPaymentContainer.innerHTML = "hej";
  finalPaymentbtn.innerHTML = "pay";
     let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
    finalAmountText.innerHTML = "Total Amount:" + totalPrice + "kr";
  } 
  finalPaymentContainer.className = " finalPaymentContainer";
  finalAmountText.id = "finalAmountText";

  totalPaymentContainer.appendChild(finalPaymentContainer);
  finalPaymentContainer.appendChild(finalAmountText);
  finalPaymentContainer.appendChild(finalPaymentbtn);
};
 */

import { paymentContainer } from "../main";
import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForPayment } from "./createHtmlForPayment";

export const finalContainerPayment = () => {
  const totalCartContainer = document.getElementById(
    "totalpayment-container"
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

    checkoutBtn.addEventListener("click", () => {
      paymentContainer.style.display = "block";
      createHtmlForPayment();
    });
  }
};
