import "./../scss/style.scss";
import {
  createHtmlForFlowers,
  createHtmlForFlowers2,
  toggleHamburger,
} from "./functions";
import {
  flower1,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
} from "./modules/flowerObjects";

const hamburgerbtn = document.getElementById("hamburger-btn");

hamburgerbtn?.addEventListener("click", toggleHamburger);

export const flowerList = [flower1, flower2, flower3];
export const flowerList2 = [flower4, flower5, flower6];
export const cartList: any = [];

createHtmlForFlowers(flowerList);
createHtmlForFlowers2(flowerList2);
