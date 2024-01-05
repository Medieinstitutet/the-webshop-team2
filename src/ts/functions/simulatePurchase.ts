import { cartList } from "../main";

export function simulatePurchase() {
  const simLoad = document.getElementById("simLoad") as HTMLDivElement;
  simLoad.classList.add("showSimLoad");
  const closePaymentContainer = document.getElementById(
    "closePaymentContainer"
  ) as HTMLDivElement;
  closePaymentContainer.style.display = "none";

  setTimeout(() => {
    const simTitle = document.getElementById("simTitle") as HTMLDivElement;
    const loader = document.getElementById("loader") as HTMLDivElement;
    const simLoadCenter = document.getElementById(
      "simLoadCenter"
    ) as HTMLDivElement;
    simTitle.innerHTML = "Purchase succeeded!";
    const orderNumber = document.createElement("p");
    orderNumber.id = "orderNumber";
    orderNumber.innerHTML = "Ordernumber: 123456";
    simLoadCenter.appendChild(orderNumber);
    cartList.splice(0);
    setTimeout(() => {
      simLoad.style.display = "none";
      window.location.href = "/index.html";
    }, 3000);
    loader.style.display = "none";
  }, 4000);
}
