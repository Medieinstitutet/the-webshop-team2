import { cartList } from "../main";
import { Flowers } from "../modules/flowersClass";
import { countTotalPrice } from "./countTotalPrice";
import { getCartListLen } from "./getCartListLen";

export function createHtmlForFlowers(flowerList: Flowers[]) {
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

    flowerDiv.id = "flowerDiv";
    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";


    /* const thisId = 0; */ 
    flowerBuyBtn.addEventListener("click", () => {
      
      cartList.push(flowerList[i]);
      console.log(cartList);
      
      countTotalPrice();
      getCartListLen();
      }

      
    );

    flowerDiv.addEventListener ("click", () => {
      const productModal = document.createElement("div");
      productModal.id = "productModal";
      productModal.className = "productModal";
      document.body.appendChild(productModal);
      productModal.style.display = "block";
    });


    flowerContainer?.appendChild(flowerBtnContainer);
    flowerBtnContainer.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer?.appendChild(flowerBuyBtn);
  }
}


