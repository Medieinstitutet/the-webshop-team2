import { cartList } from "../main";

export const getCartListLen = () => {
  const cartLen = document.getElementById("cartLen") as HTMLParagraphElement;
  if (cartList.length >= 0) {
    cartLen.innerHTML = cartList.length.toString();
  }
};
