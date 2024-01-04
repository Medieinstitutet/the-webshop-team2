import { countTotalPrice } from "./countTotalPrice";

export const createHtmlForTotalAmount = () => {
    const totalAmountContainer = document.getElementById("totalAmount-container") as HTMLDivElement;
    const checkTotalAmount = document.getElementById("totalAmount-text") as HTMLHeadingElement;
    if (!checkTotalAmount) {
      const totalAmountText = document.createElement("h3");
  
      totalAmountText.className = "totalAmount-text";
      totalAmountText.id = "totalAmount-text";
      totalAmountText.innerHTML = "";
      totalAmountContainer.appendChild(totalAmountText);
    }
    countTotalPrice();
  };