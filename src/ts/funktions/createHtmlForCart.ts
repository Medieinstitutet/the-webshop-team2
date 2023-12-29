import { Flowers } from "../modules/flowersClass";
import { checkIfCartIsEmpty } from "./checkIfCartIsEmpty";
import { countTotalPrice } from "./countTotalPrice";

export function createHtmlForCart(cartList: Flowers[]) {
  const cartContent = document.getElementById("cart-Content") as HTMLDivElement;
  cartContent.innerHTML = "";

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
      createHtmlForCart(cartList);
      countTotalPrice();
      checkIfCartIsEmpty();
    });

    removeFlowerBtn.addEventListener("click", () => {
      cartList.splice(i, 1);
      createHtmlForCart(cartList);
      countTotalPrice();
      checkIfCartIsEmpty();
    });

    flowerImg.src = cartList[i].img;
    flowerTitle.innerHTML = cartList[i].title;
    flowerPrice.innerHTML = cartList[i].price + " kr";

    flowerDiv.className = "cartDiv";
    flowerImg.className = "cartImg";
    flowerTitle.className = "flowerTitle";
    flowerPrice.className = "flowerPrice";

    cartContent?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
