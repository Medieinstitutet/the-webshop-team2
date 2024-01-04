import { cartList } from "../main";

export const getCartListLen = () => {
  const cartLen = document.getElementById("cartLen") as HTMLParagraphElement;
  if (cartList.length >= 0) {
    for (let i = 0; i < cartList.length; i++){
      cartLen.innerHTML = cartList.length * cartList[i].quantity + "";

    }
  }
};
