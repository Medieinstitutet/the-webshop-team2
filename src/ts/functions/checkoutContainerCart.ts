import {paymentContainer } from "../main";
import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForPayment } from "./createHtmlForPayment";
import { createHtmlForTotalAmount } from "./createHtmlForTotalAmount";

export const checkoutContainerCart = () => {
  const totalCartContainer = document.getElementById(
    "totalCart-container"
  ) as HTMLDivElement;
  if (!document.getElementById("checkout-Container")) {
    const checkoutContainer = document.createElement("div");
    const line = document.createElement("hr");
    const totalAmountText = document.createElement("h3");

    checkoutContainer.id = "checkout-Container";
    totalAmountText.className = "totalAmount-text";
    line.className = "line";

    totalCartContainer.appendChild(checkoutContainer);
    checkoutContainer.appendChild(totalAmountText);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.innerHTML = "Checkout";
    checkoutBtn.className = "checkoutBtn";
    checkoutBtn.id = "checkoutBtn";
    checkoutContainer.appendChild(line);
    checkoutContainer.appendChild(checkoutBtn);
    countTotalPrice();

    checkoutBtn.addEventListener("click", () => {
      paymentContainer.style.display = "block";
      createHtmlForPayment();
    createHtmlForTotalAmount()
      
    });
  }
};
