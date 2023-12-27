import "./../scss/style.scss";
import { createHtmlForFlowers, toggleHamburger } from "./functions";
import { flower1, flower2, flower3, flower4, flower5, flower6 } from "./modules/flowerObjects";

const hamburgerbtn = document.getElementById ("hamburger-btn");

hamburgerbtn?.addEventListener ("click", toggleHamburger);

export const flowerList = [flower1, flower2, flower3, flower4, flower5, flower6];


createHtmlForFlowers(flowerList)