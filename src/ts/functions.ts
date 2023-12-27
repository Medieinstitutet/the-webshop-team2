import { flowerList } from "./main";

export function toggleHamburger() {
  const navbar = document.getElementById("navbar");
  const toggleTest = () => {
    navbar?.classList.toggle("hamburger-on");
    navbar?.classList.toggle("hamburger-off");
  };

  toggleTest();
}

export function createHtmlForFlowers (flowerList:any) {
  const flowerContainer = document.getElementById("flower-container");

  for (let i = 0; i < flowerList.length; i++){
    console.log(flowerList[i]);
    
  }
}


