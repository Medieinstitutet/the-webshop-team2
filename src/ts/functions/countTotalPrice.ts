import { cartList } from "../main";

export const countTotalPrice = () => {
  const totalAmount = document.getElementById(
    "totalAmount-text"
  ) as HTMLHeadingElement;
  const finalAmountText = document.getElementById(
    "finalAmountText"
  ) as HTMLHeadingElement;
  if (totalAmount || finalAmountText) {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price;
      totalAmount.innerHTML = "Total Amount:" + totalPrice + "kr";
      finalAmountText.innerHTML = "Total Amount:" + totalPrice + "kr";
    }
  }
};
