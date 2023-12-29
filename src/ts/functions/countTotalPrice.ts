import { cartList } from "../main";

export const countTotalPrice = () => {
  const totalAmount = document.getElementById(
    "totalAmount-text"
  ) as HTMLHeadingElement;
  if (totalAmount) {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price;
      totalAmount.innerHTML = "Total Amount:" + totalPrice + "kr";
    }
  }
};
