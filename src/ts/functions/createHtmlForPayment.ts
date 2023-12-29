import { cartList } from "../main";
import { countTotalPrice } from "./countTotalPrice";

export function createHtmlForPayment() {
  document.body.style.overflow = "hidden";

  const paymentContent = document.getElementById(
    "payment-Content"
  ) as HTMLDivElement;
  paymentContent.className = "paymentContainer__content";
  paymentContent.innerHTML = "";
  for (let i = 0; i < cartList.length; i++) {
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerPrice = document.createElement("p");

    const removeFlowerBtn = document.createElement("button");
    const addFlowerBtn = document.createElement("button");

    removeFlowerBtn.innerHTML = "-";
    addFlowerBtn.innerHTML = "+";

    addFlowerBtn.addEventListener("click", () => {
      cartList.push(cartList[i]);
      console.log(cartList[i]);
      createHtmlForPayment();
      countTotalPrice();
    });

    removeFlowerBtn.addEventListener("click", () => {
      cartList.splice(i, 1);
      createHtmlForPayment();
      countTotalPrice();
    });

    flowerImg.src = cartList[i].img;
    flowerTitle.innerHTML = cartList[i].title;
    flowerPrice.innerHTML = cartList[i].price + " kr";

    flowerDiv.className = "cartDiv";
    flowerImg.className = "cartImg";
    flowerTitle.className = "flowerTitle";
    flowerPrice.className = "flowerPrice";

    paymentContent.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
