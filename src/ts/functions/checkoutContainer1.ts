import { countTotalPrice } from "./countTotalPrice";

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
  }
};
