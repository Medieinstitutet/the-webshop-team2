/* import { checkIfCartIsEmpty } from "./funktions/checkIfCartIsEmpty";
import { cartList } from "./main";
import { Flowers } from "./modules/flowersClass";

export function toggleHamburger() {
  const navbar = document.getElementById("navbar");
  const toggleTest = () => {
    navbar?.classList.toggle("hamburger-on");
  };
  toggleTest();
}
 */
/* export function createHtmlForFlowers(flowerList: Flowers[]) {
  const flowerContainer = document.getElementById("flower-container");

  for (let i = 0; i < flowerList.length; i++) {
    const flowerBtnContainer = document.createElement("div");

    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerInfo = document.createElement("p");
    const flowerPrice = document.createElement("p");
    const flowerBuyBtn = document.createElement("button");

    flowerImg.src = flowerList[i].img;
    flowerTitle.innerHTML = flowerList[i].title;
    flowerInfo.innerHTML = flowerList[i].info;
    flowerPrice.innerHTML = flowerList[i].price + " kr";
    flowerBuyBtn.innerHTML = "Buy";

    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";

    flowerBuyBtn.addEventListener("click", () => {
      cartList.push(flowerList[i]);
      countTotalPrice();
    });

    flowerContainer?.appendChild(flowerBtnContainer);
    flowerBtnContainer.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer?.appendChild(flowerBuyBtn);
  }
} */

/* export function createHtmlForFlowers2(flowerList2: Flowers[]) {
  const flowerContainer2 = document.getElementById("flower-container2");

  for (let i = 0; i < flowerList2.length; i++) {
    const flowerBtnContainer2 = document.createElement("div");

    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerInfo = document.createElement("p");
    const flowerPrice = document.createElement("p");
    const flowerBuyBtn = document.createElement("button");

    flowerImg.src = flowerList2[i].img;
    flowerTitle.innerHTML = flowerList2[i].title;
    flowerInfo.innerHTML = flowerList2[i].info;
    flowerPrice.innerHTML = flowerList2[i].price + " kr";
    flowerBuyBtn.innerHTML = "Buy";

    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";

    flowerBuyBtn.addEventListener("click", addToCart);
    function addToCart() {
      cartList.push(flowerList2[i]);
      countTotalPrice();
    }

    flowerContainer2?.appendChild(flowerBtnContainer2);
    flowerBtnContainer2.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer2.appendChild(flowerBuyBtn);
  }
} */

/* export const checkoutContainer1 = () => {
  const totalCartContainer = document.getElementById(
    "totalCart-container"
  ) as HTMLDivElement;
  if (!document.getElementById("checkout-Container")) {
    const checkoutContainer = document.createElement("div");
    const totalAmountText = document.createElement("h3");

    checkoutContainer.id = "checkout-Container";
    totalAmountText.id = "totalAmount-text";

    totalCartContainer.appendChild(checkoutContainer);
    checkoutContainer.appendChild(totalAmountText);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.innerHTML = "Checkout";
    checkoutBtn.className = "checkoutBtn";
    checkoutContainer.appendChild(checkoutBtn);
    countTotalPrice();
  }
}; */
/* 
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
} */

/* export const countTotalPrice = () => {
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
}; */

/* export const checkIfCartIsEmpty = () => {
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
 */

/* 
vad har jag gjort:
  skapat en annan function med tusen if satser
  skapat en annan map som heter functions och flyttat en funcktion dit
  lägt till en class till cart-container för att id gjorde att när man skriv en ny class så det fungerade inte
  markerade var en section börjar och var slutar med kommentTag
  skriv css 
  namn på varibler är inte bra
*/
