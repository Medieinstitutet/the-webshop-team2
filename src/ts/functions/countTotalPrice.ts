import { cartList } from "../main";

export const countTotalPrice = () => {
  const totalAmount = document.getElementsByClassName(
    "totalAmount-text"
  ) as HTMLCollectionOf<HTMLHeadingElement>;
  if (totalAmount) {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price;
    }
    for (let i = 0; i < totalAmount.length; i++) {
      totalAmount[i].innerHTML = "Total Amount:" + totalPrice + "kr";
    }
  }
};
