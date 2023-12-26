import "./../scss/style.scss";
import { toggleHamburger } from "./functions";

const hamburgerbtn = document.getElementById ("hamburger-btn");

hamburgerbtn?.addEventListener ("click", toggleHamburger);