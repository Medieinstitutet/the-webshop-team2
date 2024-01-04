import { cartList } from "../main";

export const getCartListLen = () => {
  const cartLen = document.getElementById("cartLen") as HTMLParagraphElement;
  if (cartList.length >= 0) {
    let cartLenQuantity = 0;
    for (let i = 0; i < cartList.length; i++) {
      cartLenQuantity += cartList[i].quantity - 1;
    }
    cartLen.innerHTML = cartList.length + cartLenQuantity + "";
  }
};
