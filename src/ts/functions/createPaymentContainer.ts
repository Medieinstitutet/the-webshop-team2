import { paymentList } from "../main";

export function createPaymentContainer() {
  document.body.style.overflow = "hidden";

  const paymentContent = document.getElementById(
    "payment-Content"
  ) as HTMLDivElement;
  paymentContent.className = "paymentContainer__content";
  paymentContent.innerHTML = "";
  for (let i = 0; i < paymentList.length; i++) {
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerPrice = document.createElement("p");

    flowerImg.src = paymentList[i].img;
    flowerTitle.innerHTML = paymentList[i].title;
    flowerPrice.innerHTML = paymentList[i].price + " kr";

    flowerDiv.className = "cartDiv";
    flowerImg.className = "cartImg";
    flowerTitle.className = "flowerTitle";
    flowerPrice.className = "flowerPrice";

    paymentContent.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
  }
}
