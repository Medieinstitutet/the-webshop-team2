import { addToCart } from "../main";
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

    flowerDiv.className = "cartProduct";
    flowerImg.className = "cartImg";
    flowerTitle.className = "flowerTitle";
    flowerQuantity.className = "flowerQuantity";
    flowerPrice.className = "flowerPrice";
    removeFlowerBtn.className = "removeFlowerBtn";
    addFlowerBtn.className = "addFlowerBtn";

    removeFlowerBtn.innerHTML = "-";
    addFlowerBtn.innerHTML = "+";

    addFlowerBtn.addEventListener("click", () => {
      addToCart(cartList[i].product);
      createHtmlForCart(cartList);
      countTotalPrice();
      checkIfCartIsEmpty();
      getCartListLen();
    });
    removeFlowerBtn.addEventListener("click", () => {
      if (cartList[i].quantity > 1) {
        cartList[i].quantity = cartList[i].quantity - 1;
      } else {
        cartList.splice(i, 1);
      }

      createHtmlForCart(cartList);
      countTotalPrice();
      checkIfCartIsEmpty();
      getCartListLen();
    });

    flowerImg.src = cartList[i].product.img;
    flowerTitle.innerHTML = cartList[i].product.title;
    flowerPrice.innerHTML = cartList[i].product.price + " kr";
    flowerQuantity.innerHTML = cartList[i].quantity.toString();

    cartContent?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(removeFlowerBtn);
    flowerDiv.appendChild(flowerQuantity);
    flowerDiv.appendChild(addFlowerBtn);
  }
}
