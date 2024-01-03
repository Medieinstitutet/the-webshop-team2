

import { CartItem } from "../modules/cartItem";
import { checkIfCartIsEmpty } from "./checkIfCartIsEmpty";
import { countTotalPrice } from "./countTotalPrice";
import { getCartListLen } from "./getCartListLen";

export function createHtmlForCart(cartList: CartItem[]) {
  const cartContent = document.getElementById("cart-Content") as HTMLDivElement;
  cartContent.innerHTML = "";

  for (let i = 0; i < cartList.length; i++) {
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerPrice = document.createElement("p");
    const flowerQuantity = document.createElement("p");
    const removeFlowerBtn = document.createElement("button");
    const addFlowerBtn = document.createElement("button");

    removeFlowerBtn.className = "removeFlowerBtn";
    addFlowerBtn.className = "addFlowerBtn";

    removeFlowerBtn.innerHTML = "-";
    addFlowerBtn.innerHTML = "+";

    addFlowerBtn.addEventListener("click", () => {

        cartList.push(cartList[i]);
        createHtmlForCart(cartList);
          countTotalPrice();
          checkIfCartIsEmpty();
          getCartListLen(); 
    
    });
    removeFlowerBtn.addEventListener("click", () => {
      cartList.splice(i, 1);
      createHtmlForCart(cartList);
      countTotalPrice();
      checkIfCartIsEmpty();
      getCartListLen();
    });

    flowerImg.src = cartList[i].product.img;
    flowerTitle.innerHTML = cartList[i].product.title;
    flowerPrice.innerHTML = cartList[i].product.price + " kr";
    flowerQuantity.innerHTML = cartList[i].quantity.toString();
    console.log(cartList[i].quantity);
    

    flowerDiv.className = "cartDiv";
    flowerImg.className = "cartImg";
    flowerTitle.className = "flowerTitle";
    flowerQuantity.className = "flowerQuantity";
    flowerPrice.className = "flowerPrice";
    

    cartContent?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(flowerQuantity);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
