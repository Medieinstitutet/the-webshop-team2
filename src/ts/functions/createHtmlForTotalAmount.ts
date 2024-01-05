import { countTotalPrice } from "./countTotalPrice";

export const createHtmlForTotalAmount = () => {
  const totalAmountContainer = document.getElementById(
    "totalAmount-container"
  ) as HTMLDivElement;
  const checkTotalAmount = document.getElementById(
    "totalAmount-text"
  ) as HTMLHeadingElement;
  if (!checkTotalAmount) {
    const totalAmountText = document.createElement("h3");
    const line = document.createElement("hr");

    totalAmountText.className = "totalAmount-text";
    line.className = "line2";
    totalAmountText.id = "totalAmount-text";
    totalAmountText.innerHTML = "";
    totalAmountContainer.appendChild(line);
    totalAmountContainer.appendChild(totalAmountText);
  }
  countTotalPrice();
};
