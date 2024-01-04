import { cartList } from "../main";

export function simulatePurchase () {
const simLoad = document.getElementById("simLoad") as HTMLDivElement;
simLoad.classList.add("showSimLoad"); 

setTimeout(() => {
  const simTitle = document.getElementById("simTitle") as HTMLDivElement;
  const loader = document.getElementById("loader") as HTMLDivElement;
  simTitle.innerHTML = "purchase succeeded!";
  const orderNumber = document.createElement("p");
  orderNumber.id = "orderNumber";
  orderNumber.innerHTML = "Ordernumber: 123456";
  simLoad.appendChild(orderNumber);
  cartList.splice(0);
  setTimeout(() => {
    simLoad.style.display = "none";
  }, 4000);
  loader.style.display = "none";
}, 4000);
}