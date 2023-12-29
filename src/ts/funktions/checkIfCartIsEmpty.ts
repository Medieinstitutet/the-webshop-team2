import { cartContainer, cartList } from "../main";

export const checkIfCartIsEmpty = () => {
  const checkoutContainer = document.getElementById("checkout-Container");
  const emptyContainr = document.getElementById("emptyContainr");
  if (cartList.length === 0 && !emptyContainr) {
    const emptyContainr = document.createElement("p");
    emptyContainr.innerHTML = "Cart is empty";
    emptyContainr.className = "emptyContainr";
    emptyContainr.id = "emptyContainr";
    cartContainer?.appendChild(emptyContainr);
  }
  if (cartList.length > 0 && emptyContainr) {
    emptyContainr.remove();
    cartContainer?.classList.remove("nice");
  }
  if (cartList.length === 0) {
    checkoutContainer?.remove();
    cartContainer?.classList.add("nice");
  }
};
